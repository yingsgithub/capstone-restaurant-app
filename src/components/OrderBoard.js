import React from "react";
import Order from "./Order";
import Popup from "./Popup";
// import { useNavigate } from "react-router-dom";

function OrderBoard({
  orderList,
  reduceOne,
  deleteFood,
  addOne,
  subTotal,
  createOrder,
  setTableNum,
  tableNum,
  peopleNum,
  setPeopleNum,
  buttonPopup,
  setButtonPopup,
}) {
  const OrderItemComp = orderList.map((order, index) => {
    return (
      <div key={index}>
        <Order
          orderId={order.id}
          orderItem={order.item}
          itemPrice={order.price}
          quantity={order.quantity}
          likeStatus={order.like}
          reduceOne={reduceOne}
          deleteFood={deleteFood}
          addOne={addOne}
        />
      </div>
    );
  });
  const whichButton =
    tableNum && peopleNum ? (
      <button className="menu-btn" onClick={createOrder}>
        Submit Orders
      </button>
    ) : (
      <button
        className="menu-btn"
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        {" "}
        enter table number{" "}
      </button>
    );
  const showTableNum =
    tableNum && peopleNum ? (
      <div>
        <h3>Table #: {tableNum}</h3>
        <h3>{peopleNum} People</h3>
      </div>
    ) : (
      <div></div>
    );

  const myMenuStyle = {
    // backgroundImage: "url(/jiangnanlake.png)",
    height: "60vh",
    marginTop: "20px",
    // fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="Order-Board" style={myMenuStyle}>
        <h1>Orders</h1>
        {/* <p>Table #: {tableNum}</p>
      <p>{peopleNum} People</p> */}

        {showTableNum}
        {OrderItemComp}
        {orderList[0] ? <h2>Total ${subTotal} </h2> : <div></div>}
        <div>
          {whichButton}
          <Popup
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
            setTableNum={setTableNum}
            setPeopleNum={setPeopleNum}
          ></Popup>
        </div>
      </div>
      {/* <div className="home-page" style={myMenuStyle}></div> */}
    </div>
  );
}

export default OrderBoard;
