import { useState, useEffect } from 'react';
import './navBar.css';

function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape, a small nicety worth having on a full-screen overlay
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav>
      <div className="nav-box">
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="Creed" />
        </a>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-overlay ${open ? 'is-open' : ''}`}>
        <ul>
          {links.map((link, i) => (
            <li key={link.href} style={{ '--d': i } as React.CSSProperties}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;