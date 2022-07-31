import React from "react";

function JiangnanFood({ jiangNanList }) {
  return (
    <div>
      {jiangNanList.map((jiangNanFood) => {
        return (
          <div className="itemWithPrice">
            <div className="itemList">{jiangNanFood.item}</div>
            <div className="itemPrice">${jiangNanFood.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default JiangnanFood;
