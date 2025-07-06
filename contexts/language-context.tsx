"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.portfolio": "Portfolio",

    // Hero Section
    "hero.greeting": "Hi there, I'm ",
    "hero.name": "Khalil",
    "hero.role": "Website designer and developer",
    "hero.description":
      "I help people and brands reach their goals by designing & building user-centric digital products and interactive experiences",
    "hero.viewWork": "View My Work",
    "hero.getInTouch": "Get In Touch",

    // About Section
    "about.title": "About Me",
    "about.description1":
      "Hi, my name is Tabet Khalil, a freelance web developer and designer, passionate about building clean, modern, and fast websites. I specialize in Next.js and Strapi CMS solutions crafting digital experiences that are not only beautiful but also optimized for performance and user experience.",
    "about.description2":
      "When I’m not coding, you’ll probably find me at the gym, solving complex puzzles, or working on personal side projects",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.description":
      "Here are the technologies and tools I work with to bring your ideas to life",
    "skills.proficiency": "Proficiency",

    // Education Section
    "education.title": "Education",
    "education.description":
      "My educational background and continuous learning journey",
    "education.degree1": "Master's Degree in Operations Research",
    "education.school1": "University of Boumerdes (UMBB)",
    "education.desc1":
      "Advanced study in mathematical optimization, statistical analysis, and decision-making processes",
    // "education.degree2": "Bachelor's Degree in Applied Mathematics",
    // "education.school2": "University of Boumerdes (UMBB)",
    // "education.desc2":
    //   "Comprehensive foundation in mathematical modeling, calculus, linear algebra, and statistical methods",
    "education.degree2": "Front End Engineer Certificate",
    "education.school2": "Codecademy",
    "education.desc2":
      "Comprehensive certification covering React, JavaScript, HTML/CSS, and modern web development practices",
    "education.degree3": "CS50x Certificate",
    "education.school3": "Harvard University",
    "education.desc3":
      "Introduction to Computer Science covering algorithms, data structures, and programming fundamentals",

    // Work Section
    "work.title": "My Work",
    "work.description":
      "Here are some of my recent projects that showcase my skills and creativity",
    "work.project1.title": "E-Commerce Platform",
    "work.project1.description":
      "Full-stack e-commerce solution with payment integration and admin dashboard",
    "work.project2.title": "Task Management App",
    "work.project2.description":
      "Collaborative project management tool with real-time updates",
    "work.project3.title": "Portfolio Website",
    "work.project3.description":
      "Modern portfolio website with animations and responsive design",
    "work.code": "Code",
    "work.liveDemo": "Live Demo",

    // Services Section
    "services.title": "My Services",
    "services.description":
      "I offer comprehensive web development solutions tailored to your business needs",
    "services.service1.title": "Custom Website Development",
    "services.service1.description":
      "Tailored websites built from scratch using modern technologies like React, Next.js, and TailwindCss. Perfect for businesses looking for unique, high-performance web solutions.",
    "services.service1.feature1": "Responsive Design",
    "services.service1.feature2": "Modern Technologies",
    "services.service1.feature3": "SEO Optimized",
    "services.service1.feature4": "Fast Loading",
    "services.service2.title": "E-Commerce Websites",
    "services.service2.description":
      "Complete e-commerce solutions with inventory management and user-friendly shopping experiences. Built to convert visitors into customers.",
    "services.service2.feature1": "Modern Design",
    "services.service2.feature2": "Inventory Management",
    "services.service2.feature3": "Admin Dashboard",
    "services.service2.feature4": "Mobile Optimized",
    "services.service3.title": "Website Optimization",
    "services.service3.description":
      "Improve your existing website's performance, speed, and user experience. From technical SEO to performance optimization and accessibility improvements.",
    "services.service3.feature1": "Performance Boost",
    "services.service3.feature2": "SEO Enhancement",
    "services.service3.feature3": "Accessibility",
    "services.service3.feature4": "Code Optimization",
    "services.getStarted": "Get Started",

    // Testimonials Section
    "testimonials.title": "What Clients Say",
    "testimonials.description":
      "Don't just take my word for it - here's what my clients have to say about working with me",
    "testimonials.client1.name": "Sarah Johnson",
    "testimonials.client1.role": "Marketing Director",
    "testimonials.client1.company": "TechStart Inc.",
    "testimonials.client1.text":
      "Khalil delivered an exceptional e-commerce website that exceeded our expectations. The site is fast, beautiful, and our sales have increased by 40% since launch. His attention to detail and communication throughout the project was outstanding.",
    "testimonials.client2.name": "Michael Chen",
    "testimonials.client2.role": "Founder",
    "testimonials.client2.company": "Digital Solutions Co.",
    "testimonials.client2.text":
      "Working with Khalil was a game-changer for our business. He transformed our outdated website into a modern, responsive platform that truly represents our brand. The optimization work he did improved our page speed by 60%.",
    // "testimonials.client3.name": "Emma Rodriguez",
    // "testimonials.client3.role": "CEO",
    // "testimonials.client3.company": "Creative Agency",
    // "testimonials.client3.text":
    //   "Khalil's expertise in both development and design is remarkable. He created a custom website that perfectly captures our creative vision while maintaining excellent performance. I highly recommend his services to anyone looking for quality web development.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "Ready to start your next project? Let's discuss how I can help bring your ideas to life.",
    "contact.connect": "Let's Connect",
    "contact.connectDescription":
      "Feel free to reach out through any of these channels",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.sendMessage": "Send a Message",
    "contact.messageDescription": "I'll get back to you within 24 hours",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send Message",
    "contact.projectInquiry": "Project Inquiry",

    // Footer
    "footer.rights": "All rights reserved.",

    // Accessibility
    "accessibility.toggleTheme": "Toggle theme",
    "accessibility.toggleLanguage": "Toggle language",
  },
  fr: {
    // Navigation
    "nav.about": "À Propos",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.work": "Projets",
    "nav.services": "Services",
    "nav.testimonials": "Témoignages",
    "nav.contact": "Contact",
    "nav.portfolio": "Portfolio",

    // Hero Section
    "hero.greeting": "Salut, je suis ",
    "hero.role": "Développeur et Designer Web",
    "hero.freelance": "Web",
    "hero.description":
      "créant des expériences numériques belles et fonctionnelles",
    "hero.viewWork": "Voir Mon Travail",
    "hero.getInTouch": "Me Contacter",

    // About Section
    "about.title": "À Propos de Moi",
    "about.description1":
      "Bonjour, je m'appelle Tabet Khalil. Je suis développeur et designer web freelance, passionné par la création de sites web modernes, épurés et rapides. Je me spécialise dans les solutions Next.js et Strapi CMS, en concevant des expériences numériques à la fois esthétiques, performantes et centrées sur l’utilisateur.",
    "about.description2":
      "Quand je ne code pas, vous me trouverez probablement à la salle de sport, en train de résoudre des probléme complexes ou de travailler sur des projets personnels.",

    // Skills Section
    "skills.title": "Compétences & Expertise",
    "skills.description":
      "Voici les technologies et outils avec lesquels je travaille pour donner vie à vos idées",
    "skills.proficiency": "Maîtrise",

    // Education Section
    "education.title": "Formation",
    "education.description":
      "Mon parcours éducatif et mon apprentissage continu",
    "education.degree1": "Master en Recherche Opérationnelle",
    "education.school1": "Université de Boumerdès (UMBB)",
    "education.desc1":
      "Étude avancée en optimisation mathématique, analyse statistique et processus de prise de décision",
    "education.degree2": "Licence en Mathématiques Appliquées",
    "education.school2": "Université de Boumerdès (UMBB)",
    "education.desc2":
      "Formation complète en modélisation mathématique, calcul, algèbre linéaire et méthodes statistiques",
    "education.degree3": "Certificat Ingénieur Front End",
    "education.school3": "Codecademy",
    "education.desc3":
      "Certification complète couvrant React, JavaScript, HTML/CSS et les pratiques modernes de développement web",
    "education.degree4": "Certificat CS50x",
    "education.school4": "Université Harvard",
    "education.desc4":
      "Introduction à l'informatique couvrant les algorithmes, structures de données et fondamentaux de programmation",

    // Work Section
    "work.title": "Mon Travail",
    "work.description":
      "Voici quelques-uns de mes projets récents qui mettent en valeur mes compétences et ma créativité",
    "work.project1.title": "Plateforme E-Commerce",
    "work.project1.description":
      "Solution e-commerce full-stack avec intégration de paiement et tableau de bord admin",
    "work.project2.title": "App de Gestion de Tâches",
    "work.project2.description":
      "Outil de gestion de projet collaboratif avec mises à jour en temps réel",
    "work.project3.title": "Site Web Portfolio",
    "work.project3.description":
      "Site web portfolio moderne avec animations et design responsive",
    "work.code": "Code",
    "work.liveDemo": "Démo Live",

    // Services Section
    "services.title": "Mes Services",
    "services.description":
      "J'offre des solutions de développement web complètes adaptées aux besoins de votre entreprise",
    "services.service1.title": "Développement de Sites Web Personnalisés",
    "services.service1.description":
      "Sites web sur mesure construits à partir de zéro en utilisant des technologies modernes comme React, Next.js et TypeScript. Parfait pour les entreprises recherchant des solutions web uniques et performantes.",
    "services.service1.feature1": "Design Responsive",
    "services.service1.feature2": "Technologies Modernes",
    "services.service1.feature3": "Optimisé SEO",
    "services.service1.feature4": "Chargement Rapide",
    "services.service2.title": "Sites Web E-Commerce",
    "services.service2.description":
      "Solutions e-commerce complètes avec intégration de paiement, gestion d'inventaire et expériences d'achat conviviales. Conçues pour convertir les visiteurs en clients.",
    "services.service2.feature1": "Intégration Paiement",
    "services.service2.feature2": "Gestion Inventaire",
    "services.service2.feature3": "Tableau de Bord Admin",
    "services.service2.feature4": "Optimisé Mobile",
    "services.service3.title": "Optimisation de Sites Web",
    "services.service3.description":
      "Améliorez les performances, la vitesse et l'expérience utilisateur de votre site web existant. Du SEO technique à l'optimisation des performances et aux améliorations d'accessibilité.",
    "services.service3.feature1": "Boost Performance",
    "services.service3.feature2": "Amélioration SEO",
    "services.service3.feature3": "Accessibilité",
    "services.service3.feature4": "Optimisation Code",
    "services.getStarted": "Commencer",

    // Testimonials Section
    "testimonials.title": "Ce Que Disent Mes Clients",
    "testimonials.description":
      "Ne me croyez pas sur parole - voici ce que mes clients disent de leur collaboration avec moi",
    "testimonials.client1.name": "Sarah Johnson",
    "testimonials.client1.role": "Directrice Marketing",
    "testimonials.client1.company": "TechStart Inc.",
    "testimonials.client1.text":
      "Khalil a livré un site e-commerce exceptionnel qui a dépassé nos attentes. Le site est rapide, beau, et nos ventes ont augmenté de 40% depuis le lancement. Son attention aux détails et sa communication tout au long du projet étaient remarquables.",
    "testimonials.client2.name": "Michael Chen",
    "testimonials.client2.role": "Fondateur",
    "testimonials.client2.company": "Digital Solutions Co.",
    "testimonials.client2.text":
      "Travailler avec Khalil a été un tournant pour notre entreprise. Il a transformé notre site web obsolète en une plateforme moderne et responsive qui représente vraiment notre marque. Le travail d'optimisation qu'il a fait a amélioré notre vitesse de page de 60%.",
    // "testimonials.client3.name": "Emma Rodriguez",
    // "testimonials.client3.role": "PDG",
    // "testimonials.client3.company": "Creative Agency",
    // "testimonials.client3.text":
    //   "L'expertise de Khalil en développement et en design est remarquable. Il a créé un site web personnalisé qui capture parfaitement notre vision créative tout en maintenant d'excellentes performances. Je recommande vivement ses services à quiconque recherche un développement web de qualité.",

    // Contact Section
    "contact.title": "Me Contacter",
    "contact.description":
      "Prêt à commencer votre prochain projet ? Discutons de la façon dont je peux vous aider à donner vie à vos idées.",
    "contact.connect": "Connectons-nous",
    "contact.connectDescription":
      "N'hésitez pas à me contacter par l'un de ces canaux",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.sendMessage": "Envoyer un Message",
    "contact.messageDescription": "Je vous répondrai dans les 24 heures",
    "contact.subject": "Sujet",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Parlez-moi de votre projet...",
    "contact.send": "Envoyer le Message",
    "contact.projectInquiry": "Demande de Projet",

    // Footer
    "footer.rights": "Tous droits réservés.",

    // Accessibility
    "accessibility.toggleTheme": "Basculer le thème",
    "accessibility.toggleLanguage": "Changer de langue",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
