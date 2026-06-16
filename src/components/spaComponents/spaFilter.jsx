import React from "react";
import { useTranslation } from 'react-i18next';
import { FaSearch } from "react-icons/fa";

function SpaFilter({ filter, active, search, setSearch, setSort }) {

  const { t, i18n } = useTranslation();

  const Categories = [
    "All",
    "Massage Therapy",
    "Facials",
    "Body Treatments",
    "Aromatherapy",
    "Hot Stone Massage",
    "Sauna & Steam",
    "Manicure",
    "Pedicure",
    "Skin Care",
    "Couples Spa",
    "Luxury Packages",
    "Relaxation Therapy",
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
      <div className="px-4 py-4 bg-white dark:bg-slate-900 w-full shadow-sm rounded-md h-fit sticky top-24">

        {/* Search Field */}
        <div className="bg-gray-50 dark:bg-slate-800 w-full h-11 flex items-center overflow-hidden shadow-sm rounded-md border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-md">

          <input
            type="text"
            placeholder={t("Search spa services")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-full w-[80%] px-3 outline-none text-sm text-gray-700 dark:text-gray-200 bg-transparent placeholder-gray-400 dark:placeholder-gray-500"
          />

          <button className="w-[20%] h-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300">
            <FaSearch />
          </button>

        </div>

        {/* Filter Section */}
        <div className="mt-4 bg-gray-50 dark:bg-slate-800 p-4 rounded-md shadow-sm">

          <div className="flex flex-col pb-4 border-b border-gray-300 dark:border-slate-700">
            <h6 className="text-blue-700 dark:text-blue-400 text-lg font-bold">
              {t("Spa Categories")}
            </h6>
          </div>

          <div className="flex flex-col gap-3 py-3 text-slate-500 dark:text-slate-300">

            {Categories.map((category, index) => (
              <div
                key={index}
                onClick={() => filter(category)}
                className="flex items-center gap-3 cursor-pointer group"
              >

                <span
                  className={`w-4 h-4 border bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center rounded-full transition-all duration-300 ${
                    active === category
                      ? "border-blue-600"
                      : "border-gray-300 dark:border-slate-600 group-hover:border-blue-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      active === category
                        ? "bg-blue-600"
                        : "bg-gray-500 dark:bg-gray-400 group-hover:bg-blue-600"
                    }`}
                  ></span>
                </span>

                <button
                  className={`transition-all duration-300 text-sm font-semibold text-left ${
                    active === category
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-slate-300 group-hover:text-blue-600"
                  }`}
                >
                  {t(category)}
                </button>

              </div>
            ))}

          </div>

        </div>

        {/* Sort Section */}
        <div className="mt-4 bg-gray-50 dark:bg-slate-800 p-4 rounded-md shadow-sm">

          <div className="flex flex-col pb-4 border-b border-gray-300 dark:border-slate-700">
            <h6 className="text-blue-700 dark:text-blue-400 text-lg font-bold">
              {t("Sort Services")}
            </h6>
          </div>

          <div className="flex flex-col gap-3 py-3 text-slate-500 dark:text-slate-300">

            {Sort.map((sort, index) => (
              <div
                key={index}
                onClick={() => setSort(sort)}
                className="flex items-center gap-3 cursor-pointer group"
              >

                <span className="w-4 h-4 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center rounded-full group-hover:border-blue-500">
                  <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full group-hover:bg-blue-600"></span>
                </span>

                <button className="transition-all duration-300 group-hover:text-blue-600 text-sm font-semibold text-left">
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

export default SpaFilter;