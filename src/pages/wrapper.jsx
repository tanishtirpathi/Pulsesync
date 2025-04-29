import React, { useState } from "react";
import Navbar from "../components/navbar";

const moods = [
  { name: "Chill", icon: "/chill.png" },
  { name: "Angry", icon: "/angry.png" },
  { name: "Sad", icon: "/sad.png" },
  { name: "Happy", icon: "/happy-face.png" },
  { name: "Random", icon: "/emoji.png" },
];

function Wrapper() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#f9e5dc] to-[#fbeee0] flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-2 px-4 gap-10">
        <img src="/maini.png" alt="Main" className="w-120 h-120 drop-shadow-xl" />

        <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl justify-between items-center">
          {/* Input Card */}
          <div className="backdrop-blur-lg bg-white/60 p-6 rounded-2xl fixed top-50 left-30 shadow-lg w-40 md:w-100">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              👤 Enter your name:
            </h2>
            <input
              type="text"
              id="name"
              placeholder="Type your name here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-80 px-4 py-2 rounded-md bg-white text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          {/* Info Card */}
          <div className="backdrop-blur-lg bg-white/60 p-6 rounded-2xl fixed top-50 right-10 shadow-lg w-full md:w-90">
            <p className="text-gray-800 text-sm leading-relaxed">
              {name ? (
                <>
                  <span className="font-bold">{name}</span>, discover songs 🎵
                  and movies 🎬 that match your mood. Just select a mood emoji
                  from the bottom. and 
                </>
              ) : (
                "Enter your name to get started with personalized recommendations!"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Mood Bar */}
      <div className="mt-auto py-6">
        <div
          className="mx-auto w-fit px-8 py-3 rounded-full shadow-lg backdrop-blur-md bg-white/70 border border-[#d3cbb8]"
        >
          <ul className="flex gap-6">
            {moods.map((mood, idx) => (
              <li
                key={idx}
                className="flex px-2 flex-col items-center justify-center text-gray-700 hover:scale-110 transition-transform cursor-pointer"
              >
                <img
                  src={mood.icon}
                  alt={mood.name}
                  className="h-10 w-10 mb-1 rounded-full border border-gray-300 shadow-sm"
                />
                <span className="text-xs font-semibold">{mood.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
