import "./App.css";
// import React, { useState } from "react";
//for linked pages
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bill from "./pages/Bill";
// for Drag&Drop
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import DragDrop from "./components/DragDrop";

function App() {
  return (
    <>
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
      <DndProvider backend={HTML5Backend}>
        <div>
          <Menu />
        </div>
      </DndProvider>
    </>
  );
}

export default App;
