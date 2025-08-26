# Calculator App (Node.js + React)

Mobile-style calculator with React frontend and Node.js backend. Supports `+`, `-`, `*`, `/`.

---

## Setup & Run

```bash
# Clone repo
git clone <your-repo-url>
cd <your-repo-folder>

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Start apps
cd ../backend && node server.js
cd ../frontend && npm start
```

Open `http://localhost:3000` in your browser.

---

## Usage

- Press numbers and operations
- Press `=` to calculate
- Press `Clear` to reset

---

## API

**POST** `/calculate`

```json
{ "num1": "5", "num2": "2", "operation": "+" }
```

Response:

```json
{ "result": 7 }
```

---

## Tech Stack

React + TypeScript + CSS + Node.js + Axios
