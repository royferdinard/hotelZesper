import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

function BlogFilter({ filter, setSearch, search, setSort, activeFilter, activeSort }) {
  const { t } = useTranslation()

  const Categories = [
    "All",
    "Events",
    "Dining",
    "Luxury stay",
    "Ceremonies",
    "Celebration",
    "Valentine",
    "Meetings",
    "Wedding",
  ];

  const Sort = [
    "Newest First",
    "Oldest First",
    "Most Popular",
    "High-Low Subscription",
    "High-Low Likes",
    "High-Low Followers",
    "A-Z",
    "Z-A",
  ];

  return (
    <div className="px-4 py-4 bg-white dark:bg-gray-900 dark:border dark:border-slate-700 w-full shadow-sm rounded-md md:w-full lg:sticky h-fit md:sticky transition-colors duration-300">

      {/* search field */}
      <div className="bg-gray-50 dark:bg-gray-900 w-full h-10 flex flex-row items-center overflow-hidden shadow-sm rounded-md transition-all duration-300 hover:scale-102 border border-gray-200 dark:border-gray-700">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search blogs..."
          className="h-full w-[80%] px-3 rounded-sm outline-none text-sm text-gray-600 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-500 bg-transparent"
        />

        <button className="w-[20%] h-full flex flex-col items-center justify-center bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300">
          <FaSearch />
        </button>
      </div>

      {/* FILTER */}
      <div className="mt-4 bg-gray-50 dark:bg-gray-900 dark:border dark:border-slate-700 p-4 rounded-md shadow-sm">
        <div className="flex flex-col pb-4 border-b border-gray-300 dark:border-gray-700">
          <h6 className="text-blue-700 dark:text-blue-600 text-lg font-bold">
            {t('Filter')}
          </h6>
        </div>

        <div className="flex flex-col gap-3 py-3 text-slate-500 dark:text-gray-200">

          {Categories.map((category, index) => (
            <div
              key={index}
              onClick={() => filter(category)}
              className={`flex items-center justify-start gap-2 cursor-pointer transition-all duration-300 ${
                activeFilter === category ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-gray-300"
              }`}
            >
              <span className={`w-4 h-4 border bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center rounded-full transition-all duration-300 ${
                activeFilter === category ? "border-blue-600 dark:border-blue-400" : "border-gray-300 dark:border-gray-600"
              }`}>
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeFilter === category ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-400 dark:bg-gray-500"
                }`} />
              </span>

              <button className={`text-sm font-semibold transition-all duration-300 ${
                activeFilter === category ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-600 dark:hover:text-blue-400"
              }`}>
                {t(category)}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SORT */}
      <div className="mt-4 bg-gray-50 dark:bg-gray-900 dark:border dark:border-slate-700 p-4 rounded-md shadow-sm">
        <div className="flex flex-col pb-4 border-b border-gray-300 dark:border-gray-700">
          <h6 className="text-blue-700 dark:text-blue-600 text-lg font-bold">
            {t(' Sort')}
          </h6>
        </div>

        <div className="flex flex-col gap-3 py-3 text-slate-500 dark:text-gray-300">

          {Sort.map((sortItem, index) => (
            <div
              key={index}
              onClick={() => setSort(sortItem)}
              className={`flex items-center justify-start gap-2 cursor-pointer transition-all duration-300 ${
                activeSort === sortItem ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-gray-300"
              }`}
            >
              <span className={`w-4 h-4 border bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center rounded-full transition-all duration-300 ${
                activeSort === sortItem ? "border-blue-600 dark:border-blue-400" : "border-gray-300 dark:border-gray-600"
              }`}>
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSort === sortItem ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-400 dark:bg-gray-500"
                }`} />
              </span>

              <button className={`text-sm font-semibold transition-all duration-300 ${
                activeSort === sortItem ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-600 dark:hover:text-blue-400"
              }`}>
                {t(sortItem)}
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default BlogFilter