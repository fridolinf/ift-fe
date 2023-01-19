import LayoutApp from "components/layoutApp";
import React from "react";
import RegisterImg from "assets/img/lottie/register.json";

import Lottie from "lottie-react";
const Register = () => {
  return (
    <LayoutApp needHeader={true}>
      <div className="flex h-screen -space-y-20 items-center justify-center overflow-hidden">
        <Lottie
          className="h-[750px] fixed left-0 sm:top-0 -z-10"
          animationData={RegisterImg}
        />
        <div className="w-fit p-5 rounded-xl shadow-lg drop-shadow-lg  bg-white items-center">
          <div className="w-full text-center">
            <div>
              <span>Welcome to </span>
              <span className="font-semibold">𝑆hopping</span>
            </div>
            <p className="mt-1 mb-3">
              Enter your mobile number and password to login
            </p>
          </div>
          <div className="border-gray-200 border rounded-md mx-5 flex align-middle ">
            <span className="font-bold p-2">+62</span>
            <input
              className="w-10/12 p-2 focus:outline-none"
              type="number"
              placeholder="8649339103 (Example)"
            />
          </div>
          <div className="mx-5 bg-myPrimary p-2 rounded-md flex justify-center mt-7">
            <button className="w-full text-center justify-center font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Register;
