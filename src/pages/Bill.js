import React from "react";
import Billitem from "../components/Billitem";

function Bill({ tableNum, peopleNum, ordersInBill }) {
  let finalBill = [];
  let finalTotal = 0;
  for (let bill of ordersInBill) {
    finalBill.push(bill.orderList);
    finalTotal += bill.total;
  }
  let combinedBill = [].concat.apply([], finalBill);
  // console.log("I am Final Bill", finalBill);
  // console.log("I am combined Bill", combinedBill);

  let BillItemComp = combinedBill.map((order, index) => {
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

  const Tax = Number(Number.parseFloat(finalTotal * 0.08).toFixed(2));
  const Total = finalTotal + Tax;
  return (
    <div>
      <h1>Table #: {tableNum}</h1>
      <h4> people: {peopleNum} people</h4>
      <div>{BillItemComp}</div>
      <div>
        <h2>Sub Total: ${finalTotal}</h2>
        <h2>Tax: ${Tax}</h2>
        <h2>Total: ${Total}</h2>
      </div>
    </div>
  );
}

export default Bill;
