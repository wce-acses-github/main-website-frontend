import "./IntroTabs.css";
import { useState } from "react";

function IntroTabs() {
    const [activeTab, setActiveTab] = useState("first");
    return (
        <div className="tabs-section">
            <div className="tabs">
                <div
                    className={`tab ${activeTab === "first" ? "active" : ""}`}
                    onClick={() => setActiveTab("first")}
                >
                    Who Are We?
                </div>
                <div
                    className={`tab ${activeTab === "second" ? "active" : ""}`}
                    onClick={() => setActiveTab("second")}
                >
                    What We Do?
                </div>
                <div
                    className={`tab ${activeTab === "third" ? "active" : ""}`}
                    onClick={() => setActiveTab("third")}
                >
                    Why Should You Join Us ?
                </div>
            </div>
            <div className="tab-content">
                {activeTab === "first" && (
                    <div>
                        <p>
                            We are a thriving community where ideas come alive,
                            friendships blossom, and future tech leaders are
                            born. We believe in the power of logical thinking
                            combined with cutting-edge technology to create a
                            better world, and we’re here to help you become a
                            part of it.
                        </p>
                    </div>
                )}
                {activeTab === "second" && (
                    <div>
                        <p>
                            At ACSES, we create opportunities for students to
                            innovate, collaborate, and grow. Through events like
                            Techumen and CPP Bootcamp, we sharpen technical
                            skills and foster creativity. Our intraclub
                            activities ensure continuous learning and strong
                            community bonds.
                        </p>
                    </div>
                )}
                {activeTab === "third" && (
                    <div>
                        <p>
                            We believe in sharing the knowledge and contribute
                            towards the betterment of the society through
                            innovative ideas. We prioritize the technical,
                            personal and intellectual development of our
                            members. We’re always growing and we believe so
                            should you.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default IntroTabs;
