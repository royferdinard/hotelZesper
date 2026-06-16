import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import Button from "../button";

import Rooms from "../jsComponents/roomStore";
import Drinks from "../barComponents/drinkStore";
import Spa from "../spaComponents/spaStore";
import Events from "../eventComponents/evntsStore";
import { useTranslation } from "react-i18next";
const bookingSections = [
  {
    id: "rooms",
    label: "Rooms",
    description:
      "Choose your room type, arrival details, and special requests.",
    fields: [
      {
        label: "Room type",
        name: "roomType",
        type: "select",
        options: ["Standard", "Deluxe", "Suite", "Presidential"],
      },
      {
        label: "Guests",
        name: "guests",
        type: "number",
        placeholder: "2",
      },
      { label: "Check-in", name: "checkIn", type: "date" },
      { label: "Check-out", name: "checkOut", type: "date" },
      {
        label: "Special requests",
        name: "roomNotes",
        type: "textarea",
        placeholder: "High floor, quiet room, baby crib...",
      },
    ],
  },

  {
    id: "drinks",
    label: "Drinks",
    description:
      "Select from refreshments, wine, cocktails, or minibar service.",
    fields: [
      {
        label: "Drink package",
        name: "drinkPackage",
        type: "select",
        options: [
          "Select drink",
          "Shampeign",
          "Lemon Juice",
          "Vice Roy",
          "Monin",
        ],
      },
      { label: "Arrival time", name: "drinkTime", type: "time" },
      {
        label: "Quantity",
        name: "drinkQuantity",
        type: "number",
        placeholder: "3",
      },
      {
        label: "Special notes",
        name: "drinkNotes",
        type: "textarea",
        placeholder: "Preferred drinks, mix suggestions...",
      },
    ],
  },

  {
    id: "events",
    label: "Events",
    description:
      "Book weddings, conferences, birthdays and special events.",
    fields: [
      {
        label: "Event type",
        name: "eventType",
        type: "select",
        options: [
          "Select event",
          "Wedding",
          "Conference",
          "Birthday",
          "Party",
          "Meeting",
        ],
      },
      {
        label: "Guests",
        name: "eventGuests",
        type: "number",
        placeholder: "50",
        min: 1,
      },
      { label: "Event date", name: "eventDate", type: "date" },
      {
        label: "Duration",
        name: "eventDuration",
        type: "select",
        options: ["2 Hours", "Half Day", "Full Day", "Weekend"],
      },
      {
        label: "Event notes",
        name: "eventNotes",
        type: "textarea",
        placeholder: "Decoration, catering, seating, AV setup...",
      },
    ],
  },

  {
    id: "spa",
    label: "Spa",
    description: "Relax and enjoy premium spa wellness treatments.",
    fields: [
      {
        label: "Spa service",
        name: "spaService",
        type: "select",
        options: [
          "select spa",
          "Deep Tissue Massage",
          "Luxury Facial",
          "Aromatherapy Session",
          "Hot Stone Therapy",
        ],
      },
      {
        label: "Therapist preference",
        name: "spaTherapist",
        type: "select",
        options: ["Any", "Male", "Female"],
      },
      { label: "Spa date", name: "spaDate", type: "date" },
      { label: "Spa time", name: "spaTime", type: "time" },
      {
        label: "Guests",
        name: "spaGuests",
        type: "number",
        placeholder: "1",
      },
      {
        label: "Spa notes",
        name: "spaNotes",
        type: "textarea",
        placeholder: "Relaxation preferences...",
      },
    ],
  },
];

const BookingForm = () => {

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("rooms");

  const [formData, setFormData] = useState({
    roomType: "Standard",
    guests: "",
    checkIn: "",
    checkOut: "",
    roomNotes: "",

    drinkPackage: "Shampeign",
    drinkTime: "",
    drinkQuantity: "",
    drinkNotes: "",

    eventType: "Wedding",
    eventGuests: "",
    eventDate: "",
    eventDuration: "Full Day",
    eventNotes: "",

    spaService: "Deep Tissue Massage",
    spaTherapist: "Any",
    spaDate: "",
    spaTime: "",
    spaGuests: "",
    spaNotes: "",
  });

  const [errors, setErrors] = useState({});

  const activeConfig = useMemo(() => {
    return (
      bookingSections.find((s) => s.id === activeSection) ||
      bookingSections[0]
    );
  }, [activeSection]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  useEffect(() => {
    setErrors({});
  }, [activeSection]);

  // ✅ TODAY DATE
  const today = new Date().toISOString().split("T")[0];

  // SEARCH FUNCTION
  const handleSearch = (e) => {
    e.preventDefault();

    for (const field of activeConfig.fields) {
      const value = formData[field.name];

      if (!value || value.toString().trim() === "") {
        setErrors((prev) => ({
          ...prev,
          [field.name]: `${field.label} ${t('is required')}`,
        }));

        toast.error(`${field.label} ${t('is required')}`);
        return;
      }

      // ✅ GUEST VALIDATION
      if (field.name.toLowerCase().includes("guest")) {
        if (Number(value) < 1) {
          setErrors((prev) => ({
            ...prev,
            [field.name]: t("Guests must be at least 1"),
          }));

          toast.error(t("Guests must be at least 1"));
          return;
        }
      }

      // ❌ DATE VALIDATION (NO PAST DATES)
      if (field.type === "date") {
        if (value < today) {
          setErrors((prev) => ({
            ...prev,
            [field.name]: t("Date cannot be in the past"),
          }));

          toast.error(t("Date cannot be in the past"));
          return;
        }
      }
    }

    setLoading(true);

    let foundItem = null;
    let route = "";

    if (activeSection === "rooms") {
      const query = formData.roomType.toLowerCase().trim();
      foundItem = Rooms.find((room) =>
        room.name?.toLowerCase().includes(query)
      );
      route = "/rooms";
    }

    if (activeSection === "drinks") {
      const query = formData.drinkPackage.toLowerCase().trim();
      foundItem = Drinks.find((drink) =>
        drink.name?.toLowerCase().includes(query)
      );
      route = "/bar";
    }

    if (activeSection === "events") {
      const query = formData.eventType.toLowerCase().trim();
      foundItem = Events.find((event) =>
        event.name?.toLowerCase().includes(query)
      );
      route = "/events";
    }

    if (activeSection === "spa") {
      const query = formData.spaService.toLowerCase().trim();
      foundItem = Spa.find((spa) =>
        spa.name?.toLowerCase().includes(query)
      );
      route = "/spa";
    }

    setTimeout(() => {
      setLoading(false);

      if (foundItem) {
        toast.success(
          `${activeConfig.label.slice(0, -1)} ${t('found successfully!')}`
        );

        navigate(`${route}/${foundItem.id}`);
      } else {
        toast.error(
          `${activeConfig.label.slice(0, -1)} ${t('not found')}`
        );
      }
    }, 1500);
  };

  return (
    <section className="relative -mt-16 max-w-full mx-auto px-4 sm:px-6 pb-4 lg:px-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="bg-white dark:bg-slate-800 shadow-sm rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">

        {/* Tabs */}
        <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4">
          <div className="relative z-20 flex flex-wrap rounded-xl bg-slate-200 dark:bg-slate-700 p-2 gap-2 w-fit">
            {bookingSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full text-sm transition-all ${activeSection === section.id
                    ? "bg-white dark:bg-slate-900 text-blue-600 shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                  }`}
              >
                {t(section.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="px-4 sm:px-8 pb-8 pt-6">
          <form className="space-y-6" onSubmit={handleSearch}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-max w-full">
              {activeConfig.fields.map((field) => {
                if (field.type === "textarea") {
                  return (
                    <label key={field.name} className="space-y-2 sm:col-span-2 text-sm lg:col-span-5 ">
                     <span className="font-semibold text-sm text-blue-800 dark:text-blue-600">
                        {t(field.label)}
                      </span>

                      <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={t(field.placeholder)}
                        className="bg-white  dark:text-gray-200 dark:bg-slate-900 dark:border-slate-700 w-full min-w-0 rounded-md mt-2 text-xs text-gray-500 outline-none focus:ring focus:ring-blue-600 transition-all duration-300 border-2 border-slate-200 px-4 py-5 resize-none"
                      />

                      {errors[field.name] && (
                        <p className="text-red-500 dark:text-red-400">
                          {t(errors[field.name])}
                        </p>
                      )}
                    </label>
                  );
                }

                if (field.type === "select") {
                  return (
                    <label key={field.name} className="space-y-2 w-full flex flex-col">
                      <span className="font-semibold text-sm text-blue-800 dark:text-blue-600">
                        {t(field.label)}
                      </span>

                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full min-w-0 rounded-md dark:border-slate-700 text-xs dark:text-slate-200 dark:bg-slate-900 mt-2 text-gray-500 outline-none focus:ring focus:ring-blue-600 transition-all duration-300 border-2 border-slate-200 px-3 py-3"
                      >
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>

                      {errors[field.name] && (
                        <p className="text-red-500 dark:text-red-400">
                          {t(errors[field.name])}
                        </p>
                      )}
                    </label>
                  );
                }

                return (
                  <label key={field.name} className="space-y-2 w-full flex flex-col">
                    <span className="font-semibold text-sm text-blue-800 dark:text-blue-600">
                      {t(field.label)}
                    </span>

                    <input
                      name={field.name}
                      type={field.type}
                      min={field.type === "date" ? today : field.min}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={t(field.placeholder)}
                      className="w-full rounded-md min-w-0  text-xs dark:text-slate-200 dark:bg-slate-900 outline-none text-gray-500  bg-white  mt-2  focus:ring focus:ring-blue-600 transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 px-3 py-3"
                    />

                    {errors[field.name] && (
                      <span className="text-red-500 dark:text-red-400">
                        {t(errors[field.name])}
                      </span>
                    )}
                  </label>
                );
              })}
            </div>

            <Button
              type="submit"
              backgroundColor="bg-blue-700"
              borderColor="border-blue-700"
              textColor="text-white"
              className="w-full"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('Searching...')}
                </div>
              ) : (
                t(`Search ${activeConfig.label}`)
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;