import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use the signIn function from AuthContext

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data); // Use the signIn function to update authentication status
        navigate("/"); // Redirect after successful login
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred while logging in");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default LoginForm;
