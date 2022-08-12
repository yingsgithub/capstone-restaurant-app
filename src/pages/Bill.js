import React from "react";
import Billitem from "../components/Billitem";

function Bill({ tableNum, peopleNum, ordersInBill, likeButton, likeFood }) {
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
          likeStatus={order.like}
          likeButton={likeButton}
          likeFood={likeFood}
        />
      </div>
    );
  });

  const Tax = Number(Number.parseFloat(finalTotal * 0.08).toFixed(2));
  const Total = Number(Number.parseFloat(finalTotal + Tax).toFixed(2));

  const paymentOption = [
    { value: "", text: "...Choose an option" },
    { value: "As it is", text: "As it is" },
    { value: "Split by num of peoples", text: "Split by num of peoples" },
    { value: "Split in my own way", text: "Split in my own way" },
  ];

  const selectPayment = (event) => {
    console.log(event.target.value);
  };

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
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2>How would you like to pay your bill?</h2>
        <select onChange={selectPayment} name="paymentOptions" id="pmt-select">
          {paymentOption.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Bill;
