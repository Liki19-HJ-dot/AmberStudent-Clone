AmberStudent Clone 🌐
A React.js-based replica of AmberStudent, developed as part of a NxtWave sprint assignment. This project aims to replicate the design, responsiveness, and authentication features of the original platform.

🔍 Objective
The goal of this assignment is to closely replicate the AmberStudent website in both design and functionality using React.js, while implementing features like:

UI component replication

Responsive design

Navigation with React Router

User Authentication using Local Storage

Performance optimization (lazy loading & code splitting)

State Management using Context API or Redux

🚀 Live Preview
📍 Local: http://localhost:5173/
(Replace with your deployed link when ready)

📂 Folder Structure
php
Copy
Edit
amberstudent-clone/
├── public/
├── src/
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # Reusable components (Navbar, Footer, etc.)
│   ├── pages/            # Individual pages (Home, Login, etc.)
│   ├── routes/           # Routing setup
│   ├── context/          # Context API (Auth)
│   ├── utils/            # Helper functions
│   ├── App.js
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
🔧 Technologies Used
React.js

React Router DOM

Context API (for authentication state)

Local Storage (for user session)

Vite (for fast bundling)

CSS/SCSS or Tailwind CSS (based on your setup)

✅ Features Implemented
1. Design Replication
✔️ Home page UI closely matches the original AmberStudent site

✔️ Responsive design across mobile, tablet, and desktop

✔️ Header, Footer, Cards, and Sliders created as reusable components

✔️ Navigation handled using React Router DOM

2. Authentication
✔️ Sign Up & Login pages

✔️ User authentication via Local Storage

✔️ Protected routes (Dashboard/Profile) requiring login

3. State Management & Optimization
✔️ Global auth state managed using React Context API

✔️ Lazy loading of components with React.lazy and Suspense

✔️ Code splitting to improve performance

📄 How I Built It
🔍 Step-by-Step Process
Analyzed amberstudent.com using DevTools to understand layout, media queries, and components.

Mapped out components like navbar, footer, hero section, etc.

Used React Router DOM to handle route navigation (/home, /login, /signup, /dashboard).

Built components using CSS Flexbox and/or Tailwind CSS for responsiveness.

Set up authentication logic using localStorage and useContext.

Implemented protected routes using custom PrivateRoute logic.

Added lazy loading for heavy components like the dashboard.

Wrote clear comments and modular code for reusability.

🧪 Run Locally
⚙️ Installation
bash
Copy
Edit
git clone https://github.com/your-username/amberstudent-clone.git
cd amberstudent-clone
npm install
npm run dev
Then open your browser at http://localhost:5173

🔒 Authentication Logic
On Sign Up → Save user data to localStorage

On Login → Match credentials from localStorage and log user in

Store auth state in AuthContext

Wrap protected routes using a PrivateRoute component

📸 Screenshots
(Add screenshots of your pages here for better understanding)

📘 Future Improvements
Integration with backend (Node.js / Firebase)

Google OAuth login

Dynamic content from a CMS or API

Dashboard with real-time user data

📑 License
This project is for educational/demo purposes only. Not affiliated with AmberStudent.

Let me know if you want help creating:

Specific components

Authentication logic

Protected route setup

Responsive layouts with Tailwind or CSS Grid
