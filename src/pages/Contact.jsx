function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <p>
        For any queries regarding poojas, sevas, hall booking or donations,
        please contact the temple office.
      </p>

      <h3>Temple Address</h3>
      <p>
        [Your Temple Name] <br />
        [Temple Area / Village] <br />
        [District, State]
      </p>

      <h3>Phone</h3>
      <p>
        +91 XXXXXXXXXX
      </p>

      <h3>Email</h3>
      <p>
        temple@email.com
      </p>

      <h3>Send a Message</h3>

      <form>
        <div>
          <label>Your Name</label>
          <br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Mobile Number</label>
          <br />
          <input type="tel" placeholder="Enter mobile number" />
        </div>

        <br />

        <div>
          <label>Your Message</label>
          <br />
          <textarea rows="4" placeholder="Write your message"></textarea>
        </div>

        <br />

        <button type="submit">Send Message</button>
      </form>

      <p>
        <small>
          * Temple office will respond during working hours.
        </small>
      </p>
    </div>
  );
}

export default Contact;
