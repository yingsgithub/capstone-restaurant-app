import React from "react";
import AppetizerItem from "./AppetizerItem";

const Appetizer = ({ appetizerList, selectFood }) => {
  const appetizerItemComp = appetizerList.map((appet, index) => {
    return (
      <div key={appet.id}>
        <AppetizerItem
          id={appet.id}
          item={appet.item}
          price={appet.price}
          quantity={appet.quantity}
          selectFood={selectFood}
        />
      </div>
    );
  });

  return (
    <section>
      <div>{appetizerItemComp}</div>
    </section>
  );
};

export default Appetizer;
