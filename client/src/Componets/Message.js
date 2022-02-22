import React from "react";
import "../assets/message.css";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <text></text>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          {/* send button 
          box that types*/}
          SEND
        </button>
      </div>
    </div>
  );
};

export default Modal;
