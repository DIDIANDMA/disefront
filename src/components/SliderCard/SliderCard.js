const SliderCard = ({ item }) => {
  const { id, name, explanation, origin, img_url, price, rating } = item;
  return (
    <div
      id={id}
      key={name}
      className="mainCard border-solid shadow-lg rounded-2xl    last: flex-col hover:shadow-Black-100/40  hover:cursor-pointer"
    >
      <div className="flex items-center  ">
        <div className=" relative bottom-10  ">
          <img
            src={`http://${img_url}`}
            className="mainImg w-36 h-72 z-50"
            alt="맥주병"
          />
        </div>
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
