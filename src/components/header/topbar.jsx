import { image } from "../constants/index";
import { contact } from "../constants/index.js";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { categories } from "../constants/index";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export const TopBar = () => {
  const { logo } = image;
  const { phone } = contact;
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8l">
      <div className="flex ">
        <a href="#" className="-m-1.5 p-1.5">
          <img className="h-8 w-auto" src={logo} alt="" />
        </a>
      </div>
      <div className="basis-1/2 relative mt-2 rounded-md shadow-sm hidden lg:flex">
        <div className="absolute inset-y-0 left-5 flex items-center">
          <Popover.Group className="lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-900">
                Product
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {categories.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-start gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a href={item.href} className="text-gray-900">
                            {item.name}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>

        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-full border-0 py-4 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Find Your Courses..."
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <button className="flex gap-2 px-3 py-2 items-center bg-buttonColor rounded-3xl text-white text-lg hover:bg-purple">
            <CiSearch style={{ fontSize: "25px" }} /> Search
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex justify-center items-center">
          <span className="bg-white rounded-full  text-buttonColor p-4 rounded border border-border">
            <PiPhoneCallLight style={{ fontSize: "20px" }} />
          </span>
          <span className="pl-3">
            <p className="text-grey text-sm">Emergency Help!</p>
            <a href={`tel:${phone}`}>{phone}</a>
          </span>
        </div>
        <div className="text-border px-4">|</div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <a
            href="#"
            className="rounded-3xl px-6 py-3 rounded border border-border text-sm hover:bg-purple hover:text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-3xl px-6 py-3 rounded border border-border text-sm bg-purple text-white hover:bg-buttonColor"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};
