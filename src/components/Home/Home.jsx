/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
      <div>
        <h1 className="mt-5 text-center font-bold text-3xl">
          Course Registration
        </h1>
      </div>
      <div className="container flex justify-between">
        <div className="home-container">
            <div className="card-container ml-10 mt-4 grid grid-cols-3 gap-6">
           {
            cards.map(card => (
                <div key={card.id} className="card w-60 h-72 border">
                <div className="card-img">
                  <img src={card.coverImg} alt="" />
                </div>
                <div>
                  <h3 className="font-bold">{card.title}</h3>
                  <p className="">
                    {card.paragraph1}
                  </p>
                </div>
                <div className="info flex justify-between">
                  <p className="font-bold">$ price:{card.price}</p>
                  <p className="font-bold">credit:{card.Credit}</p>
                </div>
                <div>
                  <button className="btn btn-info text-white  w-auto ml-20 mt-3">
                    Select
                  </button>
                </div>
              </div>
            ))

           }
            </div>
        
        </div>
        <div className="cart ">
          <h3> this cart</h3>
        </div>
      </div>
    </>
  );
};
export default Home;
