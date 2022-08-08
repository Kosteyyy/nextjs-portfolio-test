import React from "react";
import Image from "next/image";
import Link from "next/link";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const Netflix = () => {
  return (
    <div className="w-full">
      {/* top */}
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[-50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Netflix</h2>
          <h3>ReactJS / Tailwind / Firebase</h3>
        </div>
      </div>

      {/* content */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Проект</p>
          <h2>Обзор</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            sit accusantium facere inventore fuga? Quisquam, tempore corporis
            ipsum, pariatur quaerat, veritatis dignissimos nam vero dolor
            repudiandae perspiciatis velit minus beatae.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Демо</button>
          <button className="px-8 py-2 mt-4">Код</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Технологии</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Назад</p>
        </Link>
      </div>
    </div>
  );
};

export default Netflix;
