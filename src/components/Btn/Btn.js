const Btn = ({ children, isSelected, id, handleClick, name }) => {
  const isSame = isSelected.map(items => items.content).includes(name);
  const result = isSame
    ? "  bg-mainColor  text-backGoround "
    : " bg-backGround";
  return (
    <button
      name={name}
      id={id}
      onClick={e => handleClick(e)}
      className={`w-20 h-8 border   border-mainColor rounded-3xl m-2 font-semibold${result}`}
    >
      {children}
    </button>
  );
};

export default Btn;
