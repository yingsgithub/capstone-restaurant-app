import React from "react";

const Order = ({
  orderId,
  orderItem,
  itemPrice,
  quantity,
  reduceOne,
  deleteFood,
  addOne,
}) => {
  return (
    <div>
      <div className="OrderDisplay">
        {/* <table >
          <tr>
            <td>{orderItem}</td>
            <td>{itemPrice}</td>
            <td>
              {" "}
              <button
                onClick={() => {
                  reduceOne(orderId, quantity);
                }}
              >
                {" "}
                -{" "}
              </button>
              {quantity}
              <button
                onClick={() => {
                  addOne(orderId, quantity);
                }}
              >
                {" "}
                +{" "}
              </button>
            </td>
            <td>
              {" "}
              <button
                onClick={() => {
                  deleteFood(orderId);
                }}
              >
                Remove
              </button>
            </td>
          </tr>
          <tbody></tbody>
        </table> */}

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
          <button
            onClick={() => {
              addOne(orderId, quantity);
            }}
          >
            {" "}
            +{" "}
          </button>
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
