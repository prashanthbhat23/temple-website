function SevaBookings() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Seva booking request submitted successfully. Temple office will contact you.");
  };

  return (
    <div>
      <h1>Seva / Pooja Booking</h1>

      <p>
        Devotees can book sevas and poojas by submitting the form below.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Devotee Name</label>
          <br />
          <input type="text" required />
        </div>

        <br />

        <div>
          <label>Mobile Number</label>
          <br />
          <input type="tel" required />
        </div>

        <br />

        <div>
          <label>Seva / Pooja Type</label>
          <br />
          <select required>
            <option value="">Select</option>
            <option>Abhisheka</option>
            <option>Archana</option>
            <option>Alankara</option>
            <option>Special Pooja</option>
          </select>
        </div>

        <br />

        <div>
          <label>Preferred Date</label>
          <br />
          <input type="date" required />
        </div>

        <br />

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default SevaBookings;
