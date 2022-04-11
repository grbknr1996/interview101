import React from "react";
import Modal from "react-modal";
import { useState } from "react";
const AppModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>x Close</button>
        </div>
      </Modal>
    </>
  );
};

export default AppModal;
