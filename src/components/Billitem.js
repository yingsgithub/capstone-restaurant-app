import React from "react";

function Billitem({
  orderId,
  orderItem,
  itemPrice,
  quantity,
  likeStatus,
  likeButton,
  likeFood,
}) {
  const heartButton = likeFood.includes(orderItem) ? (
    <button
      onClick={() => {
        likeButton(orderItem, likeStatus);
      }}
    >
      ❤️
    </button>
  ) : (
    <button
      onClick={() => {
        likeButton(orderItem, likeStatus);
      }}
    >
      ♡
    </button>
  );
  return (
    <div>
      {heartButton}
      <span>&nbsp;&nbsp;</span>
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
