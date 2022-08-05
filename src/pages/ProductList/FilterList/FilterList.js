import axios from "axios";
import { useEffect, useState } from "react";
import FilterContainer from "../FilterContainer/FilterContainer";
import Btn from "../../../components/Btn/Btn";
const FilterList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [btnData, setBtnData] = useState([]);
  const [isSelected, setIsSelected] = useState([{ id: 1, content: "Red" }]);

  const handleClick = e => {
    const { id, name } = e.target;
    const check = isSelected.find(item => item.content === name);
    if (check) {
      setIsSelected(isSelected.filter(items => items.content !== name));
    } else {
      setIsSelected(prev => [
        ...prev,
        {
          id: parseInt(id),
          content: name,
        },
      ]);
    }
  };

  useEffect(() => {
    axios.get("/data/filterList/filterList.json").then(res => {
      if (res.status === 200) {
        setIsLoading(true);
        setBtnData(res.data);
      }
    });
  }, []);

  return (
    <section className=" flex flex-col ">
      {isLoading &&
        btnData.map(data => {
          const { title, subtitle, content, id, type } = data;
          return (
            <FilterContainer
              key={title}
              id={id}
              title={title}
              subtitle={subtitle}
              content={content}
            >
              {type === "button" &&
                content.map(txt => {
                  const { id, content } = txt;
                  return (
                    <Btn
                      name={content}
                      key={id}
                      id={id}
                      isSelected={isSelected}
                      handleClick={handleClick}
                    >
                      {content}
                    </Btn>
                  );
                })}
            </FilterContainer>
          );
        })}
    </section>
  );
};

export default FilterList;
