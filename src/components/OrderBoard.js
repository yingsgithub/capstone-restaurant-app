import React from "react";
import Order from "./Order";
// import { useNavigate } from "react-router-dom";

function OrderBoard({
  orderList,
  reduceOne,
  deleteFood,
  addOne,
  subTotal,
  createOrder,
}) {
  const OrderItemComp = orderList.map((order, index) => {
    return (
      <div key={index}>
        <Order
          orderId={order.id}
          orderItem={order.item}
          itemPrice={order.price}
          quantity={order.quantity}
          reduceOne={reduceOne}
          deleteFood={deleteFood}
          addOne={addOne}
        />
      </div>
    );
  });
  return (
    <div>
      <h1>Orders</h1>
      {OrderItemComp}
      <h1> Total ${subTotal} </h1>
      <div>
        <button onClick={createOrder}>Submit Orders</button>
      </div>
    </div>
  );
}

export default OrderBoard;
