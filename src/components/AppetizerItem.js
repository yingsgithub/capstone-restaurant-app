import React from "react";

function AppetizerItem({ id, item, price, selectFood }) {
  return (
    <div>
      <section className="foodContainer">
        <button
          onClick={() => {
            selectFood(id, item, price);
          }}
        >
          {" "}
          +{" "}
        </button>
        <div>{item}</div>
        <div>{price}</div>
      </section>
    </div>
  );
}

export default AppetizerItem;
