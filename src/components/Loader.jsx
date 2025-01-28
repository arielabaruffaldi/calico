"use client";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ color = "#4fa94d", width = 80, height = 80 }) => {
  return (
    <div className="flex justify-center items-center min-h-screen loader-container">
      <TailSpin
        visible={true}
        height={height}
        width={width}
        color={color}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
