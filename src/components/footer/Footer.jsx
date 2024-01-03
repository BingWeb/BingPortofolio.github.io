import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/profile.jpeg";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footerText">
        <img src={Picture} alt="" />
        <span>Come Join Us!</span>
      </div>
      <div className="footerLink">
        <a href="#">Email Me</a>
        <a href="#">WhatsApp Me</a>
        <Link to="/more-info">More Contact</Link>
      </div>
      <div className="footerSosmed">
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">LinkedIn</a>
        <a href="#">Facebook</a>
      </div>
    </section>
  );
};

export default Footer;
