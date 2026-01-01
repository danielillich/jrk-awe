
# JRK Check-in App - Cloud Edition
 
Eine vollständige Check-in-Anwendung für JRK-Veranstaltungen mit Cloud-Synchronisation.
 
## 🚀 Features
 
- **Benutzerauthentifizierung** mit rollenbasierten Berechtigungen
- **Excel-Upload** für Teilnehmerdaten
- **Echtzeit-Cloud-Synchronisation**
- **Teilnehmerverwaltung** mit Status-Tracking
- **Workshop-Bearbeitung** für alle Veranstaltungstage
- **Medizinische Informationen** und Kommentare
- **Zimmerwechsel-Management**
- **Umfassende Filter** und Suchfunktionen
- **Datenexport** als Excel-Datei
 
## 👥 Benutzerrollen
 
### Admin (`admin`)
- **Passwort**: `jrk2024!`
- **Berechtigungen**: Vollzugriff inkl. Excel-Upload
 
### Leitung (`leitung`)
- **Passwort**: `jrk2024!`
- **Berechtigungen**: Management-Funktionen ohne Upload
 
### Teams (`team1`, `team2`, `team3`)
- **Passwort**: `checkin123`
- **Berechtigungen**: Check-in/Medizinische Bearbeitung
 
### Ortsgruppen
- **Weilheim**: `weilheim2024`
- **Peißenberg**: `peissenberg2024`
- **Peiting**: `peiting2024`
- **Penzberg**: `penzberg2024`
- **Kreisverband**: `kreisverband2024`
- **Berechtigungen**: Nur-Lesen mit Ortsgruppen-Filter
 
## 🛠️ Technische Details
 
### Frontend
- **HTML5** mit modernem CSS Grid/Flexbox
- **Vanilla JavaScript** (ES6+)
- **XLSX.js** für Excel-Verarbeitung
- **Responsive Design** für alle Geräte
 
### Backend (Vercel Serverless)
- **Node.js 18+** Runtime
- **Serverless Functions** für API-Endpunkte
- **In-Memory Storage** (für Demo-Zwecke)
- **CORS-aktiviert** für Cross-Origin-Requests
 
### API-Endpunkte
- `GET /api/data` - Datenverbindungstest
- `POST /api/participants` - Teilnehmerdaten speichern
- `POST /api/upload` - Excel-Upload verarbeiten
- `POST /api/checkin/[id]` - Status-Updates
 
## 📁 Dateistruktur
 
```
jrk-checkin-app/
├── index.html              # Haupt-Anwendung
├── package.json            # Node.js Konfiguration
├── vercel.json             # Vercel Deployment-Config
├── README.md               # Diese Datei
└── api/                    # Backend API
    ├── data.js             # Datenverbindung
    ├── participants.js     # Teilnehmerverwaltung
    ├── upload.js           # Excel-Upload
    └── checkin/
        └── [id].js         # Status-Updates
```
 
## 🚀 Deployment
 
### Vercel (Empfohlen)
1. Repository zu GitHub pushen
2. Mit Vercel verbinden
3. Automatisches Deployment
 
### Lokale Entwicklung
```bash
npm install -g vercel
vercel dev
```
 
## 📊 Excel-Format
 
Die App erwartet Excel-Dateien mit folgenden Spalten:
- **A**: Buchungsnummer
- **C**: Nachname
- **Vorname**: Automatisch erkannt
- **Alter**: Automatisch erkannt
- **AM (38)**: Zimmernummer
- **AN (39)**: Gebäude
- **AT (45)**: Ortsgruppe
- **AP-AS (41-44)**: Workshop-Spalten
 
## 🔧 Konfiguration
 
### Synchronisation
- **Intervall**: 10 Sekunden
- **Konfliktlösung**: Lokale Änderungen haben Priorität
- **Upload-Schutz**: Sync pausiert während Excel-Upload
 
### Sicherheit
- Rollenbasierte Berechtigungen
- Ortsgruppen-Filter für eingeschränkte Benutzer
- Sichere Passwort-Authentifizierung
 
## 🐛 Fehlerbehebung
 
### Cloud-Verbindung
- Status wird oben rechts angezeigt
- Bei Offline-Modus: Lokale Funktionen verfügbar
- Automatische Wiederverbindung alle 10 Sekunden
 
### Daten-Synchronisation
- Neue Excel-Uploads überschreiben alle Daten
- Status-Änderungen werden sofort synchronisiert
- Bei Fehlern: Lokale Änderungen bleiben erhalten
 
## 📝 Changelog
 
### Version 1.0.0
- Vollständige Neuentwicklung
- Cloud-Synchronisation implementiert
- Alle Synchronisationsprobleme behoben
- Produktionsreife Anwendung
 
## 📞 Support
 
Bei Fragen oder Problemen wenden Sie sich an das JRK-Team.
 
---
 
**© 2024 JRK Team - Alle Rechte vorbehalten**
 
