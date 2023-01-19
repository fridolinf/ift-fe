import CardProduct from "components/cardProduct";
import LayoutApp from "components/layoutApp";
import SortingComponent from "components/sortingComponent";
import { useEffect, useState } from "react";
import { getProductList } from "services/apiServices";

const Home = () => {
  const [productList, setProductList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  const fetchProducts = async (limit, sort) => {
    setSearch("");
    const product = await getProductList(limit, sort);
    setProductList(product);
  };

  const fetchProductsMore = async () => {
    fetchProducts(productList.length + 4);
  };

  useEffect(() => {
    fetchProducts(8);
  }, []);

  const onChangeSearch = (val) => {
    setSearch(val);
    const filterProduct = productList.filter((data) =>
      data.title.includes(val)
    );
    val === "" && fetchProducts();
    filterProduct.length > 0 && setProductList(filterProduct);
  };

  return (
    <LayoutApp needHeader={true}>
      <p className="text-center font-semibold text-2xl"> OUR PRODUCTS </p>
      <div className="w-full flex justify-between align-middle my-2">
        <input
          className="w-2/4 rounded-md p-2"
          placeholder="Search by title"
          type="text"
          onChange={(e) => onChangeSearch(e.target.value)}
        />
        <SortingComponent sortBy={fetchProducts} />
      </div>
      <CardProduct fetchMore={fetchProductsMore} productData={productList} />
    </LayoutApp>
  );
};

export default Home;
