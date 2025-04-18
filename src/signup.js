import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function Signup() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  // Form field states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(""); // To store error messages

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    setError(""); // Reset error state on form submit

    try {
      const response = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          role: "user"
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        // Optionally, save the user data to localStorage or a token
        localStorage.setItem("user", JSON.stringify(data.user));
        
        // Redirect to Signin page after successful signup
        navigate("/");  // Redirect to signin page after successful signup
      } else {
        setError("Signup failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading after request completion
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Sign Up</h1>
        <h4>
          Already have an account? <a href="/">Sign In</a>
        </h4>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}

        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className="checkbox-text">
              I have read the <span className="terms-link">terms and conditions</span>
            </span>
          </label>

          <button type="submit" disabled={loading || !isChecked}>
            {loading ? "Signing Up..." : "SIGN UP"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
