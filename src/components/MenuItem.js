import React from "react";

function MenuItem({ id, item, price, quantity, selectFood, url, like }) {
  return (
    <div className="food-box">
      <section className="foodContainer">
        <div className="column">
          <img src={url} alt="food img" className="food-img" />
          <div className="top-left"> ❤️ {like}likes</div>
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

export default MenuItem;
