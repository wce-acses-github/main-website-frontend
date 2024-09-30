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
        className={`event-btn ${activeEvent === 'Mega' ? 'active' : ''}`}
        onClick={() => onChangeEvent('Mega')}
      >
        Mega Events
      </button>
      <button
        className={`event-btn ${activeEvent === 'other' ? 'active' : ''}`}
        onClick={() => onChangeEvent('other')}
      >
        Other
      </button>
    </div>
  );
};

EventSwitch.propTypes = {
  activeEvent: PropTypes.oneOf(['cs', 'Mega', 'other']).isRequired,
  onChangeEvent: PropTypes.func.isRequired,
};

export default EventSwitch;
