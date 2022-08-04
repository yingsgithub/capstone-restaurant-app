import React from "react";
import { db } from "../firebase-config";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Appetizer from "../components/Appetizer";
import OrderBoard from "../components/OrderBoard";

function Menu() {
  const appetizerCollectionRef = collection(db, "appetizers");
  const jiangNanCollectionRef = collection(db, "jiangnan");
  const [appetizerList, setAppetizerList] = useState([]);
  const [jiangNanList, setJiangNanList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const getAppetizerList = async () => {
      const appetizersData = await getDocs(appetizerCollectionRef);
      setAppetizerList(
        appetizersData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };

    const getJiangNanList = async () => {
      const jiangNanData = await getDocs(jiangNanCollectionRef);
      setJiangNanList(
        jiangNanData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getAppetizerList();
    getJiangNanList();
    console.log("*************APPTIZERS*************************");
    console.log(appetizerList);
  }, []);

  // const selectFood = async (id, status) => {
  //   //doc() create an instance of database
  //   const orderDoc = doc(db, "appetizers", id);
  //   //data to update
  //   const orderStatus = { status: true };
  //   await updateDoc(orderDoc, orderStatus);
  // };

  const selectFood = (id, item, price, quantity) => {
    const foodDict = {
      id: id,
      item: item,
      price: price,
      quantity: quantity + 1,
    };
    const foodList = [...orderList, foodDict];
    setOrderList(foodList);
  };

  const reduceOne = (orderId, quantity) => {
    // for (const food in orderList) {
    //   if (orderId === food.id) {
    //     food.quantity -= 1;
    //   }
    //   //how to update orderList by using setOrderList??????
    // }
    const updateOrder = orderList.map((food) => {
      if (orderId === food.id) {
        food.quantity -= 1;
      }
      return orderList;
    });
    setOrderList(updateOrder);
  };

  const deleteFood = (orderId) => {
    const updatedOrderList = orderList.filter((food) => food.id !== orderId);
    setOrderList(updatedOrderList);
  };

  return (
    <div>
      <div className="MenuBoard">
        <div className="appet">
          <h1>Appetizer</h1>
          <div>
            <Appetizer
              appetizerList={appetizerList}
              selectFood={selectFood}
            ></Appetizer>
          </div>
        </div>

        <div className="jiangNan">
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
        </div>
      </div>

      <div className="OrderBoard">
        {/* <h1>Order board</h1> */}
        <div>
          <OrderBoard
            orderList={orderList}
            reduceOne={reduceOne}
            deleteFood={deleteFood}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
