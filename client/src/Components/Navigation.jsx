import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const tabs = [
    { name: "Профиль", path: "/profile" },
    { name: "Кандидаты", path: "/candidates" },
    { name: "Команды", path: "/teams" }
  ];

  return (
    <nav className="flex h-[56px] max-w-[1320px] gap-[2px] rounded-lg overflow-hidden">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `flex-1 content-center bg-teal-container px-4 ${
              isActive
                ? "text-teal font-semibold border-b-2 border-teal"
                : "text-black font-regular"
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
