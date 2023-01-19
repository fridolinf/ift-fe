import LayoutApp from "components/layoutApp";
import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <LayoutApp needHeader={true}>
      <>
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-4/12 xl:w-4/12 h-full p-2 rounded-b-md rounded-t-3xl shadow-lg drop-shadow-lg  bg-white items-center">
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
            <div className="border-gray-200 border rounded-md mx-5 flex align-middle mt-3 mb-5">
              <input
                className="w-10/12 p-2 focus:outline-none"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="mx-5 bg-myPrimary p-2 rounded-md flex justify-center mt-7">
              <button className="w-full text-center justify-center font-semibold">
                Login
              </button>
            </div>
            <div className="mx-5 my-5">
              <p className="font-semibold">Forget Password ?</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-4/12 xl:w-4/12 md: h-full p-2 mt-0.5 rounded-b-3xl shadow-lg drop-shadow-lg  bg-white items-center">
            <div className="mx-10 my-3">
              <p>Not a Member Yet?</p>
              <p>Register to get reward points and exclusive promotions</p>
            </div>
            <div className="mx-5 bg-myPrimary p-2 rounded-md flex justify-center mb-3">
              <button
                onClick={() => navigate("/register")}
                className="w-full text-center justify-center font-semibold"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </>
    </LayoutApp>
  );
};

export default Auth;
