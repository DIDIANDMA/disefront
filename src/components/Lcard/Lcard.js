import "./Lcard.css";

const Lcard = ({ item }) => {
  const { id, name, explanation, origin, img_url, price, rating } = item;

  return (
    <div
      id={id}
      key={name}
      className="border-solid shadow-lg rounded-2xl   last: flex-col hover:shadow-Black-100/40  hover:cursor-pointer  my-3"
    >
      <div className="large  flex max-w-3xl items-center justify-around">
        <div className=" relative bottom-10  ">
          <img src={img_url} className="mainImg w-36 h-72 z-50" alt="맥주병" />
        </div>
        <div className=" flex   flex-col ">
          <p>{explanation}</p>
          <p>{origin}</p>
        </div>
        <div className=" flex-col items-center">
          <h1>{rating}</h1>
          <p>재고</p>
        </div>
      </div>
    </div>
  );
};

export default Lcard;