// ===== PHASE 1 QUESTIONS DATABASE =====

const phase1Questions = [
  {
    question: "Wofür steht die Abkürzung TCP?",
    options: [
      "Transmission Control Protocol",
      "Transfer Control Protocol",
      "Transport Control Protocol",
      "Transmission Connection Protocol",
    ],
    correct: 0,
    explanation:
      "TCP steht für Transmission Control Protocol und ist ein verbindungsorientiertes Protokoll.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Was bedeutet die Abkürzung HTTP?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "Hyper Transfer Text Protocol",
      "High Text Transfer Protocol",
    ],
    correct: 0,
    explanation:
      "HTTP steht für HyperText Transfer Protocol und ist das Protokoll für die Übertragung von Webseiten.",
    category: "Web",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht die Abkürzung DNS?",
    options: [
      "Domain Name System",
      "Data Network Service",
      "Digital Network System",
      "Domain Network Service",
    ],
    correct: 0,
    explanation:
      "DNS steht für Domain Name System und übersetzt Domainnamen in IP-Adressen.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Was bedeutet die Abkürzung SSL?",
    options: [
      "Secure Sockets Layer",
      "Secure Socket Layer",
      "Security Socket Layer",
      "Secure System Layer",
    ],
    correct: 0,
    explanation:
      "SSL steht für Secure Sockets Layer und sorgt für verschlüsselte Kommunikation.",
    category: "Sicherheit",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht die Abkürzung FTP?",
    options: [
      "File Transfer Protocol",
      "Fast Transfer Protocol",
      "File Transport Protocol",
      "Fast Transport Protocol",
    ],
    correct: 0,
    explanation:
      "FTP steht für File Transfer Protocol und dient der Übertragung von Dateien.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Was bedeutet die Abkürzung IP?",
    options: [
      "Internet Protocol",
      "Internal Protocol",
      "Internet Packet",
      "Internal Packet",
    ],
    correct: 0,
    explanation:
      "IP steht für Internet Protocol und ist das grundlegende Protokoll für die Datenübertragung im Internet.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht die Abkürzung URL?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Locator",
      "Uniform Resource Link",
      "Universal Resource Link",
    ],
    correct: 0,
    explanation:
      "URL steht für Uniform Resource Locator und gibt die Adresse einer Webressource an.",
    category: "Web",
    difficulty: "leicht",
  },
  {
    question: "Was bedeutet die Abkürzung HTML?",
    options: [
      "HyperText Markup Language",
      "High Text Markup Language",
      "Hyper Transfer Markup Language",
      "High Transfer Markup Language",
    ],
    correct: 0,
    explanation:
      "HTML steht für HyperText Markup Language und ist die Standard-Auszeichnungssprache für Webseiten.",
    category: "Web",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht die Abkürzung CSS?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Cascading System Sheets",
      "Computer System Sheets",
    ],
    correct: 0,
    explanation:
      "CSS steht für Cascading Style Sheets und dient der Gestaltung von Webseiten.",
    category: "Web",
    difficulty: "leicht",
  },
  {
    question: "Was bedeutet die Abkürzung API?",
    options: [
      "Application Programming Interface",
      "Application Program Interface",
      "Advanced Programming Interface",
      "Advanced Program Interface",
    ],
    correct: 0,
    explanation:
      "API steht für Application Programming Interface und definiert Schnittstellen zwischen Programmen.",
    category: "Programmierung",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht die Abkürzung JSON?",
    options: [
      "JavaScript Object Notation",
      "Java Script Object Notation",
      "JavaScript Online Notation",
      "Java Script Online Notation",
    ],
    correct: 0,
    explanation:
      "JSON steht für JavaScript Object Notation und ist ein Datenaustauschformat.",
    category: "Programmierung",
    difficulty: "mittel",
  },
  {
    question: "Was bedeutet die Abkürzung SQL?",
    options: [
      "Structured Query Language",
      "Standard Query Language",
      "Structured Question Language",
      "Standard Question Language",
    ],
    correct: 0,
    explanation:
      "SQL steht für Structured Query Language und ist die Standardsprache für Datenbankabfragen.",
    category: "Datenbanken",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht die Abkürzung XML?",
    options: [
      "eXtensible Markup Language",
      "Extended Markup Language",
      "eXtensible Model Language",
      "Extended Model Language",
    ],
    correct: 0,
    explanation:
      "XML steht für eXtensible Markup Language und ist eine erweiterbare Auszeichnungssprache.",
    category: "Programmierung",
    difficulty: "mittel",
  },
  {
    question: "Was bedeutet die Abkürzung PHP?",
    options: [
      "PHP: Hypertext Preprocessor",
      "Personal Home Page",
      "Professional Hypertext Processor",
      "Personal Hypertext Processor",
    ],
    correct: 0,
    explanation:
      "PHP steht für PHP: Hypertext Preprocessor und ist eine serverseitige Skriptsprache.",
    category: "Programmierung",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht die Abkürzung AJAX?",
    options: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XML",
      "Asynchronous Java and XML",
      "Advanced Java and XML",
    ],
    correct: 0,
    explanation:
      "AJAX steht für Asynchronous JavaScript and XML und ermöglicht asynchrone Datenübertragung.",
    category: "Web",
    difficulty: "schwer",
  },
  {
    question: "Was bedeutet die Abkürzung REST?",
    options: [
      "Representational State Transfer",
      "Remote State Transfer",
      "Representational System Transfer",
      "Remote System Transfer",
    ],
    correct: 0,
    explanation:
      "REST steht für Representational State Transfer und ist ein Architekturstil für Webdienste.",
    category: "Web",
    difficulty: "schwer",
  },
  {
    question: "Wofür steht die Abkürzung MVC?",
    options: [
      "Model View Controller",
      "Model View Component",
      "Model Visual Controller",
      "Model Visual Component",
    ],
    correct: 0,
    explanation:
      "MVC steht für Model View Controller und ist ein Architekturmuster für Software.",
    category: "Programmierung",
    difficulty: "schwer",
  },
  {
    question: "Was bedeutet die Abkürzung IDE?",
    options: [
      "Integrated Development Environment",
      "Internal Development Environment",
      "Integrated Design Environment",
      "Internal Design Environment",
    ],
    correct: 0,
    explanation:
      "IDE steht für Integrated Development Environment und ist eine integrierte Entwicklungsumgebung.",
    category: "Tools",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht die Abkürzung SDK?",
    options: [
      "Software Development Kit",
      "System Development Kit",
      "Software Design Kit",
      "System Design Kit",
    ],
    correct: 0,
    explanation:
      "SDK steht für Software Development Kit und enthält Werkzeuge für die Softwareentwicklung.",
    category: "Tools",
    difficulty: "mittel",
  },
  {
    question: "Was bedeutet die Abkürzung DHCP?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Control Protocol",
      "Dynamic Host Connection Protocol",
      "Dynamic Host Communication Protocol",
    ],
    correct: 0,
    explanation:
      "DHCP steht für Dynamic Host Configuration Protocol und dient der automatischen IP-Adressvergabe in Netzwerken.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
];

// ===== PHASE 2 QUESTIONS DATABASE =====

const phase2Questions = [
  {
    question: "Wozu dient TOM (Technische und Organisatorische Maßnahmen)?",
    options: [
      "Datenschutz und IT-Sicherheit gewährleisten",
      "Nur technische Systeme schützen",
      "Organisatorische Prozesse optimieren",
      "Compliance-Anforderungen erfüllen",
    ],
    correct: [0, 3], // Multiple correct answers
    explanation:
      "TOM dient sowohl dem Datenschutz und der IT-Sicherheit als auch der Erfüllung von Compliance-Anforderungen.",
    category: "Sicherheit",
    difficulty: "schwer",
  },
  {
    question: "Welche Vorteile bietet Virtualisierung?",
    options: [
      "Bessere Ressourcenauslastung",
      "Reduzierte Hardware-Kosten",
      "Einfachere Backup-Strategien",
      "Nur bessere Performance",
    ],
    correct: [0, 1, 2],
    explanation:
      "Virtualisierung bietet bessere Ressourcenauslastung, reduzierte Hardware-Kosten und einfachere Backup-Strategien.",
    category: "Infrastruktur",
    difficulty: "mittel",
  },
  {
    question:
      "Was ist der Zweck von CI/CD (Continuous Integration/Continuous Deployment)?",
    options: [
      "Automatisierte Softwareentwicklung",
      "Schnellere Markteinführung",
      "Reduzierung von Fehlern",
      "Nur Code-Tests automatisieren",
    ],
    correct: [0, 1, 2],
    explanation:
      "CI/CD ermöglicht automatisierte Softwareentwicklung, schnellere Markteinführung und Reduzierung von Fehlern.",
    category: "Entwicklung",
    difficulty: "schwer",
  },
  {
    question: "Welche Eigenschaften hat Cloud Computing?",
    options: [
      "Skalierbarkeit",
      "Pay-per-Use Modell",
      "Ortsunabhängiger Zugriff",
      "Nur bessere Performance",
    ],
    correct: [0, 1, 2],
    explanation:
      "Cloud Computing bietet Skalierbarkeit, ein Pay-per-Use Modell und ortsunabhängigen Zugriff.",
    category: "Cloud",
    difficulty: "mittel",
  },
  {
    question: "Was sind Vorteile von Microservices?",
    options: [
      "Unabhängige Entwicklung",
      "Bessere Skalierbarkeit",
      "Einfachere Wartung",
      "Nur bessere Performance",
    ],
    correct: [0, 1, 2],
    explanation:
      "Microservices ermöglichen unabhängige Entwicklung, bessere Skalierbarkeit und einfachere Wartung.",
    category: "Architektur",
    difficulty: "schwer",
  },
  {
    question: "Welche Sicherheitsmaßnahmen sind wichtig für Webanwendungen?",
    options: [
      "HTTPS-Verschlüsselung",
      "Input-Validierung",
      "Regelmäßige Updates",
      "Nur Firewall-Schutz",
    ],
    correct: [0, 1, 2],
    explanation:
      "Wichtige Sicherheitsmaßnahmen sind HTTPS-Verschlüsselung, Input-Validierung und regelmäßige Updates.",
    category: "Sicherheit",
    difficulty: "mittel",
  },
  {
    question: "Was sind Vorteile von Containerisierung (Docker)?",
    options: [
      "Konsistente Umgebungen",
      "Einfache Deployment",
      "Ressourcen-Effizienz",
      "Nur bessere Isolation",
    ],
    correct: [0, 1, 2],
    explanation:
      "Containerisierung bietet konsistente Umgebungen, einfaches Deployment und Ressourcen-Effizienz.",
    category: "DevOps",
    difficulty: "mittel",
  },
  {
    question: "Welche Datenbanktypen gibt es?",
    options: [
      "Relationale Datenbanken",
      "NoSQL-Datenbanken",
      "In-Memory-Datenbanken",
      "Nur SQL-Datenbanken",
    ],
    correct: [0, 1, 2],
    explanation:
      "Es gibt relationale Datenbanken, NoSQL-Datenbanken und In-Memory-Datenbanken.",
    category: "Datenbanken",
    difficulty: "mittel",
  },
  {
    question: "Was sind Best Practices für API-Design?",
    options: [
      "RESTful Prinzipien",
      "Konsistente Namenskonventionen",
      "Umfassende Dokumentation",
      "Nur schnelle Antwortzeiten",
    ],
    correct: [0, 1, 2],
    explanation:
      "Best Practices sind RESTful Prinzipien, konsistente Namenskonventionen und umfassende Dokumentation.",
    category: "API",
    difficulty: "schwer",
  },
  {
    question: "Welche Monitoring-Tools sind wichtig?",
    options: [
      "Performance-Monitoring",
      "Log-Analyse",
      "Alerting-Systeme",
      "Nur CPU-Monitoring",
    ],
    correct: [0, 1, 2],
    explanation:
      "Wichtige Monitoring-Tools sind Performance-Monitoring, Log-Analyse und Alerting-Systeme.",
    category: "Monitoring",
    difficulty: "mittel",
  },
  {
    question: "Was sind Vorteile von Agile Development?",
    options: [
      "Flexibilität bei Änderungen",
      "Bessere Kundenkommunikation",
      "Schnellere Lieferung",
      "Nur bessere Planung",
    ],
    correct: [0, 1, 2],
    explanation:
      "Agile Development bietet Flexibilität bei Änderungen, bessere Kundenkommunikation und schnellere Lieferung.",
    category: "Methoden",
    difficulty: "mittel",
  },
  {
    question: "Welche Backup-Strategien sind wichtig?",
    options: [
      "Regelmäßige Backups",
      "Verschiedene Standorte",
      "Backup-Tests",
      "Nur lokale Backups",
    ],
    correct: [0, 1, 2],
    explanation:
      "Wichtige Backup-Strategien sind regelmäßige Backups, verschiedene Standorte und Backup-Tests.",
    category: "Backup",
    difficulty: "leicht",
  },
  {
    question: "Was sind Vorteile von Open Source Software?",
    options: [
      "Kosteneinsparungen",
      "Transparenz des Codes",
      "Community-Support",
      "Nur bessere Sicherheit",
    ],
    correct: [0, 1, 2],
    explanation:
      "Open Source Software bietet Kosteneinsparungen, Transparenz des Codes und Community-Support.",
    category: "Software",
    difficulty: "leicht",
  },
  {
    question: "Welche Netzwerk-Sicherheitsmaßnahmen sind wichtig?",
    options: [
      "Firewall-Konfiguration",
      "VPN-Zugang",
      "Regelmäßige Audits",
      "Nur Passwort-Schutz",
    ],
    correct: [0, 1, 2],
    explanation:
      "Wichtige Netzwerk-Sicherheitsmaßnahmen sind Firewall-Konfiguration, VPN-Zugang und regelmäßige Audits.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Was sind Vorteile von Automatisierung?",
    options: [
      "Reduzierung von Fehlern",
      "Zeitersparnis",
      "Konsistente Ergebnisse",
      "Nur bessere Performance",
    ],
    correct: [0, 1, 2],
    explanation:
      "Automatisierung bietet Reduzierung von Fehlern, Zeitersparnis und konsistente Ergebnisse.",
    category: "Automatisierung",
    difficulty: "mittel",
  },
];

// Export für andere Module
if (typeof module !== "undefined" && module.exports) {
  module.exports = { phase1Questions, phase2Questions };
}
