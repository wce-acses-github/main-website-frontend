import PropTypes from "prop-types";
import "./TeamSwitch.css";

const TeamSwitch = ({ activeTeam, onChangeTeam }) => {
    return (
        <div className="team-switch">
            <button
                className={`team-btn ${activeTeam === "mentor" ? "active" : ""}`}
                onClick={() => onChangeTeam("mentor")}
            >
                Mentor
            </button>
            <button
                className={`team-btn ${activeTeam === "main" ? "active" : ""}`}
                onClick={() => onChangeTeam("main")}
            >
                Main
            </button>
            <button
                className={`team-btn ${activeTeam === "assistant" ? "active" : ""}`}
                onClick={() => onChangeTeam("assistant")}
            >
                Assistant
            </button>
        </div>
    );
};

TeamSwitch.propTypes = {
    activeTeam: PropTypes.oneOf(["mentor", "main", "assistant"]).isRequired,
    onChangeTeam: PropTypes.func.isRequired,
};

export default TeamSwitch;
