import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full fixed top-0 left-0 min-h-screen cursor-wait z-[20]">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
