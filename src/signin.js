import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios for HTTP requests
import './App.css';

function Signin() {
  const navigate = useNavigate();

  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To store error messages
  const [loading, setLoading] = useState(false);  // To handle loading state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    setError("");     // Clear any old error
  
    try {
      // Make API request to login
      const response = await axios.post("http://localhost:3001/api/auth/signin", {
        email: email,
        password: password,
      });

      // Check if the response has the access token
      if (response.data && response.data.accessToken) {
        // Store the token and user info in localStorage
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data));

        // Redirect to Dashboard
        navigate("/dashboard"); // Correct navigation to dashboard
      } else {
        throw new Error("No token received from the server");
      }
    } catch (err) {
      console.error(err);  // Log error to the console
      // Check if the error is from the response and handle accordingly
      if (err.response) {
        // Backend error response (e.g., invalid email/password)
        setError(err.response.data.message || "Invalid email or password!");
      } else if (err.request) {
        // Request made but no response received (network issue)
        setError("Network error. Please try again.");
      } else {
        // Something went wrong during setup
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading whether success or error
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Sign In</h1>
        <h4>Don't have an account? <a href="/signup">Sign up</a></h4>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}

        <form className="signin-form" onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
          <a href="/forgot">Forgot password?</a>

          <button type="submit" disabled={loading}>
            {loading ? "Signing In..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
