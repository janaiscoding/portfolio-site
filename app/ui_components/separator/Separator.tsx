import React from "react";

const Separator = ({
  isFullWidth,
  color,
}: {
  isFullWidth: boolean;
  color: string;
}) => {
  return isFullWidth ? (
    <div className="flex items-center w-full">
      <div className={`separator bg-${color}/90`}></div>
    </div>
  ) : (
    <div className={`separator bg-${color}/90`}></div>
  );
};

export default Separator;
