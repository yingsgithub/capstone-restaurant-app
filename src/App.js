import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bill from "./pages/Bill";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/bill"> Bill </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bill" element={<Bill />} />
        {/* element: the comp which render when we go to this path */}
      </Routes>
    </Router>
  );
}

export default App;
