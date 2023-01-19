import { Menu, Transition } from "@headlessui/react";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

const SortingComponent = ({ sortBy }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleAscending = () => {
    sortBy(8, "asc");
    setActiveTabIndex(0);
  };
  const handleDescending = () => {
    sortBy(8, "desc");
    setActiveTabIndex(1);
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {activeTabIndex === 0 ? (
            <div className="flex align-middle items-center">
              <BarsArrowUpIcon className="w-8 h-4" />
              <span>ASC</span>
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </div>
          ) : (
            <div className="flex align-middle items-center">
              <BarsArrowDownIcon className="w-8 h-4" />
              <span>DESC</span>
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </div>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <div
                className="flex items-center border-b-2  align-middle cursor-pointer hover:text-myPrimary"
                onClick={handleDescending}
              >
                <BarsArrowDownIcon className="w-8 h-4" />
                <span>DESC</span>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                className="flex items-center align-middle  cursor-pointer hover:text-myPrimary"
                onClick={handleAscending}
              >
                <BarsArrowUpIcon className="w-8 h-4" />
                <span>ASC</span>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortingComponent;
