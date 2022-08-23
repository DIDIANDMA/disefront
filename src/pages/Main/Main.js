import MainContainer from "./MainContainer/MainContainer";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { ModalContext } from "../../Contexts/ModalContext/ModalContext";
const FILTER = [
  { id: 1, content: 20000 },
  { id: 2, content: 40000 },
  { id: 3, content: 60000 },
  { id: 4, content: 80000 },
];
const FILTER_MAP = new Map(FILTER.map(item => [item.id, item.content]));
const Main = () => {
  const TOKEN = localStorage.getItem("token");
  const { isLogin, setIsLogin } = useContext(ModalContext);
  const [isSelected, setIsSelected] = useState([{ id: 1, content: 20000 }]);
  const [mainData, setMainData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (isLogin) {
      if (TOKEN) {
        axios.post("http://15.164.163.31:8002/users/kakaologin", {
          headers: {
            Authorization: TOKEN,
          },
        });
      }
    }
  }, [TOKEN]);

  useEffect(() => {
    axios
      .get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(res => {
        if (res) {
          localStorage.setItem("USERS", JSON.stringify(res.data));
          setIsLogin(true);
        }
      });
  }, [TOKEN]);

  const handleClick = e => {
    const { id, name } = e.target;
    const check = isSelected.find(item => item.content === name);
    if (check) {
      return;
    } else
      setIsSelected([
        {
          id: parseInt(id),
          content: FILTER_MAP.get(parseInt(id)),
        },
      ]);
  };

  useEffect(() => {
    const price = isSelected[0].content;
    if (price) {
      axios
        .get(
          `http://15.164.163.31:8002/products/?page=2&ordering=-price?price__lt=${price}&price__gt=${
            price - 20000
          }`
        )
        .then(res => setMainData(res.data.results));
    }
  }, [isSelected]);

  return (
    <main className="items-center max-w-7xl  mx-auto">
      <MainContainer
        isSelected={isSelected}
        handleClick={handleClick}
        FILTER={FILTER}
      >
        <MainCarousel mainData={mainData} />
      </MainContainer>
    </main>
  );
};

export default Main;
