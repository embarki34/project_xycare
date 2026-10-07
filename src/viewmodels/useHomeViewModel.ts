import { useState, useMemo } from "react";
import type { FormEvent } from "react";
import type { IconType } from "react-icons";
import {
  LuAward,
  LuBriefcase,
  LuBuilding2,
  LuFactory,
  LuGraduationCap,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuMonitorSmartphone,
  LuPhone,
  LuSprout,
  LuTarget,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

import formationDigital from "../assets/formation-digital.jpg";
import formationManagement from "../assets/formation-management.jpg";
import whyMentoring from "../assets/why-mentoring.jpg";
import heroTraining from "../assets/hero-training.jpg";
import { useLanguage } from "./LanguageContext";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: Record<"FR" | "AR" | "EN", string>;
  category: "Digital & Tech" | "Management" | "Industrie" | "Soft Skills" | "Business";
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Tous niveaux";
  duration: Record<"FR" | "AR" | "EN", string>;
  format: Record<"FR" | "AR" | "EN", string>;
  description: Record<"FR" | "AR" | "EN", string>;
  skills: Record<"FR" | "AR" | "EN", string[]>;
  image: string;
  isPopular?: boolean;
}

export interface ContactChannel {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  domain: string;
  message: string;
}

const EMPTY_FORM: ContactFormValues = { name: "", email: "", phone: "", domain: "", message: "" };

const EVENT = {
  name: "FormaTech Expo 2026",
  dates: "12–15 octobre",
  location: "SAFEX, Alger",
};

export const ALL_COURSES: Course[] = [
  {
    id: "digital-transformation",
    title: {
      FR: "Transformation Digitale & Outils Collaboratifs",
      AR: "التحول الرقمي وأدوات العمل التشاركية",
      EN: "Digital Transformation & Collaborative Workflows",
    },
    category: "Digital & Tech",
    level: "Tous niveaux",
    duration: {
      FR: "3 jours (21h)",
      AR: "3 أيام (21 ساعة)",
      EN: "3 days (21 hrs)",
    },
    format: {
      FR: "Présentiel / Hybride",
      AR: "حضوري / عن بعد",
      EN: "In-Person / Hybrid",
    },
    description: {
      FR: "Accélérez l'adoption des solutions cloud, l'automatisation de processus bureautiques et la collaboration digitale moderne.",
      AR: "تسريع تبني الحلول السحابية، وأتمتة العمليات الإدارية، وتعزيز العمل التشاركي الرقمي بين الفرق.",
      EN: "Accelerate cloud adoption, streamline office workflow automation, and modernize team digital collaboration.",
    },
    skills: {
      FR: ["Cloud Workspace", "Productivité Numérique", "Gestion du Changement"],
      AR: ["بيئة العمل السحابية", "الإنتاجية الرقمية", "إدارة التغيير"],
      EN: ["Cloud Workspace", "Digital Productivity", "Change Management"],
    },
    image: formationDigital,
    isPopular: true,
  },
  {
    id: "data-analytics-bi",
    title: {
      FR: "Data Analytics & Tableaux de Bord Power BI",
      AR: "تحليل البيانات ولوحات القيادة التفاعلية Power BI",
      EN: "Data Analytics & Power BI Executive Dashboards",
    },
    category: "Digital & Tech",
    level: "Intermédiaire",
    duration: {
      FR: "4 jours (28h)",
      AR: "4 أيام (28 ساعة)",
      EN: "4 days (28 hrs)",
    },
    format: {
      FR: "Présentiel",
      AR: "حضوري",
      EN: "In-Person",
    },
    description: {
      FR: "Collectez, modélisez et visualisez les données clés de votre entreprise pour une prise de décision rapide et éclairée.",
      AR: "جمع، ونمذجة، وتصور البيانات الاستراتيجية للمؤسسة لاتخاذ قرارات دقيقة ومبنية على مؤشرات موثوقة.",
      EN: "Aggregate, model, and visualize enterprise KPI datasets to drive data-informed managerial decisions.",
    },
    skills: {
      FR: ["Power BI", "DAX", "Data Storytelling", "Reporting KPI"],
      AR: ["Power BI", "لغة DAX", "سرد البيانات", "تقارير مؤشرات الأداء"],
      EN: ["Power BI", "DAX", "Data Storytelling", "KPI Reporting"],
    },
    image: heroTraining,
    isPopular: true,
  },
  {
    id: "management-leadership",
    title: {
      FR: "Management d'Équipe & Leadership Positif",
      AR: "إدارة فرق العمل والقيادة الإيجابية الفعالة",
      EN: "Team Management & Positive Leadership",
    },
    category: "Management",
    level: "Avancé",
    duration: {
      FR: "3 jours (21h)",
      AR: "3 أيام (21 ساعة)",
      EN: "3 days (21 hrs)",
    },
    format: {
      FR: "Intra-entreprise",
      AR: "تدريب مخصص للشركات",
      EN: "Custom Corporate",
    },
    description: {
      FR: "Développez votre posture managériale, fédérez vos collaborateurs autour d'objectifs clairs et gérez la dynamique d'équipe.",
      AR: "تطوير أسلوب القيادة، وتوحيد طاقات الموظفين حول أهداف استراتيجية، والتعامل بحكمة مع ديناميكيات الفريق.",
      EN: "Cultivate leadership executive presence, align personnel around strategic goals, and resolve team friction.",
    },
    skills: {
      FR: ["Posture Managériale", "Communication d'Impact", "Délégation Active"],
      AR: ["كاريزما القيادة", "التواصل المؤثر", "التفويض الذكي"],
      EN: ["Executive Posture", "Impactful Communication", "Delegation"],
    },
    image: formationManagement,
    isPopular: true,
  },
  {
    id: "lean-manufacturing",
    title: {
      FR: "Lean Manufacturing & Amélioration Continue (5S & Kaizen)",
      AR: "التصنيع الرشيق Lean والتحسين المستمر (5S و Kaizen)",
      EN: "Lean Manufacturing & Continuous Improvement (5S & Kaizen)",
    },
    category: "Industrie",
    level: "Intermédiaire",
    duration: {
      FR: "5 jours (35h)",
      AR: "5 أيام (35 ساعة)",
      EN: "5 days (35 hrs)",
    },
    format: {
      FR: "Présentiel",
      AR: "حضوري",
      EN: "In-Person",
    },
    description: {
      FR: "Optimisez la chaîne de production en éliminant les gaspillages et en instaurant une culture durable d'excellence opérationnelle.",
      AR: "تحسين سلاسل الإنتاج عبر القضاء على الهدر وإرساء ثقافة مؤسساتية مستدامة للتميز التشغيلي والجودة.",
      EN: "Optimize manufacturing lines, eliminate bottlenecks and waste, and foster a culture of operational excellence.",
    },
    skills: {
      FR: ["5S / Kaizen", "Flux Tirés", "Standardisation", "Maintenance Productive"],
      AR: ["منهجية 5S / كايزن", "تدفق الإنتاج", "المعايير القياسية", "الصيانة الإنتاجية"],
      EN: ["5S / Kaizen", "Pull Flow", "Standardization", "TPM"],
    },
    image: whyMentoring,
    isPopular: true,
  },
  {
    id: "project-management-agile",
    title: {
      FR: "Gestion de Projet Moderne : Méthodes Hybrides & Agile",
      AR: "إدارة المشاريع الحديثة: المناهج الهجينة والأجايل (Agile)",
      EN: "Modern Project Management: Agile & Hybrid Methods",
    },
    category: "Management",
    level: "Intermédiaire",
    duration: {
      FR: "4 jours (28h)",
      AR: "4 أيام (28 ساعة)",
      EN: "4 days (28 hrs)",
    },
    format: {
      FR: "Présentiel",
      AR: "حضوري",
      EN: "In-Person",
    },
    description: {
      FR: "Maîtrisez la planification, le suivi des livrables, l'analyse des risques et les rituels agiles adaptés aux réalités terrain.",
      AR: "إتقان التخطيط الدقيق، ومتابعة المخرجات، وتقييم المخاطر وتطبيق طقوس الأجايل المتوافقة مع الميدان.",
      EN: "Master scheduling, milestones tracking, risk mitigation, and sprint execution adapted to enterprise reality.",
    },
    skills: {
      FR: ["Scrum & Kanban", "Gestion des Risques", "Budgétisation", "Reporting"],
      AR: ["سكرم وكانبان", "إدارة المخاطر", "الميزانية والجدولة", "التقارير الرقابية"],
      EN: ["Scrum & Kanban", "Risk Management", "Budgeting", "Governance"],
    },
    image: formationManagement,
  },
  {
    id: "cybersecurity-basics",
    title: {
      FR: "Cybersécurité & Hygiène Numérique en Entreprise",
      AR: "الأمن السيبراني والوقاية الرقمية في المؤسسات",
      EN: "Corporate Cybersecurity & Digital Defense Fundamentals",
    },
    category: "Digital & Tech",
    level: "Débutant",
    duration: {
      FR: "2 jours (14h)",
      AR: "يومان (14 ساعة)",
      EN: "2 days (14 hrs)",
    },
    format: {
      FR: "Hybride",
      AR: "عن بعد / حضوري",
      EN: "Hybrid",
    },
    description: {
      FR: "Protégez le patrimoine informationnel et les accès critiques face aux cybermenaces, phishing et erreurs humaines.",
      AR: "حماية الأصول الرقمية والبيانات الحساسة للشركة والتصدي لهجمات التصيد الاحتيالي والمخاطر السيبرانية.",
      EN: "Safeguard information systems and critical assets against ransomware, phishing, and human security lapses.",
    },
    skills: {
      FR: ["Protection des données", "Gestion des accès", "Sensibilisation Phishing"],
      AR: ["حماية البيانات", "إدارة صلاحيات الوصول", "التوعية ضد الاحتيال"],
      EN: ["Data Protection", "Access Control", "Phishing Awareness"],
    },
    image: formationDigital,
  },
  {
    id: "industrial-automation-iot",
    title: {
      FR: "Maintenance Industrielle & Capteurs Connectés (IoT)",
      AR: "الصيانة الصناعية والحساسات الذكية المتصلة (IoT)",
      EN: "Industrial Maintenance & Connected Sensors (IoT)",
    },
    category: "Industrie",
    level: "Avancé",
    duration: {
      FR: "5 jours (35h)",
      AR: "5 أيام (35 ساعة)",
      EN: "5 days (35 hrs)",
    },
    format: {
      FR: "Présentiel",
      AR: "حضوري",
      EN: "In-Person",
    },
    description: {
      FR: "Approfondissez le diagnostic d'automates, la maintenance prédictive et la télémesure sur lignes industrielles.",
      AR: "التعمق في تشخيص وبرمجة المتحكمات الآلية، والصيانة التنبؤية، وأنظمة الاستشعار الذكية.",
      EN: "Advanced PLC diagnostics, predictive maintenance protocols, and telemetry integration across manufacturing lines.",
    },
    skills: {
      FR: ["Automates PLC", "Supervision SCADA", "Maintenance Prédictive"],
      AR: ["متحكمات PLC", "أنظمة SCADA", "الصيانة التنبؤية"],
      EN: ["PLC Systems", "SCADA Supervision", "Predictive Maintenance"],
    },
    image: whyMentoring,
  },
  {
    id: "negociation-commerciale",
    title: {
      FR: "Négociation Commerciale B2B à Forte Valeur",
      AR: "التفاوض التجاري المتقدم للشركات B2B",
      EN: "High-Stakes B2B Commercial Negotiation",
    },
    category: "Business",
    level: "Avancé",
    duration: {
      FR: "3 jours (21h)",
      AR: "3 أيام (21 ساعة)",
      EN: "3 days (21 hrs)",
    },
    format: {
      FR: "Présentiel",
      AR: "حضوري",
      EN: "In-Person",
    },
    description: {
      FR: "Structurez votre démarche commerciale consultative, défendez vos marges et concluez des accords gagnant-gagnant.",
      AR: "هيكلة المفاوضات الاستشارية، وحماية هوامش الربح، وإبرام عقود استراتيجية تحقق المنفعة المتبادلة.",
      EN: "Structure consultative sales dialogues, protect profit margins, and secure long-term win-win enterprise deals.",
    },
    skills: {
      FR: ["Négociation Complexe", "Traitement des Objections", "Closing B2B"],
      AR: ["التفاوض المعقد", "معالجة الاعتراضات", "إتمام الصفقات B2B"],
      EN: ["Complex Bargaining", "Objection Handling", "B2B Deal Closing"],
    },
    image: heroTraining,
  },
  {
    id: "prise-parole-impact",
    title: {
      FR: "Prise de Parole en Public & Pitch d'Affaires",
      AR: "فن التحدث أمام الجمهور وعرض المشاريع المقنعة",
      EN: "Public Speaking & High-Impact Business Pitching",
    },
    category: "Soft Skills",
    level: "Tous niveaux",
    duration: {
      FR: "2 jours (14h)",
      AR: "يومان (14 ساعة)",
      EN: "2 days (14 hrs)",
    },
    format: {
      FR: "Présentiel",
      AR: "حضوري",
      EN: "In-Person",
    },
    description: {
      FR: "Captivez votre auditoire, maîtrisez le langage corporel et structurez vos messages avec clarté et conviction.",
      AR: "جذب انتباه الحاضرين، وإتقان لغة الجسد ونبرة الصوت، وصياغة الأفكار بوضوح وإقناع تام.",
      EN: "Captivate audiences, master non-verbal presence, and structure key propositions with utmost clarity and conviction.",
    },
    skills: {
      FR: ["Éloquence", "Gestion du Stress", "Conception de Présentation"],
      AR: ["الفصاحة والإلقاء", "التحكم في التوتر", "هندسة العروض"],
      EN: ["Executive Delivery", "Stress Management", "Slide Storyboarding"],
    },
    image: formationManagement,
  },
];

const CONTACT_CHANNELS: ContactChannel[] = [
  { icon: LuPhone, label: "Téléphone", value: "+213 (0) 35 00 00 00", href: "tel:+213350000000" },
  { icon: LuMail, label: "Email", value: "academy@condor.dz", href: "mailto:academy@condor.dz" },
  { icon: LuMessageCircle, label: "WhatsApp", value: "Écrivez-nous", href: "https://wa.me/213350000000" },
  { icon: LuMapPin, label: "Adresse", value: "Bordj Bou Arréridj, Algérie", href: "https://maps.google.com/?q=Condor+Electronics+Bordj+Bou+Arreridj" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

export function useHomeViewModel() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [form, setForm] = useState<ContactFormValues>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navLinks = useMemo(() => [
    { label: t.nav.home, href: "/" },
    { label: t.nav.allFormations, href: "/#domains" },
    { label: t.nav.about, href: "/#about" },
    { label: (t.nav as any).companies || "Le Groupe", href: "/#companies" },
    { label: t.nav.whyUs, href: "/#why" },
    { label: t.nav.contact, href: "/#contact" },
  ], [t]);

  const pillars = useMemo(() => [
    { icon: LuGraduationCap, title: t.about.pillar1Title, description: t.about.pillar1Desc },
    { icon: LuSprout, title: t.about.pillar2Title, description: t.about.pillar2Desc },
    { icon: LuBuilding2, title: t.about.pillar3Title, description: t.about.pillar3Desc },
  ], [t]);

  const domainIcons = [LuMonitorSmartphone, LuBriefcase, LuFactory, LuUsers, LuTrendingUp];
  const domains = useMemo(() => {
    return t.domains.items.map((item, idx) => ({
      icon: domainIcons[idx] || LuMonitorSmartphone,
      title: item.title,
      description: item.desc,
    }));
  }, [t]);

  const reasonIcons = [LuTarget, LuAward, LuFactory, LuMapPin];
  const reasons = useMemo(() => {
    return t.why.reasons.map((item, idx) => ({
      icon: reasonIcons[idx] || LuTarget,
      title: item.title,
      description: item.desc,
    }));
  }, [t]);

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleDownloadCatalogue = () => {
    alert(
      language === "AR"
        ? "تم بدء تحميل دليل كوندور أكاديمي 2026 (ملف PDF)"
        : language === "EN"
        ? "Downloading Condor Academy 2026 Training Catalogue (PDF version)..."
        : "Téléchargement du Catalogue Condor Academy 2026 lancé (Version PDF)"
    );
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm(EMPTY_FORM);
  };

  const resetContactForm = () => setIsSubmitted(false);

  return {
    language,
    dir,
    t,
    form,
    isSubmitting,
    isSubmitted,
    navLinks,
    event: EVENT,
    pillars,
    domains,
    reasons,
    contactChannels: CONTACT_CHANNELS,
    socials: SOCIALS,
    courses: ALL_COURSES,
    setLanguage,
    updateField,
    handleDownloadCatalogue,
    handleContactSubmit,
    resetContactForm,
  };
}

export function useFormationsViewModel() {
  const homeVm = useHomeViewModel();
  const { language, t } = homeVm;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [selectedLevel, setSelectedLevel] = useState<string>("Tous");

  const categories = useMemo(() => {
    return ["Tous", "Digital & Tech", "Management", "Industrie", "Soft Skills", "Business"];
  }, []);

  const levels = useMemo(() => {
    return ["Tous", "Débutant", "Intermédiaire", "Avancé"];
  }, []);

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const courseTitle = course.title[language].toLowerCase();
      const courseDesc = course.description[language].toLowerCase();
      const courseSkills = course.skills[language].map((s) => s.toLowerCase());
      const query = searchQuery.toLowerCase();

      const matchesSearch =
        courseTitle.includes(query) ||
        courseDesc.includes(query) ||
        courseSkills.some((s) => s.includes(query));

      const matchesCat = selectedCategory === "Tous" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "Tous" || course.level === selectedLevel;

      return matchesSearch && matchesCat && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel, language]);

  return {
    ...homeVm,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedLevel,
    setSelectedLevel,
    categories,
    levels,
    filteredCourses,
    t,
  };
}

export type HomeViewModel = ReturnType<typeof useHomeViewModel>;
export type FormationsViewModel = ReturnType<typeof useFormationsViewModel>;
