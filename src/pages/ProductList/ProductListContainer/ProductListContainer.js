const ProductListContainer = ({ children }) => {
  return (
    <main className=" max-w-5xl mx-auto ">
      <article className="flex items-center justify-between py-16 mx-auto">
        <section>
          <h1 className=" text-70  font-bold leading-10">
            몇개의 와인을 얼마나 보여주고 있늕디
          </h1>
        </section>
        <section>
          <select />
        </section>
      </article>
      <article className=" flex  ">{children}</article>
    </main>
  );
};

export default ProductListContainer;
