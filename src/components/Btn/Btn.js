const Btn = ({ children, isSelected, id, handleClick }) => {
  const isSame = isSelected.id === parseInt(id);
  const result = isSame
    ? "  bg-mainColor  text-backGoround"
    : " bg-backGround   text-mainColor";
  return (
    <button
      id={id}
      onClick={e => handleClick(e)}
      className={`w-20 h-8 border border-mainColor rounded-3xl m-1 ${result} `}
    >
      {children}
    </button>
  );
};

export default Btn;
