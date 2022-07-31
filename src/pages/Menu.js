import React from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

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
        <div>
          <h1>appetizer</h1>
        </div>
        <div>
          {appetizerList.map((appet) => {
            return (
              <div className="menuContainer">
                <div className="itemList">{appet.item}</div>
                <div className="itemPrice">${appet.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="jiangNan">
        <div>
          <h1>Jiang Nan Reminisce</h1>
        </div>
        <div>
          {jiangNanList.map((jiangNanFood) => {
            return (
              <div className="menuContainer">
                <div className="itemList">{jiangNanFood.item}</div>
                <div className="itemPrice">${jiangNanFood.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
