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

  const myMenuStyle02 = {
    // backgroundImage: "url(/shuimojiangnan.png)",
    height: "60vh",
    marginTop: "20px",
    // fontSize: "50px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="menu-bkg" style={myMenuStyle02}>
      <br></br>
      <br></br>
      <br></br>
      <button
        className="menu-btn"
        onClick={() => {
          selectFoodType("appet");
        }}
      >
        Appetizer
      </button>

      <button
        className="menu-btn"
        onClick={() => {
          selectFoodType("jiangnan");
        }}
      >
        Jiang Nan Reminisce
      </button>
      <button
        className="menu-btn"
        onClick={() => {
          selectFoodType("cheli");
        }}
      >
        Taste of Che-Li
      </button>
      <button
        className="menu-btn"
        onClick={() => {
          selectFoodType("rice");
        }}
      >
        Rice & Noodles
      </button>
      <button
        className="menu-btn"
        onClick={() => {
          selectFoodType("dimsum");
        }}
      >
        Homemade Dim Sum
      </button>
      <button
        className="menu-btn"
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
