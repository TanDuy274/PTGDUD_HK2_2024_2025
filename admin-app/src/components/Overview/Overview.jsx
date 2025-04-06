import React from "react";
import OverviewItem from "../OverviewItem/OverviewItem";

function Overview({ overviewData }) {
  return (
    <div>
      {overviewData.map((item) => (
        <OverviewItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Overview;
