import React from "react";
import { useLocation } from "react-router";

function Header() {
  const location = useLocation();

  const getTitleFromPath = (path) => {
    switch (path) {
      case "/dashboard":
        return "Dashboard";
      case "/projects":
        return "Projects";
      case "/teams":
        return "Teams";
      case "/analytics":
        return "Analytics";
      case "/messages":
        return "Messages";
      case "/integrations":
        return "Integrations";
      default:
        return "Dashboard";
    }
  };

  const title = getTitleFromPath(location.pathname);

  return (
    <div className="flex justify-between mx-[30px] my-[10px]">
      <div className="name">
        <p className="text-[30px] text-[#f34b87] font-bold">{title}</p>
      </div>
      <div className="right flex items-center relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="bg-[#f3f4f6] rounded-[6px] h-[34px] px-[14px] pl-[44px]"
        />
        <img
          src="../../../src/assets/images/Search.png"
          alt=""
          className="h-[20px] absolute top-[12px] left-[16px]"
        />
        <img
          src="../../../src/assets/images/Bell 1.png"
          alt=""
          className="ml-[14px]"
        />
        <img
          src="../../../src/assets/images/Question 1.png"
          alt=""
          className="ml-[14px]"
        />
        <img
          src="../../../src/assets/images/Avatar 313.png"
          alt=""
          className="ml-[14px]"
        />
      </div>
    </div>
  );
}

export default Header;
