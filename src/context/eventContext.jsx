import { createContext, useContext, useState } from "react"

export const EventContext = createContext(null);

export const EventProvider = ({children}) => {
    const [eventType, setEventType] = useState("Mega");
    const [eventData, setEventData] = useState([]);

    return (
        <EventContext.Provider value={{eventType, setEventType, eventData, setEventData}}>
        {children}
        </EventContext.Provider>
    );
}

export const useEventData=()=>{
    return useContext(EventContext);
}