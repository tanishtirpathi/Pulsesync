import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <div className="mx-auto fixed top-5 rounded-md" 
           style={{ background: "linear-gradient(90deg, #8b9e7f, #b3745d, #e6aa86, #b6bc91)" }}>
        <ul className="flex px-10 py-1">
          <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
            Home
          </li>
          <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
Moood 
          </li>
          <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
            feelings
          </li>
          <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
            songs
          </li>
          <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
            movies
          </li>
          <li className="px-14 font-bold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer">
            quotes
          </li>
        </ul>
      </div>
    </nav>
  );
}
