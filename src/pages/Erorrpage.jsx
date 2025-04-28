import React from "react";
import Navbar from "../components/navbar";
function Erorrpage() {
  const inlineDisplay = {
    textShadow: "2px 2px 2px rgb(0, 0, 0)",
  };
  return (
    <>
      <div className="h-screen w-screen bg-white">
        <Navbar />
    <div className="flex justify-center items-center">
    <h1 className="fixed  bottom-5 text-[#8b9e7f] font-bold" style={inlineDisplay}>
SORRY SOME INTERNAL ERROR         </h1>
    </div>

        <img src="public\errorimge.png" alt="" className="h-full w-full" />
      </div>
    </>
  );
}

export default Erorrpage;
