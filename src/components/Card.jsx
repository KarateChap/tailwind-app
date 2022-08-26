import React from "react";

const Card = ({ data }) => {
  const { title, price, gb, user, send, btnText, source } = data;

  return (
    <>
      <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300 my-10">
        <img
          className="w-20 mx-auto mt-[-3rem] bg-transparent"
          src={source}
          alt=""
        />
        <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
        <p className="text-center text-4xl font-bold">${price}</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">{gb}</p>
          <p className="py-2 border-b mx-8">{user}</p>
          <p className="py-2 border-b mx-8">{send}</p>
        </div>
        <button className="bg-[#00df9a] text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          {btnText}
        </button>
      </div>
    </>
  );
};

export default Card;
