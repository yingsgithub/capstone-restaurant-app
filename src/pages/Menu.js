import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Appetizer from "../components/Appetizer";
import JiangnanFood from "../components/JiangnanFood";
// import DragDrop from "../components/DragDrop";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { useDrop } from "react-dnd";

function Menu() {
  const appetizerCollectionRef = collection(db, "appetizers");
  const jiangNanCollectionRef = collection(db, "jiangnan");
  const [appetizerList, setAppetizerList] = useState([]);
  const [jiangNanList, setJiangNanList] = useState([]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [orderBoard, setOrderBoard] = useState([]);

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

  const appetListOfDict = appetizerList.map((appet) => {
    return {
      foodItem: appet.item,
      price: appet.price,
      id: appet.id,
    };
  });

  console.log("~~~~~~~~~~~~~~Appetizers~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(appetListOfDict);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "piece",
    //only accept the same type from useDrag (in ./Picture)
    drop: (item) => addFoodToBoard(item.id),
    // drop will take a function to identify which image we wanted to add to board
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addFoodToBoard = (id) => {
    // const appetizerOrder = appetizerList.filter((appet) => id === appet.id);
    const appetizerOrder = appetListOfDict.filter((appet) => id === appet.id);
    //drag new pic to board while keeping the old ones
    // setOrderBoard((orderBoard) => [...orderBoard, { appetizerOrder }[0]]);
    setOrderBoard([...orderBoard, { appetizerOrder }[0]]);
    //drag new pic to board to take over the old one
    // setOrderBoard((orderBoard) => [{ appetizers }[0]]);
    console.log(orderBoard);
  };

  console.log("*************ORDERBOARD2*************************");
  console.log(orderBoard);

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
