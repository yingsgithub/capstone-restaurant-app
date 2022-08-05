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
  const [subTotal, setSubTotal] = useState(0);

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

  //add food to orderBoard
  const selectFood = (id, item, price, quantity) => {
    const addFoodToBoard = () => {
      const foodDict = {
        id: id,
        item: item,
        price: price,
        quantity: quantity + 1,
      };

      const foodList = [...orderList];
      foodList.push(foodDict);
      setOrderList(foodList);
    };

    let foodIdList = [];
    for (let food of orderList) {
      foodIdList.push(food.id);
    }
    if (!foodIdList.includes(id)) {
      addFoodToBoard();
    } else {
      console.log("This food already in board!");
      // create a pop up box for the message !!!!!!!!!!!!!!!!
    }
  };

  const addOne = (orderId, quantity) => {
    const foodList = [...orderList];
    for (let food of foodList) {
      if (orderId === food.id) {
        food.quantity += 1;
      }
    }
    setOrderList(foodList);
  };

  const reduceOne = (orderId, quantity) => {
    const foodList = [...orderList];
    //food is index of the arr-foodList
    for (let food of foodList) {
      if (orderId === food.id) {
        food.quantity -= 1;
      }
    }
    setOrderList(foodList);

    //delete oder item if quantity =0
    for (let food of orderList) {
      if (food.quantity === 0) {
        deleteFood(orderId);
      }
    }
  };

  const deleteFood = (orderId) => {
    const updatedOrderList = orderList.filter((food) => food.id !== orderId);
    setOrderList(updatedOrderList);
  };

  // count subtotal
  const subTotalCal = () => {
    let priceTotal = 0;
    for (let order of orderList) {
      priceTotal += order.price * order.quantity;
    }
    setSubTotal(priceTotal);
  };

  useEffect(() => {
    subTotalCal();
  }, [orderList]);

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
            addOne={addOne}
            subTotal={subTotal}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
