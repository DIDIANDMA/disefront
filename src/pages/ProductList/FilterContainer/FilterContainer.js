const FilterContainer = ({ children, title, subtitle }) => {
  return (
    <section className="  max-w-sm ">
      <div className=" flex items-start justify-between m-5  ">
        <span className=" text-70 font-bold ">{title}</span>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className=" flex flex-wrap ">{children}</div>
    </section>
  );
};

export default FilterContainer;
