import React from "react";
import Menubox from "../components/Menubox";
import OrderBoard from "../components/OrderBoard";

function Menu({
  menuList,
  orderList,
  selectFood,
  createOrder,
  addOne,
  reduceOne,
  deleteFood,
  subTotal,
  foodType,
  selectFoodType,
}) {
  return (
    <div>
      <div className="MenuBoard">
        <div className="appet">
          <div>
            <Menubox
              menuList={menuList}
              selectFood={selectFood}
              foodType={foodType}
              selectFoodType={selectFoodType}
            ></Menubox>
          </div>
        </div>
      </div>

      <div className="OrderBoard">
        <div>
          <OrderBoard
            orderList={orderList}
            reduceOne={reduceOne}
            deleteFood={deleteFood}
            addOne={addOne}
            subTotal={subTotal}
            createOrder={createOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
