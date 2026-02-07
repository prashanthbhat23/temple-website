import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      alert(res.data.message);
      setFormData({ name: "", mobile: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending message. Please try again later.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
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
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1.5rem" }}>
      <h1 style={{ textAlign: "center", color: "#6b1d1d" }}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={inputStyle}
          required
        ></textarea>

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
