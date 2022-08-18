import ProductListContainer from "./ProductListContainer/ProductListContainer";
import FilterList from "./FilterList/FilterList";
import CardList from "./CardList/CardList";

const ProductList = () => {
  return (
    <ProductListContainer>
      <FilterList />
      <CardList />
    </ProductListContainer>
  );
};

export default ProductList;
