import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import Resetpassword from "./resetpassword";
import DashboardLayout from "./dashboard";
import Dashboard from "./overview";
import Customers from "./customer";
import Ticket from "./ticket";
 
const Report = () => <div>Account Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Resetpassword />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="tickets" element={<Ticket />} />
          <Route path="reports" element={< Report/>} />
        
        </Route>

        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;