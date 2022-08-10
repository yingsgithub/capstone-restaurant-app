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
  setTableNum,
  tableNum,
  buttonPopup,
  setButtonPopup,
  peopleNum,
  setPeopleNum,
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
            setTableNum={setTableNum}
            tableNum={tableNum}
            peopleNum={peopleNum}
            setPeopleNum={setPeopleNum}
            buttonPopup={buttonPopup}
            setButtonPopup={setButtonPopup}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
