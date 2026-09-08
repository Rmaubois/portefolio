// ==========================================
// 1. MODE SOMBRE (AVEC MÉMOIRE)
// ==========================================
const toggleButton = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleButton) toggleButton.textContent = '☀️';
}

toggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ==========================================
// 2. TRADUCTION DYNAMIQUE FR / EN
// ==========================================
const translations = {
    fr: {
        navAbout: "À propos",
        navExp: "Expérience",
        navProjects: "Projets",
        navSkills: "Compétences",
        navContact: "Contact",
        heroSubtitle: "Étudiant en Bachelor Informatique — Développeur & DevOps",
        titleAbout: "À propos",
        textAbout: "Après l'obtention d'un Bac général (NSI, SI et Mathématiques) au Lycée LaFayette, j'ai choisi de me consacrer pleinement au numérique. Actuellement en Bachelor Informatique à l'école <strong>IPSSI Paris</strong> (2025-2028), je développe une double expertise en administration réseau, cybersécurité, automatisation DevOps et développement Fullstack.",
        titleExp: "Expériences",
        exp1Date: "Mai 2026 - Juillet 2026",
        exp1Title: "Stagiaire Systèmes & Réseaux / DevOps",
        exp1Desc: "• Implémentation d'un hôte bastion (Jump-host) pour sécuriser et centraliser les accès administratifs.<br>• Automatisation des déploiements d'infrastructures avec des playbooks Ansible (IaC).<br>• Gestion de la résilience et sauvegardes DRP (snapshots Proxmox et sauvegardes externalisées).<br>• Supervision et centralisation des logs de sécurité via ELK/Graylog pour la détection d'intrusions.<br>• Intervention d'urgence en gestion de crise cyber (collectivité territoriale) et rédaction de documentation technique.",
        exp2Date: "Août 2026 - Octobre 2026",
        exp2Title: "Employé libre-service polyvalent",
        exp2Desc: "Tenue de caisse, réassort, contrôle des stocks/DLC et gestion du point relais. Développement du sens du service client et du travail en équipe sous flux tendu.",
        exp3Date: "Depuis Décembre 2025",
        exp3Title: "Mannequin",
        exp3Desc: "Shootings photos (MJM Design) et castings pour marques de luxe (Celine, Issey Miyake).",
        titleProjects: "Projets",
        proj1Date: "Février 2026",
        proj1Title: "Projet Étudiant : Infrastructure DevOps & Sécurité",
        proj1Desc: "• Durcissement Active Directory (double rotation KRBTGT contre les attaques Golden Ticket).<br>• Configuration de VPN d'accès distant (SSL/IPsec) et diagnostic télécom/VoIP (Trunk SIP).<br>• Staging et intégration physique de baies de stockage, serveurs et support Helpdesk via NinjaOne.",
        proj2Date: "Novembre 2025",
        proj2Title: "Projet Étudiant : Application Web Multi-profils",
        proj2Desc: "• Lead technique et organisation du workflow de l'équipe (Méthodes Agiles).<br>• Modélisation et optimisation de bases de données SQL / phpMyAdmin.<br>• Gestion des rôles IAM (SuperAdmin, Écoles, Entreprises) et audit QA/UX (sécurité des upload, contrôle d'accès).",
        titleSkills: "Compétences techniques",
        skillsContent: `<p><strong>Développement :</strong> C, C++, Python, PHP, JavaScript, HTML5 / CSS3, SQL</p>
                        <p><strong>DevOps & Système :</strong> Ansible (IaC), Linux (Debian, Ubuntu), Windows Server (2016/2019), Active Directory</p>
                        <p><strong>Virtualisation & Cloud :</strong> Proxmox, VMware, Hyper-V, VirtualBox</p>
                        <p><strong>Réseaux & Sécurité :</strong> Cisco, DHCP/DNS, VPN (SSL/IPsec), ELK / Graylog, Bastion, NinjaOne</p>
                        <p><strong>Outils :</strong> Git / GitHub, Visual Studio, Teams</p>
                        <p><strong>Langues :</strong> Français (Maternelle), Anglais (B2/C1)</p>`,
        titleContact: "Contact",
        lblPhone: "Téléphone :",
        lblLocation: "Localisation :"
    },
    en: {
        navAbout: "About",
        navExp: "Experience",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        heroSubtitle: "Computer Science Bachelor Student — Developer & DevOps",
        titleAbout: "About Me",
        textAbout: "After obtaining a general High School Diploma (Computer Science, Engineering & Math) at Lycée LaFayette, I chose to fully focus on IT. Currently pursuing a Bachelor's Degree in Computer Science at <strong>IPSSI Paris</strong> (2025-2028), I am building dual expertise in network administration, cybersecurity, DevOps automation, and Fullstack development.",
        titleExp: "Work Experience",
        exp1Date: "May 2026 - July 2026",
        exp1Title: "Systems & Networks / DevOps Intern",
        exp1Desc: "• Implementation of a Jump-host bastion to secure and centralize administrative access.<br>• Infrastructure deployment automation using Ansible playbooks (IaC).<br>• Disaster Recovery Plan (DRP) management (Proxmox snapshots and offsite backups).<br>• Monitoring and security log centralization via ELK/Graylog for intrusion detection.<br>• Emergency response during a cyber incident (local municipality) and technical documentation writing.",
        exp2Date: "August 2026 - October 2026",
        exp2Title: "Retail Store Associate",
        exp2Desc: "Checkout operations, restocking, inventory management, and parcel hub handling. Strong focus on customer service and working efficiently under pressure.",
        exp3Date: "Since December 2025",
        exp3Title: "Model",
        exp3Desc: "Photoshoots (MJM Design) and castings for luxury fashion brands (Celine, Issey Miyake).",
        titleProjects: "Academic Projects",
        proj1Date: "February 2026",
        proj1Title: "Student Project: DevOps Infrastructure & Security",
        proj1Desc: "• Active Directory hardening (KRBTGT double rotation against Golden Ticket attacks).<br>• Remote access VPN configuration (SSL/IPsec) and telecom/VoIP troubleshooting (SIP Trunk).<br>• Physical staging and integration of servers, storage arrays, and Helpdesk support via NinjaOne.",
        proj2Date: "November 2025",
        proj2Title: "Student Project: Multi-Role Web Application",
        proj2Desc: "• Tech Lead overseeing team workflows (Agile methodology).<br>• Relational database modeling and optimization via SQL / phpMyAdmin.<br>• IAM role management (SuperAdmin, Schools, Companies) and QA/UX security audit (file uploads, access control).",
        titleSkills: "Technical Skills",
        skillsContent: `<p><strong>Development:</strong> C, C++, Python, PHP, JavaScript, HTML5 / CSS3, SQL</p>
                        <p><strong>DevOps & Systems:</strong> Ansible (IaC), Linux (Debian, Ubuntu), Windows Server (2016/2019), Active Directory</p>
                        <p><strong>Virtualization & Cloud:</strong> Proxmox, VMware, Hyper-V, VirtualBox</p>
                        <p><strong>Networking & Security:</strong> Cisco, DHCP/DNS, VPN (SSL/IPsec), ELK / Graylog, Bastion, NinjaOne</p>
                        <p><strong>Tools:</strong> Git / GitHub, Visual Studio, Teams</p>
                        <p><strong>Languages:</strong> French (Native), English (B2/C1)</p>`,
        titleContact: "Contact",
        lblPhone: "Phone:",
        lblLocation: "Location:"
    }
};

const btnFr = document.getElementById('btn-fr');
const btnEn = document.getElementById('btn-en');

function setLanguage(lang) {
    const t = translations[lang];

    // Navigation
    document.getElementById('nav-about').textContent = t.navAbout;
    document.getElementById('nav-exp').textContent = t.navExp;
    document.getElementById('nav-projects').textContent = t.navProjects;
    document.getElementById('nav-skills').textContent = t.navSkills;
    document.getElementById('nav-contact').textContent = t.navContact;

    // Header & About
    document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
    document.getElementById('title-about').textContent = t.titleAbout;
    document.getElementById('text-about').innerHTML = t.textAbout;

    // Expériences
    document.getElementById('title-exp').textContent = t.titleExp;
    document.getElementById('exp1-date').textContent = t.exp1Date;
    document.getElementById('exp1-title').textContent = t.exp1Title;
    document.getElementById('exp1-desc').innerHTML = t.exp1Desc;
    document.getElementById('exp2-date').textContent = t.exp2Date;
    document.getElementById('exp2-title').textContent = t.exp2Title;
    document.getElementById('exp2-desc').textContent = t.exp2Desc;
    document.getElementById('exp3-date').textContent = t.exp3Date;
    document.getElementById('exp3-title').textContent = t.exp3Title;
    document.getElementById('exp3-desc').textContent = t.exp3Desc;

    // Projets
    document.getElementById('title-projects').textContent = t.titleProjects;
    document.getElementById('proj1-date').textContent = t.proj1Date;
    document.getElementById('proj1-title').textContent = t.proj1Title;
    document.getElementById('proj1-desc').innerHTML = t.proj1Desc;
    document.getElementById('proj2-date').textContent = t.proj2Date;
    document.getElementById('proj2-title').textContent = t.proj2Title;
    document.getElementById('proj2-desc').innerHTML = t.proj2Desc;

    // Compétences & Contact
    document.getElementById('title-skills').textContent = t.titleSkills;
    document.getElementById('skills-content').innerHTML = t.skillsContent;
    document.getElementById('title-contact').textContent = t.titleContact;
    document.getElementById('lbl-phone').textContent = t.lblPhone;
    document.getElementById('lbl-location').textContent = t.lblLocation;

    // Toggle des styles FR / EN
    if (lang === 'en') {
        btnEn.classList.add('active-lang');
        btnFr.classList.remove('active-lang');
    } else {
        btnFr.classList.add('active-lang');
        btnEn.classList.remove('active-lang');
    }
}

btnEn?.addEventListener('click', () => setLanguage('en'));
btnFr?.addEventListener('click', () => setLanguage('fr'));