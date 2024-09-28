import { useState } from "react";
import "./ContactUsComponent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from "../../assets/tech-company-rafiki.svg";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/v1/home/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Message sent successfully:", data);
            toast.success("Message Sent Successfully");
        } catch (error) {
            console.error("There was an error sending the message:", error);
            toast.error("There was an error sending the message");
        } finally {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className="contact-main-div">
            <div className="contact-us-title">
                <h2 className="contact-us-text">Contact Us</h2>
            </div>

            <div id="contact-us" className="contact-div">
                <div className="contact-div-image">
                    <img src={contactImage} alt="Contact Us" />
                </div>
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="form-contact">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write your message..."
                                required
                            />
                        </div>
                        <button type="submit" className="btn-send">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
