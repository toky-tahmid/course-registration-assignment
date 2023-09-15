/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBookmark } from 'react-icons/fa';
const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [remaining,setRemaining] = useState(20);
  const [totalCost,setTotalCost] = useState(0);
  const [total,setTotal] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
const handleSelectCard = (card)=> {
    const isExist = selectedCards.find((item) => item.id === card.id)
    let count = card.Credit;
    let total = card.price;
    selectedCards.forEach((item) => {
        total += item.price;
    })
if(isExist) {
    toast.success("Already added! Please select another course!");
}
else{
    selectedCards.forEach((item) => {
        count += item.Credit;
    })
const totalRemaining = 20 - count
if(count > 20){
    toast.success("out of credits");
}
else{
    setTotal(total)
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
      <div className="container flex justify-evenly flex-col md:flex-col lg:flex-row ml-14 md:ml-4 lg:ml-auto">
        <div className="home-container">
            <div className="card-container ml-10 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="font-bold ml-3"> $Price:{card.price}</p>
                  <span className="mt-1  text-xl text-blue-400 ml-8"><FaBookmark></FaBookmark></span>
                  <p className="font-bold mr-3">Credit:{card.Credit}</p>
                </div>
                <div>
                  <button onClick={()=> handleSelectCard(card)}  className="btn bg-[#2F80ED] text-white w-40  ml-8 mt-4">
                    Select
                  </button>
                </div>
              </div>
            ))}
            </div>
        </div>
        <div className="cart mt-3">
          <Cart selectedCards={selectedCards} remaining={remaining} totalCost={totalCost} total={total} ></Cart>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
export default Home;
