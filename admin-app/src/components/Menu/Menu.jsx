import React from "react";

function Menu() {
  return (
    <div>
      <img src="../../src/assets/images/logo.png" alt="" className="logo" />
      <ul className="items">
        <li className="item p-2 m-2">
          <a href="#" className="item-link flex">
            <img
              src="../../src/assets/images/Squares four 1.png"
              alt=""
              className="item-link__img"
            />
            <p className="item-link__title">Dashboard</p>
          </a>
        </li>
        <li className="item p-2 m-2">
          <a href="#" className="item-link flex">
            <img
              src="../../src/assets/images/Folder.png"
              alt=""
              className="item-link__img"
            />
            <p className="item-link__title">Projects</p>
          </a>
        </li>
        <li className="item p-2 m-2">
          <a href="#" className="item-link flex">
            <img
              src="../../src/assets/images/Groups.png"
              alt=""
              className="item-link__img"
            />
            <p className="item-link__title">Teams</p>
          </a>
        </li>
        <li className="item p-2 m-2">
          <a href="#" className="item-link flex">
            <img
              src="../../src/assets/images/Pie chart.png"
              alt=""
              className="item-link__img"
            />
            <p className="item-link__title">Analytics</p>
          </a>
        </li>
        <li className="item p-2 m-2">
          <a href="#" className="item-link flex">
            <img
              src="../../src/assets/images/Chat.png"
              alt=""
              className="item-link__img"
            />
            <p className="item-link__title">Messages</p>
          </a>
        </li>
        <li className="item p-2 m-2">
          <a href="#" className="item-link flex">
            <img
              src="../../src/assets/images/Code.png"
              alt=""
              className="item-link__img"
            />
            <p className="item-link__title">Integrations</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
