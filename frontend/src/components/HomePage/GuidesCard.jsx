import PropTypes from "prop-types";
import "./GuidesCard.css";

const GuidesCard = ({ guideInfo }) => {
    return (
        <div className="guide-card">
            <div className="guide-card-left">
                <img src={guideInfo.photo} alt="Profile" />
            </div>
            <div className="guide-card-right">
                <div className="guide-card-text">
                    <h2 className="guide-card-name">{guideInfo.name}</h2>
                    <p className="guide-card-post">{guideInfo.post}</p>
                    {guideInfo.experience && (
                        <p className="guide-card-experience">
                            {guideInfo.experience}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

GuidesCard.propTypes = {
    guideInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        post: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        experience: PropTypes.string,
    }).isRequired,
};

export default GuidesCard;
