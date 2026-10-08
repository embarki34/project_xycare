import express from 'express';
import cors from 'cors';
import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import rateLimit from 'express-rate-limit';
import xss from 'xss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Security: Rate limiter (max 5 requests per 15 minutes per IP for the contact endpoint)
const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors());
app.use(express.json());

const CONTACTS_FILE = path.join(__dirname, '..', 'contacts.xlsx');

// Sanitize against XSS and CSV injection
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  // Prevent XSS
  let safeStr = xss(input.trim());
  // Prevent Excel/CSV injection by stripping starting characters like =, +, -, @
  if (/^[=+\-@]/.test(safeStr)) {
    safeStr = "'" + safeStr;
  }
  return safeStr;
}

app.post('/api/contact', contactRateLimiter, async (req, res) => {
  try {
    const { name, email, phone, domain, message } = req.body;
    
    // Sanitize data before writing
    const safeName = sanitizeInput(name);
    const safeEmail = sanitizeInput(email);
    const safePhone = sanitizeInput(phone);
    const safeDomain = sanitizeInput(domain);
    const safeMessage = sanitizeInput(message);
    
    // Basic validation
    if (!safeName || !safeEmail) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const workbook = new ExcelJS.Workbook();
    let sheet;
    
    if (fs.existsSync(CONTACTS_FILE)) {
      await workbook.xlsx.readFile(CONTACTS_FILE);
      sheet = workbook.getWorksheet('Contacts');
    } else {
      sheet = workbook.addWorksheet('Contacts');
      sheet.columns = [
        { header: 'Date', key: 'date', width: 20 },
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Phone', key: 'phone', width: 20 },
        { header: 'Domain', key: 'domain', width: 30 },
        { header: 'Message', key: 'message', width: 50 },
      ];
    }
    
    sheet.addRow({
      date: new Date().toLocaleString(),
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      domain: safeDomain,
      message: safeMessage,
    });
    
    await workbook.xlsx.writeFile(CONTACTS_FILE);
    
    res.status(200).json({ success: true, message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Serve the built frontend
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
