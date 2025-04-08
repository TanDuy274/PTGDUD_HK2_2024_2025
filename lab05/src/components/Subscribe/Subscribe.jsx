import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div>
      <div className="left">
        <p className="text-2xl">
          This recipe is exclusively available to subscribes
        </p>
        <p className="text-4xl text-[#f34b87] font-bold">
          Join now to access effortless, hassle-free recipes
        </p>
        <ul>
          <li>
            <p>20,000+ recipes to suit all tastes and skill levels</p>
          </li>
          <li>
            <p>Filter for diets, cook times, and more</p>
          </li>
          <li>
            <p>Personal Recipe Box for favourites</p>
          </li>
          <li>
            <p>Gain exclusive access to our subscribe-only mobile app</p>
          </li>
        </ul>
        <p className="text-4xl">0.25USD / Week</p>
        <p>Billed as $1 every 4 weeks for the first year</p>
        <div className="btns">
          <button className="bg-[]">Subscribe now</button>
          <button>Cancel or Pause anytime</button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Subscribe;
