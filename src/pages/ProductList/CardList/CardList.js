import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../components/Card/Card";
const TYPE = "productList";
const CardList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    axios
      .get("/data/mainProduct/mainProduct.json")
      .then(res => {
        if (res) {
          setIsLoading(true);
          setMainData(res.data);
        }
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <section className=" grow mx-6">
      {isLoading &&
        mainData.map(item => {
          const { id, name } = item;
          return <Card item={item} type={TYPE} />;
        })}
    </section>
  );
};

export default CardList;
