import React from "react";
import MenuItem from "./MenuItem";
import Popupmessage from "./Popupmessage";

const Menubox = ({ menuList, selectFood, foodType, selectFoodType }) => {
  const menuItemComp = menuList.map((food, index) => {
    if (food.type === foodType) {
      return (
        <div key={index}>
          <MenuItem
            id={food.id}
            item={food.item}
            price={food.price}
            quantity={food.quantity}
            url={food.url}
            selectFood={selectFood}
            like={food.like}
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
      <div className="row">{menuItemComp}</div>
    </section>
  );
};

export default Menubox;
