import React from "react";
import { useTranslation } from 'react-i18next';
import { useParams, Link, useNavigate } from "react-router-dom";
import Rooms from "../jsComponents/roomStore";
import { House } from "lucide-react";
import Button from "../button";
import Footer from "../footer";

const RoomDetails = () => {

  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();

  const room = Rooms.find((room) => room.id === String(id));

  if (!room) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col px-">

        <div className="w-12 h-12 rounded-full shadow-sm flex-col flex items-center justify-center bg-blue-600 transition-all duration-300 animate-bounce text-white">
          <House />
        </div>

        <h2 className="text-2xl text-gray-500 dark:text-gray-300 font-bold pb-2">
          {t("Room not found")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center pb-2 px-4 md:w-[63%]">
          {t('The room you have selected might have been removed or does not exist in our featured rooms. Click "Back To Rooms" to select another room.')}
        </p>

        <Link
          to={'/rooms'}
          className="bg-blue-600 px-4 py-2 rounded-md shadow-sm text-white transition-all duration-300 hover:bg-blue-800"
        >
          {t("Back To Rooms")}
        </Link>
      </div>
    );
  }

  const handleBooking = () => {
    navigate("/booking", { state: { room } });
  };

  return (
    <>
      <div className="w-full bg-gray-50 dark:bg-gray-900 transition-colors pt-20 md:pt-25 pb-10 px-4 flex flex-col md:flex-row md:items-start md:justify-between items-center justify-center gap-4">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start justify-start gap-3 md:w-[49%]">

          {/* IMAGE */}
          <div className="w-full h-90 overflow-hidden rounded-md">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full">

            <h1 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400">
              {t(room.name)}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 pt-1 text-sm leading-relaxed">
              {t(room.description)}
            </p>

            <p className="text-gray-600 dark:text-gray-300 pt-1 text-sm leading-relaxed">
              {t("This room is well styled, ventilated and suitable for first class guests. It contains modern facilities that contribute to its luxury.")}
            </p>

            <div className="flex-1 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md mt-2 border border-blue-100 dark:border-blue-800">

              <h3 className="font-semibold text-blue-950 dark:text-blue-300">
                {t("Room Facilities")}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>{t("✔ Digital Smart TV")}</li>
                <li>{t("✔ Free and Strong Wi-Fi")}</li>
                <li>{t("✔ VIP sofa sets with a coffee table")}</li>
                <li>{t("✔ Modern coffee machine")}</li>
                <li>{t("✔ Mini fridge and blender")}</li>
                <li>{t("✔ Modern washroom and toilet")}</li>
                <li>{t("✔ Luxury king bed with blankets and mosquito net")}</li>
                <li>{t("✔ Free cooking facilities e.g. electric cooker")}</li>
              </ul>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[49%]">

          {/* BOOKING REQUIREMENTS */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm w-full border border-gray-200 dark:border-gray-700">

            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              {t("Booking Requirements")}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>{t("Valid ID or Passport required at check-in")}</li>
              <li>{t("Minimum age of 18 years for booking")}</li>
              <li>{t("Full or partial payment may be required in advance")}</li>
              <li>{t("Check-in time: 2:00 PM")}</li>
              <li>{t("Check-out time: 11:00 AM")}</li>
              <li>{t("Cancellation policy applies depending on room type")}</li>
            </ul>

          </div>

          {/* PRICE + ACTION */}
          <div className="mt-6 flex items-start flex-col justify-start bg-blue-50 dark:bg-blue-900/30 p-5 rounded-lg gap-2 border border-blue-100 dark:border-blue-800">

            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Price per night")}
              </p>

              <p className="text-xl font-bold text-blue-950 dark:text-blue-300">
                ${room.price || "120"}
              </p>
            </div>

            <Button
              backgroundColor={'bg-blue-600'}
              borderColor={'border-blue-600'}
              textColor={'text-white'}
              onClick={handleBooking}
              className="hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition"
            >
              {t("Confirm Booking")}
            </Button>

          </div>

          <div className="mt-6">
            <Link to="/rooms" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              {t("← Back to Rooms")}
            </Link>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default RoomDetails;