import Vivino from "../Svg/Logo/Vivino";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../Contexts/ModalContext/ModalContext";
import axios from "axios";
const Header = () => {
  const [userInput, setUserInput] = useState("");
  const { handleOpen } = useContext(ModalContext);
  const handleSearch = e => {
    const { value } = e.target;
    if (value.trim().length > 0) {
      setUserInput(value);
    } else setUserInput("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`https://dummyjson.com/products/search?q=${userInput}`)
        .then(res => console.log(res.data.products));
      //사용자가 5초이상 타자 입력이 없으면 요청 보내는 방향으로
    }, 5000);
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
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
