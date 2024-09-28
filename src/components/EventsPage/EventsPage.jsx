import { useEffect } from "react";
import EventCard from "./EventCard.jsx";
import "./EventsPage.css";
import EventSwitch from "./EventSwitch.jsx";
import { useEventData } from "../../context/eventContext.jsx";

const EventsPage = () => {
    const { eventType, setEventType, eventData, setEventData } = useEventData();

    const handleEventChange = (event) => {
        setEventType(event);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/v1/events/${eventType}`);
                const data = await response.json();
                setEventData(data.data); // assuming `data` has a `data` field for events
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchData();
    }, [eventType, setEventData]);

    return (
        <div>
            <EventSwitch
                className="team-switch"
                activeEvent={eventType}
                onChangeEvent={handleEventChange}
            />
            <div className="events-page">
                {eventData && eventData.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
