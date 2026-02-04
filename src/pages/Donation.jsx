function Donation() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your donation intention. Online payment will be enabled after temple approval."
    );
  };

  return (
    <div>
      <h1>Temple Donation</h1>

      <p>
        Devotees can contribute towards temple maintenance, poojas,
        annadanam and other religious activities.
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
          <label>Donation Purpose</label>
          <br />
          <select required>
            <option value="">Select</option>
            <option>General Donation</option>
            <option>Annadanam</option>
            <option>Pooja / Seva</option>
            <option>Temple Development</option>
          </select>
        </div>

        <br />

        <div>
          <label>Donation Amount (₹)</label>
          <br />
          <input type="number" required />
        </div>

        <br />

        <div>
          <label>Message (Optional)</label>
          <br />
          <textarea rows="3"></textarea>
        </div>

        <br />

        <button type="submit">Proceed to Donate</button>
      </form>
    </div>
  );
}

export default Donation;
