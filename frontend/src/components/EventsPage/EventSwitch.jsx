import PropTypes from 'prop-types';
import './EventSwitch.css';

const EventSwitch = ({ activeEvent, onChangeEvent }) => {
  return (
    <div className="event-switch">
      <button
        className={`event-btn ${activeEvent === 'cs' ? 'active' : ''}`}
        onClick={() => onChangeEvent('cs')}
      >
        Club Service
      </button>
      <button
        className={`event-btn ${activeEvent === 'mega' ? 'active' : ''}`}
        onClick={() => onChangeEvent('mega')}
      >
        Mega Events
      </button>
      <button
        className={`event-btn ${activeEvent === 'activity' ? 'active' : ''}`}
        onClick={() => onChangeEvent('activity')}
      >
        Activities
      </button>
    </div>
  );
};

EventSwitch.propTypes = {
  activeEvent: PropTypes.oneOf(['cs', 'mega', 'activity']).isRequired,
  onChangeEvent: PropTypes.func.isRequired,
};

export default EventSwitch;
