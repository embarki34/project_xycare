import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "FR" | "AR" | "EN";

export interface TranslationDictionary {
  dir: "ltr" | "rtl";
  common: {
    brandName: string;
    academy: string;
    downloadCatalogue: string;
    downloadPdf: string;
    allFormations: string;
    discoverFormations: string;
    eventTag: string;
    closeMenu: string;
    openMenu: string;
    readMore: string;
    backHome: string;
    viewGallery: string;
    popular: string;
    duration: string;
    level: string;
    format: string;
    enroll: string;
    resetFilters: string;
    sendRequest: string;
    sending: string;
    requestSent: string;
    anotherRequest: string;
    privacyNotice: string;
    allRightsReserved: string;
    privacyPolicy: string;
  };
  nav: {
    home: string;
    allFormations: string;
    about: string;
    whyUs: string;
    contact: string;
    navigation: string;
    contactAndAccess: string;
  };
  hero: {
    titleStart: string;
    titleAccent: string;
    rotatingPhrases: string[];
    subtitle: string;
    badgePraxis: string;
    badgeExperts: string;
    badgeAlgeria: string;
    eventSub: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  domains: {
    eyebrow: string;
    title: string;
    description: string;
    seeAllTileTitle: string;
    seeAllTileDesc: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    badgeTitle: string;
    badgeDesc: string;
    reasons: {
      title: string;
      desc: string;
    }[];
  };
  catalogue: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
    meta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    fairQuestion: string;
    fairText: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    domainLabel: string;
    domainPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    successMessage: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    clear: string;
    availableTitle: string;
    levelLabel: string;
    noResultsTitle: string;
    noResultsDesc: string;
    customTitle: string;
    customDesc: string;
    customContact: string;
    categories: { [key: string]: string };
    levels: { [key: string]: string };
  };
  companies: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; desc: string }[];
  };
  extras: {
    contactCta: string;
    visitSite: string;
    banners: {
      ariaLabel: string;
      formatechBadge: string;
      formatechTitle: string;
      formatechSubtitle: string;
      formatechDates: string;
      formatechPlace: string;
      formatechCta: string;
      roseBadge: string;
      roseTitle: string;
      roseSubtitle: string;
      roseCta: string;
    };
    planning: {
      eyebrow: string;
      title: string;
      description: string;
      videoTitle: string;
    };
    location: {
      eyebrow: string;
      title: string;
      description: string;
      openMaps: string;
    };
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  FR: {
    dir: "ltr",
    common: {
      brandName: "Condor",
      academy: "Academy",
      downloadCatalogue: "Télécharger le catalogue",
      downloadPdf: "Télécharger le PDF",
      allFormations: "Nos Formations",
      discoverFormations: "Découvrir nos formations",
      eventTag: "Retrouvez-nous",
      closeMenu: "Fermer le menu",
      openMenu: "Ouvrir le menu",
      readMore: "En savoir plus",
      backHome: "Retour à l'accueil",
      viewGallery: "Découvrir la galerie complète",
      popular: "Populaire",
      duration: "Durée",
      level: "Niveau",
      format: "Format",
      enroll: "S'inscrire",
      resetFilters: "Réinitialiser les filtres",
      sendRequest: "Envoyer la demande",
      sending: "Envoi en cours…",
      requestSent: "Demande envoyée",
      anotherRequest: "Envoyer une autre demande",
      privacyNotice:
        "Vos données sont utilisées uniquement pour répondre à votre demande.",
      allRightsReserved: "© 2026 Condor Academy · Condor Electronics",
      privacyPolicy: "Politique de confidentialité",
    },
    nav: {
      home: "Accueil",
      allFormations: "Nos Formations",
      about: "À propos",
      whyUs: "Nos atouts",
      contact: "Contact",
      navigation: "Navigation",
      contactAndAccess: "Contact & Accès",
    },
    hero: {
      titleStart: "Développez vos compétences. ",
      titleAccent: "Construisez votre avenir.",
      rotatingPhrases: [
        "Construisez votre avenir.",
        "Accélérez votre carrière.",
        "Maîtrisez les technologies.",
        "Inspirez vos équipes.",
        "Atteignez l'excellence.",
      ],
      subtitle:
        "Des formations pratiques, conçues par des experts du terrain, pour les professionnels et les organisations en Algérie.",
      badgePraxis: "Orientées pratique",
      badgeExperts: "Experts du terrain",
      badgeAlgeria: "Ancrées en Algérie",
      eventSub: "Notre Stand · 12–15 octobre · SAFEX, Alger",
    },
    about: {
      eyebrow: "À propos",
      title: "Le centre de formation du groupe Condor",
      description:
        "Condor Academy accompagne le développement des compétences à travers des formations adaptées aux besoins réels des professionnels et des organisations.",
      pillar1Title: "Formation",
      pillar1Desc:
        "Des compétences directement applicables dans votre quotidien professionnel.",
      pillar2Title: "Développement",
      pillar2Desc:
        "Un accompagnement de l'évolution professionnelle et personnelle de chacun.",
      pillar3Title: "Expertise",
      pillar3Desc:
        "L'expérience et le savoir-faire d'un acteur industriel majeur en Algérie.",
    },
    domains: {
      eyebrow: "Nos formations",
      title: "Cinq domaines pour faire progresser vos équipes",
      description:
        "Des programmes structurés pour répondre aux enjeux concrets de votre métier.",
      seeAllTileTitle: "Nos Formations",
      seeAllTileDesc: "Découvrir la galerie complète",
      items: [
        {
          title: "Digital & Technologie",
          desc: "Maîtrisez les outils numériques et les technologies qui transforment votre métier.",
        },
        {
          title: "Management & Leadership",
          desc: "Pilotez vos équipes et vos projets avec méthode et impact.",
        },
        {
          title: "Industrie & Métiers",
          desc: "Renforcez vos compétences techniques et opérationnelles sur le terrain.",
        },
        {
          title: "Soft Skills",
          desc: "Communication, collaboration, organisation et efficacité personnelle.",
        },
        {
          title: "Business & Performance",
          desc: "Développez vos compétences commerciales et la performance de votre activité.",
        },
      ],
    },
    why: {
      eyebrow: "Nos atouts",
      title: "Une formation qui part du terrain",
      description:
        "Nous transmettons ce qui fonctionne réellement en entreprise — pas seulement la théorie.",
      badgeTitle: "Expertise",
      badgeDesc: "issue d'un acteur industriel majeur en Algérie",
      reasons: [
        {
          title: "Orientées pratique",
          desc: "Des cas concrets et des situations réelles, pour des acquis utilisables dès le lendemain.",
        },
        {
          title: "Experts du terrain",
          desc: "Des formateurs professionnels qui pratiquent ce qu'ils enseignent.",
        },
        {
          title: "Issue de l'entreprise",
          desc: "Un apprentissage nourri par l'expérience industrielle et organisationnelle du groupe Condor.",
        },
        {
          title: "Ancrée en Algérie",
          desc: "Des programmes pensés pour l'environnement professionnel algérien.",
        },
      ],
    },
    catalogue: {
      eyebrow: "Catalogue 2026",
      title: "Toutes nos formations, réunies dans un seul document",
      description:
        "Programmes, objectifs, durées et domaines d'expertise : tout ce qu'il faut pour choisir la formation adaptée.",
      button: "Télécharger le PDF",
      meta: "PDF · 4,2 Mo",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de vos besoins en formation",
      description:
        "Notre équipe vous répond et vous oriente vers le programme le plus adapté à vos objectifs.",
      fairQuestion: "Vous êtes au FormaTech Expo 2026 ?",
      fairText:
        "Rencontrez l'équipe Condor Academy sur notre stand — 12–15 octobre, SAFEX, Alger.",
      formTitle: "Demander des informations",
      formSubtitle: "",
      fullNameLabel: "Nom complet",
      fullNamePlaceholder: "Amine Benali",
      phoneLabel: "Téléphone",
      phonePlaceholder: "05 00 00 00 00",
      emailLabel: "Email professionnel",
      emailPlaceholder: "nom@entreprise.dz",
      domainLabel: "Domaine d'intérêt",
      domainPlaceholder: "Sélectionnez un domaine",
      messageLabel: "Message",
      messagePlaceholder:
        "Décrivez brièvement votre besoin (nombre de participants, objectifs…)",
      successMessage:
        "Merci ! Un conseiller Condor Academy vous recontactera très prochainement.",
    },
    gallery: {
      eyebrow: "Catalogue des Formations 2026",
      title: "Explorez toutes nos formations professionnelles",
      subtitle:
        "Des programmes certifiants conçus par des spécialistes industriels et technologiques pour propulser les compétences de vos équipes.",
      searchPlaceholder: "Rechercher une formation, compétence ou outil...",
      clear: "Effacer",
      availableTitle: "Formations disponibles",
      levelLabel: "Niveau :",
      noResultsTitle: "Aucune formation ne correspond à votre recherche",
      noResultsDesc: "Essayez d'autres mots-clés ou réinitialisez vos filtres.",
      customTitle: "Formations sur-mesure ?",
      customDesc:
        "Condor Academy conçoit également des modules adaptés aux exigences et contraintes spécifiques de vos sites de production et directions.",
      customContact: "Contacter notre équipe pédagogique →",
      categories: {
        Tous: "Tous",
        "Digital & Tech": "Digital & Tech",
        Management: "Management",
        Industrie: "Industrie",
        "Soft Skills": "Soft Skills",
        Business: "Business",
      },
      levels: {
        Tous: "Tous",
        Débutant: "Débutant",
        Intermédiaire: "Intermédiaire",
        Avancé: "Avancé",
      },
    },
    extras: {
      contactCta: "Contact & Rendez-vous",
      visitSite: "Visiter le site",
      banners: {
        ariaLabel: "Actualités et événements",
        formatechBadge: "Événement",
        formatechTitle: "Condor Academy au FormaTech Expo 2026",
        formatechSubtitle:
          "Retrouvez notre équipe sur notre stand pour découvrir nos programmes et prendre rendez-vous.",
        formatechDates: "12–15 octobre 2026",
        formatechPlace: "Pavillon A, SAFEX (Palais des Expositions), Alger",
        formatechCta: "Prendre rendez-vous",
        roseBadge: "Sensibilisation",
        roseTitle: "Octobre Rose : ensemble, sensibilisons",
        roseSubtitle:
          "Condor Academy s'engage dans la lutte contre le cancer du sein. Le dépistage précoce sauve des vies.",
        roseCta: "Nous contacter",
      },
      planning: {
        eyebrow: "Planning mensuel",
        title: "Le planning des formations du mois",
        description:
          "Découvrez en vidéo les sessions programmées ce mois-ci, les dates et les domaines concernés.",
        videoTitle: "Présentation du planning mensuel des formations",
      },
      location: {
        eyebrow: "Nous trouver",
        title: "Où nous situer",
        description:
          "Condor Academy vous accueille à Bordj Bou Arréridj, au sein de la zone industrielle.",
        openMaps: "Ouvrir dans Google Maps",
      },
    },
    companies: {
      eyebrow: "Nos Partenaires & Filiales",
      title: "L'Écosystème du Groupe Condor",
      description:
        "Une synergie industrielle multisectorielle pour une expertise partagée.",
      items: [
        {
          title: "Condor Electronics",
          desc: "Leader algérien incontesté de l'électronique et de l'électroménager.",
        },
        {
          title: "Cristor",
          desc: "La référence en électroménager innovant, fiable et accessible à tous.",
        },
        {
          title: "Hisense",
          desc: "Technologie mondiale et qualité d'image exceptionnelle pour le grand public.",
        },
        {
          title: "Nardi",
          desc: "Le spécialiste italien de l'électroménager encastrable haut de gamme.",
        },
        {
          title: "BBA Steel Company",
          desc: "Solutions métallurgiques et industrielles de pointe pour les grands projets.",
        },
        {
          title: "Condor Immobilier",
          desc: "Promotion immobilière innovante et réalisation de grands projets de construction.",
        },
        {
          title: "Khadamaty",
          desc: "Services après-vente et maintenance professionnelle sur l'ensemble du territoire.",
        },
        {
          title: "Condor Logistics",
          desc: "Solutions globales de transport et de gestion intégrée de la supply chain.",
        },
      ],
    },
  },

  AR: {
    dir: "rtl",
    common: {
      brandName: "كوندور",
      academy: "أكاديمي",
      downloadCatalogue: "تحميل الدليل التكويني",
      downloadPdf: "تحميل ملف PDF",
      allFormations: "تكويناتنا",
      discoverFormations: "اكتشف دوراتنا التكوينية",
      eventTag: "تفضلوا بزيارة جناحنا",
      closeMenu: "إغلاق القائمة",
      openMenu: "فتح القائمة",
      readMore: "المزيد من التفاصيل",
      backHome: "العودة للرئيسية",
      viewGallery: "تصفح القائمة الكاملة",
      popular: "الأكثر طلباً",
      duration: "المدة",
      level: "المستوى",
      format: "النمط",
      enroll: "التسجيل الآن",
      resetFilters: "إعادة ضبط الفلاتر",
      sendRequest: "إرسال الطلب",
      sending: "جاري الإرسال…",
      requestSent: "تم إرسال طلبكم بنجاح",
      anotherRequest: "إرسال طلب جديد",
      privacyNotice:
        "بياناتكم محمية وتستخدم حصراً للتواصل معكم والإجابة على استفساركم.",
      allRightsReserved: "© 2026 كوندور أكاديمي · كوندور للإلكترونيات",
      privacyPolicy: "سياسة الخصوصية",
    },
    nav: {
      home: "الرئيسية",
      allFormations: "تكويناتنا",
      about: "من نحن",
      whyUs: "نقاط قوتنا",
      contact: "اتصل بنا",
      navigation: "تصفح الموقع",
      contactAndAccess: "التواصل والعنوان",
    },
    hero: {
      titleStart: "طوّر مهاراتك ومواهبك. ",
      titleAccent: "وابنِ مستقبلك المهني بثقة.",
      rotatingPhrases: [
        "وابنِ مستقبلك المهني بثقة.",
        "واصنع فارقاً حقيقياً في مؤسستك.",
        "وتسلح بأحدث المهارات التقنية.",
        "وقد فريقك نحو القمة.",
        "وحقق أعلى معايير التميز.",
      ],
      subtitle:
        "دورات تدريبية عملية وتطبيقية يقدمها نخبة من خبراء الميدان والصناعة للمهنيين والمؤسسات في الجزائر.",
      badgePraxis: "تطبيق عملي 100%",
      badgeExperts: "خبراء من الميدان",
      badgeAlgeria: "مصممة للبيئة الجزائرية",
      eventSub: "في جناحنا الخاص · 12–15 أكتوبر · قصر المعارض، الجزائر",
    },
    about: {
      eyebrow: "عن الأكاديمية",
      title: "مركز التكوين والتطوير التابع لمجمع كوندور",
      description:
        "تواكب كوندور أكاديمي تطوير الكفاءات عبر برامج تدريبية متخصصة ومصممة وفق الاحتياجات الدقيقة للشركات والمهنيين.",
      pillar1Title: "تكوين تطبيقي",
      pillar1Desc: "مهارات ملموسة وقابلة للتطبيق الفوري في صلب عملكم اليومي.",
      pillar2Title: "تطوير مستمر",
      pillar2Desc: "مرافقة شاملة للتطور المهني والارتقاء بالأداء الشخصي.",
      pillar3Title: "خبرة صناعية",
      pillar3Desc:
        "نقل المعرفة الميدانية لرائد الصناعة الوطنية والتكنولوجية في الجزائر.",
    },
    domains: {
      eyebrow: "تخصصاتنا التكوينية",
      title: "خمسة مسارات استراتيجية للارتقاء بفرق عملكم",
      description:
        "برامج تدريبية متكاملة تواكب أحدث التطورات وتجيب على التحديات الواقعية.",
      seeAllTileTitle: "تكويناتنا",
      seeAllTileDesc: "تصفح الدليل الكامل للدورات",
      items: [
        {
          title: "الرقميات والتكنولوجيا",
          desc: "إتقان الأدوات الرقمية الحديثة والحلول التكنولوجية الذكية.",
        },
        {
          title: "الإدارة والقيادة",
          desc: "قيادة الفرق وإدارة المشاريع برؤية استراتيجية وفعالية عالية.",
        },
        {
          title: "الصناعة والمهن التقنية",
          desc: "تعزيز الكفاءات التقنية والتشغيلية المباشرة في المواقع الصناعية.",
        },
        {
          title: "المهارات الشخصية (Soft Skills)",
          desc: "التواصل الفعال، التعاون الجماعي، وتنظيم العمل والوقت.",
        },
        {
          title: "الأعمال وتطوير الأداء",
          desc: "تنمية المهارات التجارية وتحقيق الأهداف التسويقية والمالية.",
        },
      ],
    },
    why: {
      eyebrow: "نقاط قوتنا",
      title: "تكوين ينبع من الواقع العملي والتجربة الميدانية",
      description:
        "نحن ننقل لكم الآليات والحلول التي أثبتت نجاحها الفعلي في كبرى المؤسسات الصناعية.",
      badgeTitle: "خبرة موثوقة",
      badgeDesc: "منبثقة من مجمع صناعي رائد في الجزائر",
      reasons: [
        {
          title: "تركيز تام على التطبيق",
          desc: "دراسات حالة حقيقية وممارسات واقعية يمكنك استخدامها فوراً.",
        },
        {
          title: "خبراء وممارسون ميدانيون",
          desc: "مدربون محترفون يمارسون فعلياً التخصصات التي يدرّسونها.",
        },
        {
          title: "نابعة من قلب الصناعة",
          desc: "تعلم مستوحى من التجربة الصناعية والتنظيمية لمجمع كوندور.",
        },
        {
          title: "ملائمة للسوق الجزائري",
          desc: "مناهج مكيفة ومصممة بدقة للبيئة المهنية والاقتصادية الوطنية.",
        },
      ],
    },
    catalogue: {
      eyebrow: "دليل الدورات 2026",
      title: "جميع برامجنا التدريبية ملخصة في كتيب واحد",
      description:
        "المحاور، الأهداف، المدد الزمنية والتفاصيل التقنية لكل برنامج لاختيار الدورة المناسبة لكم.",
      button: "تحميل الدليل PDF",
      meta: "ملف PDF · 4.2 ميغابايت",
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "لنتحدث حول احتياجاتكم التكوينية",
      description:
        "فريقنا المتخصص في خدمتكم للإجابة على استفساراتكم وتوجيهكم نحو أفضل مسار تدريبي.",
      fairQuestion: "هل تزورون معرض FormaTech Expo 2026؟",
      fairText:
        "تفضلوا بزيارة جناح كوندور أكاديمي — 12–15 أكتوبر، قصر المعارض SAFEX، الجزائر العاصمة.",
      formTitle: "طلب معلومات أو تكوين",
      formSubtitle: "",
      fullNameLabel: "الاسم الكامل",
      fullNamePlaceholder: "أمين بن علي",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "05 00 00 00 00",
      emailLabel: "البريد الإلكتروني المهني",
      emailPlaceholder: "nom@entreprise.dz",
      domainLabel: "المجال المطلوب",
      domainPlaceholder: "اختر التخصص التكويني",
      messageLabel: "الرسالة أو الاستفسار",
      messagePlaceholder:
        "يرجى توضيح عدد المشاركين أو الأهداف المرجوة من التدريب...",
      successMessage: "شكراً لكم! سيتواصل معكم مستشار التكوين في أقرب وقت.",
    },
    gallery: {
      eyebrow: "دليل الدورات التكوينية 2026",
      title: "اكتشف جميع برامجنا التكوينية المعتمدة",
      subtitle:
        "دورات تدريبية متخصصة ومصممة من قبل خبراء الصناعة والتقنية لتمكين فرق عملكم من التفوق.",
      searchPlaceholder: "ابحث عن دورة تدريبية، مهارة، أو تقنية...",
      clear: "مسح",
      availableTitle: "الدورات المتاحة",
      levelLabel: "المستوى :",
      noResultsTitle: "لم يتم العثور على دورات تطابق بحثكم",
      noResultsDesc: "يرجى تجربة كلمات بحث أخرى أو إعادة ضبط الفلاتر المختارة.",
      customTitle: "هل تحتاجون لتكوين مخصص لشركتكم؟",
      customDesc:
        "تصمم كوندور أكاديمي أيضاً برامج تدريبية مصممة خصيصاً على المقاس وفق معايير مصانعكم وإداراتكم.",
      customContact: "تواصل مع فريقنا البيداغوجي الآن ←",
      categories: {
        Tous: "الكل",
        "Digital & Tech": "الرقميات والتكنولوجيا",
        Management: "الإدارة والقيادة",
        Industrie: "الصناعة والمهن",
        "Soft Skills": "المهارات الشخصية",
        Business: "الأعمال والأداء",
      },
      levels: {
        Tous: "الكل",
        Débutant: "مبتدئ",
        Intermédiaire: "متوسط",
        Avancé: "متقدم",
      },
    },
    extras: {
      contactCta: "اتصل بنا وحدد موعداً",
      visitSite: "زيارة الموقع",
      banners: {
        ariaLabel: "الأخبار والفعاليات",
        formatechBadge: "فعالية",
        formatechTitle: "كوندور أكاديمي في معرض فورماتيك إكسبو 2026",
        formatechSubtitle:
          "تفضلوا بزيارة جناحنا للتعرف على برامجنا التكوينية وحجز موعد مع فريقنا.",
        formatechDates: "12–15 أكتوبر 2026",
        formatechPlace: "الجناح A، قصر المعارض (صافكس)، الجزائر العاصمة",
        formatechCta: "حجز موعد",
        roseBadge: "حملة تحسيسية",
        roseTitle: "أكتوبر الوردي: معاً من أجل التوعية",
        roseSubtitle:
          "تنخرط كوندور أكاديمي في حملة مكافحة سرطان الثدي. الكشف المبكر ينقذ الأرواح.",
        roseCta: "تواصل معنا",
      },
      planning: {
        eyebrow: "البرنامج الشهري",
        title: "برنامج الدورات التكوينية لهذا الشهر",
        description:
          "اكتشفوا في فيديو قصير الدورات المبرمجة هذا الشهر، مواعيدها ومجالاتها.",
        videoTitle: "عرض البرنامج الشهري للدورات التكوينية",
      },
      location: {
        eyebrow: "موقعنا",
        title: "أين تجدوننا",
        description:
          "تستقبلكم كوندور أكاديمي ببرج بوعريريج، داخل المنطقة الصناعية.",
        openMaps: "فتح في خرائط جوجل",
      },
    },
    companies: {
      eyebrow: "شركاؤنا وفروعنا",
      title: "منظومة مجمع كوندور",
      description:
        "تكامل صناعي متعدد القطاعات في خدمة تبادل الخبرات وبناء الكفاءات.",
      items: [
        {
          title: "كوندور إلكترونيكس",
          desc: "الرائد الجزائري بلا منازع في مجال الإلكترونيات والأجهزة الكهرومنزلية.",
        },
        {
          title: "كريستور",
          desc: "المرجع في الأجهزة الكهرومنزلية المبتكرة والموثوقة في متناول الجميع.",
        },
        {
          title: "هايسنس",
          desc: "تكنولوجيا عالمية وجودة عرض استثنائية لمختلف الاستخدامات العائلية والمهنية.",
        },
        {
          title: "ناردي",
          desc: "المتخصص الإيطالي الرائد في حلول المطابخ والأجهزة الكهرومنزلية المدمجة الفاخرة.",
        },
        {
          title: "بي بي أيه ستيل",
          desc: "حلول تعدينية وصناعية متطورة لمشاريع البنية التحتية الكبرى والمنشآت.",
        },
        {
          title: "كوندور العقارية",
          desc: "الترقية العقارية العصرية وإنجاز المشاريع العمرانية والسكنية الرائدة.",
        },
        {
          title: "خدماتي",
          desc: "شبكة وطنية متكاملة لخدمات ما بعد البيع والصيانة التقنية الاحترافية.",
        },
        {
          title: "كوندور لوجستيك",
          desc: "حلول نقل وإمداد متكاملة لإدارة سلاسل التوريد بكفاءة واحترافية.",
        },
      ],
    },
  },

  EN: {
    dir: "ltr",
    common: {
      brandName: "Condor",
      academy: "Academy",
      downloadCatalogue: "Download Catalogue",
      downloadPdf: "Download PDF",
      allFormations: "Our Training Programs",
      discoverFormations: "Explore Our Courses",
      eventTag: "Meet us at",
      closeMenu: "Close menu",
      openMenu: "Open menu",
      readMore: "Read more",
      backHome: "Back to Home",
      viewGallery: "Explore full directory",
      popular: "Popular",
      duration: "Duration",
      level: "Level",
      format: "Format",
      enroll: "Enroll Now",
      resetFilters: "Reset filters",
      sendRequest: "Send Request",
      sending: "Sending…",
      requestSent: "Request submitted successfully",
      anotherRequest: "Send another request",
      privacyNotice:
        "Your details are only used to process and respond to your inquiry.",
      allRightsReserved: "© 2026 Condor Academy · Condor Electronics",
      privacyPolicy: "Privacy Policy",
    },
    nav: {
      home: "Home",
      allFormations: "Our Training Programs",
      about: "About",
      whyUs: "Our Strengths",
      contact: "Contact",
      navigation: "Navigation",
      contactAndAccess: "Contact & Location",
    },
    hero: {
      titleStart: "Elevate your skills. ",
      titleAccent: "Shape your future.",
      rotatingPhrases: [
        "Shape your future.",
        "Fast-track your career.",
        "Master smart technology.",
        "Lead high-impact teams.",
        "Achieve operational excellence.",
      ],
      subtitle:
        "Hands-on, field-proven training designed by industry specialists for professionals and enterprises in Algeria.",
      badgePraxis: "Action-oriented",
      badgeExperts: "Field experts",
      badgeAlgeria: "Tailored for Algeria",
      eventSub: "Our Stand · October 12–15 · SAFEX, Algiers",
    },
    about: {
      eyebrow: "About Us",
      title: "The corporate training institute of the Condor Group",
      description:
        "Condor Academy empowers skill development through specialized programs aligned with the concrete demands of modern organizations.",
      pillar1Title: "Training",
      pillar1Desc:
        "Actionable capabilities directly applicable to your daily professional operations.",
      pillar2Title: "Development",
      pillar2Desc:
        "Holistic support fostering individual growth and career advancement.",
      pillar3Title: "Expertise",
      pillar3Desc:
        "Capitalizing on the industrial mastery and operational standards of a leading Algerian group.",
    },
    domains: {
      eyebrow: "Our Curriculum",
      title: "Five core domains engineered to elevate your workforce",
      description:
        "Structured learning paths addressing real-world operational challenges.",
      seeAllTileTitle: "Our Training Programs",
      seeAllTileDesc: "Browse complete catalog",
      items: [
        {
          title: "Digital & Technology",
          desc: "Master cutting-edge software and digital tools transforming modern industries.",
        },
        {
          title: "Management & Leadership",
          desc: "Lead teams and execute complex projects with proven methodologies.",
        },
        {
          title: "Industry & Operations",
          desc: "Strengthen technical competence and shop-floor productivity.",
        },
        {
          title: "Soft Skills",
          desc: "Effective communication, collaborative problem solving, and personal efficiency.",
        },
        {
          title: "Business & Performance",
          desc: "Accelerate commercial growth, strategic sales, and operational KPIs.",
        },
      ],
    },
    why: {
      eyebrow: "Our Strengths",
      title: "Training rooted in real enterprise experience",
      description:
        "We share methodologies proven on the front lines of manufacturing and business — not just theoretical textbooks.",
      badgeTitle: "Proven Expertise",
      badgeDesc: "born from a leading Algerian industrial group",
      reasons: [
        {
          title: "Practical & Applied",
          desc: "Real case studies and active simulations for immediate impact on the job.",
        },
        {
          title: "Experienced Practitioners",
          desc: "Certified instructors who actively practice what they teach.",
        },
        {
          title: "Industrial Heritage",
          desc: "Insights enriched by Condor's nationwide manufacturing and organizational benchmark.",
        },
        {
          title: "Grounded in Algeria",
          desc: "Curricula tailored specifically to the Algerian market reality and regulations.",
        },
      ],
    },
    catalogue: {
      eyebrow: "2026 Catalogue",
      title: "Our complete curriculum in a single comprehensive guide",
      description:
        "Syllabi, learning objectives, schedules and modular formats to help you select the ideal course.",
      button: "Download PDF Guide",
      meta: "PDF · 4.2 MB",
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Let's discuss your training needs",
      description:
        "Our dedicated advisors are ready to evaluate your requirements and customize learning paths for your team.",
      fairQuestion: "Attending FormaTech Expo 2026?",
      fairText:
        "Visit the Condor Academy booth — October 12–15, SAFEX, Algiers.",
      formTitle: "Request Information",
      formSubtitle: "",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Amine Benali",
      phoneLabel: "Phone Number",
      phonePlaceholder: "05 00 00 00 00",
      emailLabel: "Work Email",
      emailPlaceholder: "name@company.dz",
      domainLabel: "Field of Interest",
      domainPlaceholder: "Select a training domain",
      messageLabel: "Message",
      messagePlaceholder:
        "Briefly describe your objectives, team size, or timeline...",
      successMessage:
        "Thank you! A Condor Academy advisor will reach out to you shortly.",
    },
    gallery: {
      eyebrow: "2026 Course Directory",
      title: "Explore all professional training programs",
      subtitle:
        "Certified courses designed by leading engineering and management experts to propel your organization forward.",
      searchPlaceholder: "Search for a course, skill, or tool...",
      clear: "Clear",
      availableTitle: "Available Courses",
      levelLabel: "Level:",
      noResultsTitle: "No courses match your search criteria",
      noResultsDesc: "Try different keywords or adjust your filters.",
      customTitle: "Need custom enterprise training?",
      customDesc:
        "Condor Academy develops tailored on-site curricula specifically adapted to your production facilities and operational goals.",
      customContact: "Contact our pedagogical team →",
      categories: {
        Tous: "All",
        "Digital & Tech": "Digital & Tech",
        Management: "Management",
        Industrie: "Industry",
        "Soft Skills": "Soft Skills",
        Business: "Business",
      },
      levels: {
        Tous: "All",
        Débutant: "Beginner",
        Intermédiaire: "Intermediate",
        Avancé: "Advanced",
      },
    },
    extras: {
      contactCta: "Contact & Appointment",
      visitSite: "Visit website",
      banners: {
        ariaLabel: "News and events",
        formatechBadge: "Event",
        formatechTitle: "Condor Academy at FormaTech Expo 2026",
        formatechSubtitle:
          "Meet our team at our stand to discover our programs and book an appointment.",
        formatechDates: "October 12–15, 2026",
        formatechPlace: "Pavilion A, SAFEX (Exhibition Palace), Algiers",
        formatechCta: "Book an appointment",
        roseBadge: "Awareness",
        roseTitle: "Pink October: raising awareness together",
        roseSubtitle:
          "Condor Academy supports the fight against breast cancer. Early screening saves lives.",
        roseCta: "Contact us",
      },
      planning: {
        eyebrow: "Monthly schedule",
        title: "This month's training schedule",
        description:
          "Watch a short video of the sessions planned this month, with dates and topics.",
        videoTitle: "Monthly training schedule presentation",
      },
      location: {
        eyebrow: "Find us",
        title: "Where to find us",
        description:
          "Condor Academy welcomes you in Bordj Bou Arréridj, inside the industrial zone.",
        openMaps: "Open in Google Maps",
      },
    },
    companies: {
      eyebrow: "Our Partners & Subsidiaries",
      title: "The Condor Group Ecosystem",
      description:
        "A multi-sector industrial synergy empowering shared expertise and professional mastery.",
      items: [
        {
          title: "Condor Electronics",
          desc: "Undisputed Algerian leader in consumer electronics and home appliances.",
        },
        {
          title: "Cristor",
          desc: "The benchmark for innovative, reliable, and accessible home appliances.",
        },
        {
          title: "Hisense",
          desc: "Global technology leader delivering premium visual and smart appliances.",
        },
        {
          title: "Nardi",
          desc: "Italian specialist in premium built-in kitchen appliances and timeless design.",
        },
        {
          title: "BBA Steel Company",
          desc: "Advanced steel and metallurgy engineering solutions for major national projects.",
        },
        {
          title: "Condor Real Estate",
          desc: "Innovative property development and high-standard construction endeavors.",
        },
        {
          title: "Khadamaty",
          desc: "Nationwide professional after-sales maintenance and customer support network.",
        },
        {
          title: "Condor Logistics",
          desc: "Comprehensive logistics, transport, and end-to-end supply chain solutions.",
        },
      ],
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("condor_lang") as Language;
    return saved && translations[saved] ? saved : "FR";
  });

  useEffect(() => {
    localStorage.setItem("condor_lang", language);
    const dir = translations[language].dir;
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language.toLowerCase());
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    dir: translations[language].dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
