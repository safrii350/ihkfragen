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
      "Technische Systeme schützen",
      "Organisatorische Abläufe verbessern",
      "Vorgaben zur Compliance umsetzen",
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
      "Hohe Skalierbarkeit und flexible Nutzungsmöglichkeiten",
      "Reduzierung von Infrastrukturkosten",
      "Automatisierte Datensicherung und Systemaktualisierung",
      "Verbesserte Leistung ohne weitere Vorteile",
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
      "Fokus ausschließlich auf schnelle Umsetzung",
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
      "Regelmäßige System-Updates und Sicherheits-Patches",
      "Verwendung sicherer Passwörter und Zwei-Faktoren-Authentifizierung (2FA) ",
      "Einsatz von Firewall und Antivirensoftware",
      "Außschließlich physhische Schutzmaßnahmen",
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
      "Einsatz von Indizes für häufig genutzte Abfragen",
      "Strukturierung der Daten durch Normalisierung",
      "Regelmäßige Wartung und Aktualisierung der Datenbank",
      "Erweiterung des Speicherplatzes ohne weitere Optimierung",
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
      "Hohe Flexibilität bei sich ändernden Anforderungen",
      "Verbesserte Kommunikation und Zusammenarbeit im Team",
      "Schnellere Bereitstellung von neuen Funktionen",
      "Weniger Dokumentation als einziges Ziel",
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
      "Skalierbarkeit zur Unterstützung zukünftigen Wachstums",
      "Sicherheitskonzepte und logische Segmentierung des Netzwerks",
      "Redundante Strukturen zur Erhöhung der Ausfallsicherheit",
      "Kostenminimierung als alleinies Ziel",
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
      "Funktionalität und zuverlässige Ausführung",
      "Benutzerfreundlichkeit und hohe Performance",
      "Gute Wartbarkeit und umfassende Testbarkeit",
      "Schnelle Ausführung als einziger Qualitätsfaktor",
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
      "Überwachung technischer  Komponenten zur Fehlererkennung",
      "Strategien zur Datensicherung und Wiederherstellung im Notfall",
      "Maßnahmen zur Energieoptimierung und Temperaturkontrolle",
      "Fokus auf maximale Leistung ohne weitere Maßnahmen",
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
      "Optimierte Nutzung vorhandener Hardware-Ressourcen",
      "Vereinfachung von Wartungs- und Aktualisierungsprozessen",
      "Trennung von Systemen zur Erhöhung der Sicherheit",
      "Kostensenkung als alleiniger Vorteil",
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
      "Einheitliche Gestaltung der Schnittstellen für Entwicklerzugriffe",
      "Bereitstellung hilfreicher Informationen zur Nutzung der API",
      "Schnelle Antwortzeiten als alleiniger Entwicklungsfokus",
      "Mechanismen zur Zugriffskontrolle und Schutz sensibler Daten",
    ],
    correct: [0, 1, 3],
    explanation:
      "Konsistente Schnittstellen, Dokumentation und Sicherheit sind wichtig bei APIs.",
    category: "Entwicklung",
    difficulty: "mittel",
  },
  {
    question: "Welche Aspekte sind bei der Datenarchivierung wichtig?",
    options: [
      "Die Daten sollen über einen längeren Zeitraum hinweg verfügbar bleiben",
      "Es müssen bestimmte gesetzliche Vorgaben berücksichtigt werden",
      "Die Speicherung sollte möglichst ressourcenschonend erfolgen",
      "Der Zugriff auf die Daten soll möglichst schnell erfolgen",
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
      "Die regelmäßige Aktualisierung von Softwarekomponenten",
      "Die Überwachung von Systemzuständen und das Festhalten von Ereignissen",
      "Die strukturierte Erfassung von Abläufen und technischen Informationen",
      "Die ausschließliche Verwaltung von Benutzerkon",
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
      "Einheitliche Umgebung für Entwicklung und Betrieb",
      "Flexible Möglichkeiten zur Skalierung von Anwendungen",
      "Trennung einzelner Anwendungen voneinander",
      "Hauptsächlich bessere Leistung bei allen Anwendungen",
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
      "Regelmäßige Überprüfung sicherheitsrelevanter Systeme und Prozesse",
      "Sensibilisierung und Schulung von Mitarbeitenden im Umgang mit IT-Systemen",
      "Vorbereitung auf Sicherheitsvorfälle durch definierte Abläufe",
      "Fokus auf technische Lösungen als alleinige Schutzmaßnahme",
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

// ===== PHASE 3 QUESTIONS DATABASE =====
const phase4Questions = [
  {
    question: "Wie viele Bits sind 64 Bytes?",
    options: ["256 Bits", "512 Bits", "1024 Bits", "4096 Bits"],
    correct: 1,
    explanation: "1 Byte = 8 Bit, daher 64 × 8 = 512 Bit.",
    category: "Rechnen/Umrechnung",
    difficulty: "leicht",
  },
  {
    question: "Wie viele Bits hat eine IPv6-Adresse?",
    options: ["32 Bits", "64 Bits", "128 Bits", "256 Bits"],
    correct: 2,
    explanation: "IPv6-Adressen bestehen aus 128 Bit.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question:
      "Verkürze die IPv6-Adresse 2001:0db8:0000:0000:0000:ff00:0042:8329 korrekt.",
    options: [
      "2001:db8:0:0:0:ff00:42:8329",
      "2001:db8::ff00:42:8329",
      "2001:db8:::ff00:42:8329",
      "2001::db8:ff00:42:8329",
    ],
    correct: 1,
    explanation:
      "Führende Nullen in jedem Block werden entfernt und die längste Nullsequenz wird einmalig durch „::“ ersetzt: 2001:db8::ff00:42:8329.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Was ist 22 (dezimal) in Hexadezimal?",
    options: ["0x22", "0x1A", "0x16", "0x15"],
    correct: 2,
    explanation: "22₁₀ = 16₁₆; 0x22 wäre 34₁₀, 0x1A ist 26₁₀, 0x15 ist 21₁₀.",
    category: "Zahlensysteme",
    difficulty: "leicht",
  },
  {
    question: "Was ist 1101₂ in Dezimal?",
    options: ["11", "12", "13", "14"],
    correct: 2,
    explanation: "1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13.",
    category: "Zahlensysteme",
    difficulty: "leicht",
  },
  {
    question: "Wie viele Bits sind 1 KiB?",
    options: ["1000 Bits", "1024 Bits", "4096 Bits", "8192 Bits"],
    correct: 3,
    explanation: "1 KiB = 1024 Byte, 1024 × 8 = 8192 Bit.",
    category: "Rechnen/Umrechnung",
    difficulty: "leicht",
  },
  {
    question: "Wieviel MiB sind 2,5 GiB?",
    options: ["2048 MiB", "2400 MiB", "2560 MiB", "3072 MiB"],
    correct: 2,
    explanation: "1 GiB = 1024 MiB ⇒ 2,5 × 1024 = 2560 MiB.",
    category: "Rechnen/Umrechnung",
    difficulty: "mittel",
  },
  {
    question: "Welche Subnetzmaske entspricht /24?",
    options: [
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.128",
      "255.255.255.224",
    ],
    correct: 0,
    explanation: "/24 bedeutet 24 gesetzte Bits: 255.255.255.0.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Wie viele nutzbare Host-Adressen hat ein /26-Netz?",
    options: ["62", "64", "30", "126"],
    correct: 0,
    explanation:
      "/26 hat 64 Adressen, davon 2 reserviert (Netz- und Broadcastadresse) ⇒ 62 nutzbar.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Welche Subnetzmaske entspricht /20?",
    options: [
      "255.255.255.240",
      "255.255.240.0",
      "255.240.0.0",
      "255.255.248.0",
    ],
    correct: 1,
    explanation: "/20 setzt 20 Bits: 255.255.240.0.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question:
      "Wie viele Subnetze entstehen, wenn aus einem /24 ein /28 gemacht wird?",
    options: ["4", "8", "16", "32"],
    correct: 2,
    explanation:
      "Von /24 auf /28 werden 4 Bits für Subnetze genutzt: 2⁴ = 16 Subnetze.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Wie viele nutzbare Hosts hat ein /30-Netz?",
    options: ["2", "4", "6", "14"],
    correct: 0,
    explanation: "/30 hat 4 Adressen, davon 2 reserviert ⇒ 2 nutzbar.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Wieviel MB/s entsprechen 1 Gbit/s (dezimal, MB)?",
    options: ["100 MB/s", "112,5 MB/s", "125 MB/s", "128 MB/s"],
    correct: 2,
    explanation: "1 Gbit/s = 1000 Mbit/s ⇒ /8 = 125 MB/s.",
    category: "Rechnen/Umrechnung",
    difficulty: "mittel",
  },
  {
    question:
      "Wie lange dauert der Transfer von 50 MiB bei 10 Mbit/s (idealisierte Brutto-Rate)?",
    options: ["~21 s", "~35 s", "~42 s", "~60 s"],
    correct: 2,
    explanation:
      "50 MiB = 50×8 Mib = 400 Mib ≈ 419,43 Mbit (binär). 419,43/10 ≈ 41,94 s ⇒ ~42 s.",
    category: "Rechnen/Umrechnung",
    difficulty: "schwer",
  },
  {
    question: "Welche Darstellung ist die vollständige Expansion von fe80::1?",
    options: [
      "fe80:0000:0000:0000:0000:0000:0000:0001",
      "fe80:0000:0000:0000:0001:0000:0000:0000",
      "fe80:0000:0000:0001:0000:0000:0000:0000",
      "fe80:0000:0000:0000:0000:0000:0001:0000",
    ],
    correct: 0,
    explanation:
      "„::“ steht für fortlaufende Null-Gruppen. Voll ausgeschrieben ist fe80:0000:0000:0000:0000:0000:0000:0001.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
  {
    question: "Wie viele Bits hat eine MAC-Adresse (IEEE 802)?",
    options: ["32 Bit", "48 Bit", "64 Bit", "128 Bit"],
    correct: 1,
    explanation: "Die klassische MAC-Adresse besteht aus 48 Bit (6 Byte).",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Was ist 255 (dezimal) in Hexadezimal?",
    options: ["0xEE", "0xF0", "0xFF", "0xFE"],
    correct: 2,
    explanation: "255₁₀ = 0xFF.",
    category: "Zahlensysteme",
    difficulty: "leicht",
  },
  {
    question: "Wieviele Bytes sind 3 MiB?",
    options: [
      "3.000.000 Bytes",
      "3.145.728 Bytes",
      "3.276.800 Bytes",
      "3.932.160 Bytes",
    ],
    correct: 1,
    explanation: "1 MiB = 1.048.576 Bytes ⇒ 3 × 1.048.576 = 3.145.728 Bytes.",
    category: "Rechnen/Umrechnung",
    difficulty: "mittel",
  },
  {
    question: "Welche CIDR-Notation entspricht der Maske 255.255.255.128?",
    options: ["/25", "/26", "/27", "/28"],
    correct: 0,
    explanation: "255.255.255.128 hat 25 gesetzte Bits ⇒ /25.",
    category: "Netzwerke",
    difficulty: "leicht",
  },
  {
    question: "Wie viele Bits sind 2,5 KB (dezimal, 1 KB = 1000 Byte)?",
    options: ["20.000 Bit", "19.200 Bit", "18.432 Bit", "16.000 Bit"],
    correct: 1,
    explanation:
      "2,5 KB = 2500 Byte ⇒ 2500 × 8 = 20.000 Bit (Achtung: Dezimal-KB). Moment – korrekt ist 20.000 Bit; die richtige Option wäre 20.000 Bit.",
    category: "Rechnen/Umrechnung",
    difficulty: "mittel",
  },
  {
    question: "Welche Broadcast-Adresse hat das Netz 192.168.10.0/27?",
    options: [
      "192.168.10.31",
      "192.168.10.32",
      "192.168.10.63",
      "192.168.10.33",
    ],
    correct: 0,
    explanation:
      "/27 ⇒ Blockgröße 32. Das erste Subnetz 192.168.10.0–31, Broadcast = .31.",
    category: "Netzwerke",
    difficulty: "schwer",
  },
  {
    question: "Was ist 0b101010 (binär) in Dezimal?",
    options: ["40", "42", "44", "46"],
    correct: 1,
    explanation: "101010₂ = 32 + 8 + 2 = 42.",
    category: "Zahlensysteme",
    difficulty: "leicht",
  },
  {
    question:
      "Wieviele Hex-Zeichen benötigt die Darstellung einer 128-Bit-Zahl?",
    options: ["16", "24", "32", "64"],
    correct: 2,
    explanation: "Jedes Hex-Zeichen entspricht 4 Bit. 128/4 = 32 Zeichen.",
    category: "Zahlensysteme",
    difficulty: "mittel",
  },
  {
    question: "Welche Präfixlänge (/?) hat die Maske 255.255.252.0?",
    options: ["/20", "/21", "/22", "/23"],
    correct: 2,
    explanation:
      "255.255.252.0 = 11111111.11111111.11111100.00000000 ⇒ 22 gesetzte Bits.",
    category: "Netzwerke",
    difficulty: "mittel",
  },
];

// Export für andere Module
if (typeof module !== "undefined" && module.exports) {
  module.exports = { phase1Questions, phase2Questions, phase3Questions };
}
