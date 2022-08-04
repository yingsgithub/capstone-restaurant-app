import React from "react";

const Order = ({
  orderId,
  orderItem,
  itemPrice,
  quantity,
  reduceOne,
  deleteFood,
}) => {
  return (
    <div>
      <div className="OrderDisplay">
        <div>{orderItem}</div>
        <div>{itemPrice}</div>
        <div className="Amount">
          <button
            onClick={() => {
              reduceOne(orderId, quantity);
            }}
          >
            {" "}
            -{" "}
          </button>
          {quantity}
          <button> + </button>
        </div>
        <div className="RemoveFood">
          <button
            onClick={() => {
              deleteFood(orderId);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
