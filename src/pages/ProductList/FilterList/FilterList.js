import axios from "axios";
import { useEffect, useState } from "react";
import FilterContainer from "../FilterContainer/FilterContainer";
import Btn from "../../../components/Btn/Btn";
const FilterList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [btnData, setBtnData] = useState([]);
  const [isSelected, setIsSelected] = useState({ id: 1 });

  const handleClick = e => {
    const { id } = e.target;
    if (isSelected.id === parseInt(id)) {
      return;
    } else
      setIsSelected({
        id: parseInt(id),
      });
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
    <section className=" flex flex-col  grow ">
      {isLoading &&
        btnData.map(data => {
          const { title, subtitle, content, id } = data;
          return (
            <FilterContainer
              key={title}
              id={id}
              title={title}
              subtitle={subtitle}
              content={content}
            >
              {content.map(txt => {
                const { id, content } = txt;
                return (
                  <Btn
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
