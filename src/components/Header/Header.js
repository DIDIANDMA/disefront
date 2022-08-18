import Vivino from "../Svg/Logo/Vivino";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../Contexts/ModalContext/ModalContext";
import AXIOSCON from "../../axios";

const Header = () => {
  const login = localStorage.getItem("token");
  const [userInput, setUserInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { handleOpen, isLogin } = useContext(ModalContext);

  const handleSearch = e => {
    const { value } = e.target;
    if (value.trim().length > 0) {
      setUserInput(value);
    } else setUserInput("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      AXIOSCON.get(`/products/search?keyword=${userInput}`).then(res => {
        if (res.status === 200) {
          setSearchData(res.data);
        }
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [userInput]);

  return (
    <header className=" shadow-md">
      <nav className="flex items-center max-w-7xl  mx-auto justify-between p-6 ">
        <div className="flex items-center ">
          <div className=" flex items-center w-28 h-11 mx-2  ">
            <Vivino />
          </div>
          <input
            onChange={e => handleSearch(e)}
            className="  rounded-full  border  w-96  p-2 border-Black-80"
            type="text"
            placeholder="🔍   Search any HangOver"
          />
        </div>
        <div className="flex items-center justify-around ">
          <button className=" bg-Black-80 p-3 mx-4 rounded-full">
            <i class="fa-solid fa-user text-2xl" />
          </button>

          <button
            className="btn  bg-mainColor"
            onClick={() => {
              handleOpen();
            }}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
