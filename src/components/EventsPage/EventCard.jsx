import PropTypes from "prop-types";
import EventGallery from "./EventGallery.jsx";
import EventComponent from "./EventComponent.jsx";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="carousel-div">
        {event.photos && event.photos.length > 0 ? (
          <EventGallery images={event.photos} />
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className="event-component-div">
        <EventComponent event={event} />
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    instaUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    photosLink: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default EventCard;
