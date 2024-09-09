import React, { useContext } from "react";
import { ThemeContext } from "../Components/Context/Themecontext";
import { Menu, MenuButton, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FilterBox = () => {
  const { handleFilter, selectedRegion, darkMode } = useContext(ThemeContext);

  return (
    <Menu as="div" className="relative inline-block text-left mt-8">
      <div>
        <MenuButton
          className={`inline-flex w-56 justify-center gap-x-16 rounded-md px-0 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset  ${
            darkMode
              ? "bg-customary-bg text-black ring-gray-300"
              : "bg-custom-bg text-white ring-gray-300"
          }`}>
          {selectedRegion} Region
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <Menu.Items
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-xl  transition focus:outline-none ${
          darkMode ? "bg-customary-bg ring-black" : "bg-custom-bg text-white"
        }`}>
        <div className="py-1">
          {["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
            (region) => (
              <MenuItem key={region}>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={() => handleFilter(region)}
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-400"
                    }`}>
                    {region}
                  </a>
                )}
              </MenuItem>
            )
          )}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default FilterBox;
