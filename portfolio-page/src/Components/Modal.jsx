import React from "react";
import "../Styling/Modal.css";

export default function Modal({ toggle }) {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="text">
          <h2 className="modal-title">Thank You!</h2>
          <p className="p-modal">I recieved your email, I will reply soon!</p>
        </div>
        <div className="btn-contact">
          <button className="btn-modal" onClick={() => toggle(false)}>
            Cannot wait!
          </button>
        </div>
      </div>
    </div>
  );
}
