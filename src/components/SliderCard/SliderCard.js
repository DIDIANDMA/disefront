const SliderCard = ({ item }) => {
  const { id, name, explanation, origin, img_url, price, rating } = item;
  return (
    <div
      id={id}
      key={name}
      className=" border-solid shadow-lg rounded-2xl  bg-priceBtnColor  last: flex-col "
    >
      <div className="flex items-center ">
        <img src="./images/test.png" className=" h-72 " alt="맥주병" />
        <div className=" flex-col items-center">
          <h1>{rating}</h1>
          <p>재고</p>
        </div>
      </div>
      <div>
        <p>{explanation}</p>
        <p>{origin}</p>
      </div>
    </div>
  );
};

export default SliderCard;
