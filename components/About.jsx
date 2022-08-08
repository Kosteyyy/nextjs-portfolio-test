import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Обо мне
          </p>
          <h2 className="py-4">Кто я</h2>
          <p className="py-2 text-gray-600">Я не стандартный разработчик</p>
          <p className="py-2 text-gray-600">
            Последние 18 лет я занимался своим бизнесом
          </p>
          <p className="py-2 text-gray-600">
            Когда я увидел насколько изменились web-технологии за последние
            годы, я быстро погрузился в разработку и хочу создавать интересные
            продукты для людей и других бизнесов.
          </p>
          <p className="py-2 text-gray-600">
            У меня были базовые знания HTML и СSS, поскольку я создавал и долгое
            время поддерживал сайт своей компании. Первые мои проекты я делал на
            Django, но потом полностью переключился на JavaScript, а потом и
            React.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/assets/laptop.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
