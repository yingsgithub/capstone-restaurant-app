import React from "react";

function AppetizerItem({ id, item, price, quantity, selectFood, url }) {
  return (
    <div className="food-box">
      <section className="foodContainer">
        <div className="column">
          <img src={url} alt="food img" className="food-img" />
        </div>
        <div>{item}</div>
        <div>${price}</div>
        <button
          onClick={() => {
            selectFood(id, item, price, quantity);
          }}
        >
          Add
        </button>
      </section>
    </div>
  );
}

export default AppetizerItem;
