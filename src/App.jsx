import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import Login from './Pages/Login';
import MyProfile from './Pages/Myprofile';
import Footer from './Component/Footer';
import DoctorProfile from './Pages/Doctorprofile';
import RelatedDoctor from './Component/Relateddoctor';
import Register from './Pages/Register';



function App() {
  return (
    <Router>

      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment/:id" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/Doctorprofile" element={<DoctorProfile />} />
          <Route path="/Doctorprofile/:id" element={<DoctorProfile />} />
          <Route path="/Relateddoctor/:id" element={<RelatedDoctor />} />
          <Route path="/Relateddoctor" element={<RelatedDoctor />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
