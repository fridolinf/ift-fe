import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import LayoutApp from "components/layoutApp";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetailProduct } from "services/apiServices";

const tabs = [
  { name: "Title", current: true },
  { name: "Price", current: false },
  { name: "Category", current: false },
  { name: "Description", current: false },
];

const DetailProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [detailProduct, setDetailProduct] = useState(null);
  const [openTab, setOpenTab] = useState("Title");
  const [tabContent, setTabContent] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const fetchDetailProduct = async () => {
    const res = await getDetailProduct(location.state.idProduct);
    setDetailProduct(res);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    fetchDetailProduct();
  }, []);

  const handleClickTab = (val, idx) => {
    for (const key in detailProduct) {
      if (Object.hasOwnProperty.call(detailProduct, key)) {
        if (key === val.toLowerCase()) {
          const element = detailProduct[key];
          setTabContent(element);
        }
      }
    }
    setOpenTab(val);
    setTabIndex(idx);
  };
  return (
    <LayoutApp>
      <ArrowLeftIcon onClick={() => navigate(-1)} className="w-10 text-white" />
      <div className="sm:flex sm:justify-around">
        <div className="bg-white shadow-lg shadow-slate-100 drop-shadow-xl p-5 mt-2 rounded-md sm:w-6/12 flex justify-center">
          <img
            src={detailProduct?.image}
            alt={detailProduct?.title}
            className="h-96 sm:mx-auto "
          />
        </div>
        <div className="sm:mx-10 mx-1">
          <div>
            <div className="border-b border-gray-200  mt-1">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab, i) => (
                  <p
                    key={tab.name}
                    onClick={() => handleClickTab(tab.name, i)}
                    className={`cursor-pointer py-2 border-b-4 transition-colors duration-300 ${
                      i === tabIndex
                        ? "border-white"
                        : "border-transparent hover:border-blue-100"
                    }`}
                  >
                    {tab.name}
                  </p>
                ))}
              </nav>
              <p className="pt-2 font-semibold text-justify sm:max-w-sm">
                {tabContent === "" ? detailProduct.title : tabContent}
              </p>
              <div className="mt-3 flex justify-end">
                <button className="bg-myPrimary shadow-lg drop-shadow-lg p-3 font-semibold rounded-2xl">
                  Checkout Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default DetailProduct;
