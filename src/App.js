import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const appetizerCollectionRef = collection(db, "appetizer");
  const [appetizers, setAppetizers] = useState([]);

  const getMenuAppetizer = async () => {
    const appetizersData = await getDocs(appetizerCollectionRef);
    setAppetizers(
      appetizersData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );

    // console.log("*************APPTIZERS*************************");
    // console.log(appetizers);
  };

  useEffect(() => {
    getMenuAppetizer();
  }, []);

  return (
    <div className="App">
      <div>pictures of rest</div>
      <h1>Cheli</h1>
      <h2>menu</h2>
      <div>
        <h2>APPTIZERS</h2>
        <ul>
          {appetizers.map((appet) => {
            return (
              <li>
                {appet.item} ${appet.price}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
