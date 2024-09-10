import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/LogoHomePage.png';
import menuLogo from '../../assets/menu-svgrepo-com.svg';
import { useAuth } from '../../context/authContext';

const NavBar = () => {
  const [eventsDropdown, setEventsDropdown] = useState(false);
  const [teamsDropdown, setTeamsDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleEventsDropdown = () => setEventsDropdown(!eventsDropdown);
  const toggleTeamsDropdown = () => setTeamsDropdown(!teamsDropdown);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { isLoggedIn } = useAuth();

  const handleEventsClick = () => {
    navigate('/events/main');
  };

  const handleTeamsClick = () => {
    navigate('/teams/mentor');
  };

  const scrollToContact = () => {
    navigate("/", { state: { scrollToContactUs: true } });
  };

  useEffect(() => {
    if (location.state && location.state.scrollToContactUs) {
      const contactUsSection = document.getElementById('contact-us');
      if (contactUsSection) {
        contactUsSection.scrollIntoView({ behavior: 'smooth' });
        // Clear the state to prevent automatic scrolling on page refresh
        navigate("/", { state: { scrollToContactUs: false } });
      }
    }
  }, [location.state, navigate]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='logo-home' src={logo} alt="logo image" />
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <img src={menuLogo} alt="Menu" className="logo-menu" />
      </button>
      <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        <Link
          to="/"
          state={{ scrollToHomeIntro: true }}  // <-- Add this state
          className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <div
          className="dropdown-button"
          onMouseEnter={toggleEventsDropdown}
          onMouseLeave={toggleEventsDropdown}
          onClick={handleEventsClick}
        >
          <button className={`navbar-button ${eventsDropdown ? 'active' : ''}`}>Events</button>
          {eventsDropdown && (
            <div className="dropdown-content">
              <Link to="/events/mega" className="dropdown-link">Mega Events</Link>
              <Link to="/events/cs" className="dropdown-link">Club Services</Link>
              <Link to="/events/activity" className="dropdown-link">Activities</Link>
            </div>
          )}
        </div>
        <div
          className="dropdown-button"
          onMouseEnter={toggleTeamsDropdown}
          onMouseLeave={toggleTeamsDropdown}
          onClick={handleTeamsClick}
        >
          <button className={`navbar-button ${teamsDropdown ? 'active' : ''}`}>Teams</button>
          {teamsDropdown && (
            <div className="dropdown-content">
              <Link to="/teams/mentor" className="dropdown-link">Mentor</Link>
              <Link to="/teams/main" className="dropdown-link">Main</Link>
              <Link to="/teams/assistant" className="dropdown-link">Assistant</Link>
            </div>
          )}
        </div>
        <button className="navbar-link" onClick={scrollToContact}>Contact Us</button>
        <Link to="/admin" className={`navbar-link ${location.pathname === '/admin' ? 'active' : ''}`}>{isLoggedIn ? "Admin" : "Log In"}</Link>
      </div>
    </nav>
  );
};

export default NavBar;
