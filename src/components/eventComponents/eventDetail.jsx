import React from "react";
import { useTranslation } from 'react-i18next';
import { useParams, Link, useNavigate } from "react-router-dom";
import Events from "./evntsStore";
import { House } from "lucide-react";
import Button from "../button";
import Footer from "../footer";

const EventDetail = () => {

  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();

  const event = Events.find((event) => event.id === String(id));

  if (!event) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col px-">
        <div className="w-12 h-12 rounded-full shadow-sm flex-col flex items-center justify-center bg-blue-600 dark:bg-blue-500 transition-all duration-300 animate-bounce text-white">
          <House />
        </div>

        <h2 className="text-2xl text-gray-500 dark:text-gray-300 font-bold pb-2">
          {t("Event Not Found")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center pb-2 px-4 md:w-[63%]">
          {t("The Event you have selected might have been removed or does not exist in our featured events. Click Back To Events to select another event.")}
        </p>

        <Link
          to={'/events'}
          className="bg-blue-600 dark:bg-blue-500 px-4 py-2 rounded-md shadow-sm text-white transition-all duration-300 hover:bg-blue-800 dark:hover:bg-blue-600"
        >
          {t("Back To Events")}
        </Link>
      </div>
    );
  }

  const handleBooking = () => {
    navigate("/eventBooking", { state: { event } });
  };

  return (
    <>
      <div className="w-full bg-gray-50 dark:bg-gray-950 pt-20 md:pt-25 pb-10 px-4 flex flex-col md:flex-row md:items-start md:justify-between items-center justify-center gap-4">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start justify-start gap-3 md:w-[49%]">

          {/* IMAGE */}
          <div className="w-full h-90 overflow-hidden rounded-md">
            <img
              src={event.image}
              alt={t(event.name)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full">

            <h1 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400">
              {t(event.name)}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 pt-1 text-sm leading-relaxed">
              {t(event.description)}
            </p>

            <p className="text-gray-600 dark:text-gray-300 pt-1 text-sm leading-relaxed">
              {t("This event venue is well styled, ventilated and suitable for first-class guests with modern luxury facilities.")}
            </p>

            <div className="flex-1 bg-blue-50 dark:bg-gray-900 p-4 rounded-md mt-2 border border-blue-100 dark:border-gray-800">

              <h3 className="font-semibold text-blue-950 dark:text-white">
                {t("Event Facilities")}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>{t("Spacious and fully furnished event hall")}</li>
                <li>{t("High-speed free Wi-Fi access")}</li>
                <li>{t("Professional sound system and microphones")}</li>
                <li>{t("Large LED screens and projector setup")}</li>
                <li>{t("Modern lighting and decoration options")}</li>
                <li>{t("Comfortable VIP seating and lounge area")}</li>
                <li>{t("Air conditioning and proper ventilation")}</li>
                <li>{t("Catering and refreshment services available")}</li>
                <li>{t("Secure parking space for guests")}</li>
                <li>{t("Clean modern washrooms")}</li>
                <li>{t("Backup power supply for uninterrupted events")}</li>
                <li>{t("24/7 security and event support staff")}</li>
              </ul>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[49%]">

          {/* BOOKING REQUIREMENTS */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm w-full border border-transparent dark:border-gray-800">

            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              {t("Event Booking Requirements")}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>{t("Valid ID or organization details required for booking")}</li>
              <li>{t("Advance booking confirmation is required")}</li>
              <li>{t("Full or partial deposit payment may be required")}</li>
              <li>{t("Event setup and decoration time must be scheduled in advance")}</li>
              <li>{t("Maximum guest capacity must be followed")}</li>
              <li>{t("Outside catering or vendors may require prior approval")}</li>
              <li>{t("Damage to venue property may result in extra charges")}</li>
              <li>{t("Music and entertainment must comply with venue regulations")}</li>
              <li>{t("Cancellation or rescheduling policy applies")}</li>
              <li>{t("Event ending time must be respected")}</li>
            </ul>

          </div>

          {/* PRICE + ACTION */}
          <div className="mt-6 flex items-start flex-col justify-start bg-blue-50 dark:bg-gray-900 p-5 rounded-lg gap-2 border border-blue-100 dark:border-gray-800">

            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Price per event")}
              </p>

              <p className="text-xl font-bold text-blue-950 dark:text-white">
                {t(' Ksh.')}{event.price || "120"}
              </p>
            </div>

            <Button
              backgroundColor={'bg-blue-600'}
              borderColor={'border-blue-600'}
              textColor={'text-white'}
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
              {t("Book Event")}
            </Button>

          </div>

          <div className="mt-6">
            <Link to="/events" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              {t("← Back to Events")}
            </Link>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default EventDetail;