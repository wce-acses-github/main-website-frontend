import PropTypes from 'prop-types';
import logoLinkedin from "../../assets/linkedin-02-stroke-rounded.svg";
import logoInsta from "../../assets/instagram-stroke-rounded.svg";
import logoPhoto from "../../assets/album-02-stroke-rounded.svg";
import "./EventComponent.css";

const EventComponent = ({ event }) => {
  return (
    <div className="event-component">
      <div className="event-info">
        <h1 className="event-title"><b>{event.name}</b></h1>
        <p className="event-desc">{event.description}</p>
      </div>
      <div className="event-social">
        <ul className="social-icons">
          {event.linkedInUrl && (
            <li className="social-icon-content">
              <a href={event.linkedInUrl} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src={logoLinkedin} alt="LinkedIn" />
                <span className="event-tooltip">LinkedIn</span>
              </a>
            </li>
          )}
          {event.photosLink && (
            <li className="social-icon-content">
              <a href={event.photosLink} aria-label="Photos" target="_blank" rel="noopener noreferrer">
                <img src={logoPhoto} alt="Photos" />
                <span className="event-tooltip">Photos</span>
              </a>
            </li>
          )}
          {event.instaUrl && (
            <li className="social-icon-content">
              <a href={event.instaUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <img src={logoInsta} alt="Instagram" />
                <span className="event-tooltip">Instagram</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

EventComponent.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instaUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    photosLink: PropTypes.string,
  }).isRequired,
};

export default EventComponent;
