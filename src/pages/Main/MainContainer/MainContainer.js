import Btn from "../../../components/Btn/Btn";

const MainContainer = ({ children, isSelected, handleClick, FILTER }) => {
  return (
    <article className=" py-10 border-Black-100 ">
      <section>
        <div>
          <h1 className=" text-100  font-bold leading-10">
            Top lists in your area
          </h1>
        </div>
        <div className=" py-6 ">
          <div className=" flex items-center ">
            {FILTER.map(items => {
              const { id, content } = items;
              return (
                <Btn
                  id={id}
                  name={content}
                  key={content}
                  isSelected={isSelected}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <p className=" text-40 py-3 font-semibold">
            {isSelected.content.toLocaleString()}원 이상의 와인이 모여있어요
          </p>
        </div>
      </section>
      {children}
    </article>
  );
};

export default MainContainer;
