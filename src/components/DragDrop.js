// a component only hold drag and drop functions

// import React, { useState } from "react";
// import Appetizer from "./Appetizer";
// import { useDrop } from "react-dnd";

// function DragDrop({ appetizerList }) {
//   const [orderBoard, setOrderBoard] = useState([]);
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "foodname",
//     //only accept the same type from useDrag (in ./Picture)
//     drop: (item) => addFoodToBoard(item.id),
//     // drop will take a function to identify which image we wanted to add to board
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   const addFoodToBoard = (id) => {
//     const appetizers = { appetizerList }.filter((appet) => id === appet.id);
//     //drag new pic to board while keeping the old ones
//     setOrderBoard((orderBoard) => [...orderBoard, { appetizers }[0]]);
//     //drag new pic to board to take over the old one
//     // setOrderBoard((orderBoard) => [{ appetizers }[0]]);
//   };

//   return (
//     <>
//       {/* ~~~~~~~~~~~~~~~~~~~drag ~~~~~~~~~~~~~~~~~~~*/}
//       {/* <div className="Food"></div> */}
//       {/* ~~~~~~~~~~~~~~~~~~~drop ~~~~~~~~~~~~~~~~~~~*/}
//       <div className="OrderBoard" ref={drop}>
//         {orderBoard.map((appet) => {
//           return (
//             <div>
//               <div>{appet.item}</div>
//               <div>{appet.price}</div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default DragDrop;
