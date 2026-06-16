import React, { useState } from "react";
import DrinkFilter from "./drinkFilter";
import DrinkContent from "./drinkContent";
import Drinks from "./drinkStore";
import { useTranslation } from "react-i18next";

function BarDrinks() {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredDrinks = Drinks.filter((drink) => {
    const matchCategory = category === "All" ? true : drink.category === category;

    const matchSearch =
      drink.head.toLowerCase().includes(search.toLowerCase()) ||
      drink.description.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  }).sort((a, b) => {
    switch (sort) {
      case "Price High-Low":
        return b.price - a.price;

      case "Price Low-High":
        return a.price - b.price;

      case "A-Z":
        return a.head.localeCompare(b.head);

      case "Z-A":
        return b.head.localeCompare(a.head);

      case "Newest First":
        return b.id.localeCompare(a.id);

      case "Oldest First":
        return a.id.localeCompare(b.id);

      default:
        return 0;
    }
  });

  const handleSort = (sortType) => setSort(sortType);

  const handleFilter = (cat) => {
    setCategory(cat);
    setActiveCategory(cat);
  };

  return (
    <section className="py-8 px-4 flex flex-col md:flex-row gap-6 items-start pt-28 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      {/* FILTER SIDEBAR */}
      <aside className="w-full md:w-72 md:sticky md:top-24 self-start">
        <DrinkFilter
          filter={handleFilter}
          active={activeCategory}
          search={search}
          setSearch={setSearch}
          setSort={handleSort}
          activeSort={sort}
        />
      </aside>

      {/* CONTENT AREA */}
      <main className="flex-1 min-w-0 w-full">

        {filteredDrinks.length > 0 ? (
          <DrinkContent drinks={filteredDrinks} />
        ) : (
          <div className="w-full min-h-72 flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-md shadow-sm border border-gray-200 dark:border-slate-800 transition-all">

            <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-300">
              {t("Out of Stock")}
            </h2>

            <p className="text-gray-400 dark:text-gray-400 mt-2 text-center">
              {t("No")}{" "}
              <span className="font-semibold text-gray-500 dark:text-gray-200">
                {category}
              </span>{" "}
              {t("available at this moment!")}
            </p>

          </div>
        )}

      </main>

    </section>
  );
}

export default BarDrinks;