import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import About from "./pages/About";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
         

   
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
