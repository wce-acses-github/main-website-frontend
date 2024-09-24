import { createContext, useContext, useState } from "react";

export const TeamContext = createContext(null);

export const TeamProvider = ({children}) => {
    const [teamType, setTeamType] = useState("main");
    const [teamData, setTeamData] = useState([]);


    return (
        <TeamContext.Provider value={{teamType, setTeamType, teamData, setTeamData}}>
            {children}
        </TeamContext.Provider>
    );
}

export const useTeamData = () => {
    return useContext(TeamContext)
}