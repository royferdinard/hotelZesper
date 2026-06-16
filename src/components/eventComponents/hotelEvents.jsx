import React from 'react'
import EventFilter from './eventFilter'
import EventContent from './eventContent'
import Events from './evntsStore'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function HotelEvents() {

    const { t, i18n } = useTranslation();

  const [activeCategory, setActiveCategory] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState("All")
  const [sort, setSort] = useState('');
  const [activeSort, setActiveSort] = useState('')

  const filteredevents = Events.filter((event) => {
    const matchesCategory = category === "All"
      ? true
      : event.category === category;

    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sort) {
      case "Price High-Low":
        return b.price - a.price;

      case "Price Low-High":
        return a.price - b.price;

      case "A-Z":
        return a.name.localeCompare(b.head);

      case "Z-A":
        return b.name.localeCompare(a.head);

      case "Newest First":
        return b.id.localeCompare(a.id);

      case "Oldest First":
        return a.id.localeCompare(b.id);

      default:
        return 0;
    }
  })

  const handleFilter = (cat) => {
    setCategory(cat)
    setActiveCategory(cat)
    setActiveSort(cat)
  }

  return (
    <>
      <div className="py-8 px-4 flex flex-col md:flex-row gap-6 items-start pt-27 bg-gray-50 dark:bg-gray-900 transition-all duration-300">

        {/* Sticky Blog Filter */}
        <div className="w-full md:w-70 md:sticky md:top-24 self-start shrink-0">
          <EventFilter
            filter={handleFilter}
            active={activeCategory}
            search={search}
            setSearch={setSearch}
            setSort={setSort}
            activeSort={activeSort}
          />
        </div>

        {/* Blog Posts */}
        <div className="flex-1 min-w-0">
          {filteredevents.length > 0 ? (
            <EventContent events={filteredevents} />
          ) : (
            <div className="w-full min-h-70 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 px-6 text-center transition-all duration-300">

              <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                {t('No Events Found')}
              </h2>

              <p className="text-gray-400 dark:text-gray-400 mt-2">
                {category === "All"
                  ? t("There are currently no events available.")
                  : t(`No ${t(category)} events available at the moment.`)}
              </p>

            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default HotelEvents