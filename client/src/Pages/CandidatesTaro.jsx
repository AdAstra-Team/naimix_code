import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const cast = {
  title: "Какой-то расклад",
  metrics: "Метрики",
  summary: "Тута какая-та сводка по таро"
};

const CandidatesTaro = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  return (
    <>
      <div className="container mx-auto max-w-[1320px] flex flex-col">
        <div className="flex justify-between">
          <button
            className="button text-white bg-red hover:bg-orange"
          >
            {userId}
          </button>
          <button className="button bg-orange hover:bg-red">Выбор для "{teamId}"</button>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 top-[282px] bg-teal-container rounded-lg shadow-lg p-8">
        <div className="h-full flex flex-col items-center gap-8">
          <div className="w-full max-w-[1320px] flex justify-between">
            <div className="flex gap-4 items-baseline">
              <div className="text-lg font-semibold">{cast.title}</div>
              <div className="text-iridium">Информация о разложении</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-purple">{cast.metrics}</div>
            </div>
          </div>
          <div className="grow">
            Aboba
          </div>
          <div className="w-full max-w-[1320px] flex justify-between">
            <div className="flex flex-col gap-4">
              <div>{cast.summary}</div>
            </div>
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
  );
};

export default CandidatesTaro;
