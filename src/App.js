import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bill from "./pages/Bill";
// import Popupmessage from "./components/Popupmessage";
import axios from "axios";

function App() {
  // let navigate = useNavigate();
  const menuCollectionRef = collection(db, "menu");
  const OrdersCollectionRef = collection(db, "orders");
  const [menuList, setMenuList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [foodType, setFoodType] = useState("");
  const [tableNum, setTableNum] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [ordersInBill, setOrdersInBill] = useState([]);

  const [likeFood, setLikeFood] = useState([]);
  const [quote, setQuote] = useState({});
  const [openFortune, setOpenFortune] = useState(false);

  const selectFoodType = (type) => {
    setFoodType(type);
  };

  useEffect(() => {
    const getMenuList = async () => {
      const menuData = await getDocs(menuCollectionRef);
      setMenuList(
        menuData.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getMenuList();

    // console.log("*************MENU*************************");
    // console.log(menuList);
  }, [likeFood]);

  //add orders to firebase
  const createOrder = async () => {
    await addDoc(OrdersCollectionRef, {
      orderList: orderList,
      total: subTotal,
      table: tableNum,
      people: peopleNum,
      payment: false,
    });
    // setPeopleNum(0);
    // setTableNum(0);
    setOrderList([]);
  };

  //add food to orderBoard
  const selectFood = (id, item, price, quantity) => {
    const addFoodToBoard = () => {
      const foodDict = {
        id: id,
        item: item,
        price: price,
        quantity: quantity + 1,
        like: false,
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

  // get bills associated with current table
  const getBill = async () => {
    const q = query(
      collection(db, "orders"),
      // where("table", "==", tableNum)
      where("payment", "==", false)
    );
    const querySnapshot = await getDocs(q);
    let foodInBill = [];
    querySnapshot.docs.forEach((doc) => {
      foodInBill.push({ ...doc.data(), id: doc.id });
    });

    const ordersList = [];
    for (let order of foodInBill) {
      if (order.table === tableNum) {
        ordersList.push(order);
      }
    }
    setOrdersInBill(ordersList);
    console.log("ORDERS IN BILL", ordersInBill);

    // });
  };

  const likeButton = (orderItem, likeStatus) => {
    const found = menuList.find((e) => e.item === orderItem);

    // console.log("is it the right food?", found);
    // console.log("food id", found.id);
    // console.log("food like", found.like + 1);
    // console.log("food price", found.price);

    const updateLikeStatusInMenu = async () => {
      // const menuDoc = doc(db, "menu", likeItemId.toString());
      const menuDoc = doc(db, "menu", found.id);
      const likeFields = { like: found.like + 1 };
      await updateDoc(menuDoc, likeFields);
    };
    updateLikeStatusInMenu();

    setLikeFood([...likeFood, orderItem]);
  };

  // ~~~~~~~~~~~~~~~~~~~~~~fortune cookie~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const getFortuneCookie = () => {
    axios
      // .get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .get("https://free-quotes-api.herokuapp.com/")
      // .get("https://animechan.vercel.app/api/random")
      .then((response) => {
        console.log("@@@@@@@@@", response.data);
        setQuote(response.data);
        setOpenFortune(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getFortuneCookie();
  // console.log("@@@@@@@@@@", animeQuote);

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        {tableNum ? (
          <Link onClick={getBill} to="/bill">
            View Bill
          </Link>
        ) : (
          <></>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Menu
              menuList={menuList}
              orderList={orderList}
              selectFood={selectFood}
              createOrder={createOrder}
              addOne={addOne}
              reduceOne={reduceOne}
              deleteFood={deleteFood}
              subTotal={subTotal}
              foodType={foodType}
              selectFoodType={selectFoodType}
              tableNum={tableNum}
              setTableNum={setTableNum}
              buttonPopup={buttonPopup}
              peopleNum={peopleNum}
              setPeopleNum={setPeopleNum}
              setButtonPopup={setButtonPopup}
            />
          }
        />
        <Route
          path="/bill"
          element={
            <Bill
              ordersInBill={ordersInBill}
              tableNum={tableNum}
              peopleNum={peopleNum}
              likeButton={likeButton}
              likeFood={likeFood}
              getFortuneCookie={getFortuneCookie}
              quote={quote}
              openFortune={openFortune}
            />
          }
        />
        {/* element: the comp which render when we go to this path */}
        {/* <Route path="/message" element={<Popupmessage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
