import React, { useState } from "react";

function SevaBookings() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    sevaType: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/seva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", mobile: "", sevaType: "", date: "" });
    } catch (err) {
      console.error(err);
      alert("Error submitting seva booking. Try again later.");
    }
  };

  const inputStyle = { width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" };
  const buttonStyle = { padding: "10px 20px", backgroundColor: "#6b1d1d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1.5rem", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", color: "#6b1d1d" }}>Seva / Pooja Booking</h1>
      <p style={{ textAlign: "center" }}>Book sevas and poojas by submitting the form below.</p>

      <form onSubmit={handleSubmit}>
        <label>Devotee Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" style={inputStyle} required />

        <label>Mobile Number</label>
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" style={inputStyle} required />

        <label>Seva / Pooja Type</label>
        <select name="sevaType" value={formData.sevaType} onChange={handleChange} style={inputStyle} required>
          <option value="">Select</option>
          <option>Abhisheka</option>
          <option>Archana</option>
          <option>Alankara</option>
          <option>Special Pooja</option>
        </select>

        <label>Preferred Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} required />

        <button type="submit" style={buttonStyle}>Submit Booking</button>
      </form>
    </div>
  );
}

export default SevaBookings;
