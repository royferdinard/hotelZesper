import React, { useState, useTranslation } from "react";
import { useTranslation } from 'react-i18next';
import { FaGlassCheers, FaWineGlass, FaBeer, FaCoffee } from "react-icons/fa";

const drinksData = [
  {
    id: 1,
    name: "Classic Mojito",
    category: "Cocktail",
    price: 8,
    points: 10,
  },
  {
    id: 2,
    name: "Red Wine",
    category: "Wine",
    price: 12,
    points: 15,
  },
  {
    id: 3,
    name: "Lager Beer",
    category: "Beer",
    price: 5,
    points: 5,
  },
  {
    id: 4,
    name: "Whiskey Sour",
    category: "Cocktail",
    price: 10,
    points: 12,
  },
  {
    id: 5,
    name: "Cappuccino",
    category: "Soft Drink",
    price: 4,
    points: 3,
  },
  {
    id: 6,
    name: "White Wine",
    category: "Wine",
    price: 11,
    points: 14,
  },
];

const categories = ["All", "Cocktail", "Wine", "Beer", "Soft Drink"];

const BarPage = () => {

    const { t, i18n } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // filter logic
  const filteredDrinks = drinksData.filter((drink) => {
    const matchCategory =
      selectedCategory === "All" || drink.category === selectedCategory;

    const matchSearch = drink.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <div className="relative h-[60vh] bg-black text-white flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c0f9b"
          className="absolute w-full h-full object-cover opacity-50"
          alt="bar"
        />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Luxury Bar Experience
          </h1>
          <p className="mt-3 text-gray-200">
            Explore cocktails, wines & exclusive drinks
          </p>
        </div>
      </div>

      {/* SUBSCRIPTION / POINTS SYSTEM */}
      <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          🍹 Drink Rewards Program
        </h2>

        <p className="text-gray-600 mb-4">
          Earn points every time you order drinks and unlock free rewards.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-blue-50 p-4 rounded-xl">
            <h3 className="font-semibold">How it works</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>✔ Every drink earns points</li>
              <li>✔ 100 points = free cocktail</li>
              <li>✔ VIP members get double points</li>
            </ul>
          </div>

          <div className="flex-1 bg-green-50 p-4 rounded-xl">
            <h3 className="font-semibold">Your Status</h3>
            <p className="text-gray-600 mt-2">Guest Member</p>
            <div className="mt-2 bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 w-1/3 rounded-full"></div>
            </div>
            <p className="text-sm mt-2 text-gray-500">
              33/100 points to next reward
            </p>
          </div>
        </div>
      </div>

      {/* FILTER + SEARCH */}
      <div className="max-w-6xl mx-auto mt-10 px-6">

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

          {/* Search */}
          <input
            type="text"
            placeholder="Search drinks..."
            className="w-full md:w-1/2 p-3 border rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border transition ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* DRINK LIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {filteredDrinks.map((drink) => (
            <div
              key={drink.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >

              {/* ICON */}
              <div className="text-3xl text-blue-600 mb-3">
                {drink.category === "Cocktail" && <FaGlassCheers />}
                {drink.category === "Wine" && <FaWineGlass />}
                {drink.category === "Beer" && <FaBeer />}
                {drink.category === "Soft Drink" && <FaCoffee />}
              </div>

              {/* INFO */}
              <h3 className="text-lg font-semibold">{drink.name}</h3>
              <p className="text-sm text-gray-500">{drink.category}</p>

              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold text-blue-600">
                  ${drink.price}
                </span>
                <span className="text-sm text-green-600">
                  +{drink.points} pts
                </span>
              </div>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Order Drink
              </button>

            </div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredDrinks.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No drinks found.
          </p>
        )}
      </div>
    </div>
  );
};
  // ":": ":",
  // "\"Back To Drinks\"": "\"Back To Drinks\"",
  // "\"Back To Events\"": "\"Back To Events\"",
  // "\"Back To Room\"": "\"Back To Room\"",
  // "\"Back To Spa Services\"": "\"Back To Spa Services\"",
  // "{blog.author}": "{blog.author}",
  // "{blog.category}": "{blog.category}",
  // "{blog.date}": "{blog.date}",
  // "{blog.shortDescription}": "{blog.shortDescription}",
  // "{booking.bookedAt}": "{booking.bookedAt}",
  // "{booking.checkIn}": "{booking.checkIn}",
  // "{booking.checkOut}": "{booking.checkOut}",
  // "{booking.drink.name}": "{booking.drink.name}",
  // "{booking.email}": "{booking.email}",
  // "{booking.event.name}": "{booking.event.name}",
  // "{booking.fullName}": "{booking.fullName}",
  // "{booking.guests}": "{booking.guests}",
  // "{booking.id}": "{booking.id}",
  // "{booking.paymentMethod}": "{booking.paymentMethod}",
  // "{booking.phone}": "{booking.phone}",
  // "{booking.room.name}": "{booking.room.name}",
  // "{booking.service.name || booking.service.head}": "{booking.service.name || booking.service.head}",
  // "{category.description}": "{category.description}",
  // "{category.name}": "{category.name}",
  // "{children}": "{children}",
  // "{currentLanguage}": "{currentLanguage}",
  // "{drink.category}": "{drink.category}",
  // "{drink.description}": "{drink.description}",
  // "{drink.head}": "{drink.head}",
  // "{drink.name}": "{drink.name}",
  // "{drink.points}pts": "{drink.points}pts",
  // "{leader.name}": "{leader.name}",
  // "{leader.Role}": "{leader.Role}",
  // "{leader.testimony}": "{leader.testimony}",
  // "{room.description}": "{room.description}",
  // "{room.name}": "{room.name}",
  // "{subscribeState[blog.id]?.count || 0}": "{subscribeState[blog.id]?.count || 0}",
  // "{viewState[blog.id]?.count || 0}": "{viewState[blog.id]?.count || 0}",

export default BarPage;