import React, { useState, useTranslation } from "react";
import { useTranslation } from 'react-i18next';

const servicesData = [
  { id: 1, name: "Deep Tissue Massage", category: "Massage", price: 80, duration: 60 },
  { id: 2, name: "Swedish Massage", category: "Massage", price: 70, duration: 60 },
  { id: 3, name: "Luxury Facial Treatment", category: "Facial", price: 90, duration: 75 },
  { id: 4, name: "Anti-Aging Facial", category: "Facial", price: 110, duration: 90 },
  { id: 5, name: "Aromatherapy Session", category: "Therapy", price: 60, duration: 45 },
  { id: 6, name: "Hot Stone Therapy", category: "Therapy", price: 100, duration: 80 },
  { id: 7, name: "Body Scrub Detox", category: "Wellness", price: 85, duration: 60 },
  { id: 8, name: "Full Spa Package", category: "Wellness", price: 180, duration: 120 },
];

const categories = ["All", "Massage", "Facial", "Therapy", "Wellness"];

const SpaPage = () => {

    const { t, i18n } = useTranslation();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // FILTER
  let filtered = servicesData.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // SORT
  if (sort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "a-z") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="w-full min-h-screen bg-[#f7f5f2]">

      {/* HERO */}
      <div className="relative h-[55vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
          className="absolute w-full h-full object-cover opacity-60"
          alt="spa"
        />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Luxury Spa & Wellness
          </h1>
          <p className="mt-3 text-gray-100">
            Relax, rejuvenate, and restore your body & mind
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row gap-4 justify-between">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search spa services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-lg border"
        />

        {/* CATEGORY */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                category === cat
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SORT */}
        <select
          className="p-3 border rounded-lg"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="a-z">Name: A → Z</option>
        </select>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {filtered.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {service.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {service.category}
            </p>

            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <span>⏱ {service.duration} mins</span>
              <span className="font-bold text-green-700">
                ${service.price}
              </span>
            </div>

            <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
              Book Service
            </button>
          </div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No services found.
        </p>
      )}
    </div>
  );
};

export default SpaPage;