import { useEffect } from "react";
import EventCard from "./EventCard.jsx";
import "./EventsPage.css";
import EventSwitch from "./EventSwitch.jsx";
import { useEventData } from "../../context/eventContext.jsx";
import axios from "axios";

const EventsPage = () => {
    const { eventType, setEventType, eventData, setEventData } = useEventData();

    const handleEventChange = (event) => {
        setEventType(event);
    };

    useEffect(() => {
        axios
            .get(`/api/v1/events/${eventType}`)
            .then((response) => {
                setEventData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [eventType, setEventData]);

    return (
        <div>
            <EventSwitch
                className="team-switch"
                activeEvent={eventType}
                onChangeEvent={handleEventChange}
            />
            <div className="events-page">
                {eventData.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
