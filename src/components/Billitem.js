import React from "react";

function Billitem({ orderId, orderItem, itemPrice, quantity, likeButton }) {
  return (
    <div>
      <button onClick={likeButton}>❤️</button>
      <span>{orderItem}</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>
        {" "}
        {quantity} x ${itemPrice}{" "}
      </span>
    </div>
  );
}

export default Billitem;
