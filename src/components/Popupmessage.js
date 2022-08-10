import React from "react";
import "./Popupmessage.css";

function Popupmessage({ messagePopup, setMessagePopup }) {
  return messagePopup ? (
    <div className="popup">
      <div className="popup-inner">
        This food is already added, please edit quantity in your order
      </div>
      <button
        className="close-btn"
        onClick={() => {
          setMessagePopup(false);
        }}
      />
    </div>
  ) : (
    ""
  );
}

export default Popupmessage;
