import MainContainer from "./MainContainer/MainContainer";
import MainCarousel from "../../components/MainCarousel/MainCarousel";

const Main = () => {
  return (
    <main className="items-center max-w-7xl  mx-auto">
      <MainContainer>
        <MainCarousel />
      </MainContainer>
    </main>
  );
};

export default Main;
