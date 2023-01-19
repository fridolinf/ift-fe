import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LayoutApp = ({ children, needHeader }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen bg-content">
        {/* Animation Bubble */}
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        {/* Animation Bubble */}
        {needHeader ? (
          <Disclosure
            as="nav"
            className="border-b border-gray-200 bg-white shadow-xl drop-shadow-md  shadow-myPrimary md:rounded-b-full"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-9 md:px-6 sm:px-6 lg:px-7">
                  <div className="flex h-16 justify-between">
                    <div className="flex">
                      <div className="flex flex-shrink-0 items-center">
                        <p>Let's 𝑆hopping</p>
                        <img
                          onClick={() => navigate("/home")}
                          className="block h-8 w-auto lg:hidden cursor-pointer"
                          src="https://i.pinimg.com/originals/4a/38/7b/4a387bda853bca3782d73234c786a150.png"
                          alt="Your Company"
                        />
                        <img
                          onClick={() => navigate("/home")}
                          className="hidden h-12  w-auto lg:block cursor-pointer hover:h-16"
                          src="https://i.pinimg.com/originals/4a/38/7b/4a387bda853bca3782d73234c786a150.png"
                          alt="Your Company"
                        />
                      </div>
                    </div>
                    <div className="hidden px-3 sm:flex items-center justify-evenly">
                      <p>Get New Promotions</p>
                      <p
                        onClick={() => navigate("/promotions")}
                        className="font-bold px-1 mr-1 cursor-pointer hover:text-myPrimary"
                      >
                        Now
                      </p>
                    </div>
                    <div className="items-center  hidden sm:flex">
                      <button
                        onClick={() => navigate("/auth")}
                        className="font-semibold bg-myPrimary py-1 px-2 rounded-xl"
                      >
                        Login
                      </button>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <Disclosure.Button
                    className={classNames(
                      " text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-5 pr-4 py-2 border-l-4 text-base "
                    )}
                    onClick={() => navigate("/promotions")}
                  >
                    <div className="justify-evenly">
                      <span>Get New Promotions </span>
                      <span className="font-semibold">Now</span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Button
                    className={classNames(
                      " text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-5 pr-4 py-2 mt-1 border-l-4 text-base "
                    )}
                    onClick={() => navigate("/auth")}
                  >
                    Login
                  </Disclosure.Button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ) : null}
        <main className="py-6 h-screen overflow-auto">
          <div className="mx-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};
export default LayoutApp;
