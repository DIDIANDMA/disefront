import Btn from "../../../components/Btn/Btn";

const MainContainer = ({ children }) => {
  return (
    <article className=" py-10 border-Black-100">
      <section>
        <div>
          <h1 className=" text-100  font-bold leading-10">
            Top lists in your area
          </h1>
        </div>
        <div className=" py-6">
          <Btn />
          <p className=" text-40 py-2 font-semibold">
            얼마 이하의 와인이 모여있어요{" "}
          </p>
        </div>
      </section>
      {children}
    </article>
  );
};

export default MainContainer;
