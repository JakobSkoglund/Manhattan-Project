//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import  Home  from "./Pages/Home";
import  About  from "./Pages/About"; 
import  Footer  from "./components/Footer";
import  Navbar from "./components/Navbar"; 
import './App.css'

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
  </Router>
  )
}

export default App
