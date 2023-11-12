import React from "react";
import stats from "../../assets/stats.png";
const Stats = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="text-center grid place-content-center">
        <h1 className="text-2xl text-grey font-overpass600 tracking-wider text-center my-4">
          Clean Code
        </h1>
        <img src={stats} />
      </div>
      <div className="text-center grid place-content-center">
        <h1 className="text-2xl text-grey font-overpass600 tracking-wider text-center my-4">
          Performance Optimization
        </h1>
        <img src={stats} />
      </div>
    </div>
  );
};

export default Stats;
