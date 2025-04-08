import React from "react";

function Recipe() {
  return (
    <div className="w-[300px] rounded-[20px] overflow-hidden shadow-md m-[20px] pb-[10px]">
      <img src="../../src/assets/images/recipe.png" alt="" />
      <div className="p-[16px]">
        <p className="font-semibold text-xl mb-[10px]">
          Italian-style tomato salad
        </p>
        <p className="bg-[#fef1f5] text-[#f34b87] h-[20px] w-[80px] text-xs leading-[20px] text-center rounded-xl">
          32 minutes
        </p>
      </div>
    </div>
  );
}

export default Recipe;
