import React, { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3001/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password, contactNumber }),
      });

      if (response.ok) {
        // Handle successful signup, e.g., show a success message
        alert('Login Successful');
      } else {
        setError("An error occurred while signing up");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An error occurred while signing up");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
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
      {/* TODO: Add phone number input */}
      <input 
        type="number"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e)=>setContactNumber(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default SignupForm;
