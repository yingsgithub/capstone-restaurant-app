import React from "react";
import AppetizerItem from "./AppetizerItem";

const Appetizer = ({ appetizerList, selectFood, foodType, selectFoodType }) => {
  const appetizerItemComp = appetizerList.map((appet, index) => {
    if (appet.type === foodType) {
      return (
        <div key={index}>
          <AppetizerItem
            id={appet.id}
            item={appet.item}
            price={appet.price}
            quantity={appet.quantity}
            url={appet.url}
            selectFood={selectFood}
          />
        </div>
      );
    }
  });

  return (
    <section>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          selectFoodType("appet");
        }}
      >
        Appetizer
      </button>
      <button
        onClick={() => {
          selectFoodType("jiangnan");
        }}
      >
        Jiang Nan Reminisce
      </button>
      <button
        onClick={() => {
          selectFoodType("cheli");
        }}
      >
        Taste of Che-Li
      </button>
      <button
        onClick={() => {
          selectFoodType("rice");
        }}
      >
        Rice & Noodles
      </button>
      <button
        onClick={() => {
          selectFoodType("dimsum");
        }}
      >
        Homemade Dim Sum
      </button>
      <button
        onClick={() => {
          selectFoodType("desserts");
        }}
      >
        Desserts
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">{appetizerItemComp}</div>
    </section>
  );
};

export default Appetizer;
