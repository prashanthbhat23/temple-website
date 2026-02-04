function HallBooking() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Hall booking request submitted successfully. Temple office will contact you for confirmation."
    );
  };

  return (
    <div>
      <h1>Hall Booking</h1>

      <p>
        Temple hall is available for Marriage, Upanayana, Naming Ceremony,
        Poojas and other religious events.
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
          <label>Event Type</label>
          <br />
          <select required>
            <option value="">Select</option>
            <option>Marriage</option>
            <option>Upanayana</option>
            <option>Naming Ceremony</option>
            <option>Pooja / Homam</option>
            <option>Other Event</option>
          </select>
        </div>

        <br />

        <div>
          <label>Event Date</label>
          <br />
          <input type="date" required />
        </div>

        <br />

        <div>
          <label>Expected Number of Guests</label>
          <br />
          <input type="number" required />
        </div>

        <br />

        <div>
          <label>Additional Requirements</label>
          <br />
          <textarea rows="4"></textarea>
        </div>

        <br />

        <button type="submit">Submit Booking Request</button>
      </form>
    </div>
  );
}

export default HallBooking;
