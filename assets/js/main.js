const menu=document.getElementById('mobileMenu');
const panel=document.getElementById('sidePanel');
if(menu){menu.addEventListener('click',()=>{panel.classList.toggle('open');menu.classList.toggle('open')});}
document.querySelectorAll('.side-nav a').forEach(a=>a.addEventListener('click',()=>{panel.classList.remove('open');menu?.classList.remove('open')}));

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=document.querySelectorAll('section[id]');
const navItems=document.querySelectorAll('.nav-item');
window.addEventListener('scroll',()=>{let current='home';sections.forEach(sec=>{if(scrollY>=sec.offsetTop-180) current=sec.id;});navItems.forEach(item=>{item.classList.toggle('active', item.getAttribute('href') === '#'+current);});});

const counters=document.querySelectorAll('[data-count]');
const countObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting) return;const el=entry.target;const target=Number(el.dataset.count);let start=0;const step=Math.max(1,Math.floor(target/70));const run=()=>{start+=step;if(start>=target){el.textContent=target+'+';}else{el.textContent=start;requestAnimationFrame(run)}};run();countObserver.unobserve(el);});},{threshold:.55});
counters.forEach(c=>countObserver.observe(c));

const filterBtns=document.querySelectorAll('.filter-btn');
const projectCards=document.querySelectorAll('.project-card');
filterBtns.forEach(btn=>btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;projectCards.forEach(card=>{const match=filter==='all'||card.dataset.category.includes(filter);card.classList.toggle('hide',!match);});}));

const glow=document.getElementById('cursorGlow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});

const tiltCards=document.querySelectorAll('.tilt-card');
tiltCards.forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=e.clientX-r.left;const y=e.clientY-r.top;const rx=((y/r.height)-.5)*-8;const ry=((x/r.width)-.5)*8;card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;});card.addEventListener('mouseleave',()=>{card.style.transform='';});});

const magnetic=document.querySelectorAll('.magnetic');
magnetic.forEach(btn=>{btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px, ${(e.clientY-r.top-r.height/2)*.12}px)`;});btn.addEventListener('mouseleave',()=>{btn.style.transform='';});});

// V6: reveal the portfolio after the startup animation
window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.add('loaded'), 1450);
});

// V7: real animated progress bar, 100% static and free-hosting compatible
(() => {
  const progress = document.getElementById('bootProgress');
  const percent = document.getElementById('bootPercent');
  const text = document.getElementById('bootText');
  const log = document.getElementById('bootLog');
  if (!progress || !percent || !text || !log) return;

  const steps = [
    { p: 7,  t: 'Initializing Portfolio...',       l: '[OK] Core system ready' },
    { p: 18, t: 'Connecting to HariMada Tech...',  l: '[OK] Founder profile loaded' },
    { p: 34, t: 'Loading UI Components...',        l: '[OK] Sidebar and hero initialized' },
    { p: 52, t: 'Loading Projects...',             l: '[OK] Portfolio projects loaded' },
    { p: 69, t: 'Loading Skills...',               l: '[OK] Technologies synchronized' },
    { p: 83, t: 'Preparing Contact System...',     l: '[OK] WhatsApp and email ready' },
    { p: 94, t: 'Optimizing Animations...',        l: '[OK] Cards, menu and scroll effects ready' },
    { p: 100,t: 'Portfolio Started Successfully',  l: '[READY] Welcome, client.' }
  ];

  let current = 0;
  let targetIndex = 0;
  const tick = setInterval(() => {
    const target = steps[targetIndex]?.p ?? 100;
    if (current < target) current += Math.max(1, Math.ceil((target - current) / 9));
    if (current > target) current = target;
    progress.style.width = current + '%';
    percent.textContent = current + '%';
    if (current === target) {
      const step = steps[targetIndex];
      if (step) {
        text.innerHTML = step.t + '<span>...</span>';
        log.textContent = step.l;
      }
      targetIndex++;
      if (current >= 100) clearInterval(tick);
    }
  }, 24);

  window.addEventListener('load', () => {
    setTimeout(() => document.body.classList.add('loaded'), 1550);
  });
})();


// Complete bilingual portfolio switcher: EN / FR.
// This version translates all visible portfolio texts without changing the design, menu, animations or functions.
(() => {
  const langButtons = [...document.querySelectorAll('[data-lang-switch]')];
  if (!langButtons.length) return;

  const meta = {
    en: {
      title: 'Ange Harilanto | Founder & Full-Stack Developer',
      description: 'Ange Harilanto Ramaroson - Founder & CEO of HariMada Tech, Full-Stack Web Developer specialized in PHP, Node.js, JavaScript, MySQL, databases, dashboards and responsive websites.',
      cv: 'cv-en.html'
    },
    fr: {
      title: 'Ange Harilanto | Fondateur & Développeur Full-Stack',
      description: 'Ange Harilanto Ramaroson - Fondateur et CEO de HariMada Tech, développeur Full-Stack spécialisé en PHP, Node.js, JavaScript, MySQL, bases de données, tableaux de bord et sites responsive.',
      cv: 'cv-fr.html'
    }
  };

  const pairs = [
    ['Available', 'Disponible'],
    ['Developer & Trainer', 'Développeur & Formateur'],
    ['Founder & CEO — HariMada Tech', 'Fondateur & CEO — HariMada Tech'],
    ['Home', 'Accueil'],
    ['About', 'À propos'],
    ['Services', 'Services'],
    ['Technologies', 'Technologies'],
    ['Projects', 'Projets'],
    ['Experience', 'Expérience'],
    ['View My CV', 'Voir mon CV'],
    ['📄 View My CV', '📄 Voir mon CV'],
    ['Contact', 'Contact'],
    ['$ npm run harimadatech --founder-mode', '$ npm run harimadatech --mode-fondateur'],
    ['npm run harimadatech --founder-mode', 'npm run harimadatech --mode-fondateur'],
    ['Full-Stack Developer', 'Développeur Full-Stack'],
    ['Full-Stack Developer & IT Trainer', 'Développeur Full-Stack & Formateur Informatique'],
    ['Founder & CEO of', 'Fondateur & CEO de'],
    ['I create modern websites, admin dashboards, PHP/MySQL applications, databases, and Node.js APIs for businesses, schools, training centers, and entrepreneurs.', 'Je crée des sites web modernes, des tableaux de bord administrateur, des applications PHP/MySQL, des bases de données et des API Node.js pour les entreprises, écoles, centres de formation et entrepreneurs.'],
    ['Hire Me', 'Me contacter'],
    ['View Projects', 'Voir les projets'],
    ['View CV', 'Voir le CV'],
    ['Portfolio projects', 'Projets portfolio'],
    ['Founder since', 'Fondateur depuis'],
    ['CEO / Founder', 'CEO / Fondateur'],
    ['About Me', 'À propos de moi'],
    ['Developer with a business mindset.', 'Développeur avec une vision business.'],
    ['I am not only a coder. I understand training centers, client communication, business tools, and the importance of clean systems that help people work faster.', 'Je ne suis pas seulement un codeur. Je comprends les centres de formation, la communication client, les outils de gestion et l’importance de systèmes propres qui aident les utilisateurs à travailler plus vite.'],
    ['I founded HariMada Tech to provide professional IT training, digital services, and practical technology solutions in Madagascar.', 'J’ai fondé HariMada Tech pour proposer des formations informatiques professionnelles, des services digitaux et des solutions technologiques pratiques à Madagascar.'],
    ['I build front-end interfaces, back-end systems, databases, dashboards, forms, and REST APIs using practical technologies.', 'Je développe des interfaces front-end, des systèmes back-end, des bases de données, des tableaux de bord, des formulaires et des API REST avec des technologies pratiques.'],
    ['“My goal is to deliver professional, reliable, and maintainable digital solutions that help businesses grow.”', '“Mon objectif est de livrer des solutions digitales professionnelles, fiables et faciles à maintenir pour aider les entreprises à grandir.”'],
    ['Location', 'Localisation'],
    ['Main focus', 'Objectif principal'],
    ['Websites • Dashboards • Databases • APIs', 'Sites web • Tableaux de bord • Bases de données • API'],
    ['Freelance platforms', 'Plateformes freelance'],
    ['Upwork & Direct Clients', 'Upwork & Clients directs'],
    ['What I can build for clients.', 'Ce que je peux créer pour les clients.'],
    ['Business Websites', 'Sites web professionnels'],
    ['Responsive websites for schools, companies, agencies, services, and personal brands.', 'Sites web responsive pour écoles, entreprises, agences, services et marques personnelles.'],
    ['Modern UI', 'Interface moderne'],
    ['WhatsApp integration', 'Intégration WhatsApp'],
    ['SEO-ready structure', 'Structure prête pour le SEO'],
    ['Admin Dashboards', 'Tableaux de bord administrateur'],
    ['Professional dashboards for students, payments, customers, sales, reports, and operations.', 'Tableaux de bord professionnels pour étudiants, paiements, clients, ventes, rapports et opérations.'],
    ['KPIs', 'Indicateurs clés'],
    ['Charts', 'Graphiques'],
    ['Management tables', 'Tableaux de gestion'],
    ['PHP/MySQL Applications', 'Applications PHP/MySQL'],
    ['Custom forms, authentication, CRUD systems, invoice tools, registration systems, and databases.', 'Formulaires personnalisés, authentification, systèmes CRUD, facturation, inscriptions et bases de données.'],
    ['Secure forms', 'Formulaires sécurisés'],
    ['Database design', 'Conception de base de données'],
    ['Reports', 'Rapports'],
    ['Node.js REST APIs', 'API REST Node.js'],
    ['Express.js backend APIs for authentication, users, products, admin tools, and integrations.', 'API backend Express.js pour l’authentification, les utilisateurs, les produits, les outils admin et les intégrations.'],
    ['REST endpoints', 'Endpoints REST'],
    ['JSON API', 'API JSON'],
    ['Clean architecture', 'Architecture propre'],
    ['Database Systems', 'Systèmes de base de données'],
    ['Design and manage databases for schools, businesses, customers, payments, and stock.', 'Conception et gestion de bases de données pour écoles, entreprises, clients, paiements et stock.'],
    ['Data modeling', 'Modélisation des données'],
    ['Search & filters', 'Recherche & filtres'],
    ['Maintenance & Bug Fix', 'Maintenance & correction de bugs'],
    ['Fix layout issues, PHP errors, JavaScript bugs, responsive problems, and performance issues.', 'Correction des problèmes de mise en page, erreurs PHP, bugs JavaScript, responsive et performance.'],
    ['Debugging', 'Débogage'],
    ['Optimization', 'Optimisation'],
    ['Support', 'Assistance'],
    ['Tools and technologies I use.', 'Outils et technologies que j’utilise.'],
    ['Frontend', 'Front-end'],
    ['HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS basics, Responsive Design, Animations, UI/UX, SEO structure.', 'HTML5, CSS3, JavaScript, Bootstrap, bases Tailwind CSS, design responsive, animations, UI/UX, structure SEO.'],
    ['Backend', 'Back-end'],
    ['PHP, Node.js, Express.js, REST API, Authentication, CRUD, Form processing, Business logic.', 'PHP, Node.js, Express.js, API REST, authentification, CRUD, traitement de formulaires, logique métier.'],
    ['Database', 'Base de données'],
    ['MySQL, database design, relationships, admin tables, filters, reporting, payment tracking, Excel data structure.', 'MySQL, conception de bases de données, relations, tables admin, filtres, rapports, suivi des paiements, structure Excel.'],
    ['Tools', 'Outils'],
    ['Git, GitHub, VS Code, Netlify, Vercel, XAMPP, phpMyAdmin, Figma basics, Chrome DevTools.', 'Git, GitHub, VS Code, Netlify, Vercel, XAMPP, phpMyAdmin, bases Figma, Chrome DevTools.'],
    ['Business Skills', 'Compétences business'],
    ['Client communication, project planning, IT training, documentation, technical support, online service delivery.', 'Communication client, planification de projet, formation informatique, documentation, support technique, services en ligne.'],
    ['Additional', 'Compétences supplémentaires'],
    ['WordPress basics, Photoshop/Canva basics, PowerPoint, Excel dashboards, Google tools, AI-assisted productivity.', 'Bases WordPress, bases Photoshop/Canva, PowerPoint, tableaux de bord Excel, outils Google, productivité avec IA.'],
    ['Premium Portfolio', 'Portfolio Premium'],
    ['Real projects and professional demos.', 'Projets réels et démonstrations professionnelles.'],
    ['Real projects are clearly labeled. Personal/demo projects are included to show specific technical skills.', 'Les projets réels sont indiqués clairement. Les projets personnels/démos montrent des compétences techniques spécifiques.'],
    ['All', 'Tous'],
    ['Real Projects', 'Projets réels'],
    ['Demo Projects', 'Projets démos'],
    ['Real Project', 'Projet réel'],
    ['Demo Project', 'Projet démo'],
    ['HariMada Tech Official Website', 'Site officiel HariMada Tech'],
    ['Professional website for an IT training center with course presentation, contact actions, and responsive design.', 'Site professionnel pour un centre de formation informatique avec présentation des cours, actions de contact et design responsive.'],
    ['Discuss similar project →', 'Discuter d’un projet similaire →'],
    ['HariMada School ERP', 'ERP scolaire HariMada'],
    ['School management system with dashboard, student management, teacher CRM, payments, attendance, reports, and admin modules.', 'Système de gestion scolaire avec tableau de bord, gestion des étudiants, CRM professeurs, paiements, présences, rapports et modules admin.'],
    ['HariMada Language School Website', 'Site école de langue HariMada'],
    ['Language school platform with online registration, course management, payment information, and admin dashboard.', 'Plateforme d’école de langue avec inscription en ligne, gestion des cours, informations de paiement et tableau de bord admin.'],
    ['Born To Speak Website', 'Site web Born To Speak'],
    ['Professional website concept and digital presence improvements for a language/training organization, focused on trust and lead generation.', 'Concept de site professionnel et amélioration de présence digitale pour une organisation de langue/formation, axé sur la confiance et la génération de prospects.'],
    ['Student & Client Database System', 'Système de base de données étudiants & clients'],
    ['Structured database for registrations, clients, payments, filters, Excel import/export, and administrative tracking.', 'Base de données structurée pour inscriptions, clients, paiements, filtres, import/export Excel et suivi administratif.'],
    ['Backend API demonstration with clean routes, authentication structure, CRUD endpoints, and scalable organization.', 'Démonstration d’API backend avec routes propres, structure d’authentification, endpoints CRUD et organisation évolutive.'],
    ['PHP/MySQL CRM System', 'Système CRM PHP/MySQL'],
    ['Customer management concept with dashboard, invoices, search filters, client status, and reporting.', 'Concept de gestion client avec tableau de bord, factures, filtres de recherche, statut client et rapports.'],
    ['Modern Business Landing Page', 'Landing Page business moderne'],
    ['Conversion-focused landing page with strong hero section, animated service cards, pricing, and contact CTA.', 'Landing page axée conversion avec hero section forte, cartes services animées, tarifs et appel à l’action.'],
    ['Professional journey.', 'Parcours professionnel.'],
    ['2023 — Present', '2023 — Présent'],
    ['Created and managed an IT training and digital service initiative, developing websites, learning tools, business systems, and training programs.', 'Création et gestion d’une initiative de formation informatique et services digitaux, avec développement de sites web, outils pédagogiques, systèmes business et programmes de formation.'],
    ['2021 — Present', '2021 — Présent'],
    ['IT Trainer & Web Development Instructor', 'Formateur informatique & développement web'],
    ['Teaching Microsoft Office, Internet, AI tools, and web development foundations to students and professionals.', 'Formation sur Microsoft Office, Internet, outils IA et bases du développement web pour étudiants et professionnels.'],
    ['Freelance Direction', 'Orientation freelance'],
    ['Upwork & International Clients', 'Upwork & clients internationaux'],
    ['Positioning services around business websites, dashboards, PHP/MySQL applications, database systems, and Node.js APIs.', 'Positionnement des services autour des sites business, tableaux de bord, applications PHP/MySQL, systèmes de base de données et API Node.js.'],
    ['Let’s build your project.', 'Construisons votre projet.'],
    ['WhatsApp', 'WhatsApp'],
    ['Fast project discussion', 'Discussion rapide du projet'],
    ['Email', 'Email'],
    ['Professional contact', 'Contact professionnel'],
    ['Upwork', 'Upwork'],
    ['Available for freelance work / View CV', 'Disponible pour missions freelance / Voir CV'],
    ['Name', 'Nom'],
    ['Project Type', 'Type de projet'],
    ['Business Website', 'Site web professionnel'],
    ['School / Training Website', 'Site école / formation'],
    ['PHP/MySQL Application', 'Application PHP/MySQL'],
    ['Database System', 'Système de base de données'],
    ['Node.js REST API', 'API REST Node.js'],
    ['Maintenance / Bug Fix', 'Maintenance / Correction de bugs'],
    ['Budget', 'Budget'],
    ['Not sure yet', 'Pas encore sûr'],
    ['Message', 'Message'],
    ['Send Message', 'Envoyer le message'],
    ['Your name', 'Votre nom'],
    ['you@example.com', 'vous@example.com'],
    ['Tell me about your project...', 'Expliquez-moi votre projet...'],
    ['© 2026 Ange Harilanto Ramaroson — Founder & CEO of HariMada Tech.', '© 2026 Ange Harilanto Ramaroson — Fondateur & CEO de HariMada Tech.'],
    ['Back to top ↑', 'Retour en haut ↑'],
    ['C:\\Users\\Harilanto> boot portfolio.exe', 'C:\\Users\\Harilanto> démarrer portfolio.exe'],
    ['Initializing Portfolio', 'Initialisation du portfolio'],
    ['[WAIT] Loading modules...', '[ATTENTE] Chargement des modules...']
  ];

  function desiredText(currentText, lang) {
    const trimmed = currentText.trim();
    for (const [en, fr] of pairs) {
      if (trimmed === en || trimmed === fr) return lang === 'fr' ? fr : en;
    }
    return null;
  }

  function translateTextNodes(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const newValue = desiredText(node.nodeValue, lang);
      if (newValue !== null) {
        const leading = node.nodeValue.match(/^\s*/)?.[0] || '';
        const trailing = node.nodeValue.match(/\s*$/)?.[0] || '';
        node.nodeValue = leading + newValue + trailing;
      }
    });
  }

  function translateAttributes(lang) {
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      const newValue = desiredText(el.getAttribute('placeholder') || '', lang);
      if (newValue !== null) el.setAttribute('placeholder', newValue);
    });
    document.querySelectorAll('img[alt]').forEach(el => {
      const alt = el.getAttribute('alt') || '';
      const altMap = {
        en: {
          'Ange Harilanto Ramaroson profile photo': 'Ange Harilanto Ramaroson profile photo',
          'Portrait of Ange Harilanto Ramaroson': 'Portrait of Ange Harilanto Ramaroson',
          'HariMada Tech website mockup': 'HariMada Tech website mockup',
          'School ERP mockup': 'School ERP mockup',
          'Language school website mockup': 'Language school website mockup',
          'Born To Speak website mockup': 'Born To Speak website mockup',
          'Database system mockup': 'Database system mockup',
          'Node API mockup': 'Node API mockup',
          'PHP CRM mockup': 'PHP CRM mockup',
          'Landing page mockup': 'Landing page mockup'
        },
        fr: {
          'Ange Harilanto Ramaroson profile photo': 'Photo de profil Ange Harilanto Ramaroson',
          'Portrait of Ange Harilanto Ramaroson': 'Portrait de Ange Harilanto Ramaroson',
          'HariMada Tech website mockup': 'Maquette du site HariMada Tech',
          'School ERP mockup': 'Maquette ERP scolaire',
          'Language school website mockup': 'Maquette site école de langue',
          'Born To Speak website mockup': 'Maquette site Born To Speak',
          'Database system mockup': 'Maquette système de base de données',
          'Node API mockup': 'Maquette API Node',
          'PHP CRM mockup': 'Maquette CRM PHP',
          'Landing page mockup': 'Maquette landing page'
        }
      };
      const allKeys = Object.keys(altMap.en);
      const englishKey = allKeys.find(k => alt === altMap.en[k] || alt === altMap.fr[k]);
      if (englishKey) el.setAttribute('alt', altMap[lang][englishKey]);
    });
  }

  function translateCvLinks(lang) {
    const cvFile = meta[lang].cv;
    document.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href === 'cv.html' || href === 'cv-en.html' || href === 'cv-fr.html') {
        a.setAttribute('href', cvFile);
      }
    });
  }

  function translateBootMessages(lang) {
    const bootText = document.getElementById('bootText');
    const bootLog = document.getElementById('bootLog');
    if (bootText && bootText.textContent.trim().startsWith('Initializing')) bootText.innerHTML = (lang === 'fr' ? 'Initialisation du portfolio' : 'Initializing Portfolio') + '<span>...</span>';
    if (bootLog && bootLog.textContent.trim().startsWith('[WAIT]')) bootLog.textContent = lang === 'fr' ? '[ATTENTE] Chargement des modules...' : '[WAIT] Loading modules...';
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = meta[lang].title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta[lang].description);
    translateTextNodes(lang);
    translateAttributes(lang);
    translateCvLinks(lang);
    translateBootMessages(lang);
    langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.langSwitch === lang));
    localStorage.setItem('portfolio_lang', lang);
  }

  const saved = localStorage.getItem('portfolio_lang');
  const browserLang = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  const initial = saved || browserLang;
  langButtons.forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.langSwitch || 'en')));
  applyLanguage(initial);
})();
