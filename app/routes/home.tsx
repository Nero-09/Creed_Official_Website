"use client";

import NavBar from "../components/navBar";
import './home.css';
import {
  FaWhatsapp,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaTiktok
} from 'react-icons/fa6';

export default function Home() {
  return (
    <>
      <NavBar />

      <section className="hero">
        <div className="hero-text">
          <h1 className="title">CREED</h1>
          <p className="moto">Every Business Needs Creed.</p>
        </div>

        <div className="parallax">
          <img src="/computer.png" alt="Computer" className="computer" />

          <a href="mailto:creed6626@gmail.com"><img src="/envelope.png" alt="Envelope" className="float-item pos-envelope" /> </a>
          <a href="https://www.facebook.com/share/19qGk74rVb/"><FaFacebookF color="#EE211B" className="float-item pos-facebook" /> </a>
          <a href="https://wa.me/9821859944"><FaWhatsapp color="#EE211B" className="float-item pos-whatsapp" /> </a>
          <a href="https://www.instagram.com/creed_marketing_studio"><FaInstagram color="#EE211B" className="float-item pos-instagram" /> </a>
          {/* <FaXTwitter color="#EE211B" className="float-item pos-twitter" /> */}
          <a href="https://www.tiktok.com/@socal_media_marketing" target="blank" rel="noopener noreferrer"><FaTiktok color="#EE211B" className="float-item pos-tiktok" /> </a>
        </div>
      </section>

      <h3>sda</h3>
    </>
  );
}