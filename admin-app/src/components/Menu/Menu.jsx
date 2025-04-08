import React from "react";
import { NavLink } from "react-router";
import "./Menu.css";

function Menu() {
  return (
    <div className="w-[270px] h-screen flex flex-col">
      <div>
        <img
          src="../../src/assets/images/Image 1858.png"
          alt=""
          className="logo block"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 overflow-hidden">
        <ul className="items">
          <li className="item">
            <NavLink
              href="#"
              className="item-link flex pl-[18px] p-2 m-2 rounded-[10px]"
              to="/dashboard"
            >
              <img
                src="../../src/assets/images/Squares four 1.png"
                alt=""
                className="item-link__img bg-white"
              />
              <p className="item-link__title ml-[8px]">Dashboard</p>
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              href="#"
              className="item-link flex pl-[18px] p-2 m-2 rounded-[10px]"
              to="/projects"
            >
              <img
                src="../../src/assets/images/Folder.png"
                alt=""
                className="item-link__img"
              />
              <p className="item-link__title ml-[8px]">Projects</p>
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              href="#"
              className="item-link flex pl-[18px] p-2 m-2 rounded-[10px]"
              to="/teams"
            >
              <img
                src="../../src/assets/images/Groups.png"
                alt=""
                className="item-link__img"
              />
              <p className="item-link__title ml-[8px]">Teams</p>
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              href="#"
              className="item-link flex pl-[18px] p-2 m-2 rounded-[10px]"
              to="/analytics"
            >
              <img
                src="../../src/assets/images/Pie chart.png"
                alt=""
                className="item-link__img"
              />
              <p className="item-link__title ml-[8px]">Analytics</p>
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              href="#"
              className="item-link flex pl-[18px] p-2 m-2 rounded-[10px]"
              to="/messages"
            >
              <img
                src="../../src/assets/images/Chat.png"
                alt=""
                className="item-link__img"
              />
              <p className="item-link__title ml-[8px]">Messages</p>
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              href="#"
              className="item-link flex pl-[18px] p-2 m-2 rounded-[10px]"
              to="/integrations"
            >
              <img
                src="../../src/assets/images/Code.png"
                alt=""
                className="item-link__img"
              />
              <p className="item-link__title ml-[8px]">Integrations</p>
            </NavLink>
          </li>
        </ul>
        <div className="bg-[#f0f6ff] flex flex-col align-center p-[20px] rounded-[10px]">
          <img src="../../../src/assets/images/Group.png" alt="" />
          <button className="bg-white border border-[#2b80ff] w-[200px] self-center py-[6px] rounded-[6px] mt-[20px] text-[#2b80ff] cursor-pointer">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
