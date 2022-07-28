import { useState } from "react";
import Btn from "../../../components/Btn/Btn";

const FILTER = [
  { id: 1, content: 20000 },
  { id: 2, content: 30000 },
  { id: 3, content: 40000 },
  { id: 4, content: 50000 },
];
const FILTER_MAP = new Map(FILTER.map(item => [item.id, item.content]));

const MainContainer = ({ children }) => {
  const [isSelected, setIsSelected] = useState({ id: 1, content: 20000 });

  const handleClick = e => {
    const { id } = e.target;
    if (isSelected.id === parseInt(id)) {
      return;
    } else
      setIsSelected({
        id: parseInt(id),
        content: FILTER_MAP.get(parseInt(id)),
      });
  };

  return (
    <article className=" py-10 border-Black-100">
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
                  key={content}
                  isSelected={isSelected}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <p className=" text-40 py-3 font-semibold">
            {isSelected.content.toLocaleString()}원 이하의 와인이 모여있어요
          </p>
        </div>
      </section>
      {children}
    </article>
  );
};

export default MainContainer;
