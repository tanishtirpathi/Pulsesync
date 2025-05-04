import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center">
      <div
        className="mx-auto fixed top-5 rounded-md w-[95%] sm:w-auto z-50"
        style={{
          background:
            "linear-gradient(90deg, #8b9e7f, #b3745d, #e6aa86, #b6bc91)",
        }}
      >
        <ul className="flex flex-wrap sm:flex-nowrap justify-center px-2 sm:px-10 py-2 sm:py-1 overflow-x-auto scrollbar-hide">
          {["Home", "Moood", "feelings", "songs", "movies", "quotes"].map(
            (item, index) => (
              <li
                key={index}
                className="px-2 sm:px-6 font-semibold text-black py-1 hover:bg-[#f8ecd0] rounded-md cursor-pointer text-xs sm:text-base whitespace-nowrap"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
