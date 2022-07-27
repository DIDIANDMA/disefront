import { createContext, useState } from "react";
const ModalContext = createContext(false);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(prve => !prve);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
