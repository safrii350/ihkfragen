// Phase 5 - KI-gestützte Freitextfragen
// 10 Prüfungsfragen zu OSI, TCP/IP, IoT und Projektmanagement

const phase5Questions = [
  // ===== OSI-MODELL (3 Fragen) =====
  {
    id: 1,
    question:
      "Erkläre das OSI-Referenzmodell und beschreibe die sieben Schichten mit ihren Hauptaufgaben.",
    category: "OSI-Modell",
    difficulty: "mittel",
    keywords: [
      "Schicht",
      "Anwendungsschicht",
      "Präsentationsschicht",
      "Sitzungsschicht",
      "Transportschicht",
      "Vermittlungsschicht",
      "Datensicherungsschicht",
      "Bitübertragungsschicht",
      "Protokoll",
      "Datenkapselung",
      "Kopfzeile",
      "Payload",
      "Router",
      "Switch",
    ],
    expectedPoints: [
      "Nennung aller 7 Schichten",
      "Beschreibung der Hauptaufgaben jeder Schicht",
      "Erklärung der Datenkapselung",
      "Beispiele für Protokolle in verschiedenen Schichten",
    ],
    sampleAnswer:
      "Das OSI-Modell besteht aus 7 Schichten: 1) Bitübertragungsschicht (Hardware, Kabel), 2) Datensicherungsschicht (MAC-Adressen), 3) Vermittlungsschicht (IP-Adressen), 4) Transportschicht (TCP/UDP), 5) Sitzungsschicht (Verbindungsaufbau), 6) Präsentationsschicht (Datenformat), 7) Anwendungsschicht (HTTP, FTP). Jede Schicht fügt Kopfzeilen hinzu (Datenkapselung).",
  },

  {
    id: 2,
    question:
      "Was ist der Unterschied zwischen dem OSI-Referenzmodell und dem TCP/IP-Modell? Erkläre die jeweiligen Schichten und ihre Zuordnung.",
    category: "OSI-Modell",
    difficulty: "schwer",
    keywords: [
      "OSI",
      "TCP/IP",
      "4-Schichten",
      "7-Schichten",
      "Anwendungsschicht",
      "Transportschicht",
      "Internetschicht",
      "Netzwerkzugriffsschicht",
      "Zuordnung",
      "Vergleich",
      "Differenzen",
    ],
    expectedPoints: [
      "Unterschiedliche Anzahl der Schichten",
      "Zuordnung der OSI- zu TCP/IP-Schichten",
      "Praktische vs. theoretische Modell",
      "Vorteile und Nachteile beider Modelle",
    ],
    sampleAnswer:
      "OSI hat 7 Schichten (theoretisches Modell), TCP/IP nur 4 Schichten (praktisches Modell). OSI-Anwendungs-, Präsentations- und Sitzungsschicht werden in TCP/IP zur Anwendungsschicht zusammengefasst. OSI-Vermittlungsschicht entspricht TCP/IP-Internetschicht, OSI-Datensicherungsschicht und Bitübertragungsschicht entsprechen TCP/IP-Netzwerkzugriffsschicht.",
  },

  {
    id: 3,
    question:
      "Beschreibe den Datenfluss durch das OSI-Modell bei einer HTTP-Anfrage von einem Browser zu einem Webserver.",
    category: "OSI-Modell",
    difficulty: "mittel",
    keywords: [
      "Datenfluss",
      "HTTP",
      "Browser",
      "Webserver",
      "Kapselung",
      "Entkapselung",
      "Schicht",
      "Protokoll",
      "Hinzufügen",
      "Entfernen",
      "Kopfzeile",
    ],
    expectedPoints: [
      "Start in der Anwendungsschicht mit HTTP",
      "Durchlauf aller 7 Schichten",
      "Hinzufügen von Kopfzeilen in jeder Schicht",
      "Entkapselung auf Empfängerseite",
    ],
    sampleAnswer:
      "Der Datenfluss beginnt in Schicht 7 (HTTP-Anfrage), geht durch alle Schichten nach unten. Jede Schicht fügt eigene Kopfzeilen hinzu: Schicht 6 (Formatierung), Schicht 5 (Session-ID), Schicht 4 (TCP-Port), Schicht 3 (IP-Adresse), Schicht 2 (MAC-Adresse), Schicht 1 (Bitübertragung). Auf Empfängerseite erfolgt Entkapselung von unten nach oben.",
  },

  // ===== TCP/IP (3 Fragen) =====
  {
    id: 4,
    question:
      "Erkläre die Unterschiede zwischen TCP und UDP. Wann wird welches Protokoll verwendet und warum?",
    category: "TCP/IP",
    difficulty: "mittel",
    keywords: [
      "TCP",
      "UDP",
      "verbindungsorientiert",
      "verbindungslos",
      "zuverlässig",
      "unzuverlässig",
      "Flusskontrolle",
      "Überlastkontrolle",
      "Reihenfolge",
      "Übertragung",
      "Anwendung",
    ],
    expectedPoints: [
      "TCP: verbindungsorientiert, zuverlässig, mit Flusskontrolle",
      "UDP: verbindungslos, unzuverlässig, schnell",
      "Anwendungsfälle für beide Protokolle",
      "Vorteile und Nachteile",
    ],
    sampleAnswer:
      "TCP ist verbindungsorientiert mit Flusskontrolle, Überlastkontrolle und garantiert die Reihenfolge (HTTP, FTP, E-Mail). UDP ist verbindungslos, schnell, aber unzuverlässig (DNS, Streaming, Gaming). TCP bei wichtigen Daten, UDP bei Echtzeit-Anwendungen.",
  },

  {
    id: 5,
    question:
      "Was ist IP-Adressierung und Subnetting? Erkläre die Bedeutung der Subnetzmaske und wie man Subnetze berechnet.",
    category: "TCP/IP",
    difficulty: "schwer",
    keywords: [
      "IP-Adresse",
      "Subnetting",
      "Subnetzmaske",
      "CIDR",
      "Netzwerk-ID",
      "Host-ID",
      "Binär",
      "Dezimal",
      "Bits",
      "Berechnung",
      "Netzwerk-Adresse",
    ],
    expectedPoints: [
      "Aufbau einer IP-Adresse (Netzwerk- und Host-Teil)",
      "Bedeutung der Subnetzmaske",
      "CIDR-Notation verstehen",
      "Einfache Subnetting-Berechnungen",
    ],
    sampleAnswer:
      "IP-Adressierung teilt Adressen in Netzwerk- und Host-Teil. Subnetzmaske bestimmt diese Aufteilung (1er für Netzwerk, 0er für Host). CIDR zeigt Anzahl der 1er-Bits (/24 = 255.255.255.0). Subnetting teilt große Netzwerke in kleinere für besseres Management.",
  },

  {
    id: 6,
    question:
      "Beschreibe den TCP-Verbindungsaufbau (Three-Way Handshake) und die TCP-Verbindungsbeendigung.",
    category: "TCP/IP",
    difficulty: "mittel",
    keywords: [
      "Three-Way Handshake",
      "SYN",
      "ACK",
      "FIN",
      "Verbindungsaufbau",
      "Verbindungsbeendigung",
      "SYN-ACK",
      "ESTABLISHED",
      "CLOSE-WAIT",
      "TIME-WAIT",
      "States",
    ],
    expectedPoints: [
      "Drei Schritte beim Verbindungsaufbau (SYN, SYN-ACK, ACK)",
      "Verbindungsbeendigung mit FIN-Paketen",
      "TCP-Zustände verstehen",
      "Gründe für TIME-WAIT-Phase",
    ],
    sampleAnswer:
      "Three-Way Handshake: 1) Client sendet SYN, 2) Server antwortet mit SYN-ACK, 3) Client sendet ACK. Verbindungsbeendigung: 1) Eine Seite sendet FIN, 2) Andere Seite bestätigt und sendet FIN, 3) Erste Seite bestätigt. TIME-WAIT verhindert Paket-Konfusion.",
  },

  // ===== IoT (2 Fragen) =====
  {
    id: 7,
    question:
      "Erkläre die IoT-Architektur und beschreibe die verschiedenen Schichten sowie typische Protokolle für IoT-Geräte.",
    category: "IoT",
    difficulty: "mittel",
    keywords: [
      "IoT",
      "Architektur",
      "Schichten",
      "MQTT",
      "CoAP",
      "HTTP",
      "LoRaWAN",
      "Zigbee",
      "Sensoren",
      "Aktoren",
      "Gateway",
      "Cloud",
      "Edge Computing",
    ],
    expectedPoints: [
      "IoT-Architektur-Schichten (Sensoren, Gateway, Cloud)",
      "MQTT als wichtigstes IoT-Protokoll",
      "Verschiedene Kommunikationstechnologien",
      "Edge Computing Bedeutung",
    ],
    sampleAnswer:
      "IoT-Architektur: 1) Sensorschicht (Temperatur, Bewegung), 2) Gateway-Schicht (Daten sammeln), 3) Cloud-Schicht (Verarbeitung). MQTT ist wichtigstes Protokoll (publish/subscribe, wenig Bandbreite). Weitere: CoAP, LoRaWAN, Zigbee. Edge Computing verarbeitet Daten lokal.",
  },

  {
    id: 8,
    question:
      "Welche Sicherheitsaspekte sind bei IoT-Geräten besonders wichtig? Beschreibe typische Angriffsvektoren und Schutzmaßnahmen.",
    category: "IoT",
    difficulty: "schwer",
    keywords: [
      "IoT-Sicherheit",
      "Angriffsvektoren",
      "Botnet",
      "DDoS",
      "Schwachstellen",
      "Authentifizierung",
      "Verschlüsselung",
      "Updates",
      "Zugriffskontrolle",
      "Netzwerksegmentierung",
    ],
    expectedPoints: [
      "Typische IoT-Schwachstellen (Standard-Passwörter, fehlende Updates)",
      "Angriffsvektoren (Botnet, DDoS, Datendiebstahl)",
      "Schutzmaßnahmen (sichere Passwörter, regelmäßige Updates)",
      "Netzwerksegmentierung und Zugriffskontrolle",
    ],
    sampleAnswer:
      "IoT-Sicherheit: Standard-Passwörter, fehlende Updates, unverschlüsselte Kommunikation. Angriffe: Botnet-Aufbau, DDoS-Attacken, Datendiebstahl. Schutz: Sichere Passwörter, regelmäßige Updates, Netzwerksegmentierung, Verschlüsselung, Zugriffskontrolle.",
  },

  // ===== PROJEKTMANAGEMENT (2 Fragen) =====
  {
    id: 9,
    question:
      "Vergleiche Agile und Waterfall Projektmanagement-Methoden. Welche Vor- und Nachteile haben beide Ansätze?",
    category: "Projektmanagement",
    difficulty: "mittel",
    keywords: [
      "Agile",
      "Waterfall",
      "Methoden",
      "Vergleich",
      "Vor- und Nachteile",
      "Iterativ",
      "Sequenziell",
      "Flexibilität",
      "Planung",
      "Risiken",
      "Kommunikation",
    ],
    expectedPoints: [
      "Waterfall: sequenziell, detaillierte Planung",
      "Agile: iterativ, flexibel, inkrementell",
      "Vorteile und Nachteile beider Methoden",
      "Einsatzgebiete und Projektarten",
    ],
    sampleAnswer:
      "Waterfall: sequenzielle Phasen, detaillierte Planung, feste Anforderungen, schwer zu ändern. Agile: iterative Entwicklung, flexibel, kurze Sprints, kontinuierliche Anpassung. Waterfall bei bekannten Anforderungen, Agile bei unsicheren/ändermden Anforderungen.",
  },

  {
    id: 10,
    question:
      "Erkläre das Risikomanagement in IT-Projekten. Welche Risiken gibt es typischerweise und wie werden sie gemanagt?",
    category: "Projektmanagement",
    difficulty: "schwer",
    keywords: [
      "Risikomanagement",
      "Risikoidentifikation",
      "Risikoanalyse",
      "Risikobewertung",
      "Risikostrategien",
      "Mitigation",
      "Vermeidung",
      "Übertragung",
      "Akzeptanz",
      "Monitoring",
    ],
    expectedPoints: [
      "Prozess des Risikomanagements",
      "Typische IT-Projektrisiken",
      "Risikostrategien (Vermeidung, Mitigation, Übertragung, Akzeptanz)",
      "Kontinuierliches Risikomonitoring",
    ],
    sampleAnswer:
      "Risikomanagement: 1) Risiken identifizieren, 2) Bewerten (Wahrscheinlichkeit/Impact), 3) Strategien entwickeln (Vermeidung, Mitigation, Übertragung, Akzeptanz), 4) Überwachung. Typische Risiken: Technische Probleme, Ressourcenmangel, Zeitdruck, Qualitätsprobleme.",
  },
];

// Fallback-Fragen falls API nicht verfügbar
const phase5FallbackQuestions = [
  {
    id: 1,
    question:
      "Erkläre das OSI-Referenzmodell und beschreibe die sieben Schichten mit ihren Hauptaufgaben.",
    category: "OSI-Modell",
    difficulty: "mittel",
  },
  {
    id: 2,
    question:
      "Was ist der Unterschied zwischen TCP und UDP? Wann wird welches Protokoll verwendet?",
    category: "TCP/IP",
    difficulty: "mittel",
  },
  {
    id: 3,
    question:
      "Beschreibe die IoT-Architektur und typische Protokolle für IoT-Geräte.",
    category: "IoT",
    difficulty: "mittel",
  },
  {
    id: 4,
    question: "Vergleiche Agile und Waterfall Projektmanagement-Methoden.",
    category: "Projektmanagement",
    difficulty: "mittel",
  },
  {
    id: 5,
    question:
      "Erkläre das Risikomanagement in IT-Projekten und typische Risiken.",
    category: "Projektmanagement",
    difficulty: "schwer",
  },
];

// Export für andere Module
if (typeof module !== "undefined" && module.exports) {
  module.exports = { phase5Questions, phase5FallbackQuestions };
}

