import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contacts" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Контакты
        </p>
        <h2 className="py-4">Будем на связи</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {/* левая */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Аверкиев Константин</h2>
                <p>Frontend разработчик</p>
                <p className="py-4">
                  Открыт к предложениям. Свяжитесь со мной для обсуждения
                </p>
              </div>
            </div>
          </div>

          {/* правая */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                {/* имя и телефон */}
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Имя</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Тел.</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                {/* email */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                {/* Тема */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Тема</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Сообщение</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center  py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
