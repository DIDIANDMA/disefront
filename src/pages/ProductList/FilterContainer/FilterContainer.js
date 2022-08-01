const FilterContainer = ({ children, title, subtitle }) => {
  return (
    <div className="  max-w-sm ">
      <div className=" flex items-start justify-between p-6">
        <span className=" text-70 font-bold ">{title}</span>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className=" p-2">{children}</div>
    </div>
  );
};

export default FilterContainer;
