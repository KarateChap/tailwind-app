import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const CardContainer = () => {
  // title, price, gb, user, send, btnText, source
  const data = [
    {
      id: "1",
      title: "Single User",
      price: "149",
      gb: "500 GB Storage",
      user: "1 Granted User",
      send: "Send up to 2 GB",
      btnText: "Start Trial",
      source: Single,
    },
    {
      id: "2",
      title: "Single User",
      price: "149",
      gb: "500 GB Storage",
      user: "1 Granted User",
      send: "Send up to 2 GB",
      btnText: "Start Trial",
      source: Double,
    },
    {
      id: "3",
      title: "Single User",
      price: "149",
      gb: "500 GB Storage",
      user: "1 Granted User",
      send: "Send up to 2 GB",
      btnText: "Start Trial",
      source: Triple,
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3  gap-8">
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
