
import Header from "../src/Component/Header"


import "./index.css";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Contact from "./pages/Contact";
import Signup from "./pages/signup";

function App() {
  
  return (
    <>



      <Header />
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/About" index element={<About/>} />
        <Route path="/Contact" index element={<Contact/>} />
        <Route path="/Login" element={<Login/>} /> 
        <Route path="/Signup" element={<Signup/>} /> 
        <Route path="*" element={<Navigate to="/login" replace={true}/>} /> 
        

            </Routes>
        
           
    </>
  )
}

export default App
