import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bill from "./pages/Bill";

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
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/bill"> Bill </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu appetizers={appetizers} />} />
        <Route path="/bill" element={<Bill />} />
        {/* element: the comp which render when we go to this path */}
      </Routes>
    </Router>
  );
}

export default App;
