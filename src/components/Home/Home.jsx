/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/cart";
const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [remaining,setRemaining] = useState(0);
  const [totalCost,setTotalCost] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);


const handleSelectCard = (card)=> {
    const isExist = selectedCards.find((item) => item.id === card.id)
    let count = card.Credit;
if(isExist) {
    alert("Please")}
else{
    selectedCards.forEach((item) => {
        count += item.Credit;
    })
const totalRemaining = 20 - count
if(count > 20){
    alert("help")
}
else{
    setTotalCost(count)
    setRemaining(totalRemaining)
        setSelectedCards([...selectedCards, card]);
}}}
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
                  <p className="font-bold"> $Price:{card.price}</p>
                  <p className="font-bold">Credit:{card.Credit}</p>
                </div>
                <div>
                  <button onClick={()=> handleSelectCard(card)}  className="btn btn-warning text-white w-40 ml-8 mt-3">
                    Select
                  </button>
                </div>
              </div>
            ))

           }
            </div>
        
        </div>
        <div className="cart ">
          <Cart selectedCards={selectedCards} remaining={remaining} totalCost={totalCost} ></Cart>
        </div>
      </div>
    </>
  );
};
export default Home;
