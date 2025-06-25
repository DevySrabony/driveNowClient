# 🏎️ DriveNow – Car Rental Web App

**DriveNow** is a full-stack car rental web application where users can browse available cars, book rentals, and manage their own listings. It offers a sleek UI, protected user actions, and real-time booking functionality.

🌐 **Live Site:** [https://drivenow-client.netlify.app](https://drivenow-client.netlify.app)
🔗 **Server Repo:** [https://github.com/DevySrabony/driveNowServer](https://github.com/DevySrabony/driveNowServer)

---

## 🖼️ Screenshot


## 🧰 Tech Stack

### 🔹 Frontend:

* React
* React Router
* Tailwind CSS + DaisyUI
* Axios
* Firebase Authentication
* React Hook Form
* Recharts

### 🔹 Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* dotenv, cors

### 🔹 Deployment:

* Frontend: **Netlify**
* Backend: **Render / Vercel**

---

## ✨ Key Features

* 🚗 Browse available cars with filter & sort
* 📟 Book a car with booking form & confirmation modal
* ➕ Add your own cars (only for authenticated users)
* 🗂️ “My Cars” page to edit/delete user’s own listings
* 🧑‍💻 “My Bookings” page with cancel & date modification
* 🔐 JWT-protected private routes
* 🌙 Dark/Light theme toggle
* 📈 Booking fee visualized using Recharts
* 🔐 Secure login/signup with Firebase Auth

---

## 📦 Dependencies

### Client:

```bash
react, react-router-dom, tailwindcss, daisyui, firebase,
axios, react-hook-form, recharts, react-icons
```

### Server:

```bash
express, mongodb, cors, dotenv, jsonwebtoken, bcryptjs
```

---

## ⚙️ Getting Started (Local Setup)

### 1️⃣ Clone both repos:

```bash
git clone https://github.com/DevySrabony/driveNowClient.git
git clone https://github.com/DevySrabony/driveNowServer.git
```

### 2️⃣ Frontend Setup:

```bash
cd driveNowClient
npm install
npm run dev
```

📅 Create `.env` file:

```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_api_key
...
```

### 3️⃣ Backend Setup:

```bash
cd driveNowServer
npm install
npm run dev
```

📅 Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🔗 Useful Links

* 🔴 **Live Site:** [https://drivenow-client.netlify.app](https://drivenow-client.netlify.app)
* 🐙 **Client Repo:** [https://github.com/DevySrabony/driveNowClient](https://github.com/DevySrabony/driveNowClient)
* 📦 **Server Repo:** [https://github.com/DevySrabony/driveNowServer](https://github.com/DevySrabony/driveNowServer)

---

> 💬 Developed with care by **Srabony Devy**
> ✨ *Learning through building real-world apps*
