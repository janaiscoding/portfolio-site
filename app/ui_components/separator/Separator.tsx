import React from "react";

const Separator = ({ isFullWidth }: { isFullWidth: boolean }) => {
  return isFullWidth ? (
    <div className="flex items-center w-full">
      <div className={`separator bg-grey/90`}></div>
    </div>
  ) : (
    <div className={`separator bg-grey/90`}></div>
  );
};

export default Separator;
