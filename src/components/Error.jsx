import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div className="flex items-center justify-center w-full fixed top-0 left-0 min-h-screen">
      <div className=" p-6 bg-white rounded-sm">
        <h1 className="text-[22px] font-robotoSlab">
          {errorMessage ?? "Too many request error"}
        </h1>
        <div className="flex mt-5 items-center gap-2">
          <p className="font-roboto">Reload required</p>
          <button
            className="bg-[#f78d5c] py-1 px-2 rounded-sm"
            onClick={() => location.reload()}
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
