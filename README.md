# 📁 Bases de dades — Google Sheets + Apps Script

A Google Sheets spreadsheet with a custom form interface powered by Google Apps Script, allowing users to **save, search, update and delete records** without touching the raw data sheet.

---

## 📋 Overview

This project was built as part of a school practice (PR2) to manage an audiovisual archive (videos, photos, music, sound effects) stored in Google Drive. The spreadsheet acts as a database with a user-friendly form.

---

## 🗂️ Spreadsheet Structure

| Sheet | Purpose |
|-------|---------|
| `Formulari` | The form interface where data is entered |
| `Dades` | The raw data table where records are stored |

### Form cells (Formulari)

| Cell | Field |
|------|-------|
| B3 | File number *(search field)* |
| B6 | Keyword |
| B8 | File name |
| B10 | Folder name |
| D6 | File type |
| D8 | Folder link |
| D10 | *(extra field)* |

---

## 🔘 Buttons & Functions

| Button | Function | Description |
|--------|----------|-------------|
| **Desar** | `Desar()` | Saves form data as a new row in `Dades` |
| **Cercar** | `Cercar()` | Searches for a record by file number and fills the form |
| **Netejar** | `Netejar()` | Clears all form fields |
| **Actualitzar** | `Actualitzar()` | Updates an existing record with the current form values |
| **Eliminar** | `Eliminar()` | Deletes a record after confirmation prompt |

---

## ⚙️ Setup

### 1. Create the spreadsheet
- Create a new Google Sheets file named **Bases de dades**
- Add two sheets: `Formulari` and `Dades`

### 2. Design the form
- Use cells `B3`, `B6`, `B8`, `B10`, `D6`, `D8`, `D10` for input
- Add data validation rules:
  - File number → Number only
  - File type → Dropdown list
  - Folder link → URL format

### 3. Add the script
- Go to **Extensions → Apps Script**
- Delete the default code
- Paste the contents of `Code.gs`
- Save

### 4. Assign scripts to buttons
For each button in the `Formulari` sheet:
1. Click the three dots `⋮` on the button
2. Select **Assign script**
3. Type the exact function name (e.g. `Netejar`)

---

## 📝 Code

```javascript
// Netejar — Clears all form fields
function Netejar() { ... }

// Desar — Saves a new record to Dades
function Desar() { ... }

// Cercar — Searches and fills the form
function Cercar() { ... }

// Actualitzar — Updates an existing record
function Actualitzar() { ... }

// Eliminar — Deletes a record with confirmation
function Eliminar() { ... }
```

> Full code available in `Code.gs`

---

## ⚠️ Common Issues

**Buttons run but nothing happens**
- Check that sheet names are spelled **exactly** as `Formulari` and `Dades` (case-sensitive)
- Make sure your data is in the correct cells (`B3`, `B6`, etc.)
- Test functions directly from Apps Script using the ▶️ Run button

**Permission error on first run**
- Click **Review permissions** and authorize the script with your Google account

---

## 🛠️ Built With

- [Google Sheets](https://sheets.google.com)
- [Google Apps Script](https://script.google.com) (JavaScript)
