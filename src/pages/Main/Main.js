import MainContainer from "./MainContainer/MainContainer";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  const TOKEN = localStorage.getItem("kakao_token");
  useEffect(() => {
    if (TOKEN) {
      axios
        .post("http://15.164.163.31:8002/users/kakaologin", {
          headers: {
            Authorization: TOKEN,
          },
        })
        .then(res => {
          if (res.status === 200) {
          }
        })
        .catch(e => console.log(e));
    }
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
