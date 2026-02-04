import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    padding: "1rem",
    backgroundColor: "#6b1d1d", // temple maroon
    borderBottom: "3px solid #c9a24d", // golden touch
  };

  const linkStyle = {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "15px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/gallery" style={linkStyle}>Gallery</Link>
      <Link to="/donation" style={linkStyle}>Donation</Link>
      <Link to="/seva-bookings" style={linkStyle}>Seva Bookings</Link>
      <Link to="/hall-booking" style={linkStyle}>Hall Booking</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
