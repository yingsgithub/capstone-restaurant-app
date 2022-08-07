import React from "react";
import Billitem from "../components/Billitem";

function Bill({ orderList, subTotal }) {
  const BillItemComp = orderList.map((order, index) => {
    return (
      <div key={index}>
        <Billitem
          orderId={index}
          orderItem={order.item}
          itemPrice={order.price}
          quantity={order.quantity}
        />
      </div>
    );
  });

  const Tax = subTotal * 0.08;
  const Total = subTotal + Tax;
  return (
    <div>
      <h1>Table #</h1>
      <h4> # of people</h4>
      <div>{BillItemComp}</div>
      <div>
        <h2>Sub Total: ${subTotal}</h2>
        <h2>Tax: ${Tax}</h2>
        <h2>Total: ${Total}</h2>
      </div>
    </div>
  );
}

export default Bill;
