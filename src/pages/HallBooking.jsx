import React, { useState } from "react";

function HallBooking() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    eventType: "",
    eventDate: "",
    guests: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/hall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          guests: Number(formData.guests), // 🔑 IMPORTANT
        }),
      });

      const data = await res.json();
      alert(data.message);

      setFormData({
        name: "",
        mobile: "",
        eventType: "",
        eventDate: "",
        guests: "",
        requirements: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting Hall booking. Try again later.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#6b1d1d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1.5rem", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", color: "#6b1d1d" }}>Hall Booking</h1>
      <p style={{ textAlign: "center" }}>
        Temple hall is available for Marriage, Upanayana, Naming Ceremony, Poojas and other events.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Devotee Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />

        <label>Mobile Number</label>
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} style={inputStyle} required />

        <label>Event Type</label>
        <select name="eventType" value={formData.eventType} onChange={handleChange} style={inputStyle} required>
          <option value="">Select</option>
          <option>Marriage</option>
          <option>Upanayana</option>
          <option>Naming Ceremony</option>
          <option>Pooja / Homam</option>
          <option>Other Event</option>
        </select>

        <label>Event Date</label>
        <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} style={inputStyle} required />

        <label>Expected Number of Guests</label>
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} style={inputStyle} required />

        <label>Additional Requirements</label>
        <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows="4" style={inputStyle}></textarea>

        <button type="submit" style={buttonStyle}>Submit Booking Request</button>
      </form>
    </div>
  );
}

export default HallBooking;
