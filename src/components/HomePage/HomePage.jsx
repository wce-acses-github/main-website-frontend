import { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import UpcomingEvent from "./UpcomingEvent";
// Lazy load components
const ContactForm = lazy(() => import("./ContactUsComponent"));
const GuidesCard = lazy(() => import("./GuidesCard"));
const IntroTabs = lazy(() => import("./IntroTabs"));
const HomeIntro = lazy(() => import("./HomeIntro"));
const HomeImage = lazy(() => import("./HomeImage"));

function HomePage() {
    const location = useLocation();

    const [guides, setGuides] = useState([]);
    const [upcomingEvent, setUpcomingEvents] = useState([]);

    useEffect(() => {
        const fetchGuides = async () => {
            try {
                const response = await axios.get("/api/v1/home/guides");
                setGuides(response.data.data);
            } catch (error) {
                console.error(error);
                console.log("Error fetching guide info");
            }
        };

        const fetchUpcomingEvents = async () => {
            try {
                const response = await axios.get("/api/v1/events/upcoming");
                setUpcomingEvents(response.data.data);
                console.log(response.data.data.length);
            } catch (error) {
                console.log(error);
                console.log("Error fetching upcoming event info");
            }
        };

        fetchGuides();
        fetchUpcomingEvents();
    }, []);

    useEffect(() => {
        if (location.state) {
            if (location.state.scrollToContactUs) {
                const contactUsSection = document.getElementById("contact-us");
                if (contactUsSection) {
                    contactUsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
            if (location.state.scrollToHomeIntro) {
                const homeIntroSection = document.querySelector(".intro-div");
                if (homeIntroSection) {
                    homeIntroSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        }
    }, [location.state]);

    return (
        <div className="home-div">
            <Suspense fallback={<div>Loading...</div>}>
                <div className="intro-div">
                    <HomeIntro />
                </div>

                <div className="upcoming-event-div">
                    {upcomingEvent.length > 0 && (
                        <UpcomingEvent eventInfo={upcomingEvent[0]} />
                    )}
                </div>

                <div className="home-image-div">
                    <HomeImage />
                </div>

                <div className="tabs-div">
                    <IntroTabs />
                </div>

                <div className="guide-div">
                    <h2 className="guide-title">Our Inspiration</h2>
                    <div className="guide-grid">
                        {guides.map((guide, index) => (
                            <GuidesCard
                                key={index}
                                guideInfo={guide}
                                className="guide"
                            />
                        ))}
                    </div>
                </div>

                <div className="contacts-div" id="contact-us">
                    <ContactForm />
                </div>
            </Suspense>
        </div>
    );
}

export default HomePage;
