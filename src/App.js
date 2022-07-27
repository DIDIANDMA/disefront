import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import { ModalProvider } from "./Contexts/ModalContext/ModalContext";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Modal />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
