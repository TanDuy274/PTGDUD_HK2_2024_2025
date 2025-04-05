import React from "react";

function OverviewItem({ name, value, percentage, icon }) {
  const getBackgroundColor = (name) => {
    switch (name) {
      case "Turnover":
        return "bg-[#fef1f5]";
      case "Profit":
        return "bg-[#f0f6ff]";
      case "New customer":
        return "bg-[#f1f8fe]";
      default:
        return "bg-[#fef1f5]";
    }
  };

  const bgClass = getBackgroundColor(name);

  return (
    <div
      className={`overview ${bgClass} w-[300px] rounded-[4px] relative p-[10px] m-[10px] inline-block`}
    >
      <p className="overview__title font-bold">{name}</p>
      <p className="overview__value font-bold text-[26px]">${value}</p>
      <p className="overview__percentage text-[12px]  mt-[6px]">
        <span className="text-[#117b35]">{percentage}%</span> period of change
      </p>
      <img src={icon} alt="" className="absolute top-[10px] right-[10px]" />
    </div>
  );
}

export default OverviewItem;
