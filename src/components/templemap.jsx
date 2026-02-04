import React from "react";

function TempleMap() {
  return (
    <section style={{ marginTop: "2rem", textAlign: "center" }}>
      <h2>📍 Find Us</h2>
      <div
        style={{
          margin: "1rem auto",
          maxWidth: "800px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <iframe
          title="Temple Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.773963720017!2d75.00718257548533!3d12.719799812507695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba49f9f31354d17%3A0x27c81487714e74b1!2sPadyana%20Shree%20Mahalingeshwara%20Temple!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin"

          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default TempleMap;
