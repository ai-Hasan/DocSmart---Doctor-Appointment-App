import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";

import About from "./pages/About";
import Appointment from "./pages/Appointment";

import MyAppointment from "./pages/MyAppointment";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[9%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/appointment/:docId" element={<Appointment />} />

        <Route path="/about" element={<About />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
