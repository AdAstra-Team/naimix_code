import React, { useEffect } from "react";
import UserCard from "../Components/UserCard";
import CandidateAddForm from "../Components/CandidateAddForm";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import fetch from "../Utils/fetch";

const Candidates = () => {
  const navigate = useNavigate();

  const { teamId = "Некой команды" } = useParams();

  const [isCreateCandidateModalOpen, setIsCreateCandidateModalOpen] = useState(false);

  const handleOpenCreateCandidateModal = () => {
    setIsCreateCandidateModalOpen(true);
  };

  const handleCloseCreateCandidateModal = () => {
    setIsCreateCandidateModalOpen(false);
  };

  const handleOpenTaroCandidatePage = (userId) => {
    navigate(`/candidates/${teamId}/taro?candidateId=${userId}`);
  };

  const [team, setTeam] = useState(null);

  const fetchTeam = async () => {
    const response = await fetch.get(`/teams/${teamId}`);
    setTeam(response.data);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    team && (
      <>
        <div className="container mx-auto max-w-[1320px] flex flex-col">
          <div className="flex justify-between items-center">
            <button
              className="button text-white bg-red hover:bg-orange"
              onClick={handleOpenCreateCandidateModal}
            >
              Добавить кандидата
            </button>
            <div className="text-lg">
              Управление кандидатами <span className="text-red font-semibold">{team.name}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-8">
            {team.candidates.map((user, index) => (
              <UserCard key={index} user={user}>
                <button
                  className="button text-white bg-teal hover:bg-gray"
                  onClick={() => handleOpenTaroCandidatePage(user.id)}
                >
                  Разложить таро
                </button>
              </UserCard>
            ))}
          </div>
        </div>
        {isCreateCandidateModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center">
            <CandidateAddForm onClose={handleCloseCreateCandidateModal} teamId={teamId} />
          </div>
        )}
      </>
    )
  );
};

export default Candidates;
