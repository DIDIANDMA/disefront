const Btn = ({ children, isSelected, id, handleClick }) => {
  const isSame = isSelected.id === parseInt(id);
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
