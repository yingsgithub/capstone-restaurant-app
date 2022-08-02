import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Appetizer from "../components/Appetizer";
import JiangnanFood from "../components/JiangnanFood";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { useDrop } from "react-dnd";

function Menu() {
  const appetizerCollectionRef = collection(db, "appetizers");
  const jiangNanCollectionRef = collection(db, "jiangnan");
  const [appetizerList, setAppetizerList] = useState([]);
  const [jiangNanList, setJiangNanList] = useState([]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [orderBoard, setOrderBoard] = useState([]);
  const [appetListOfDict, setAppetListOfDict] = useState([]);
  // const [newOrder, setNewOrder] = useState({});

  useEffect(() => {
    const getAppetizerList = async () => {
      const appetizersData = await getDocs(appetizerCollectionRef);
      setAppetizerList(
        appetizersData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
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
  }, []);

  useEffect(() => {
    const newAppetListOfDict = appetizerList.map((appet) => {
      return {
        foodItem: appet.item,
        price: appet.price,
        id: appet.id,
      };
    });
    setAppetListOfDict(newAppetListOfDict);
  }, [appetizerList]);

  //to get dada structure needed

  // const appetListOfDict = appetizerList.map((appet) => {
  //   return {
  //     foodItem: appet.item,
  //     price: appet.price,
  //     id: appet.id,
  //   };
  // });

  console.log("~~~~~~~~~~~~~~Appetizers~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(appetListOfDict);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "piece",
    //only accept the same type from useDrag (in ./Picture)
    // drop: (item) => {
    //   console.log("this is the item", item);
    //   return addFoodToBoard(item.id);
    // },
    drop: (item) => addFoodToBoard(item.id),

    // drop will take a function to identify which image we wanted to add to board
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addFoodToBoard = (id) => {
    // const appetizerOrder = appetizerList.filter((appet) => id === appet.id);
    const appetizerOrder = appetListOfDict.filter((appet) => id === appet.id);
    // console.log("appetizerOrder", appetizerOrder);
    //drag new pic to board while keeping the old ones
    setOrderBoard((orderBoard) => [...orderBoard, { appetizerOrder }[0]]);
    // const newOrder = appetizerOrder[0];
    // const newOrder = appetizerList[0];

    // const newOrder = ()=> {for (let food in appetizerList) {
    //   if (id === food.id) {
    //     newOrder = food;
    //   }
    // }
    // console.log("this is newOrder", newOrder);
    // setOrderBoard([...orderBoard, newOrder]);
    // // if (newOrder) {
    //   setOrderBoard([...orderBoard, newOrder]);
    // }
    //drag new pic to board to take over the old one
    // setOrderBoard((orderBoard) => [{ appetizers }[0]]);
    console.log("order board", orderBoard);
  };

  // console.log("*************ORDERBOARD2*************************");
  // console.log(orderBoard);

  return (
    <div className="MenuAndOrder">
      <div>
        <div className="Appet">
          <h1>appetizer</h1>
          {/* <Appetizer appetizerList={appetizerList}></Appetizer> */}
          {appetizerList.map((appet) => {
            return (
              <Appetizer
                id={appet.id}
                foodItem={appet.item}
                price={appet.price}
              />
            );
          })}
        </div>

        <div className="JiangNan">
          <h1>Jiang Nan Reminisce</h1>
          <JiangnanFood jiangNanList={jiangNanList}></JiangnanFood>
        </div>
      </div>

      <div className="OrderBoard" ref={drop}>
        {orderBoard.map((appet) => {
          return (
            <Appetizer
              id={appet.id}
              foodItem={appet.item}
              price={appet.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
