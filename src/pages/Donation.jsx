import React, { useState } from "react";

function Donation() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    purpose: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", mobile: "", purpose: "", amount: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error submitting donation. Try again later.");
    }
  };

  const inputStyle = { width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" };
  const buttonStyle = { padding: "10px 20px", backgroundColor: "#6b1d1d", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1.5rem", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center", color: "#6b1d1d" }}>Temple Donation</h1>
      <p style={{ textAlign: "center" }}>Contribute towards temple maintenance, poojas, annadanam and other religious activities.</p>

      <form onSubmit={handleSubmit}>
        <label>Devotee Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" style={inputStyle} required />

        <label>Mobile Number</label>
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" style={inputStyle} required />

        <label>Donation Purpose</label>
        <select name="purpose" value={formData.purpose} onChange={handleChange} style={inputStyle} required>
          <option value="">Select</option>
          <option>General Donation</option>
          <option>Annadanam</option>
          <option>Pooja / Seva</option>
          <option>Temple Development</option>
        </select>

        <label>Donation Amount (₹)</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} style={inputStyle} required />

        <label>Message (Optional)</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Any message" style={inputStyle}></textarea>

        <button type="submit" style={buttonStyle}>Proceed to Donate</button>
      </form>
    </div>
  );
}

export default Donation;
