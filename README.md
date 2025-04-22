# User Management & Dashboard System – Frontend

This is the **frontend** part of a full-stack web application that includes **User Authentication** (Sign Up, Sign In, Reset Password) and a **Dashboard** for managing **Customers** and **Tickets**. Built with **ReactJS**, the app communicates with a backend server via **REST APIs**.

---

## Table of Contents

- Project Title  
- Technologies Used  
- Features  
- Frontend Setup  
- Project Structure  
- Best Practices & Tips  
- License  

---

## Project Title

**User Management & Dashboard System (Frontend)**

A modern React-based UI for user account management and dashboard overview of customers and tickets.

---

## Technologies Used

- **ReactJS**
- **React Router**
- **Bootstrap**
- **CSS**
- **HTML**
- **JavaScript**

---

## Features

- **Authentication**  
  - Sign Up: Register new users  
  - Sign In: Login existing users  
  - Reset Password: Request and update passwords

- **Dashboard**  
  - View list of customers  
  - View list of support tickets  

- **Responsive Design**  
  - Clean and responsive layout using Bootstrap

---

## Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/user-dashboard.git
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd user-dashboard/frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

   By default, the app runs on [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/       # Reusable components (forms, navbar, etc.)
│   ├── pages/            # Page views (Sign In, Sign Up, Dashboard, etc.)
│   ├── services/         # API service layer
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

---

## Best Practices & Tips

- **Code Separation**: Keep services (API calls) in a separate folder to maintain clean separation of concerns.
- **Environment Variables**: Store backend API URL in `.env` using `REACT_APP_API_BASE_URL`.
- **Form Validation**: Use built-in form validation and meaningful error messages.
- **Responsive UI**: Leverage Bootstrap’s grid system and utility classes.
- **Token Handling**: Store JWT tokens securely in localStorage or cookies and handle them through `axios` interceptors.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](../LICENSE) file for more information.
