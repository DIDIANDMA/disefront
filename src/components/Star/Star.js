const EMPTY = <i className="fa-regular fa-star  text-mainColor" />;
const HALF = <i className="fa-regular fa-star-half-stroke  text-mainColor" />;
const FULL = <i className="fa-solid fa-star text-mainColor" />;
const Star = ({ rate, key }) => {
  //숫자로 값을 받아서 정수인 경우에는 차있는거 정수의 갯수만큳
  //그리고 4.5 인경우에는 절반 마지막에 뱉고록
  // 2.5/3.5 .1.5 이런 경우에는 비어있는거 보여주도록
  //그러먼 일단 숫자를 받아주는걸 찾아서
  // 5.0으로 숫자를 주도록해서
  // 일단 수가 4이상인지확인
  // 4이상이면 5.04.5 이즘이라는거니까

  return (
    <div className=" flex m-2 ">
      {[...Array(rate)].map((items, index) => FULL)}
    </div>
  );
};

export default Star;
