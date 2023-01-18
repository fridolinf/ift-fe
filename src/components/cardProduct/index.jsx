import React, { useEffect, useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "components/loadingComponent";
import { getCountProduct, getProductList } from "services/apiServices";

const CardProduct = ({ productData, fetchMore }) => {
  const navigate = useNavigate();
  const [flipped, set] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [loadLoading, setLoadLoading] = useState(false);
  const [count, setCount] = useState(0);
  let dummyArr = [...Array(10)];
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleToDetailProduct = (id) => {
    set((state) => !state);
    setTimeout(() => {
      navigate(`/detail/${id}`, { state: { idProduct: id } });
    }, 650);
  };

  const fetchCountProduct = async () => {
    const productLength = await getCountProduct();
    setCount(productLength);
  };

  useEffect(() => {
    setLoading(true);
    fetchCountProduct();
    productData.length > 0 && setLoading(false);
  }, [productData]);

  const loadMore = () => {
    setLoadLoading(true);
    fetchMore();
    setLoadLoading(false);
  };

  return (
    <>
      {!isLoading ? (
        <div className="grid md:grid-cols-4 md:gap-6 sm:grid-cols-2 sm:gap-6 mb-24 w-full">
          {productData.map((data) => (
            <div key={data.id} className="my-2">
              <a.div
                onClick={() => handleToDetailProduct(data.id)}
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
                className="bg-white rounded-2xl cursor-pointer shadow-slate-300 mt-5 p-2 shadow-md drop-shadow-sm hover:drop-shadow-xl hover:shadow-2xl h-full"
              >
                <div className="bg-myPrimary p-2 rounded-l-xl fixed text-black right-0 bottom-20">
                  <p className="">${data.price}</p>
                </div>
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-80 mx-auto"
                />
                <p className="text-center font-bold pt-2">{data.title}</p>
              </a.div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-6 sm:grid-cols-2 sm:gap-6 mb-24 w-full">
          {dummyArr.map((data, i) => (
            <div key={i}>
              <div className="bg-white rounded-2xl cursor-pointer shadow-slate-300 mt-5 p-2 shadow-md drop-shadow-sm hover:drop-shadow-xl hover:shadow-2xl h-96">
                <div className="bg-gray-100 p-2 rounded-xl fixed text-black right-0 bottom-20">
                  <p className="bg-gray-100 h-5 w-14"></p>
                </div>
                <div className=" mx-auto bg-gray-300 h-80" />
                <p className="text-center font-bold pt-2 bg-gray-300 h-5 mt-2 w-full"></p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="relative pb-3">
        {productData.length < count && !loadLoading && (
          <button
            className="absolute bottom-12 flex justify-center w-full hover:bg-myPrimary hover:text-white"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
      {loadLoading && (
        <div className="mt-7">
          <LoadingComponent />
        </div>
      )}
    </>
  );
};

export default CardProduct;
