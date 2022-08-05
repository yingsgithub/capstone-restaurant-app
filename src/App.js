import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bill from "./pages/Bill";
// import Appetizer from "./components/Appetizer";
// import OrderBoard from "./components/OrderBoard";

function App() {
  const appetizerCollectionRef = collection(db, "appetizers");
  const OrdersCollectionRef = collection(db, "orders");
  const [appetizerList, setAppetizerList] = useState([]);
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
    getAppetizerList();

    console.log("*************APPTIZERS*************************");
    console.log(appetizerList);
  }, []);

  //add orders to firebase
  const createOrder = async () => {
    await addDoc(OrdersCollectionRef, {
      orderList: orderList,
      total: subTotal,
    });
  };

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
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/bill"> Bill </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Menu
              appetizerList={appetizerList}
              orderList={orderList}
              selectFood={selectFood}
              createOrder={createOrder}
              addOne={addOne}
              reduceOne={reduceOne}
              deleteFood={deleteFood}
              subTotal={subTotal}
            />
          }
        />
        <Route path="/bill" element={<Bill />} />
        {/* element: the comp which render when we go to this path */}
      </Routes>
    </Router>
  );
}

export default App;
