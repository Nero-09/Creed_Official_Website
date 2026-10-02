import "./footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h3>CREED</h3>
          <p>Branding, websites, and social media, all from one team in Hetauda.</p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Explore</span>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          {/* <a href="#">Our Work</a> */}
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <span className="footer-heading">Get in Touch</span>
          <a href="mailto:creed6626@gmail.com">creed6626@gmail.com</a>
          <a href="https://wa.me/9821859944" target="_blank" rel="noopener noreferrer">+977 9821859944</a>
        </div>

        <div className="footer-social">
          <span className="footer-heading">Follow</span>
          <div className="footer-icons">
            <a href="mailto:creed6626@gmail.com" aria-label="Email">
              <img src="/envelope.png" alt="Email" />
            </a>
            <a href="https://www.facebook.com/share/19qGk74rVb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/9821859944" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/creed_marketing_studio" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@socal_media_marketing" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Creed </span>
        <span>Hetauda, Nepal</span>
      </div>
    </footer>
  );
}