import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center h-16 mx-[20px] my-[6px]">
      <a href="#">
        <img src="../../src/assets/images/logo.png" width={"200px"} alt="" />
      </a>
      <input
        type="text"
        placeholder="What would you like to cook?"
        width={"300px"}
        className="block min-w-0 w-[300px]  border-2 border-solid rounded-md outline-none border-transparent bg-[#f3f4f6] text-[#bcc1ca] px-[10px]"
      />
      <ul className="list-none flex justify-between items-center">
        <li style={{ padding: "0 10px", color: "#555e6c", cursor: "pointer" }}>
          What to cook
        </li>
        <li style={{ padding: "0 10px", color: "#555e6c", cursor: "pointer" }}>
          Recipes
        </li>
        <li style={{ padding: "0 10px", color: "#555e6c", cursor: "pointer" }}>
          Ingredients
        </li>
        <li style={{ padding: "0 10px", color: "#555e6c", cursor: "pointer" }}>
          Occasions
        </li>
        <li style={{ padding: "0 10px", color: "#555e6c", cursor: "pointer" }}>
          About Us
        </li>
      </ul>
      <button className="bg-[#fef1f5] text-[#f34b87] h-[40px] w-[150px] rounded-xl">
        Your Recipe Box
      </button>
      <img src="../../src/assets/images/user.png" width={"50px"} alt="" />
    </div>
  );
}

export default Header;
