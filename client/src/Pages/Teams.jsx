import React, { useEffect, useState } from "react";
import TeamCard from "../Components/TeamCard";
import TeamAddForm from "../Components/TeamAddForm";
import { useNavigate } from "react-router-dom";
import fetch from "../Utils/fetch";

const Teams = () => {
  const navigate = useNavigate();

  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);

  const handleOpenCreateTeamModal = () => {
    setIsCreateTeamModalOpen(true);
  };

  const handleCloseCreateTeamModal = () => {
    setIsCreateTeamModalOpen(false);
    fetchTeams();
  };

  const handleOpenTeamPage = (teamId) => {
    navigate(`/candidates/${teamId}`);
  };

  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const response = await fetch.get("/teams");
    setTeams(response.data);
  };

  const handleDeleteTeam = async (teamId) => {
    await fetch.delete(`/teams/${teamId}`);
    fetchTeams();
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    teams.length > 0 && (
      <div className="container mx-auto max-w-[1320px] flex flex-col">
        <div className="flex justify-between">
          <button
            className="button text-white bg-red hover:bg-orange"
            onClick={handleOpenCreateTeamModal}
          >
            Добавить команду
          </button>
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          {teams.map((team, index) => (
            <TeamCard key={index} team={team}>
              <div className="flex items-center gap-4">
                <button className="text-red underline" onClick={() => handleDeleteTeam(team.id)}>
                  Удалить команду
                </button>
                <button
                  className="button text-white bg-teal hover:bg-gray"
                  onClick={() => handleOpenTeamPage(team.id)}
                >
                  Перейти к кандидатам
                </button>
              </div>
            </TeamCard>
          ))}
        </div>
        {isCreateTeamModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center">
            <TeamAddForm onClose={handleCloseCreateTeamModal} />
          </div>
        )}
      </div>
    )
  );
};

export default Teams;
