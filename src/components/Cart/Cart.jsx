/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Cart = ({ selectedCards,remaining,totalCost,total }) => {
  return (
    <>
    <div className="bg-slate-100 p-4 m-4 rounded-xl">
    <div>
        <h2 className="text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h2>
    </div>
    <hr />
      <div>
        <h2 className="font-bold text-2xl">Course Name: </h2>
        <div>
  <h2>Selected Courses:</h2>
  <ol start={1}>
    {selectedCards.map((card,index) => (
     <li key={card.id}>{`${index + 1}. ${card.title}`}</li>
    ))}
  </ol>
</div>
      </div>
      <div>
        <h4 className="font-semibold">Total Credit Hour : {totalCost}</h4>
      </div>
      <hr />
      <div>
        <h4 className="font-semibold">Total Price: {total}</h4>
      </div>
    </div>
    </>
  );
};
export default Cart;
