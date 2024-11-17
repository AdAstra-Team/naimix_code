import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import fetch from "../Utils/fetch";

import TaroCard from "../Components/TaroCard";
import Carousel from "../Components/Carousel";

const cast = {
  title: "Путь откровений",
  metrics: "Метрики",
  summary: "Система гадательных карт для самопознания, предсказания будущего и анализа текущих ситуаций."
};

const CandidatesTaro = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const candidateId = searchParams.get("candidateId");

  const [taro, setTaro] = useState(null);

  const fetchTaro = async () => {
    const response = await fetch.post(
      "/taro/sequence",
      {},
      {
        params: {
          candidateId,
          teamId,
          length: "4"
        }
      }
    );
    setTaro(response.data);
  };

  useEffect(() => {
    fetchTaro();
  }, []);

  return (
    taro && (
      <>
        {" "}
        <div className="container mx-auto max-w-[1320px] flex flex-col">
          <div className="flex justify-between">
            <button className="button text-white bg-red hover:bg-orange">
              {taro.candidateFullName}
            </button>
            <button className="button bg-orange hover:bg-red">Выбор для "{taro.teamName}"</button>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 top-[282px] bg-teal-container rounded-lg shadow-lg p-8">
          <div className="h-full flex flex-col items-center gap-8">
            <div className="w-full max-w-[1320px] flex justify-between">
              <div className="flex gap-4 items-baseline">
                <div className="text-lg font-semibold">{cast.title}</div>
                <div className="text-iridium">Предназначен для тех, кто ищет ответы на важные жизненные вопросы</div>
              </div>
              <div className="flex flex-col items-baseline gap-4">
                <div className="font-semibold text-purple">{cast.metrics}</div>
              </div>
            </div>
            <div className="grow w-full flex items-center">
              <Carousel>
                {taro.data.map((item, index) => (
                  <TaroCard key={index} data={item} rev={Math.random() < 0.5} />
                ))}
              </Carousel>
            </div>
            <div className="w-full max-w-[1320px] flex justify-between">
              <div className="flex items-center">{cast.summary}</div>
              <div className="flex gap-4 items-center justify-end">
                <div
                  onClick={() => navigate(`/candidates/${teamId}`)}
                  className="text-sm font-semibold text-red cursor-pointer underline"
                >
                  Вернуться к кандидатам
                </div>
                <button className="button bg-teal hover:bg-red text-white">
                  Выбрать кандидата
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default CandidatesTaro;
