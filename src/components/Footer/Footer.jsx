import './Footer.css';
import logo from '../../assets/computer-programming-01-stroke-rounded.svg';
import logoLocation from '../../assets/location-01-stroke-rounded.svg';
import logoInsta from '../../assets/instagram-stroke-rounded.svg';
import logoTwitter from '../../assets/twitter-stroke-rounded.svg';
import logoYoutube from '../../assets/youtube-stroke-rounded.svg';
import logoLinkedin from '../../assets/linkedin-02-stroke-rounded.svg';
import logoWhatsapp from '../../assets/whatsapp-stroke-rounded.svg';
import logoEmail from '../../assets/mail-01-stroke-rounded.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logoLocation} alt="Location Logo" className='location-icon'/>
          <div className="footer-address">
            Walchand College Of Engineering,<br/> Vishrambag, Sangli, Maharashtra - 416415
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <h2>Socials</h2>
            <div className="social-icons">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={logoYoutube} alt="YouTube" className="social-icon" />
              </a>
              <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                <img src={logoWhatsapp} alt="Gmail" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={logoLinkedin} alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={logoInsta} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={logoTwitter} alt="Twitter" className="social-icon" />
              </a>
            </div>
          </div>
          <div className='footer-contact'>
            <img src={logoEmail} alt="Email Logo" className='email-icon'/>
            <span className="footer-contact-info">
              wceacses1995@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="footer-logo-section">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-image" />
        </div>
        <div className="footer-copyright">
          Copyright © All Rights Reserved by WCEACSES
        </div>
      </div>
    </div>
  );
};

export default Footer;
