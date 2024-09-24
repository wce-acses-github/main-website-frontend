import PropTypes from "prop-types";
import "./TeamsCard.css";
import logoLinkedin from "../../assets/linkedin-02-stroke-rounded.svg";
import logoInsta from "../../assets/instagram-stroke-rounded.svg";
import logoGit from "../../assets/github-stroke-rounded.svg";

const Card = ({ member }) => {
    if (!member) {
        return <div className="team-card">No member data available</div>;
    }

    return (
        <div className="team-card">
            <div className="team-card-content">
                <div className="team-card-left">
                    <div className="team-card-image">
                        <img src={member.photo} alt="Profile" />
                    </div>
                    <div className="team-card-icons">
                        <ul className="team-example-2">
                            <li className="team-icon-content">
                                <a
                                    href={member.linkedInUrl || "#"}
                                    aria-label="LinkedIn"
                                    data-social="linkedin"
                                >
                                    <div className="team-filled"></div>
                                    <img src={logoLinkedin} alt="LinkedIn" />
                                </a>
                                <div className="team-tooltip">LinkedIn</div>
                            </li>
                            <li className="team-icon-content">
                                <a
                                    href={member.githubUrl || "#"}
                                    aria-label="GitHub"
                                    data-social="github"
                                >
                                    <div className="team-filled"></div>
                                    <img src={logoGit} alt="GitHub" />
                                </a>
                                <div className="team-tooltip">GitHub</div>
                            </li>
                            <li className="team-icon-content">
                                <a
                                    href={member.instagramUrl || "#"}
                                    aria-label="Instagram"
                                    data-social="instagram"
                                >
                                    <div className="team-filled"></div>
                                    <img src={logoInsta} alt="Instagram" />
                                </a>
                                <div className="team-tooltip">Instagram</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="team-card-right">
                    <div className="team-card-text">
                        <h2 className="team-card-name">
                            {member.name || "Unknown"}
                        </h2>
                        <p className="team-card-post">
                            {member.post || "Position not available"}
                        </p>
                        {member.experience && (
                            <p className="team-card-experience">
                                {member.experience}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        post: PropTypes.string.isRequired,
        experience: PropTypes.string,
        linkedInUrl: PropTypes.string.isRequired,
        githubUrl: PropTypes.string.isRequired,
        instagramUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
