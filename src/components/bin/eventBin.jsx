import React, { useState, useTranslation } from "react";
import { useTranslation } from 'react-i18next';

const eventsData = [
  {
    id: 1,
    title: "Luxury Wedding Gala",
    category: "Weddings",
    date: "2026-07-12",
    location: "Grand Ballroom",
    price: 1200,
  },
  {
    id: 2,
    title: "Corporate Business Summit",
    category: "Corporate",
    date: "2026-06-25",
    location: "Conference Hall A",
    price: 800,
  },
  {
    id: 3,
    title: "Live Jazz Night",
    category: "Music",
    date: "2026-06-10",
    location: "Sky Lounge",
    price: 50,
  },
  {
    id: 4,
    title: "Birthday Party Package",
    category: "Parties",
    date: "2026-08-01",
    location: "Poolside Area",
    price: 300,
  },
  {
    id: 5,
    title: "Tech Innovation Conference",
    category: "Corporate",
    date: "2026-09-15",
    location: "Main Hall",
    price: 950,
  },
];

const categories = ["All", "Weddings", "Corporate", "Music", "Parties"];

const EventsPage = () => {

    const { t, i18n } = useTranslation();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // FILTER EVENTS
  const filteredEvents = eventsData.filter((event) => {
    const matchCategory = category === "All" || event.category === category;
    const matchSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <div className="relative h-[55vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1505236858219-8359eb29e329"
          className="absolute w-full h-full object-cover opacity-60"
          alt="events"
        />

        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hotel Events & Experiences
          </h1>
          <p className="mt-3 text-gray-200">
            Celebrate weddings, conferences, parties & more
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row gap-4 justify-between">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-3 border rounded-lg"
        />

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                category === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* EVENTS GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >

            {/* IMAGE HEADER */}
            <div className="h-40 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                📍 {event.location}
              </p>

              <p className="text-sm text-gray-500">
                📅 {event.date}
              </p>

              <div className="mt-3 flex justify-between items-center">
                <span className="text-black font-bold">
                  ${event.price}
                </span>

                <span className="text-sm text-gray-500">
                  {event.category}
                </span>
              </div>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Book Event
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No events found.
        </p>
      )}
    </div>
  );
};

export default EventsPage;