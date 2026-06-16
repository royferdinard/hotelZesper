import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import SpaFilter from './spaFilter'
import SpaContent from './spaContent'
import Services from './spaStore'

function SpaServicesContent() {

  const { t, i18n } = useTranslation();

  const [activeCategory, setActiveCategory] = useState('')
  const [activeSort, setActiveSort] = useState('')
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('');

  const filterCategory = Services.filter((serv) => {
    const filterMatch = category === "All" ? true : serv.category === category

    const searchMatch =
      serv.head.toLowerCase().includes(search.toLowerCase()) ||
      serv.description.toLowerCase().includes(search.toLowerCase());

    return filterMatch && searchMatch
  }).sort((a, b) => {
    switch (sort) {
      case "Newest First":
        return b.id.localeCompare(a.id);
      case "Oldest First":
        return a.id.localeCompare(b.id);
      case "Price High-Low":
        return b.price - a.price;
      case "Price Low-High":
        return a.price - b.price;
      case "A-Z":
        return b.head.localeCompare(a.head);
      case "Z-A":
        return a.head.localeCompare(b.head);
      default:
        return 0;
    }
  })

  const handleFilter = (service) => {
    setCategory(service)
    setActiveCategory(service)
  }

  return (
    <>
      <div className="py-8 px-4 flex flex-col md:flex-row gap-6 items-start pt-27 dark:bg-slate-900">

        {/* Sticky Filter */}
        <div className="w-full md:w-70 md:sticky md:top-24 self-start">
          <SpaFilter
            filter={handleFilter}
            active={activeCategory}
            search={search}
            setSearch={setSearch}
            setSort={setSort}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 w-full">

          {filterCategory.length > 0 ? (
            <SpaContent service={filterCategory} />
          ) : (
            <div className="w-full min-h-70 flex flex-col items-center justify-center bg-white dark:bg-slate-800 rounded-md shadow-sm border border-gray-200 dark:border-slate-700">

              <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-300">
                {t("Service Not Available")}
              </h2>

              <p className="text-gray-400 dark:text-gray-400 mt-2 text-center">
                {t(`${category} service not available at this moment!`)}
              </p>

            </div>
          )}

        </div>

      </div>
    </>
  )
}

export default SpaServicesContent