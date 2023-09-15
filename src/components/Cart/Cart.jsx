/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Cart = ({ selectedCards,remaining,totalCost }) => {
  return (
    <>
    <div className="border-2px">
        <h2>Credit Hour Remaining {remaining} hr</h2>
    </div>
      <div>
        <h2>Course Name: </h2>
          {selectedCards.map((card) => (
            <li key={card.id}>{card.title}</li>
          ))}
      </div>
      <div>
        <h4>Total Credit Hour : {totalCost}</h4>
      </div>
    </>
  );
};
export default Cart;
