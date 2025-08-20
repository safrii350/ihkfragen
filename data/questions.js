// ===== PHASE 1 QUESTIONS DATABASE =====
const phase1Questions = [
  {
    question: "Wofür steht TCP?",
    options: [
      "Transmission Control Protocol",
      "Transfer Control Protocol",
      "Transport Control Protocol",
      "Transmission Communication Protocol",
    ],
    correct: 0,
    explanation:
      "TCP (Transmission Control Protocol) ist ein verbindungsorientiertes Protokoll der Transport-Schicht.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht HTTP?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "Hyper Transfer Text Protocol",
      "High Text Transfer Protocol",
    ],
    correct: 0,
    explanation:
      "HTTP (HyperText Transfer Protocol) ist das Protokoll für die Übertragung von Daten im World Wide Web.",
    category: "Web",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht DNS?",
    options: [
      "Domain Name System",
      "Data Network Service",
      "Digital Network System",
      "Domain Network Service",
    ],
    correct: 0,
    explanation:
      "DNS (Domain Name System) übersetzt Domainnamen in IP-Adressen.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht SSL?",
    options: [
      "Secure Sockets Layer",
      "Secure Socket Layer",
      "Security Socket Layer",
      "Secure System Layer",
    ],
    correct: 0,
    explanation:
      "SSL (Secure Sockets Layer) ist ein Protokoll zur sicheren Datenübertragung im Internet.",
    category: "Sicherheit",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht FTP?",
    options: [
      "File Transfer Protocol",
      "Fast Transfer Protocol",
      "File Transport Protocol",
      "Fast Transport Protocol",
    ],
    correct: 0,
    explanation:
      "FTP (File Transfer Protocol) ist ein Protokoll zur Dateiübertragung zwischen Systemen.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht DHCP?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Control Protocol",
      "Dynamic Host Communication Protocol",
      "Dynamic Host Connection Protocol",
    ],
    correct: 0,
    explanation:
      "DHCP (Dynamic Host Configuration Protocol) vergibt automatisch IP-Adressen an Netzwerkgeräte.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht VPN?",
    options: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Virtual Personal Network",
      "Virtual Protected Network",
    ],
    correct: 0,
    explanation:
      "VPN (Virtual Private Network) ermöglicht sichere Verbindungen über öffentliche Netzwerke.",
    category: "Sicherheit",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht HTML?",
    options: [
      "HyperText Markup Language",
      "High Text Markup Language",
      "HyperText Markup Link",
      "High Text Markup Link",
    ],
    correct: 0,
    explanation:
      "HTML (HyperText Markup Language) ist die Standard-Auszeichnungssprache für Webseiten.",
    category: "Web",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht CSS?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Cascading System Sheets",
      "Computer System Sheets",
    ],
    correct: 0,
    explanation:
      "CSS (Cascading Style Sheets) definiert das Layout und Design von Webseiten.",
    category: "Web",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht SQL?",
    options: [
      "Structured Query Language",
      "Standard Query Language",
      "Structured Question Language",
      "Standard Question Language",
    ],
    correct: 0,
    explanation:
      "SQL (Structured Query Language) ist eine Standardsprache für Datenbankabfragen.",
    category: "Datenbanken",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht API?",
    options: [
      "Application Programming Interface",
      "Application Program Interface",
      "Application Programming Integration",
      "Application Program Integration",
    ],
    correct: 0,
    explanation:
      "API (Application Programming Interface) definiert Schnittstellen zwischen Softwarekomponenten.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht JSON?",
    options: [
      "JavaScript Object Notation",
      "Java Object Notation",
      "JavaScript Object Network",
      "Java Object Network",
    ],
    correct: 0,
    explanation:
      "JSON (JavaScript Object Notation) ist ein leichtgewichtiges Datenaustauschformat.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht XML?",
    options: [
      "eXtensible Markup Language",
      "eXtended Markup Language",
      "eXtensible Markup Link",
      "eXtended Markup Link",
    ],
    correct: 0,
    explanation:
      "XML (eXtensible Markup Language) ist eine erweiterbare Auszeichnungssprache.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht RAM?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Random Access Module",
      "Read Access Module",
    ],
    correct: 0,
    explanation:
      "RAM (Random Access Memory) ist der Arbeitsspeicher eines Computers.",
    category: "Hardware",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht CPU?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Program Unit",
      "Computer Program Unit",
    ],
    correct: 0,
    explanation:
      "CPU (Central Processing Unit) ist die zentrale Recheneinheit eines Computers.",
    category: "Hardware",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht BIOS?",
    options: [
      "Basic Input Output System",
      "Basic Input Output Service",
      "Basic Input Output Software",
      "Basic Input Output Structure",
    ],
    correct: 0,
    explanation:
      "BIOS (Basic Input Output System) ist die Firmware für die Grundfunktionen eines Computers.",
    category: "Hardware",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht USB?",
    options: [
      "Universal Serial Bus",
      "Universal System Bus",
      "Universal Serial Bridge",
      "Universal System Bridge",
    ],
    correct: 0,
    explanation:
      "USB (Universal Serial Bus) ist ein Standard für Datenübertragung und Stromversorgung.",
    category: "Hardware",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht LAN?",
    options: [
      "Local Area Network",
      "Large Area Network",
      "Local Access Network",
      "Large Access Network",
    ],
    correct: 0,
    explanation:
      "LAN (Local Area Network) ist ein lokales Netzwerk in einem begrenzten geografischen Bereich.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Wofür steht WAN?",
    options: [
      "Wide Area Network",
      "World Area Network",
      "Wide Access Network",
      "World Access Network",
    ],
    correct: 0,
    explanation:
      "WAN (Wide Area Network) ist ein Weitverkehrsnetzwerk über große geografische Distanzen.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Wofür steht RAID?",
    options: [
      "Redundant Array of Independent Disks",
      "Redundant Array of Integrated Disks",
      "Redundant Array of Independent Data",
      "Redundant Array of Integrated Data",
    ],
    correct: 0,
    explanation:
      "RAID (Redundant Array of Independent Disks) ist eine Technik zur Datenspeicherung mit Redundanz.",
    category: "Hardware",
    difficulty: "schwer",
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
    question: "Welche Vorteile bietet Cloud Computing?",
    options: [
      "Skalierbarkeit und Flexibilität",
      "Kosteneinsparungen bei Infrastruktur",
      "Automatische Backups und Updates",
      "Nur bessere Performance",
    ],
    correct: [0, 1, 2],
    explanation:
      "Cloud Computing bietet Skalierbarkeit, Kosteneinsparungen und automatische Wartung.",
    category: "Cloud",
    difficulty: "mittel",
  },
  {
    question: "Was ist wichtig bei der Softwareentwicklung?",
    options: [
      "Clean Code und Wartbarkeit",
      "Dokumentation und Kommentare",
      "Versionierung und Git",
      "Nur schnelle Entwicklung",
    ],
    correct: [0, 1, 2],
    explanation:
      "Clean Code, Dokumentation und Versionierung sind essentiell für professionelle Softwareentwicklung.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Welche Sicherheitsmaßnahmen sind wichtig?",
    options: [
      "Regelmäßige Updates und Patches",
      "Starke Passwörter und 2FA",
      "Firewall und Antivirus-Software",
      "Nur physische Sicherheit",
    ],
    correct: [0, 1, 2],
    explanation:
      "Updates, starke Authentifizierung und Firewall sind grundlegende Sicherheitsmaßnahmen.",
    category: "Sicherheit",
    difficulty: "mittel",
  },
  {
    question: "Was ist wichtig bei der Datenbankoptimierung?",
    options: [
      "Indizes für häufige Abfragen",
      "Normalisierung der Datenstruktur",
      "Regelmäßige Wartung und Updates",
      "Nur mehr Speicherplatz",
    ],
    correct: [0, 1, 2],
    explanation:
      "Indizes, Normalisierung und Wartung sind wichtige Aspekte der Datenbankoptimierung.",
    category: "Datenbanken",
    difficulty: "schwer",
  },
  {
    question: "Welche Vorteile bietet Agile Entwicklung?",
    options: [
      "Flexibilität bei Änderungen",
      "Bessere Kommunikation im Team",
      "Schnellere Lieferung von Features",
      "Nur weniger Dokumentation",
    ],
    correct: [0, 1, 2],
    explanation:
      "Agile Entwicklung bietet Flexibilität, bessere Kommunikation und schnellere Lieferung.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Was ist wichtig bei der Netzwerkplanung?",
    options: [
      "Skalierbarkeit für zukünftiges Wachstum",
      "Sicherheit und Segmentierung",
      "Redundanz für Ausfallsicherheit",
      "Nur niedrige Kosten",
    ],
    correct: [0, 1, 2],
    explanation:
      "Skalierbarkeit, Sicherheit und Redundanz sind wichtige Aspekte der Netzwerkplanung.",
    category: "Netzwerke",
    difficulty: "schwer",
  },
  {
    question: "Welche Qualitätsaspekte sind bei Software wichtig?",
    options: [
      "Funktionalität und Zuverlässigkeit",
      "Benutzerfreundlichkeit und Performance",
      "Wartbarkeit und Testbarkeit",
      "Nur schnelle Ausführung",
    ],
    correct: [0, 1, 2],
    explanation:
      "Funktionalität, Benutzerfreundlichkeit und Wartbarkeit sind wichtige Qualitätsaspekte.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Was ist wichtig bei der IT-Infrastruktur?",
    options: [
      "Monitoring und Überwachung",
      "Backup-Strategien und Disaster Recovery",
      "Energieeffizienz und Kühlung",
      "Nur hohe Performance",
    ],
    correct: [0, 1, 2],
    explanation:
      "Monitoring, Backup-Strategien und Energieeffizienz sind wichtige Aspekte der IT-Infrastruktur.",
    category: "Infrastruktur",
    difficulty: "schwer",
  },
  {
    question: "Welche Vorteile bietet Virtualisierung?",
    options: [
      "Bessere Ressourcennutzung",
      "Einfachere Wartung und Updates",
      "Isolation und Sicherheit",
      "Nur Kosteneinsparungen",
    ],
    correct: [0, 1, 2],
    explanation:
      "Virtualisierung bietet bessere Ressourcennutzung, einfachere Wartung und Isolation.",
    category: "Infrastruktur",
    difficulty: "mittel",
  },
  {
    question: "Was ist wichtig bei der API-Entwicklung?",
    options: [
      "Konsistente Schnittstellen",
      "Umfassende Dokumentation",
      "Sicherheit und Authentifizierung",
      "Nur schnelle Antwortzeiten",
    ],
    correct: [0, 1, 2],
    explanation:
      "Konsistente Schnittstellen, Dokumentation und Sicherheit sind wichtig bei APIs.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Welche Aspekte sind bei der Datenarchivierung wichtig?",
    options: [
      "Langzeitverfügbarkeit der Daten",
      "Rechtliche Compliance",
      "Kosteneffiziente Speicherung",
      "Nur schneller Zugriff",
    ],
    correct: [0, 1, 2],
    explanation:
      "Langzeitverfügbarkeit, Compliance und Kosteneffizienz sind wichtige Aspekte der Datenarchivierung.",
    category: "Datenmanagement",
    difficulty: "schwer",
  },
  {
    question: "Was ist wichtig bei der Systemadministration?",
    options: [
      "Regelmäßige Updates und Patches",
      "Monitoring und Logging",
      "Dokumentation und Prozesse",
      "Nur Benutzerverwaltung",
    ],
    correct: [0, 1, 2],
    explanation:
      "Updates, Monitoring und Dokumentation sind wichtige Aufgaben der Systemadministration.",
    category: "Administration",
    difficulty: "mittel",
  },
  {
    question: "Welche Vorteile bietet Containerisierung?",
    options: [
      "Konsistente Umgebungen",
      "Einfache Skalierung",
      "Isolation zwischen Anwendungen",
      "Nur bessere Performance",
    ],
    correct: [0, 1, 2],
    explanation:
      "Containerisierung bietet konsistente Umgebungen, einfache Skalierung und Isolation.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Was ist wichtig bei der IT-Sicherheit?",
    options: [
      "Regelmäßige Sicherheitsaudits",
      "Schulung der Mitarbeiter",
      "Incident Response Plan",
      "Nur technische Maßnahmen",
    ],
    correct: [0, 1, 2],
    explanation:
      "Sicherheitsaudits, Mitarbeiterschulung und Incident Response sind wichtige Sicherheitsaspekte.",
    category: "Sicherheit",
    difficulty: "schwer",
  },
];

// ===== PHASE 3 QUESTIONS DATABASE =====
const phase3Questions = [
  {
    question: "Was ist ein befristeter Arbeitsvertrag?",
    options: [
      "Ein Arbeitsvertrag mit festem Enddatum",
      "Ein Arbeitsvertrag ohne Kündigungsfrist",
      "Ein Arbeitsvertrag nur für Teilzeit",
      "Ein Arbeitsvertrag mit Probezeit",
    ],
    correct: [0], // Single choice
    explanation:
      "Ein befristeter Arbeitsvertrag endet automatisch zu einem festgelegten Zeitpunkt.",
    category: "Arbeitsrecht",
    difficulty: "leicht",
  },
  {
    question: "Welche Kündigungsfristen gelten in der Probezeit?",
    options: [
      "2 Wochen ohne Angabe von Gründen",
      "4 Wochen ohne Angabe von Gründen",
      "3 Monate mit Begründung",
      "6 Monate mit Begründung",
    ],
    correct: [0],
    explanation:
      "In der Probezeit kann mit 2 Wochen Frist ohne Angabe von Gründen gekündigt werden.",
    category: "Arbeitsrecht",
    difficulty: "mittel",
  },
  {
    question:
      "Was ist der Unterschied zwischen Kündigung und Aufhebungsvertrag?",
    options: [
      "Kündigung ist einseitig, Aufhebungsvertrag beidseitig",
      "Kündigung ist immer kostenpflichtig",
      "Aufhebungsvertrag ist nur für Führungskräfte",
      "Es gibt keinen Unterschied",
    ],
    correct: [0], // Single choice
    explanation:
      "Eine Kündigung ist eine einseitige Erklärung, ein Aufhebungsvertrag wird beidseitig vereinbart.",
    category: "Arbeitsrecht",
    difficulty: "mittel",
  },
  {
    question: "Was versteht man unter 'Break-Even-Point'?",
    options: [
      "Der Punkt, an dem Kosten und Erlöse gleich sind",
      "Der Punkt der maximalen Gewinne",
      "Der Punkt der höchsten Kosten",
      "Der Punkt der niedrigsten Erlöse",
    ],
    correct: [0],
    explanation:
      "Der Break-Even-Point ist der Punkt, an dem die Gesamtkosten den Gesamterlösen entsprechen.",
    category: "BWL",
    difficulty: "mittel",
  },
  {
    question: "Welche Kostenarten gibt es in der Kostenrechnung?",
    options: [
      "Fixkosten und variable Kosten",
      "Nur Materialkosten",
      "Nur Personalkosten",
      "Nur Verwaltungskosten",
    ],
    correct: [0],
    explanation:
      "In der Kostenrechnung unterscheidet man zwischen fixen und variablen Kosten.",
    category: "BWL",
    difficulty: "leicht",
  },
  {
    question: "Was ist der Unterschied zwischen Umsatz und Gewinn?",
    options: [
      "Gewinn = Umsatz - Kosten",
      "Umsatz = Gewinn - Kosten",
      "Gewinn und Umsatz sind identisch",
      "Es gibt keinen Zusammenhang",
    ],
    correct: [0],
    explanation:
      "Der Gewinn ergibt sich aus dem Umsatz abzüglich aller Kosten.",
    category: "BWL",
    difficulty: "leicht",
  },
  {
    question: "Was sind personenbezogene Daten nach der DSGVO?",
    options: [
      "Alle Informationen über identifizierte oder identifizierbare Personen",
      "Nur Name und Adresse",
      "Nur Bankdaten",
      "Nur Gesundheitsdaten",
    ],
    correct: [0],
    explanation:
      "Personenbezogene Daten sind alle Informationen über identifizierte oder identifizierbare natürliche Personen.",
    category: "Datenschutz",
    difficulty: "mittel",
  },
  {
    question: "Welche Rechte haben Betroffene nach der DSGVO?",
    options: [
      "Recht auf Auskunft und Löschung",
      "Recht auf Datenübertragbarkeit",
      "Recht auf Widerspruch",
      "Alle genannten Rechte",
    ],
    correct: [3], // Single choice - "Alle genannten Rechte" ist korrekt
    explanation:
      "Betroffene haben umfassende Rechte nach der DSGVO, einschließlich Auskunft, Löschung und Widerspruch.",
    category: "Datenschutz",
    difficulty: "mittel",
  },
  {
    question: "Was ist eine Datenschutz-Folgenabschätzung?",
    options: [
      "Eine systematische Bewertung von Datenschutzrisiken",
      "Ein einfaches Formular",
      "Eine freiwillige Maßnahme",
      "Eine einmalige Prüfung",
    ],
    correct: [0],
    explanation:
      "Eine Datenschutz-Folgenabschätzung ist eine systematische Bewertung von Datenschutzrisiken bei der Datenverarbeitung.",
    category: "Datenschutz",
    difficulty: "schwer",
  },
  {
    question: "Was ist ein Projektstrukturplan (PSP)?",
    options: [
      "Eine hierarchische Gliederung des Projekts",
      "Ein Zeitplan für das Projekt",
      "Ein Budgetplan für das Projekt",
      "Ein Risikoplan für das Projekt",
    ],
    correct: [0],
    explanation:
      "Ein Projektstrukturplan gliedert das Projekt hierarchisch in Arbeitspakete und Teilprojekte.",
    category: "Projektmanagement",
    difficulty: "mittel",
  },
  {
    question: "Welche Projektphasen gibt es typischerweise?",
    options: [
      "Initialisierung, Planung, Durchführung, Abschluss",
      "Nur Planung und Durchführung",
      "Nur Durchführung und Kontrolle",
      "Nur Planung und Kontrolle",
    ],
    correct: [0], // Single choice
    explanation:
      "Typische Projektphasen sind Initialisierung, Planung, Durchführung und Abschluss.",
    category: "Projektmanagement",
    difficulty: "leicht",
  },
  {
    question: "Was ist der kritische Pfad in einem Projekt?",
    options: [
      "Der längste Weg durch das Projektnetzwerk",
      "Der kürzeste Weg durch das Projekt",
      "Der teuerste Weg im Projekt",
      "Der einfachste Weg im Projekt",
    ],
    correct: [0],
    explanation:
      "Der kritische Pfad ist der längste Weg durch das Projektnetzwerk und bestimmt die Projektdauer.",
    category: "Projektmanagement",
    difficulty: "schwer",
  },
  {
    question: "Was bedeutet FAZ im Projektmanagement?",
    options: [
      "Frühester Anfangszeitpunkt",
      "Frühester Arbeitszeitpunkt",
      "Frühester Abschlusszeitpunkt",
      "Frühester Ausführungszeitpunkt",
    ],
    correct: [0],
    explanation:
      "FAZ (Frühester Anfangszeitpunkt) ist der frühestmögliche Zeitpunkt, zu dem eine Aktivität beginnen kann.",
    category: "Projektmanagement",
    difficulty: "schwer",
  },
  {
    question: "Was bedeutet FEZ im Projektmanagement?",
    options: [
      "Frühester Endzeitpunkt",
      "Frühester Erfüllungszeitpunkt",
      "Frühester Erfolgszeitpunkt",
      "Frühester Einsatzzeitpunkt",
    ],
    correct: [0],
    explanation:
      "FEZ (Frühester Endzeitpunkt) ist der frühestmögliche Zeitpunkt, zu dem eine Aktivität beendet werden kann.",
    category: "Projektmanagement",
    difficulty: "schwer",
  },
  {
    question: "Was bedeutet SAZ im Projektmanagement?",
    options: [
      "Spätester Anfangszeitpunkt",
      "Spätester Arbeitszeitpunkt",
      "Spätester Abschlusszeitpunkt",
      "Spätester Ausführungszeitpunkt",
    ],
    correct: [0],
    explanation:
      "SAZ (Spätester Anfangszeitpunkt) ist der spätestmögliche Zeitpunkt, zu dem eine Aktivität beginnen kann.",
    category: "Projektmanagement",
    difficulty: "schwer",
  },
  {
    question: "Was bedeutet GP im Projektmanagement?",
    options: [
      "Gesamtpuffer",
      "Gesamtplanung",
      "Gesamtprojekt",
      "Gesamtprogramm",
    ],
    correct: [0],
    explanation:
      "GP (Gesamtpuffer) ist die maximale Zeit, um die eine Aktivität verzögert werden kann, ohne das Projektende zu verschieben.",
    category: "Projektmanagement",
    difficulty: "schwer",
  },
  {
    question: "Was ist ein Aufhebungsvertrag im Arbeitsrecht?",
    options: [
      "Ein beidseitig vereinbarter Vertrag zur Beendigung des Arbeitsverhältnisses",
      "Ein einseitiger Kündigungsvertrag",
      "Ein befristeter Arbeitsvertrag",
      "Ein Probezeitvertrag",
    ],
    correct: [0],
    explanation:
      "Ein Aufhebungsvertrag ist ein beidseitig vereinbarter Vertrag zur Beendigung des Arbeitsverhältnisses.",
    category: "Arbeitsrecht",
    difficulty: "mittel",
  },
  {
    question: "Was sind variable Kosten in der BWL?",
    options: [
      "Kosten, die sich mit der Produktionsmenge ändern",
      "Kosten, die immer gleich bleiben",
      "Kosten, die nur einmal anfallen",
      "Kosten, die vom Markt abhängen",
    ],
    correct: [0],
    explanation:
      "Variable Kosten ändern sich proportional zur Produktionsmenge oder Beschäftigung.",
    category: "BWL",
    difficulty: "mittel",
  },
  {
    question: "Was ist ein Verarbeitungsverzeichnis nach DSGVO?",
    options: [
      "Eine Dokumentation aller Datenverarbeitungsvorgänge",
      "Ein einfaches Formular",
      "Eine freiwillige Maßnahme",
      "Eine interne Richtlinie",
    ],
    correct: [0],
    explanation:
      "Ein Verarbeitungsverzeichnis dokumentiert alle Datenverarbeitungsvorgänge und ist nach DSGVO Pflicht.",
    category: "Datenschutz",
    difficulty: "schwer",
  },
  {
    question: "Was bedeutet FP im Projektmanagement?",
    options: [
      "Frühester Projektende",
      "Frühester Planungsende",
      "Frühester Fertigstellung",
      "Frühester Finanzierung",
    ],
    correct: [0],
    explanation:
      "FP (Frühester Projektende) ist der frühestmögliche Zeitpunkt für das Projektende.",
    category: "Projektmanagement",
    difficulty: "schwer",
  },
];

// Export für andere Module
if (typeof module !== "undefined" && module.exports) {
  module.exports = { phase1Questions, phase2Questions, phase3Questions };
}
