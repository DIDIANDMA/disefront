const Btn = ({ children, isSelected, id, handleClick, name }) => {
  const isSame = isSelected.content === name;
  const result = isSame ? "  bg-mainColor " : " bg-backGround";
  return (
    <button
      id={id}
      onClick={e => handleClick(e)}
      className={`w-20 h-8 border border-mainColor rounded-3xl mx-1 ${result}`}
    >
      {children}
    </button>
  );
};

export default Btn;
