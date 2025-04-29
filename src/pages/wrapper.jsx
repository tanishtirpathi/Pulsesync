import React from "react";
import Navbar from "../components/navbar";

function Wrapper() {
  return (
    <>
      <div className="h-screen w-screen bg-[#fbf4ec]">
        <Navbar />
        <div className="flex justify-center items-center">
          <img src="public\main.png" alt="" className="h-130 w-150 mt-20" />
        </div>
        <div id="moodbar" className="flex justify-center items-center ">
          <div
            className="mx-auto fixed bottom-5 rounded-md"
            style={{
              background:
                "linear-gradient(90deg, #8b9e7f, #b3745d, #e6aa86, #b6bc91)",
            }}
          >
            <ul className="flex px-10 py-1">
              <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
                <div className="flex-column justify-center items-centers">
                  <img src="/public/chill.png" alt="" className="h-30 w-30" />
                  <h3>chill vibe</h3>
                </div>
              </li>
              <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
                <div className="flex-column justify-center items-centers">
                  <img src="/public/angry.png" alt="" className="h-30 w-30" />
                  <h3>angry </h3>
                </div>
              </li>
              <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
                <div className="flex-column justify-center items-centers">
                  <img src="/public" alt="" className="h-30 w-30" />
                  <h3></h3>
                </div>
              </li>
              <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
                <div className="flex-column justify-center items-centers">
                  <img src="" alt="" className="h-30 w-30" />
                  <h3></h3>
                </div>
              </li>
              <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
                <div className="flex-column justify-center items-centers">
                  <img src="" alt="" className="h-30 w-30" />
                  <h3></h3>
                </div>
              </li>
              <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
                <div className="flex-column justify-center items-centers">
                  <img src="" alt="" className="h-30 w-30" />
                  <h3></h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
