import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#f5efe6",
    borderTop: "2px solid #c9a24d",
    textAlign: "center",
    fontSize: "14px",
  };

  const titleStyle = {
    fontWeight: "bold",
    color: "#6b1d1d",
    marginBottom: "8px",
  };

  const linkStyle = {
    color: "#6b1d1d",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const iconRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "12px 0",
    fontSize: "22px",
  };

  const iconStyle = {
    color: "#6b1d1d",
    cursor: "pointer",
  };

  return (
    <footer style={footerStyle}>
      <div style={titleStyle}>Shree Mahalingeshwara Temple Padyana</div>

      <p>Karopady / 574279, Dakshina Kannada, Karnataka</p>

      <p>Contact: +91 XXXXXXXXXX</p>

      {/* Social Media Icons */}
      <div style={iconRowStyle}>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={iconStyle} />
        </a>

        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube style={iconStyle} />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={iconStyle} />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Padyana Temple. All rights reserved.
      </p>

      <p>
        <small>
          Designed with devotion 🙏 by{" "}
          <a
            href="https://prashsprofile.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Prashantha Bhat Padyana
          </a>
        </small>
      </p>
    </footer>
  );
}

export default Footer;
