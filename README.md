# 🐾 PawMart - Pet Services & Supplies Portal

**PawMart** is a full-stack web application designed to connect pet owners with essential services and products. It serves as a comprehensive marketplace where users can browse pet toys, book services, and manage their own service listings.

<p align="center">
  <img 
    src="https://i.ibb.co/bRyvyCjN/image-fotor-20251231233911.jpg" 
    alt="PawMart Screenshot" 
    width="800"
  />
</p>

## 🔗 Live Links
- **Client (Frontend):** [https://pawmart-639fe.web.app](https://pawmart-639fe.web.app)
- **Server (Backend API):** [https://b12-a11-pawmart-server.vercel.app](https://b12-a11-pawmart-server.vercel.app)

## 📂 Source Code
- **Frontend Repository:** [GitHub - PawMart Client](https://github.com/nafisadman/b12-a11-pawmart-client)
- **Backend Repository:** [GitHub - PawMart Server](https://github.com/nafisadman/b12-a11-pawmart-server)

---

## ✨ Key Features

* **🔐 Secure Authentication System:** * Implements Firebase Authentication for secure Email/Password login and registration.
    * Includes **Social Login** (Google) for quick one-click access.
    * Protected routes ensure sensible data (like bookings) is only accessible to logged-in users.

* **🛠️ Service Management (CRUD):** * Users can **Add** their own pet services or products to the marketplace.
    * Users can **Update** details of their existing listings.
    * A dedicated "My Services" page allows users to manage and delete their contributions.

* **📦 Booking & Order Tracking:** * Users can book services offered by others.
    * The "My Orders" page displays a personalized list of all booked services with status updates.

* **🔍 Interactive Toy/Service Browsing:** * Features a dynamic homepage with a **Slider/Banner** and featured sections (Hero Figure, Q-Zone).
    * **Details Page:** Users can click "View Details" on any item to see comprehensive information, pricing, and provider data.

* **📱 Responsive & Modern UI:** * Built with **React + Vite** for blazing-fast performance.
    * Fully responsive layout that adapts seamlessly to desktop, tablet, and mobile devices.
    * Includes engaging UI components like Customer Reviews and dynamic Footers.

---

## 💻 Tech Stack

**Frontend:**
* React.js
* Vite
* Tailwind CSS (Implied for styling)
* Firebase (Authentication & Hosting)
* React Router DOM

**Backend:**
* Node.js
* Express.js
* MongoDB (Database)
* Vercel (Deployment)

---

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/nafisadman/b12-a11-pawmart-client.git](https://github.com/nafisadman/b12-a11-pawmart-client.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd nafisadman-b12-a11-pawmart-client
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up Environment Variables:**
    * Create a `.env.local` file in the root directory.
    * Add your Firebase configuration keys (VITE_apiKey, VITE_authDomain, etc.).

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
