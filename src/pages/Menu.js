import React from "react";
import Appetizer from "../components/Appetizer";
import OrderBoard from "../components/OrderBoard";

function Menu({
  appetizerList,
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
          {/* <h1>Appetizer</h1> */}
          <div>
            <Appetizer
              appetizerList={appetizerList}
              selectFood={selectFood}
              foodType={foodType}
              selectFoodType={selectFoodType}
            ></Appetizer>
          </div>
        </div>

        {/* <div className="jiangNan">
          <div>
            <h1>Jiang Nan Reminisce</h1>
          </div>
          <div>
            {jiangNanList.map((jiangNanFood) => {
              return (
                <div className="foodContainer">
                  <div className="itemList">{jiangNanFood.item}</div>
                  <div className="itemPrice">${jiangNanFood.price}</div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>

      <div className="OrderBoard">
        {/* <h1>Order board</h1> */}
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
