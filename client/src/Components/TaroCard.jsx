import React, { useState } from "react";

const TaroCard = ({ data, rev }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleCardClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div
      className="relative w-[311px] h-[512px] bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 z-10"
      onClick={handleCardClick}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-300 ${
          rev ? "transform rotate-180" : ""
        }`}
        style={{
          backgroundImage: `url(/images/taro/${data.nameShort}.jpg)`
        }}
      />
      <div
        className={`absolute top-0 left-0 w-full h-[512px] overflow-y-auto bg-[rgb(0,0,0,85%)] transition-all duration-300 ${isEnlarged ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-red text-md font-semibold p-4">
          {!rev ? data.meaningUp : data.meaningRev}
        </p>
        <p className="text-white text-sm p-4">{data.desc}</p>
      </div>
    </div>
  );
};

export default TaroCard;
