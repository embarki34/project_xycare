import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
// import { Formations } from "./views/Formations";
import { LanguageProvider } from "./viewmodels/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/formations" element={<Formations />} /> */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
