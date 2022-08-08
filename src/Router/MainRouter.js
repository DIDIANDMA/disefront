import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../pages/Main/Main";
import Modal from "../components/Modal/Modal";
import Login from "../pages/Login/Login";
import { ModalProvider } from "../Contexts/ModalContext/ModalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Modal>
          <Login />
        </Modal>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default MainRouter;
