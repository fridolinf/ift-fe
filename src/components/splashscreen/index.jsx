import React, { useState } from "react";
import { useTransition, animated, useSpring } from "@react-spring/web";
import ShoppingCartAnimation from "assets/img/lottie/shopping-cart.json";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const [index, set] = useState(0);
  const navigate = useNavigate();

  const transitionsImage = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    exitBeforeEnter: false,
  });
  const transitionsText = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    exitBeforeEnter: false,
  });

  const stylesProject = useSpring({
    from: { x: -300 },
    to: { x: 0 },
    config: { duration: 1000 },
  });

  const goToHomePage = () => {
    navigate("/home");
    localStorage.setItem("isSplash", true);
  };
  return (
    <div className="md:flex md:justify-evenly h-screen bg-splash w-screen">
      <div className="items-center align-middle flex">
        {transitionsImage((style, i) => (
          <animated.div style={{ ...style }}>
            <Lottie
              className="h-[600px]"
              animationData={ShoppingCartAnimation}
            />
          </animated.div>
        ))}
      </div>
      <div className="items-center flex align-middle text-center text-5xl font-bold">
        {transitionsText((style, i) => (
          <animated.div style={{ ...stylesProject }}>
            <p className="">Ready for shopping?</p>
            <div className="text-sm mt-10 mr-2 flex align-middle items-center justify-end text-gray-200 tracking-wide font-normal">
              <p className="pr-2">Let's shopping now</p>
              <button onClick={goToHomePage}>
                <ArrowRightIcon className="w-14" />
              </button>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
