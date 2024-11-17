import React from "react";
import { SIGNS } from "../Utils/constants";

const TeamCard = ({ team, children }) => {
  return (
    <div className="container bg-teal-container rounded-lg p-12 max-w-[1320px]">
      <div className="w-full flex flex-col">
        <h2 className="text-lg font-semibold">{team.name}</h2>
        <p className="font-semibold">Количество кандидатов: {team.candidates.length}</p>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-1 mt-4 text-iridium text-sm">
            <p>Знаки зодиака: {team.signs.map((sign) => SIGNS[sign]).join(', ')}</p>
          </div>
          <div className="flex items-end">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
