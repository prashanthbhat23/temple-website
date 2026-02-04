import React from "react";
import { Routes, Route } from "react-router-dom";



// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import SevaBookings from "./pages/SevaBookings";
import HallBooking from "./pages/HallBooking";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/seva-bookings" element={<SevaBookings />} />
        <Route path="/hall-booking" element={<HallBooking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
