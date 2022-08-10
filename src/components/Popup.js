import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p>Please enter your table number </p>
        <input
          placeholder="table number..."
          type="number"
          onChange={(event) => {
            props.setTableNum(event.target.value);
          }}
        />
        <p>How many of you? </p>
        <input
          placeholder="number of people..."
          type="number"
          onChange={(event) => {
            props.setPeopleNum(event.target.value);
          }}
        />
        <p>
          <button
            className="close-btn"
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            enter
          </button>
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
