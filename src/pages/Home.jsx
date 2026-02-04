import React from "react";
import { Link } from "react-router-dom";
import templeImage from "../assets/temple.jpeg";
import TempleMap from "../components/templemap";



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

  return (
    <div style={containerStyle}>
      

      {/* ===== Mini Title Card ===== */}
      {/* ===== Mini Title Card ===== */}
<section
  style={{
    backgroundColor: "#f5efe6",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // centers content horizontally
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    margin: "2rem auto",
    textAlign: "center", // extra safety
  }}
>
  <h1
    style={{
      color: "#6b1d1d",
      fontSize: "2.5rem",
      margin: "0 0 10px 0",
      lineHeight: "1.2",
    }}
  >
    Shree Mahalingeshwara Temple
  </h1>
  <p
    style={{
      color: "#2c2c2c",
      fontSize: "1.2rem",
      margin: 0,
      lineHeight: "1.4",
    }}
  >
    Divine Peace, Devotion & Tradition
  </p>
</section>


      {/* Hero / Temple Image */}
      <img src={templeImage} alt="Temple" style={imgStyle} />

      {/* About Section */}
      <section style={sectionStyle}>
        <h2>About the Temple</h2>
        <p>
          Shree Mahalingeshwara Temple, Padyana is an ancient and spiritually
          significant temple located in Dakshina Kannada. The temple is known for
          its serene atmosphere and traditional poojas performed with devotion.
        </p>
      </section>

      {/* Notice Section */}
      <section style={sectionStyle}>
        <h2>📢 Temple Notices & Announcements</h2>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "#fffaf2",
            border: "1px solid #e0c28c",
            borderRadius: "8px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>🛕 <strong>Maha Shivaratri</strong> – Special Abhisheka on <strong>8th March</strong></li>
            <li>🔔 <strong>Monthly Pradosha Pooja</strong> – Every 13th day</li>
            <li>🎉 <strong>Temple Annual Festival</strong> – April 2026</li>
            <li>🙏 Devotees can book Sevas online</li>
          </ul>
        </div>
      </section>

      {/* Pooja Timings */}
      <section style={sectionStyle}>
        <h2>Daily Pooja Timings</h2>
        <p>Morning Pooja: 7:00 AM – 8:30 AM</p>
        <p>Afternoon Pooja: 12:00 PM – 1:00 PM</p>
        <p>Evening Pooja: 6:30 PM – 8:30 PM</p>
      </section>

      {/* Sevas */}
      <section style={sectionStyle}>
        <h2>Special Sevas</h2>
        <p>Abhisheka, Archana, Rudrabhisheka, Sahasranama Pooja</p>
      </section>

      {/* Festivals */}
      <section style={sectionStyle}>
        <h2>Festivals Celebrated</h2>
        <p>
          Maha Shivaratri, Annual Jatra Mahotsava, Kartika Masa special poojas
          conducted with great devotion.
        </p>
      </section>

      {/* Quick Links */}
      <section style={sectionStyle}>
        <h2>Quick Actions</h2>
        <div>
          <Link to="/seva-bookings" style={buttonStyle}>Book Seva</Link>
          <Link to="/hall-booking" style={buttonStyle}>Book Hall</Link>
          <Link to="/donation" style={buttonStyle}>Donate</Link>
        </div>
      </section>

      {/* Map */}
      <section style={sectionStyle}>
        <h2>📍 Find Us</h2>
        <TempleMap />
      </section>

    </div>
  );
}

export default Home;
