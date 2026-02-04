import React from "react";

function About() {
  const containerStyle = {
    padding: "2rem",
    maxWidth: "900px",
    margin: "auto",
    lineHeight: "1.8",
  };

  return (
    <div style={containerStyle}>
      <h1>About the Temple</h1>

      <p>
        Our temple is a sacred place of worship, devotion, and spiritual
        learning. Devotees from nearby villages and towns visit regularly to
        seek blessings and participate in poojas and sevas.
      </p>

      <p>
        The temple has a rich history and follows traditional rituals and
        customs. Special poojas, festivals, and cultural programs are conducted
        throughout the year.
      </p>

      <p>
        Along with daily worship, the temple also provides facilities for
        conducting religious events such as marriages, upanayana, and other
        spiritual functions.
      </p>
    </div>
  );
}

export default About;
