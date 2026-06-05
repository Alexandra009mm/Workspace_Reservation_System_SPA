# Workspace Reservation System SPA

##  Description

The application is a workspace booking system where users can authenticate, navigate protected routes, and manage information consumed from a simulated API.

---

##  Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Tailwind CSS
* Fetch API
* JSON Server
* LocalStorage
* Vite
* Node.js

---

##  Project Structure

```text
.
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── README.md
├── src
│   ├── api
│   │   └── http.js
│   ├── assets
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── components
│   │   ├── ReservationCard.js
│   │   └── Sidebar.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   ├── login.controller.js
│   │   └── reservation.controller.js
│   ├── main.js
│   ├── router
│   │   └── router.js
│   ├── services
│   │   └── reservation.service.js
│   ├── style.css
│   ├── utils.js
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       ├── notFound.js
│       └── reservations.js
└── vite.config.js

```

---

##  Prerequisites

* Node.js
* npm
* Git

Verify installation:

```bash
node -v
npm -v
git --version
```

---

##  Installation

Clone the repository:

```bash
git clone [REPOSITORY_URL]
```

Navigate to the project directory:

```bash
cd PerformanceTestJS-PDM3-C5-Alexandra
```

Install dependencies:

```bash
npm install
```

---

## ▶ Execution / Running the Project

### Run everything

```bash
npm run dev
```
---

## 🗄️ Database

### db.json

```json
{
  "users": [],
  "reservations": []
}
```

---

##  Features

✅ User registration

✅ User login


✅ Session persistence

✅ Full CRUD operations

✅ REST API consumption


✅ Error handling

---

##  System Roles


| Role    | Permissions           |
| ------- | --------------------- |
| Admin   | Full access           |
| User    | View information      |

---

##  Endpoints Used


### db.json

```http
GET /items
POST /items
PUT /items/:id
DELETE /items/:id
```

---

## Available Scripts
```json
{
    "dev": "concurrently \"vite\" \"json-server --watch db.json --port 3002\"",
    "build": "vite build",
    "preview": "vite preview"
}
```

##  Documentation

* JSON Server
* Fetch
* Vite
* Tailwind CSS

---

##  Author

**[Alexandra Peña Orozco]**

* GitHub: Alexandra009mm
* LinkedIn: https://github.com/Alexandra009mm/

---
