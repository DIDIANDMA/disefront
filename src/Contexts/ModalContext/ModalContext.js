import { createContext, useState } from "react";
const ModalContext = createContext(false);

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleOpen = () => {
    setIsOpen(prve => !prve);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleOpen, isLogin, setIsLogin }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
