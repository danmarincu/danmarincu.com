const EMAIL_TO = "dan@danmarincu.com";

/** @type {Record<string, Record<string, string>>} */
const I18N = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",

    "hero.eyebrow": "AWS Serverless & DevOps Engineer",
    "hero.title": "Building secure and scalable serverless solutions on AWS",
    "hero.subtitle":
      "Freelancer focused on Lambda, API Gateway, DynamoDB, Step Functions, EventBridge, IaC, and CI/CD.",
    "hero.ctaPrimary": "Let’s talk",
    "hero.ctaSecondary": "See projects",
    "hero.cardRole": "AWS Serverless & DevOps • Freelancer",
    "hero.meta.locationLabel": "Location",
    "hero.meta.locationValue": "Romania (EU)",
    "hero.meta.focusLabel": "Focus",
    "hero.meta.focusValue": "AWS Serverless, IaC, CI/CD",
    "hero.meta.emailLabel": "Email",
    "hero.meta.linkedinLabel": "LinkedIn",
    "hero.cardCta": "Contact",
    "hero.cardCta2": "About me",

    "about.title": "About",
    "about.subtitle": "AWS serverless enthusiast with a strong DevOps and security mindset.",
    "about.profileTitle": "Profile",
    "about.profileBody":
      "I help teams ship cloud-native backends on AWS using serverless-first architectures, Infrastructure as Code, and reliable CI/CD pipelines. I enjoy building systems that are maintainable, observable, and secure by default.",
    "about.profileBody2":
      "Recent work includes security reviews and adoption support for GenAI services (e.g., Amazon Bedrock), plus multi-cloud integrations (Azure + AWS).",
    "about.skillsTitle": "Key skills",
    "about.skills1": "AWS Serverless: Lambda, API Gateway, DynamoDB, Step Functions, EventBridge",
    "about.skills2": "Infrastructure as Code: AWS CDK (TypeScript), Terraform / Terraform Cloud",
    "about.skills3": "CI/CD: GitHub Actions, Azure DevOps",
    "about.skills4": "Languages: Python, Node.js",
    "about.skills5": "Domains: Telco / 5G, Automotive",
    "about.certsTitle": "AWS certifications",
    "about.certs1": "DevOps Engineer – Professional",
    "about.certs2": "SysOps Administrator – Associate",
    "about.certs3": "Developer – Associate",
    "about.certs4": "AI Practitioner",
    "about.experienceTitle": "Recent roles",
    "about.exp1": "AWS DevOps Engineer — Omnisource (Contractor), 2025–present",
    "about.exp2": "Cloud Application Architect — AWS, 2020–2025",
    "about.exp3": "Test Automation Engineer — Intel, 2019–2020",
    "about.valuesTitle": "How I work",
    "about.values1": "Pragmatic architecture & clear tradeoffs",
    "about.values2": "Security & least privilege by design",
    "about.values3": "Automation-first mindset",

    "solutions.title": "Projects",
    "solutions.subtitle": "A selection of real-world work across AWS security, serverless, CI/CD, and automation.",

    "solutions.p1Title": "AWS security enablement for GenAI adoption",
    "solutions.p1Body": "Security team work supporting reviews and safe adoption of new AWS services in the GenAI space.",
    "solutions.p1b1": "Security reviews for Amazon Bedrock / Agents prior to org-wide adoption",
    "solutions.p1b2": "Guardrails, IAM patterns, and deployment guidance via IaC",
    "solutions.p1b3": "Collaboration with stakeholders across AWS and Azure integrations",

    "solutions.p2Title": "Multi-cloud integration (Azure + AWS)",
    "solutions.p2Body":
      "Integration support for enterprise environments spanning identity providers and API management patterns.",
    "solutions.p2b1": "Identity provider integrations and cross-cloud access patterns",
    "solutions.p2b2": "API management integrations, including pathways to GenAI services",
    "solutions.p2b3": "Operationally safe rollout with CI/CD and review gates",

    "solutions.p3Title": "Telco / 5G test automation on AWS",
    "solutions.p3Body":
      "Architected cloud solutions and DevOps practices for telco customers running testing and 5G workloads on AWS.",
    "solutions.p3b1": "Infrastructure as Code + repeatable environments for test systems",
    "solutions.p3b2": "CI/CD/CT practices to improve release confidence and speed",
    "solutions.p3b3": "Integrations with test automation frameworks and network simulators",

    "solutions.p4Title": "Data core ops automation & observability",
    "solutions.p4Body":
      "Automation work to improve operational visibility and incident response in telco packet core environments.",
    "solutions.p4b1": "Automated health checks and data collection for operational insights",
    "solutions.p4b2": "Python-based analysis and reporting workflows",
    "solutions.p4b3": "Dashboards and KPI visualization with Grafana / Splunk",

    "solutions.p5Title": "Test automation for modem validation",
    "solutions.p5Body": "Developed Python automation to validate devices and integrate with network simulator APIs.",
    "solutions.p5b1": "Automation scripts for repeatable test execution",
    "solutions.p5b2": "Integration with simulator APIs (e.g., Anritsu, Rohde & Schwarz)",
    "solutions.p5b3": "Extending automation frameworks to increase coverage",

    "solutions.p6Title": "Reusable IaC + CI/CD delivery templates",
    "solutions.p6Body": "Built repeatable delivery patterns for teams to ship infrastructure and workloads safely.",
    "solutions.p6b1": "AWS CDK (TypeScript) and Terraform patterns for consistent environments",
    "solutions.p6b2": "Pipelines with quality gates (GitHub Actions / Azure DevOps)",
    "solutions.p6b3": "Deployment safety: approvals, promotion flows, and rollbacks",

    "contact.title": "Contact",
    "contact.subtitle": "Tell me about your project. I typically reply within 24–48 hours.",
    "contact.directTitle": "Direct",
    "contact.directBody": "Email works best. If you prefer, you can also reach out on LinkedIn.",
    "contact.emailLabel": "Email:",
    "contact.linkedinLabel": "LinkedIn:",
    "contact.hint": "Prefer a quick intro call? Send your timezone + availability.",
    "contact.formTitle": "Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send",
    "contact.form.note": "This opens your email client (no data is stored on this website).",

    "footer.top": "Back to top",
  },

  ro: {
    "nav.home": "Acasă",
    "nav.about": "Despre",
    "nav.solutions": "Servicii",
    "nav.contact": "Contact",

    "hero.eyebrow": "Inginer AWS Serverless & DevOps",
    "hero.title": "Construire de soluții serverless sigure și scalabile pe AWS",
    "hero.subtitle":
      "Freelancer axat pe Lambda, API Gateway, DynamoDB, Step Functions, EventBridge, IaC și CI/CD.",
    "hero.ctaPrimary": "Hai să discutăm",
    "hero.ctaSecondary": "Vezi proiectele",
    "hero.cardRole": "AWS Serverless & DevOps • Freelancer",
    "hero.meta.locationLabel": "Locație",
    "hero.meta.locationValue": "România (UE)",
    "hero.meta.focusLabel": "Focus",
    "hero.meta.focusValue": "AWS Serverless, IaC, CI/CD",
    "hero.meta.emailLabel": "Email",
    "hero.meta.linkedinLabel": "LinkedIn",
    "hero.cardCta": "Contact",
    "hero.cardCta2": "Despre mine",

    "about.title": "Despre",
    "about.subtitle": "Pasionat de AWS serverless, cu mentalitate DevOps și focus pe securitate.",
    "about.profileTitle": "Profil",
    "about.profileBody":
      "Ajut echipele să livreze backend-uri cloud-native pe AWS folosind arhitecturi serverless-first, Infrastructure as Code și pipeline-uri CI/CD fiabile. Îmi place să construiesc sisteme ușor de întreținut, observabile și sigure by default.",
    "about.profileBody2":
      "Recent am lucrat la security reviews și suport de adopție pentru servicii GenAI (ex.: Amazon Bedrock), plus integrări multi-cloud (Azure + AWS).",
    "about.skillsTitle": "Competențe cheie",
    "about.skills1": "AWS Serverless: Lambda, API Gateway, DynamoDB, Step Functions, EventBridge",
    "about.skills2": "Infrastructure as Code: AWS CDK (TypeScript), Terraform / Terraform Cloud",
    "about.skills3": "CI/CD: GitHub Actions, Azure DevOps",
    "about.skills4": "Limbaje: Python, Node.js",
    "about.skills5": "Domenii: Telco / 5G, Automotive",
    "about.certsTitle": "Certificări AWS",
    "about.certs1": "DevOps Engineer – Professional",
    "about.certs2": "SysOps Administrator – Associate",
    "about.certs3": "Developer – Associate",
    "about.certs4": "AI Practitioner",
    "about.experienceTitle": "Roluri recente",
    "about.exp1": "AWS DevOps Engineer — Omnisource (Contractor), 2025–prezent",
    "about.exp2": "Cloud Application Architect — AWS, 2020–2025",
    "about.exp3": "Test Automation Engineer — Intel, 2019–2020",
    "about.valuesTitle": "Mod de lucru",
    "about.values1": "Arhitectură pragmatică & tradeoff-uri clare",
    "about.values2": "Securitate & least privilege by design",
    "about.values3": "Mentalitate automation-first",

    "solutions.title": "Proiecte",
    "solutions.subtitle": "O selecție de activități reale din zona AWS security, serverless, CI/CD și automatizare.",

    "solutions.p1Title": "Enablement de securitate pentru adopția GenAI",
    "solutions.p1Body":
      "Activitate în echipă de securitate pentru review-uri și adopție sigură a unor servicii AWS noi din zona GenAI.",
    "solutions.p1b1": "Security reviews pentru Amazon Bedrock / Agents înainte de adopție la scară",
    "solutions.p1b2": "Guardrails, pattern-uri IAM și ghidaj de deployment prin IaC",
    "solutions.p1b3": "Colaborare cu stakeholderi pentru integrări AWS + Azure",

    "solutions.p2Title": "Integrare multi-cloud (Azure + AWS)",
    "solutions.p2Body":
      "Suport de integrare pentru medii enterprise, incluzând identity providers și pattern-uri de API management.",
    "solutions.p2b1": "Integrări cu identity provider și pattern-uri de acces cross-cloud",
    "solutions.p2b2": "Integrări cu API management, inclusiv trasee către servicii GenAI",
    "solutions.p2b3": "Rollout sigur operațional prin CI/CD și review gates",

    "solutions.p3Title": "Test automation Telco / 5G pe AWS",
    "solutions.p3Body":
      "Arhitectură cloud și practici DevOps pentru clienți telco care rulează sisteme de testare și workload-uri 5G pe AWS.",
    "solutions.p3b1": "Infrastructure as Code + medii repetabile pentru sisteme de test",
    "solutions.p3b2": "Practici CI/CD/CT pentru viteză și încredere în release",
    "solutions.p3b3": "Integrări cu framework-uri de test automation și simulatoare de rețea",

    "solutions.p4Title": "Automatizare operațională & observabilitate (data core)",
    "solutions.p4Body":
      "Automatizare pentru vizibilitate operațională și răspuns mai rapid la incidente în medii telco packet core.",
    "solutions.p4b1": "Health checks automate și colectare de date pentru insight-uri operaționale",
    "solutions.p4b2": "Analiză și raportare cu workflow-uri bazate pe Python",
    "solutions.p4b3": "Dashboard-uri și vizualizare KPI în Grafana / Splunk",

    "solutions.p5Title": "Test automation pentru validare modem",
    "solutions.p5Body":
      "Dezvoltare de automatizări în Python pentru validare dispozitive și integrare cu API-uri de simulatoare de rețea.",
    "solutions.p5b1": "Scripturi de automatizare pentru rulare repetabilă a testelor",
    "solutions.p5b2": "Integrare cu API-uri de simulatoare (ex.: Anritsu, Rohde & Schwarz)",
    "solutions.p5b3": "Extinderea framework-urilor de automatizare pentru acoperire mai bună",

    "solutions.p6Title": "Template-uri reutilizabile IaC + CI/CD",
    "solutions.p6Body":
      "Pattern-uri repetabile pentru echipe care vor să livreze infrastructură și workload-uri în mod sigur.",
    "solutions.p6b1": "Pattern-uri AWS CDK (TypeScript) și Terraform pentru medii consistente",
    "solutions.p6b2": "Pipeline-uri cu quality gates (GitHub Actions / Azure DevOps)",
    "solutions.p6b3": "Siguranță la deployment: approvals, promotion flows și rollbacks",

    "contact.title": "Contact",
    "contact.subtitle": "Spune-mi despre proiectul tău. De obicei răspund în 24–48 de ore.",
    "contact.directTitle": "Direct",
    "contact.directBody": "Cel mai simplu e pe email. Alternativ, mă poți contacta pe LinkedIn.",
    "contact.emailLabel": "Email:",
    "contact.linkedinLabel": "LinkedIn:",
    "contact.hint": "Preferi un call scurt? Trimite timezone-ul + disponibilitatea.",
    "contact.formTitle": "Mesaj",
    "contact.form.name": "Nume",
    "contact.form.email": "Email",
    "contact.form.subject": "Subiect",
    "contact.form.message": "Mesaj",
    "contact.form.send": "Trimite",
    "contact.form.note": "Se deschide clientul tău de email (site-ul nu stochează date).",

    "footer.top": "Sus",
  },
};

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.addEventListener("click", (e) => {
    const t = /** @type {HTMLElement} */ (e.target);
    if (t?.tagName === "A") {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = dict[key];
    if (typeof text === "string") el.textContent = text;
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function setupLanguageToggle() {
  const buttons = Array.from(document.querySelectorAll(".lang__btn"));
  if (buttons.length === 0) return;

  const stored = localStorage.getItem("lang");
  const initial = stored === "ro" || stored === "en" ? stored : "en";
  applyLanguage(initial);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang !== "en" && lang !== "ro") return;
      localStorage.setItem("lang", lang);
      applyLanguage(lang);
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(/** @type {HTMLFormElement} */ (form));
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const subject = String(fd.get("subject") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const fullSubject = subject ? `[danmarincu.com] ${subject}` : "[danmarincu.com] New message";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
      "",
      "— sent from danmarincu.com",
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(EMAIL_TO)}?subject=${encodeURIComponent(
      fullSubject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

setYear();
setupMobileNav();
setupLanguageToggle();
setupContactForm();


