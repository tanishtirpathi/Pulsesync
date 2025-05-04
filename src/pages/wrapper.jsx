import React, { useState } from "react";
import Navbar from "../components/navbar";

const moods = [
  { name: "Chill", icon: "/chill.png" },
  { name: "Angry", icon: "/angry.png" },
  { name: "Sad", icon: "/sad.png" },
  { name: "Happy", icon: "/happy-face.png" },
  { name: "Romantic", icon: "/emoji.png" },
];
const getMusicList = (mood) => {
  const music = {
    Chill: [
      "https://www.youtube.com/embed/IWmmv7T-D7U?si=vRXOQsQYyMOAlatW",
      "https://www.youtube.com/embed/n61ULEU7CO0?si=4oy2Cz_WCKFmiyIq",
      "https://www.youtube.com/embed/yx1-FK56Mvo?si=dHoJBDoE99L0znfs",
    ],
    Angry: [
      "https://www.youtube.com/embed/nuv1oOgzLKQ?si=m6vqXz46F_p9o6mr",
      "https://www.youtube.com/embed/9iIX4PBplAY?si=TG89tGKrudYbGdp3",
      "https://www.youtube.com/embed/rYEDA3JcQqw", // example
    ],
    Sad: [
      "https://www.youtube.com/embed/00DvaPstcpo?si=78_9Zi9navk97aRI", // Mad World
      "https://www.youtube.com/embed/8SbUC-UaAxE", // November Rain
      "https://www.youtube.com/embed/pvppSBtG68c?si=lJpxeJC7O8NGzIW0",
    ],
    Happy: [
      "https://www.youtube.com/embed/ZbZSe6N_BXs", // Happy - Pharrell
      "https://www.youtube.com/embed/fqjXS7X9_5s?si=08sw6poQIZ4ksElo", // Walking on Sunshine
      "https://www.youtube.com/embed/hTWKbfoikeg", // Smells Like Teen Spirit
    ],
    Romantic: [
      "https://www.youtube.com/embed/lp-EO5I60KA", // Thinking Out Loud
      "https://www.youtube.com/embed/JGwWNGJdvx8", // Shape of You
      "https://www.youtube.com/embed/450p7goxZqg", // All of Me
    ],
  };

  return music[mood] || [];
};

const getMoviesLists = (mood) => {
  const Movies = {
    Chill: [
      {
        title: "Happiness ",
        poster:
          "/Happiness.webp",
        description:
          "A daydreamer's adventure to find the extraordinary in life.",
      },
      {
        title: "Yeh Jawaani Hai Deewani",
        poster:
         "/yejawani.webp",
        description:
          "A chef starts a food truck, discovering freedom and passion.",
      },
    ],
    Angry: [
      {
        title: "Taxi Driver",
        poster:
          "/taxi driver.webp",
        description: "A betrayed general seeks vengeance against an emperor.",
      },
      {
        title: "John Wick",
        poster:
          "/johnwick.webp",
        description: "An ex-hitman comes out of retirement for revenge.",
      },
    ],
    Sad: [
      {
        title: "Twenty-Five Twenty-One ",
        poster:
          "/two.webp",
        description: "A heartwarming story of struggle and hope.",
      },
      {
        title: "Dil Bechara",
        poster:
          "/dil.webp",
        description: "A touching anime about redemption and communication.",
      },
    ],
    Happy: [
      {
        title: "Chhichhore ",
        poster:
          "/Chhichhore.webp",
        description: "A cheerful bear spreads joy and kindness.",
      },
      {
        title: "duty after school",
        poster:
          "/duty ater school.webp",
        description:
          "Animals chase their dreams through a singing competition.",
      },
    ],
    Romantic: [
      {
        title: "shiddat",
        poster:
          "/shiddat.webp",
        description:
          "A love story between a jazz musician and an aspiring actress.",
      },
      {
        title: "Jab We Met",
        poster:
          "/jab.webp",
        description: "An epic tale of enduring love through time.",
      },
    ],
  };

  return Movies[mood] || [];
};

function Wrapper() {
  const [name, setName] = useState("");
    const [selectedMood, setSelectedMood] = useState(null);
  const [nameSubmitted, setNameSubmitted] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#f9e5dc] to-[#fbeee0] flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-2 px-4 gap-10">
        <img
          src="/maini.png"
          alt="Main"
          className="w-120 h-120 drop-shadow-xl"
        />

        <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl justify-between items-center">
          {/* Input Card */}
          {/* Left Card */}
          <div className="backdrop-blur-lg bg-white/60 p-6 rounded-2xl fixed top-34 left-20 shadow-lg w-40 md:w-100 ">
            {!selectedMood ? (
              <>
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  👤 Enter your name:
                </h2>
                <input
                  type="text"
                  id="name"
                  placeholder="Type your name here..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-80 px-4 py-2 rounded-md bg-white text-blue-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button
                  onClick={() => name && setNameSubmitted(true)}
                  className="mt-4 bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-orange-500 transition"
                >
                  submit
                </button>
              </>
            ) : (
              <>
                <div className="w-100 h-100 ">
                  <h2 className="text-lg font-semibold text-gray-700 mb-3">
                    🎵 {selectedMood} Vibes for {name}
                  </h2>
                  <ul className="list-disc list-inside text-sm text-gray-800">
                    {getMusicList(selectedMood).map((song, index) => (
                      <iframe
                        width="350"
                        className="py-2"
                        height="115"
                        src={song}
                        key={index}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

       
          {/* Recommendations Card */}
          <div className="flex-1 bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg overflow-hidden fixed top-50 right-20">
           <h3 className="text-lg font-semibold text-gray-700 mb-3">Movies for your vibe </h3>
            {!selectedMood ? (
              <p className="text-gray-800 text-sm">
                {nameSubmitted ? (
                  <>
                    <span className="font-semibold text-orange-500">{name}</span>,
                    discover songs 🎵 and movies 🎬 that match your mood!
                  </>
                ) : (
                  "Enter your name to get started with personalized recommendations!"
                )}
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-full overflow-y-auto">
                {getMoviesLists(selectedMood).map((movie, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl shadow-lg transform hover:-translate-y-1 hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                        {movie.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-snug line-clamp-3 flex-1">
                        {movie.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mood Bar */}
      <div className="mt-auto py-6">
        <div className="mx-auto w-fit px-8 py-3 rounded-full shadow-lg backdrop-blur-md bg-white/70 border border-[#d3cbb8]">
          <ul className="flex gap-6">
            {moods.map((mood, idx) => (
              <li
                key={idx}
                onClick={() => {
                  if (nameSubmitted) {
                    setSelectedMood(mood.name);
                  } else {
                    alert("Please enter your name and click Start first.");
                  }
                }}
                className={`flex px-2 flex-col items-center justify-center text-gray-700 hover:scale-110 transition-transform cursor-pointer ${
                  selectedMood === mood.name ? "scale-110 font-bold" : ""
                }`}
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
