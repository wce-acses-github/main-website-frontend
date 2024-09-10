import PropTypes from "prop-types";
import "./UpcomingEvent.css";

const UpcomingEvent = ({ eventInfo }) => {
    return (
        <div className="upcoming-event-main">
            <div className="upcoming-event-heading-div">
                <h2 className="upcoming-event-heading">Upcoming Event</h2>
            </div>
            <div className="upcoming-content-main">
                <div className="upcoming-poster">
                    <img src={eventInfo.poster} alt="Upcoming Event Poster" />
                </div>
                <div className="upcoming-event-info">
                    <h2 className="upcoming-event-title">{eventInfo.name}</h2>
                    <p className="upcoming-event-desc">
                        {eventInfo.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

UpcomingEvent.propTypes = {
    eventInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default UpcomingEvent;
