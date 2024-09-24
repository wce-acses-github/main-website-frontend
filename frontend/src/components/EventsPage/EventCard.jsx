import PropTypes from 'prop-types';
import EventCarousel from './EventGallery.jsx';
import EventComponent from './EventComponent.jsx';
import "./EventCard.css"

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="carousel-div"><EventCarousel images={event.photos} /></div>
      <div className="event-component-div"><EventComponent event={event} /></div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instaUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default EventCard;
