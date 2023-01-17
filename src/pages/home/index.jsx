import CardProduct from "components/cardProduct";
import LayoutApp from "components/layoutApp";
import React, { useEffect, useState } from "react";
import { getProductList } from "services/apiServices";

const Home = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const product = await getProductList();
    setProductList(product);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <LayoutApp needHeader={true}>
      <p className="text-center font-semibold text-2xl"> OUR PRODUCTS </p>
      <div className="grid md:grid-cols-4 md:gap-6 sm:grid-cols-2 sm:gap-6 mb-12">
        <CardProduct productData={productList} />
      </div>
    </LayoutApp>
  );
};

export default Home;
