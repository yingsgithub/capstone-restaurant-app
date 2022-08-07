import React from "react";

function Billitem({ orderId, orderItem, itemPrice, quantity }) {
  return (
    <div>
      <span>{orderItem}</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>${itemPrice}</span>
    </div>
  );
}

export default Billitem;
