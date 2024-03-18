import React from 'react';
import './Modal.css';

function Modal({ message, onClose }) {
  return (
    <div className="overlay">
      <div className="modal">
        <p>{message}</p>
        <button onClick={onClose}>Okay</button>
      </div>
    </div>
  );
}

export default Modal;
