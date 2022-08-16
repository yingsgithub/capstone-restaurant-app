import React, { useState } from "react";
import Billitem from "../components/Billitem";
import "../App.css";

function Bill({
  tableNum,
  peopleNum,
  ordersInBill,
  likeButton,
  likeFood,
  quote,
  getFortuneCookie,
  openFortune,
}) {
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

  // const [subBill, setSubBill] = useState([]);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("bill submitted");

  //   setSubBill([]);
  // };

  // console.log("subbbbbbbilll", subBill);

  // const displaySubBill = () => {
  //   for (let i = 0; i < subBill.length; i++) {
  //     return <div>Bill # {i} : $ subBill[i]</div>;
  //   }
  // };

  const Tax = Number(Number.parseFloat(finalTotal * 0.08).toFixed(2));
  const Total = Number(Number.parseFloat(finalTotal + Tax).toFixed(2));
  const averagePay = Number(Number.parseFloat(Total / peopleNum).toFixed(2));
  console.log("#####", averagePay);

  const [paymentMessage, setPaymentMessage] = useState("");

  const paymentOption = [
    { value: "", text: "...Choose an option" },
    { value: "As it is", text: "As it is" },
    { value: "Split by num of people", text: "Split by num of people" },
    { value: "Split in my own way", text: "Split in my own way" },
  ];

  const selectPayment = (event) => {
    console.log(event.target.value);
    if (event.target.value == "As it is") {
      setPaymentMessage(
        `Your bill is $ ${Total}. 
        Thank you for eating at Cheli, we will bring your bill soon!`
      );
    } else if (event.target.value == "Split by num of people") {
      const message = `Your bill will be splitted into ${peopleNum} bills, each bill is $ ${averagePay}. Thank you for eating at Cheli, we will bring your bills soon!`;
      setPaymentMessage(message);
    } else if (event.target.value == "Split in my own way") {
      setPaymentMessage("");
    }
  };

  // random color for fortune cookie messages
  const colors = [
    "darkseagreen",
    "IndianRed",
    "Tan",
    "lightblue",
    "burlywood",
    "Orchid",
    "steelblue",
    "darksalmon",
    "Salmon",
    "plum",
    "DarkGray",
    "palevioletred",
    "lightseagreen ",
    "GoldenRod",
  ];
  const getColor = () => {
    const len = colors.length;
    const randomNum = Math.floor(Math.random() * len);
    let color = colors[randomNum];
    console.log(color);
    return color;
  };

  return (
    <div className="bill-bkg">
      <div className="bill-page">
        <div className="bill-container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>Table #: {tableNum}</h2>
          <h4>{peopleNum} people</h4>
          <div>{BillItemComp}</div>
          <div>
            <h3>Sub Total: ${finalTotal}</h3>
            <h3>Tax: ${Tax}</h3>
            <h3>Total: ${Total}</h3>
          </div>
          {/* </div> */}
          <br></br>
          <br></br>

          <div>
            <h2>How would you like to pay your bill?</h2>
            <select
              onChange={selectPayment}
              name="paymentOptions"
              id="pmt-select"
            >
              {paymentOption.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </select>
            <div className="pmt-message">
              {paymentMessage ? (
                <div> {paymentMessage}</div>
              ) : (
                <div>
                  {/* <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  value={subBill}
                  onChange={(event) => {
                    setSubBill(event.target.value);
                  }}
                ></input>
                <button type="submit">add a bill</button>
              </form> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* fortune Cookie */}
      {paymentMessage ? (
        <div className="cookie-container">
          <h1>Click on the picture to get a Fortune Cookie 🥠</h1>

          {/* <button img src className="cookie-btn" onClick={getFortuneCookie}> */}

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="cookie-fortune">
            <div className="cookie-img">
              <img
                src="/Screen Shot 2022-08-14 at 11.03.48 AM.png"
                alt="fortune cookie"
                onClick={getFortuneCookie}
              />
            </div>
            <div className="cookie-quote" style={{ color: getColor() }}>
              <br></br>
              {quote.quote}
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Bill;
