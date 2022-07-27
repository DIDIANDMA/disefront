import Vivino from "../Svg/Logo/Vivino";
import { useContext } from "react";
import { ModalContext } from "../../Contexts/ModalContext/ModalContext";
const Header = () => {
  const { handleOpen } = useContext(ModalContext);

  return (
    <header className=" shadow-md">
      <nav className="flex items-center max-w-7xl  mx-auto justify-between p-6 ">
        <div className="flex items-center ">
          <div className=" flex items-center w-28 h-11 mx-2  ">
            <Vivino />
          </div>
          <input
            className="  rounded-full  border  w-96  p-2 border-Black-80"
            type="text"
            placeholder="🔍   Search any HangOver"
          />
        </div>
        <div className="flex items-center justify-around grow">
          <div className="flex justify-end w-4/5">
            <button>
              <i class="fa-solid fa-user text-2xl" />
            </button>
          </div>
          <button
            className="btn  bg-mainColor"
            onClick={() => {
              handleOpen();
            }}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
