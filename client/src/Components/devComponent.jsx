import React, { useState } from "react";
import CandidateAddForm from "./CandidateAddForm";

const DevComponent = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="flex flex-col items-center">
      <button className="bg-blue-500 rounded-lg px-4 py-2 mb-4" onClick={handleOpenForm}>
        Открыть форму
      </button>
      {isFormVisible && <CandidateAddForm handleCloseForm={handleCloseForm} />}
    </div>
  );
};

export default DevComponent;
