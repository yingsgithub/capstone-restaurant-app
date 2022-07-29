import React from "react";
// import { db } from "./firebase-config";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";

function Menu({ appetizers }) {
  // const appetizerCollectionRef = collection(db, "appetizer");
  // const [appetizers, setAppetizers] = useState([]);

  // const getMenuAppetizer = async () => {
  //   const appetizersData = await getDocs(appetizerCollectionRef);
  //   setAppetizers(
  //     appetizersData.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }))
  //   );

  //   // console.log("*************APPTIZERS*************************");
  //   // console.log(appetizers);
  // };

  // useEffect(() => {
  //   getMenuAppetizer();
  // }, []);
  const allAppet = () => {
    appetizers.map((appet) => {
      return (
        <li>
          {appet.item} ${appet.price}
          {/* console.log({appet.item}) */}
        </li>
      );
    });
  };
  return (
    <div>
      <h2>APPTIZERS</h2>
      <ul>
        {/* {allAppet.map((appet) => {
          return (
            <li>
              {appet.item} ${appet.price}
            </li>
          );
        })} */}
        {allAppet}
      </ul>
    </div>
  );
}

export default Menu;
