import React from "react";
import { useTranslation } from 'react-i18next';
import { FaSearch } from "react-icons/fa";

function EventFilter({ filter, active, search, setSearch, setSort, activeSort }) {

  const { t, i18n } = useTranslation();

  const Categories = [
    "All",
    "Weddings",
    "Conferences",
    "Corporate Meetings",
    "Birthday Parties",
    "Anniversary Celebrations",
    "Baby Showers",
    "Graduation Parties",
    "Private Dinners",
    "Music Events",
    "Networking Events",
    "Valentine Specials",
    "Luxury Events",
  ];

  const Sort = [
    "Newest First",
    "Oldest First",
    "Price High-Low",
    "Price Low-High",
    "Most Popular",
    "Top Rated",
    "A-Z",
    "Z-A",
  ];

  return (
    <>
      <div className="px-4 py-4 bg-white dark:bg-gray-900 w-full shadow-sm dark:shadow-black/30 rounded-md h-fit sticky top-24 border border-transparent dark:border-gray-800">

        {/* Search Field */}
        <div className="bg-gray-50 dark:bg-gray-800 w-full h-11 flex items-center overflow-hidden shadow-sm rounded-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md">

          <input
            type="text"
            placeholder={t("Search events")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`h-full w-[80%] px-3 outline-none text-sm bg-transparent transition-all duration-300 ${
              search
                ? "text-blue-600 dark:text-blue-400 placeholder:text-blue-400"
                : "text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
            }`}
          />

          <button className="w-[20%] h-full flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300">
            <FaSearch />
          </button>

        </div>

        {/* Filter Section */}
        <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-sm dark:shadow-black/20">

          <div className="flex flex-col pb-4 border-b border-gray-300 dark:border-gray-700">
            <h6 className="text-blue-700 dark:text-blue-400 text-lg font-bold">
              {t("Event Categories")}
            </h6>
          </div>

          <div className="flex flex-col gap-3 py-3 text-slate-500 dark:text-gray-300">

            {Categories.map((category, index) => (
              <div
                key={index}
                onClick={() => filter(category)}
                className="flex items-center gap-3 cursor-pointer group"
              >

                <span
                  className={`w-4 h-4 border bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center rounded-full transition-all duration-300 ${
                    active === category
                      ? "border-blue-600 dark:border-blue-400"
                      : "border-gray-300 dark:border-gray-600 group-hover:border-blue-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      active === category
                        ? "bg-blue-600 dark:bg-blue-400"
                        : "bg-gray-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400"
                    }`}
                  />
                </span>

                <button
                  className={`transition-all duration-300 text-sm font-semibold text-left ${
                    active === category
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                >
                  {t(category)}
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* Sort Section */}
        <div className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-sm dark:shadow-black/20">

          <div className="flex flex-col pb-4 border-b border-gray-300 dark:border-gray-700">
            <h6 className="text-blue-700 dark:text-blue-400 text-lg font-bold">
              {t("Sort Events")}
            </h6>
          </div>

          <div className="flex flex-col gap-3 py-3 text-slate-500 dark:text-gray-300">

            {Sort.map((sort, index) => (
              <div
                key={index}
                onClick={() => setSort(sort)}
                className="flex items-center gap-3 cursor-pointer group"
              >

                <span
                  className={`w-4 h-4 border bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center rounded-full transition-all duration-300 ${
                    activeSort === sort
                      ? "border-blue-600 dark:border-blue-400"
                      : "border-gray-300 dark:border-gray-600 group-hover:border-blue-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSort === sort
                        ? "bg-blue-600 dark:bg-blue-400"
                        : "bg-gray-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400"
                    }`}
                  />
                </span>

                <button
                  className={`transition-all duration-300 text-sm font-semibold text-left ${
                    activeSort === sort
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  }`}
                >
                  {t(sort)}
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default EventFilter;