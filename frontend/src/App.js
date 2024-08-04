import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home.jsx';
import About from './Components/pages/About.js';
// import Services from './Components/pages/Services';
// import Portfolio from './Components/pages/Portfolio';
import SignUp from './Components/pages/SignUp.js';
import Contact from './Components/pages/Contact.js';
import Navbar from './Components/pages/Navbar';
import './App.css'; 

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
         <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="footer  pb-3 ms-3">
        <h4 className="text-center">
          All rights reserved by Harsh Patil &copy; 2024
        </h4>
      </div>
    </>
  );
}

export default App;
