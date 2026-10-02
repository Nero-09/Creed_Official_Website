"use client";

import NavBar from "../components/navBar";
import Services from "./service";
import Why from "../components/why";
import FeaturedWork from "~/components/video";
import Contact from "./contact";


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
      <title>Creed | Digital Marketing Studio in Hetauda, Nepal</title>
      <meta
        name="description"
        content="Creed is a digital marketing studio in Hetauda, Nepal, offering branding, website design, and social media management for growing businesses."
      />

      <NavBar />

      <section className="hero">
        <div className="hero-text">
          <h1 className="title">CREED</h1>
          <p className="moto">Every Business Needs Creed.</p>
        </div>

        <div className="floating-box">
          <img src="/computer.png" alt="Computer" className="computer" />

          <a href="mailto:creed6626@gmail.com"><img src="/envelope.png" alt="Envelope" className="float-item pos-envelope" /> </a>
          <a href="https://www.facebook.com/share/19qGk74rVb/"><FaFacebookF color="#EE211B" className="float-item pos-facebook" /> </a>
          <a href="https://wa.me/9821859944"><FaWhatsapp color="#EE211B" className="float-item pos-whatsapp" /> </a>
          <a href="https://www.instagram.com/creed_marketing_studio"><FaInstagram color="#EE211B" className="float-item pos-instagram" /> </a>
          {/* <FaXTwitter color="#EE211B" className="float-item pos-twitter" /> */}
          <a href="https://www.tiktok.com/@socal_media_marketing" target="blank" rel="noopener noreferrer"><FaTiktok color="#EE211B" className="float-item pos-tiktok" /> </a>
        </div>

        <div className="hero-summary-box">
          <p>All marketing services in one place. A system that flawlessly works for one goal.</p>
          <span className="highlights">To be efficient in helping our clients Dominate the market.</span>
          <br />

          <a href="#services" className="service-hero links-hero">Our Services</a>
          <a href="#contact" className="contact-hero-home links-hero">Contact Us</a>

        </div>

        
      </section>

      <Services />
      <Why />
      <FeaturedWork />
      <Contact />



      



    </>
  );
}