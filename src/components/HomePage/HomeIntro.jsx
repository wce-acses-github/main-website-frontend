import landingImage from "../../assets/landing-image.svg";
import ReactTypingEffect from "react-typing-effect";
import "./HomeIntro.css";

function HomeIntro() {
    return (
        <div className="landing-section">
            <div className="landing-section-left">
                <img src={landingImage} alt="Landing Image" />
            </div>
            <div className="landing-section-right">
                <div className="typing-effect">
                    <ReactTypingEffect
                        text={"Logically Shifting The World"}
                        speed={100}
                        eraseSpeed={50}
                        eraseDelay={2000}
                        typingDelay={1000}
                        displayTextRenderer={(text) => {
                            return (
                                <span>
                                    <div>{text}</div>
                                </span>
                            );
                        }}
                    />
                </div>
                <p className="landing-section-text">
                The Association of Computer Science and Engineering Students (ACSES) is the heartbeat of the CSE department at Walchand College of Engineering, Sangli. Founded in 1995 alongside the introduction of the CSE branch, ACSES has been at the forefront of fostering innovation, technical prowess, and holistic development among students. As a dynamic and inclusive community, ACSES provides a platform for aspiring engineers to explore new technologies, collaborate on groundbreaking projects, and develop leadership skills. Through a diverse range of events, workshops, and initiatives, ACSES nurtures the talents of its members, preparing them to excel in the ever-evolving tech landscape and contribute meaningfully to the world.
                </p>
            </div>
        </div>
    );
}

export default HomeIntro;
