import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ productData }) => {
  const navigate = useNavigate();
  const [flipped, set] = useState(false);
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
  return (
    <>
      {productData.length > 0 &&
        productData.map((data) => (
          <div key={data.id}>
            <a.div
              onClick={() => handleToDetailProduct(data.id)}
              style={{ opacity: opacity.to((o) => 1 - o), transform }}
              className="bg-white rounded-2xl shadow-slate-300 mt-5 p-2 shadow-md drop-shadow-sm hover:drop-shadow-xl hover:shadow-2xl"
            >
              <div className="bg-myPrimary p-2 rounded-l-xl fixed text-black right-0 bottom-16">
                <p className="">${data.price}</p>
              </div>
              <img src={data.image} alt={data.title} className="h-80 mx-auto" />
              <p className="text-center font-bold pt-2">{data.title}</p>
            </a.div>
          </div>
        ))}
    </>
  );
};

export default CardProduct;
