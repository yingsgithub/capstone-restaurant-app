import React from "react";
import Order from "./Order";

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
      <div>
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
      {/* //need to pass function to count total !!!!!!!!!!!!!!*/}
      <div>
        <button onClick={createOrder}>Submit Orders</button>
      </div>
    </div>
  );
}

export default OrderBoard;
