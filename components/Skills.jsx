import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase">
          Навыки
        </p>
        <h2 className="py-4">Что я умею</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* html */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/html.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                HTML
              </div>
            </div>
          </div>
          {/* css */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/css.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                CSS
              </div>
            </div>
          </div>
          {/* JavaScript */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/javascript.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                JavaScript
              </div>
            </div>
          </div>
          {/* react */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/react.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                React
              </div>
            </div>
          </div>
          {/* Mongo */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/nextjs.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                NextJS
              </div>
            </div>
          </div>
          {/* Node */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/node.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                Node.js
              </div>
            </div>
          </div>
          {/* Mongo */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/mongo.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                MongoDB
              </div>
            </div>
          </div>
          {/* github */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className=""
                  src="/assets/skills/github1.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
