import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../Contexts/ModalContext/ModalContext";

const Modal = ({ children }) => {
  const { isOpen, handleOpen } = useContext(ModalContext);
  if (isOpen) {
    return ReactDOM.createPortal(
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center "
        style={{ background: "rgba(0,0,0,0.8)" }}
        onClick={() => {
          handleOpen();
        }}
      >
        {children}
      </div>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;
