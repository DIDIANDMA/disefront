import MainContainer from "./MainContainer/MainContainer";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import axios from "axios";
import { useEffect, useContext } from "react";
import { ModalContext } from "../../Contexts/ModalContext/ModalContext";

const Main = () => {
  const TOKEN = localStorage.getItem("token");
  const { isLogin } = useContext(ModalContext);
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
      .then(res => console.log(res.data));
  }, [TOKEN]);
  return (
    <main className="items-center max-w-7xl  mx-auto">
      <MainContainer>
        <MainCarousel />
      </MainContainer>
    </main>
  );
};

export default Main;
