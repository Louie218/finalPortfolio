import React from "react";
import aquaticIsland from "../assets/portfolio/aquaticIsland.jpg";
import tinDog from "../assets/portfolio/tinDog.jpg";
import guessGame from "../assets/portfolio/guessGame.jpg";
import drumKit from "../assets/portfolio/drumKit.jpg";
import movieVille from "../assets/portfolio/movieVille.jpg";
import taskUs from "../assets/portfolio/taskUs.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: aquaticIsland,
      url: "https://aquaticisland.netlify.app",
    },
    {
      id: 2,
      src: drumKit,
      url: "https://drumkitforkids.netlify.app",
    },
    {
      id: 3,
      src: guessGame,
      url: "https://guessthatdigit.netlify.app",
    },
    {
      id: 4,
      src: movieVille,
      url: "https://movieville.netlify.app",
    },
    {
      id: 5,
      src: tinDog,
      url: "https://tinderdoggo.netlify.app",
    },
    {
      id: 6,
      src: taskUs,
      url: "https://taskmatess.netlify.app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 pt-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => (window.location.href = url)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
