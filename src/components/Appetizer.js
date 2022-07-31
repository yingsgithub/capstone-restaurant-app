import React from "react";

function Appetizer({ appetizerList }) {
  return (
    <div>
      {appetizerList.map((appet) => {
        return (
          <div className="itemWithPrice">
            <div className="itemList">{appet.item}</div>
            <div className="itemPrice">${appet.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Appetizer;
