import React from "react";
import { useDrag } from "react-dnd";

function Appetizer({ id, foodItem, price }) {
  // const foodName = appetizerList.map((appet) => appet.item);
  // const foodPrice = appetizerList.map((appet) => appet.price);
  // const foodId = appetizerList.map((appet) => appet.id);
  // console.log("@@@@@@@@@@@@@@@@@@@@@@");
  // console.log({ id, foodItem, price });
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "piece",
    // item: { id: id },
    item: { id: id, foodItem: foodItem, price: price },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="itemWithPrice"
      style={{ border: isDragging ? "5px solid pink" : "5px solid grey" }}
    >
      <div className="itemList">{foodItem}</div>
      <div className="itemPrice">${price}</div>
    </div>
  );
}

export default Appetizer;
