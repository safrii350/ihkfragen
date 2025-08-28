# Quiz-Website für Fachinformatiker Prüfungsvorbereitung

Eine interaktive Quiz-Website zur Vorbereitung auf die Zwischenprüfung als Fachinformatiker für Anwendungsentwicklung.

Besuche: https://ihkquiz.pages.dev/ um dein Wissen zu testen!

## 🎯 Projektbeschreibung

Diese Quiz-Website bietet eine strukturierte Lernumgebung mit zwei Phasen:

- **Phase 1**: Single Choice Fragen zu IT-Abkürzungen und Grundlagen (20 Fragen)
- **Phase 2**: Multiple Choice Fragen zu technischen Konzepten (später implementiert)

## ✨ Features

### Aktuelle Features

- ✅ Phasenbasierte Quiz-Struktur
- ✅ 30-Sekunden Timer pro Frage
- ✅ Audio-Feedback bei Antworten
- ✅ Fortschritts-Tracking
- ✅ 60% Bestehensgrenze pro Phase
- ✅ Responsive Design
- ✅ Moderne UI mit Poppins und Pixelify Fonts

### Implementierte Features

- ✅ Phase 1 (Single Choice) - **Vollständig implementiert**
- ✅ Phase 2 (Multiple Choice) - **Vollständig implementiert**
- ✅ Phase 3 (WISO) - **Vollständig implementiert**
- ✅ Phase 4 (Mathematische Umrechnungen) - **Vollständig implementiert**
- ✅ Erweiterte Statistiken
- ✅ Audio-Feedback
- ✅ Responsive Design

### Geplante Features

- 🔄 Offline-Modus
- 🔄 Export-Funktionen
- 🔄 Erweiterte Analytics

## 🛠️ Technologie-Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Poppins, Pixelify)
- **Icons**: FontAwesome
- **Storage**: LocalStorage (Browser)
- **Audio**: Web Audio API

## 📁 Projektstruktur

```
kwizz/
├── index.html              # Startseite
├── phase1.html            # Phase 1 Quiz (Single Choice)
├── phase2.html            # Phase 2 Quiz (Multiple Choice)
├── phase3.html            # Phase 3 Quiz (WISO)
├── phase4.html            # Phase 4 Quiz (Mathematische Umrechnungen)
├── css/
│   ├── style.css          # Hauptstyles
│   ├── quiz.css           # Quiz-spezifische Styles
│   └── responsive.css     # Responsive Design
├── js/
│   ├── main.js            # Hauptlogik
│   ├── quiz.js            # Phase 1 Quiz-Funktionalität
│   ├── quiz2.js           # Phase 2 Quiz-Funktionalität
│   ├── quiz3.js           # Phase 3 Quiz-Funktionalität
│   ├── quiz4.js           # Phase 4 Quiz-Funktionalität
│   ├── audio.js           # Audio-Feedback
│   └── storage.js         # LocalStorage Management
├── audio/
│   ├── correct.mp3        # Korrekte Antwort Sound
│   └── incorrect.mp3      # Falsche Antwort Sound
├── data/
│   └── questions.js       # Quiz-Fragen (alle 4 Phasen)
└── README.md              # Diese Datei
```

## 🚀 Setup & Installation

1. **Repository klonen oder herunterladen**
2. **Dateien in einen lokalen Webserver laden** (wegen Audio-Files)
3. **index.html im Browser öffnen**

### Lokaler Webserver (empfohlen)

```bash
# Mit Python 3
python -m http.server 8000

# Mit Node.js (http-server)
npx http-server

# Mit PHP
php -S localhost:8000
```

Dann im Browser: `http://localhost:8000`

## 🎨 Design-Konzept

- **Light Mode Only**: Professionelles Prüfungsfeeling
- **Big Typography**: Große, klare Schriftarten
- **Minimalistisch**: Clean und fokussiert
- **Responsive**: Funktioniert auf allen Geräten

## 📊 Quiz-Struktur

### Phase 1 (Single Choice) ✅

- **20 Fragen** zu IT-Abkürzungen und Grundlagen
- **30 Sekunden** pro Frage
- **60%** zum Bestehen erforderlich
- **1 Punkt** pro korrekte Antwort
- **Zufällige Antwort-Reihenfolge** für faire Tests

### Phase 2 (Multiple Choice) ✅

- **15 Fragen** zu IT-Konzepten und erweiterten Themen
- **45 Sekunden** pro Frage
- **60%** zum Bestehen erforderlich
- **Multiple Choice Logik** mit Checkbox-Optionen
- **Detailliertes Feedback** mit Erklärungen

### Phase 3 (WISO) ✅

- **20 Fragen** zu Wirtschafts- und Sozialkunde
- **45 Sekunden** pro Frage
- **60%** zum Bestehen erforderlich
- **Themenbereiche**: Arbeitsrecht, BWL, Datenschutz, Projektmanagement
- **Projektmanagement-Spezialitäten**: FAZ, FEZ, FP, SAZ, GP

### Phase 4 (Mathematische Umrechnungen) ✅

- **20 Fragen** zu IP, Bit, Zahlensysteme und Netzwerken
- **30 Sekunden** pro Frage
- **60%** zum Bestehen erforderlich
- **Themenbereiche**: Rechnen/Umrechnung, Netzwerke, Zahlensysteme
- **Spezielle Themen**: IPv6, Subnetting, Binär/Hex/Dezimal-Konvertierung

## 🔧 Entwicklung

### To-Do Liste

#### Phase 1 - Grundstruktur ✅

- [x] Projektstruktur erstellen
- [x] README.md erstellen
- [x] HTML-Grundgerüst (Startseite)
- [x] CSS-Grundstyles
- [x] JavaScript-Grundlogik

#### Phase 2 - Quiz-Funktionalität ✅

- [x] Quiz-Interface erstellen
- [x] Single Choice Logik
- [x] Timer und Audio-Feedback
- [x] Fortschrittsverfolgung

#### Phase 3 - Multiple Choice ✅

- [x] Phase 2 Interface
- [x] Multiple Choice Logik
- [x] Checkbox-Optionen
- [x] Erweiterte Statistiken

#### Phase 4 - WISO ✅

- [x] Phase 3 Interface
- [x] WISO-Fragen implementiert
- [x] Projektmanagement-Spezialitäten
- [x] Vollständige Navigation zwischen allen Phasen
  - [x] Timer-Implementierung
  - [x] Audio-Feedback
  - [x] Fortschritts-Tracking
  - [x] Ergebnis-Berechnung

#### Phase 5 - Mathematische Umrechnungen ✅

- [x] Phase 4 Interface
- [x] Mathematische Umrechnungs-Fragen implementiert
- [x] IP, Bit, Zahlensysteme und Netzwerke
- [x] Vollständige Navigation zwischen allen Phasen
  - [x] Timer-Implementierung
  - [x] Audio-Feedback
  - [x] Fortschritts-Tracking
  - [x] Ergebnis-Berechnung

#### Phase 3 - Daten & Content ✅

- [x] Fragen-Datenbank erstellen
- [x] Antworten-Validierung
  - [x] LocalStorage Integration

#### Phase 4 - Polish & Testing ✅

- [x] Responsive Design
- [x] Browser-Testing
- [x] Performance-Optimierung
- [x] Bug-Fixes

## 📝 Lizenz

Dieses Projekt ist für Bildungszwecke entwickelt und steht unter der MIT-Lizenz.

## 📊 Projektstatus

**Aktueller Fortschritt: 100%**

- ✅ Phase 1: 100% abgeschlossen
- ✅ Phase 2: 100% abgeschlossen
- ✅ Phase 3: 100% abgeschlossen
- ✅ Phase 4: 100% abgeschlossen
- ✅ Polish & Testing: 100% abgeschlossen

**🎉 Alle vier Phasen sind vollständig implementiert und funktionsfähig!**

**Unit Test ausführen**
Im Browser tests/test-runner.html ausühren

## 👥 Mitwirkende

Entwickelt für die Prüfungsvorbereitung als Fachinformatiker für Anwendungsentwicklung.
