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
          <li className="social-icon-content">
            <a href={event.linkedInUrl} aria-label="LinkedIn" data-social="linkedin">
              <img src={logoLinkedin} alt="LinkedIn" />
              <span className="event-filled"></span>
              <span className="event-tooltip">LinkedIn</span>
            </a>
          </li>
          <li className="social-icon-content">
            <a href={event.photosLink} aria-label="Photo" data-social="photo">
              <img src={logoPhoto} alt="Photo" />
              <span className="event-filled"></span>
              <span className="event-tooltip">Photos</span>
            </a>
          </li>
          <li className="social-icon-content">
            <a href={event.instaUrl} aria-label="Instagram" data-social="instagram">
              <img src={logoInsta} alt="Instagram" />
              <span className="event-filled"></span>
              <span className="event-tooltip">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

EventComponent.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instaUrl: PropTypes.string.isRequired,
    linkedInUrl: PropTypes.string.isRequired,
    photosLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventComponent;
