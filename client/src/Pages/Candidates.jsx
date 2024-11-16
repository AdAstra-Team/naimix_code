import React from "react";
import { generateRandomUsers } from "../Utils/utils";
import UserCard from "../Components/UserCard";
import CandidateAddForm from "../Components/CandidateAddForm";
import CandidateTaro from "../Components/CandidateTaro";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const users = generateRandomUsers(30);

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
    navigate(`/candidates/${teamId}/taro?userId=${userId}`);
  }

  return (
    <>
      <div className="container mx-auto max-w-[1320px] flex flex-col">
        <div className="flex justify-between">
          <button
            className="button text-white bg-red hover:bg-orange"
            onClick={handleOpenCreateCandidateModal}
          >
            Добавить кандидата
          </button>
          <button className="button bg-orange hover:bg-red">Выбор для "{teamId}"</button>
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          {users.map((user, index) => (
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
          <CandidateAddForm onClose={handleCloseCreateCandidateModal} />
        </div>
      )}
    </>
  );
};

export default Candidates;
