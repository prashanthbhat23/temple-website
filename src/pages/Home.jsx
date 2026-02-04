import React from "react";
import { Link } from "react-router-dom";
import templeImage from "../assets/temple.jpeg";

function Home() {
  const containerStyle = {
    textAlign: "center",
    padding: "2rem",
  };

  const imgStyle = {
    width: "90%",
    maxWidth: "800px",
    margin: "1.5rem auto",
    borderRadius: "12px",
  };

  const sectionStyle = {
    marginTop: "3rem",
  };

  const buttonStyle = {
    margin: "0.5rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#6b1d1d",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "bold",
  };

  const cardStyle = {
    maxWidth: "800px",
    margin: "1rem auto",
    padding: "1.5rem",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <h1>Shree Mahalingeshwara Temple, Padyana</h1>
      <p>
        A sacred place of devotion, peace, and ancient tradition.
      </p>

      <img src={templeImage} alt="Temple" style={imgStyle} />

      {/* Quick Links */}
      <section style={sectionStyle}>
        <h2>Quick Services</h2>
        <div>
          <Link to="/seva-bookings" style={buttonStyle}>Book Seva</Link>
          <Link to="/hall-booking" style={buttonStyle}>Book Hall</Link>
          <Link to="/donation" style={buttonStyle}>Donate</Link>
        </div>
      </section>

      {/* About Temple */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>About the Temple</h2>
          <p>
            Shree Mahalingeshwara Temple at Padyana is a spiritually significant
            place where devotees gather to seek blessings, peace, and prosperity.
            The temple follows age-old traditions and rituals passed down through generations.
          </p>
        </div>
      </section>

      {/* Poojas & Sevas */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Poojas & Sevas</h2>
          <p>
            Daily poojas, special sevas, and festival rituals are conducted
            with great devotion. Devotees can participate by booking sevas online.
          </p>
          <Link to="/seva-bookings" style={buttonStyle}>
            View Sevas
          </Link>
        </div>
      </section>

      {/* Hall Booking */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Temple Hall Booking</h2>
          <p>
            The temple provides a well-maintained hall for marriages,
            upanayana, poojas, and other religious events.
          </p>
          <Link to="/hall-booking" style={buttonStyle}>
            Book Hall
          </Link>
        </div>
      </section>

      {/* Festivals */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Festivals & Events</h2>
          <p>
            Annual festivals and special occasions are celebrated with
            great devotion and participation from devotees.
          </p>
          <Link to="/gallery" style={buttonStyle}>
            View Gallery
          </Link>
        </div>
      </section>

      {/* Donation */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h2>Support the Temple</h2>
          <p>
            Your donations help in temple maintenance, daily poojas,
            annadanam, and community services.
          </p>
          <Link to="/donation" style={buttonStyle}>
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
