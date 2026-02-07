const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Create Express app
const app = express();
app.use(cors());
app.use(express.json()); // parse JSON

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Prash@555", // replace with your root password
  database: "temple_db",           // make sure this DB exists
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("DB connection error:", err);
    return;
  }
  console.log("Connected to MySQL database: temple_db");
});

// ======================
// API Routes
// ======================

// 1️⃣ Contact Form
app.post("/api/contact", (req, res) => {
  const { name, mobile, message } = req.body;
  const query = "INSERT INTO contact (name, mobile, message) VALUES (?, ?, ?)";
  db.query(query, [name, mobile, message], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error saving contact message" });
    }
    res.json({ message: "Message sent successfully!" });
  });
});

// 2️⃣ Donation Form
app.post("/api/donation", (req, res) => {
  const { name, mobile, purpose, amount, message } = req.body;
  const query = "INSERT INTO donation (name, mobile, purpose, amount, message) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, mobile, purpose, amount, message], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error saving donation" });
    }
    res.json({ message: "Donation intention submitted!" });
  });
});
app.post("/api/hall", (req, res) => {
  const {
    name,
    mobile,
    eventType,
    eventDate,
    guests,
    requirements,
  } = req.body;

  // 🔒 Hard validation
  if (!name || !mobile || !eventType || !eventDate || !guests) {
    return res.status(400).json({
      message: "All required fields must be filled",
    });
  }

  const guestsNumber = parseInt(guests, 10);

  if (isNaN(guestsNumber) || guestsNumber <= 0) {
    return res.status(400).json({
      message: "Guests must be a valid number",
    });
  }

  const query = `
    INSERT INTO hallbooking
    (name, mobile, eventType, eventDate, guests, requirements)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      name,
      mobile,
      eventType,
      eventDate,
      guestsNumber,
      requirements || null,
    ],
    (err) => {
      if (err) {
        console.error("Hall booking DB error:", err);
        return res.status(500).json({
          message: "Error saving hall booking",
        });
      }

      res.json({ message: "Hall booking request submitted!" });
    }
  );
});


// 4️⃣ Seva / Pooja Booking Form
app.post("/api/seva", (req, res) => {
  const { name, mobile, sevaType, date } = req.body;
  const query = "INSERT INTO sevabooking (name, mobile, sevaType, date) VALUES (?, ?, ?, ?)";
  db.query(query, [name, mobile, sevaType, date], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error saving seva booking" });
    }
    res.json({ message: "Seva booking request submitted!" });
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
