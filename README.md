# 🧸 ToyTopia  
A Vibrant Kids Toy Store Platform — *Built with React + Vite*

Live URL: **http://toytopia-nsk.surge.sh/**  

---

## 🌟 Purpose  
**ToyTopia** is a colorful and engaging online marketplace designed to help families explore high-quality toys from local sellers. The platform allows users to browse toys, view detailed information, authenticate using email/Google, manage profiles, and interact with protected routes through a seamless and fully responsive UI.

---

## 🚀 Key Features  

### 🏠 Core Pages & Navigation
- Fully responsive layout for **mobile**, **tablet**, and **desktop**  
- Interactive **Navbar** with active routes  
- Dynamic user UI: login button OR user image + logout button  
- Persistent auth state using `onAuthStateChanged`  
- Beautiful **Footer** with important links  

### 🎠 Home Page
- **Swiper/Daisy Slider** with a minimum of 3 slides  
- **Popular Toys Section** (cards include: thumbnail, name, rating, quantity, price, View More)  
- Additional custom sections to enhance the homepage  

### 🔐 Authentication (Firebase)
- **Email & Password Login**  
- **Google Login**  
- Error & success feedback using **Toast/SweetAlert**  
- Password validation rules:
  - At least 1 uppercase  
  - At least 1 lowercase  
  - Minimum 6 characters  

### 🧾 Register Page
- Fields: Name, Email, PhotoURL, Password  
- Toggle **Show/Hide Password**  
- Redirect links between Login/Register  
- Functional **Forgot Password** page  
- Autofills email from login page → redirects to Gmail after reset request  

### 🔒 Protected Routes
- **Toy Details Page**  
  - Access only when logged in  
  - Displays all toy data  
  - Includes a **Try Now Form** (Name + Email) with success message on submit  
  - Page remains accessible after reload  
- **My Profile Page (Challenge)**  
  - View name, email, photoURL  
  - Update profile using `updateProfile()`  

### ➕ Extra Route  
- Additional meaningful protected route implemented as required  

### ⚙️ Environment Variables  
Firebase keys are securely stored using Vite environment variables (`.env`)

### ⚠️ 404 Page  
Custom Not Found page added  

### 🎨 UI & Experience  
- Vibrant and playful design  
- Smooth animations  
- Pleasant and kid-friendly theme  

---

## 📦 NPM Packages Used  

| Package | Purpose |
|--------|---------|
| **react-router-dom** | SPA routing |
| **firebase** | Authentication + config |
| **sweetalert2 / react-hot-toast** | Alerts & toasts |
| **swiper** | Homepage slider |
| **aos** *(if used)* | Scroll animations |
| **tailwindcss** | Styling |
| **@tailwindcss/vite** | Vite plugin for Tailwind |
| **@vitejs/plugin-react** | React support in Vite |

*(Include or remove based on your actual project setup.)*

---

## 🛠️ Tech Stack  
- **React**
- **Vite**
- **Firebase Authentication**
- **Tailwind CSS**
- **Surge Hosting**
- **ESLint (Custom)**

---

## 🌐 Live Link  
🔗 **http://toytopia-nsk.surge.sh/**

---

## 🧑‍💻 Author  
Developed by **Nafi**