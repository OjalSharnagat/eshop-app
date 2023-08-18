import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar/Navbar";
import Home from "./components/Home/Home";
import SignupForm from "./components/SignUp/signUp";
import axios  from 'axios';
import LoginForm from "./components/Login/login";

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    
      
    </>
  );
}

export default App;
