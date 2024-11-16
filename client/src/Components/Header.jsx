import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center h-[80px] w-full border-b-[1px] border-iridium">
      <div className="container flex h-full w-full w-max-[1320px] justify-between items-center">
        <div>
          <img
            src="/images/naimix-logo.png"
            alt="Naimix Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
