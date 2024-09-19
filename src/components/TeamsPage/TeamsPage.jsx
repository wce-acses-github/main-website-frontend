import { useEffect, Suspense } from "react";
import TeamsCard from "./TeamsCard.jsx";
import "./TeamsPage.css";
import TeamSwitch from "./TeamSwitch.jsx";
import { useTeamData } from "../../context/teamContext.jsx";
import axios from "axios";

const TeamsPage = () => {
    const { teamType, setTeamType, teamData, setTeamData } = useTeamData();

    useEffect(() => {
        axios
            .get(`/api/v1/teams/${teamType}`)
            .then((response) => {
                setTeamData(response.data.data || []); 
            })
            .catch((error) => {
                console.error("Error fetching team data:", error);
                setTeamData([]); 
            });
    }, [teamType, setTeamData]);

    return (
        <div>
            <TeamSwitch
                className="team-switch"
                activeTeam={teamType}
                onChangeTeam={setTeamType}
            />
            <div className="team-div">
                <div className="team-cards">
                    <Suspense fallback={<div>Loading team data...</div>}>
                        {teamData.length > 0 ? (
                            teamData.map((team) => (
                                <TeamsCard key={team.id} member={team} />
                            ))
                        ) : (
                            <div>No team data available.</div>
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default TeamsPage;
