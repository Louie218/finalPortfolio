import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8">
          Hi my full name is Luis Alejandro Leon im currently 25 years of age
          and ive been coding and programming for roughly a year now. I genuenly
          enjoy Coding and creating web applications. I plan on furthering my
          toolkit and expertise.
        </p>

        <br />

        <p className="text-xl">
          My skillset at the moment consist of being Fluent in English and in
          Spanish. Proficient in React and JS Frontend Development. Have already
          learned HTML, CSS, JavaScript, Bootstrap, TailwindCSS, React, NPM,
          Node, MongoDB. Also im an identical twin! I love being active and
          playing futbol. Authorized to work in both the U.S and Colombia.
        </p>
      </div>
    </div>
  );
};

export default About;
