import React from "react";
import AppetizerItem from "./AppetizerItem";

const Appetizer = ({ appetizerList, selectFood }) => {
  const appetizerItemComp = appetizerList.map((appet, index) => {
    return (
      // <div>
      //   <h1>Appetizer</h1>
      //   <div>
      //     {appetizerList.map((appet) => {
      //       return (
      //         <div className="menuContainer">
      //           <button onClick={selectFood}> #️⃣ </button>
      //           <div className="itemList">{appet.item}</div>
      //           <div className="itemPrice">${appet.price}</div>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>

      <div key={appet.id}>
        <AppetizerItem
          id={appet.id}
          item={appet.item}
          price={appet.price}
          status={appet.status}
          selectFood={selectFood}
        />
      </div>
    );
  });

  return (
    <section>
      <ul>{appetizerItemComp}</ul>
    </section>
  );
};

export default Appetizer;
