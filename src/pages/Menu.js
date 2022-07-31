import React from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Appetizer from "../components/Appetizer";
import JiangnanFood from "../components/JiangnanFood";

function Menu() {
  const appetizerCollectionRef = collection(db, "appetizers");
  const jiangNanCollectionRef = collection(db, "jiangnan");
  const [appetizerList, setAppetizerList] = useState([]);
  const [jiangNanList, setJiangNanList] = useState([]);

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
    // console.log("*************APPTIZERS*************************");
    // console.log(appetizerList);
  }, []);

  return (
    <div>
      <div className="appet">
        <h1>appetizer</h1>
        <Appetizer appetizerList={appetizerList}></Appetizer>
      </div>

      <div className="jiangNan">
        <h1>Jiang Nan Reminisce</h1>
        <JiangnanFood jiangNanList={jiangNanList}></JiangnanFood>
      </div>
    </div>
  );
}

export default Menu;
