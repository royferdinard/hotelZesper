import React from "react";
import { useTranslation } from 'react-i18next';
import { useParams, Link, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import Button from "../button";
import Footer from "../footer";
import Services from "./spaStore";

const SpaDetails = () => {

  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();

  const spa = Services.find((service) => service.id === String(id));

  if (!spa) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4">

        <div className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white animate-bounce">
          <House />
        </div>

        <h2 className="text-2xl text-gray-700 dark:text-gray-200 font-bold mt-4">
          {t("Service not found")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-2 px-4 md:w-[63%]">
          {t('The spa service you selected might have been removed or does not exist. Click "Back To Spa Services" to select another service.')}
        </p>

        <Link
          to={"/spa"}
          className="mt-5 bg-blue-600 px-6 py-2 rounded-xl shadow-md text-white hover:bg-blue-700 transition-all duration-300"
        >
          {t("Back To Spa")}
        </Link>

      </div>
    );
  }

  const handleBooking = () => {
    navigate("/spaBooking", { state: { spa } });
  };

  return (
    <>
      <div className="w-full bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-24 md:pt-28 pb-12 px-4 flex flex-col md:flex-row gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 md:w-[50%]">

          {/* IMAGE */}
          <div className="w-full h-90 overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <img
              src={spa.image}
              alt={spa.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">

            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300">
              {t(spa.name)}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 pt-2 text-sm leading-relaxed">
              {t(spa.description)}
            </p>

            <p className="text-gray-600 dark:text-gray-300 pt-2 text-sm leading-relaxed">
              {t("This spa treatment is designed to relax your body, refresh your mind, and restore natural balance using professional wellness techniques.")}
            </p>

            <div className="mt-4 bg-blue-50 dark:bg-gray-800 p-4 rounded-xl border border-blue-100 dark:border-gray-700">

              <h3 className="font-semibold text-blue-900 dark:text-blue-300">
                {t("Spa Benefits")}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>{t("✔ Professional massage therapy")}</li>
                <li>{t("✔ Stress relief & relaxation")}</li>
                <li>{t("✔ Aromatherapy sessions")}</li>
                <li>{t("✔ Skin rejuvenation treatments")}</li>
                <li>{t("✔ Calm and private environment")}</li>
              </ul>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-[50%] flex flex-col gap-6">

          {/* REQUIREMENTS */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">

            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
              {t("Booking Requirements")}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>{t("Arrive 10–15 minutes before appointment")}</li>
              <li>{t("Advance booking recommended")}</li>
              <li>{t("Payment may be required before session")}</li>
              <li>{t("Health conditions should be disclosed")}</li>
              <li>{t("Cancellation allowed before 24 hours")}</li>
            </ul>

          </div>

          {/* PRICE + ACTION */}
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm">

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t("Price per session")}
            </p>

            <p className="text-2xl font-bold text-blue-900 dark:text-blue-300 mt-1 mb-3">
              Ksh.{spa.price || "120"}
            </p>

            <Button
              backgroundColor={"bg-blue-600 dark:bg-blue-700"}
              borderColor={"border-blue-600 dark:border-blue-700"}
              textColor={"text-white"}
              onClick={handleBooking}
              className="w-full py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-xl transition-all duration-300"
            >
              {t("Book Spa Session")}
            </Button>

          </div>

          {/* BACK LINK */}
          <div>
            <Link
              to="/spa"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              {t("← Back to Spa Services")}
            </Link>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default SpaDetails;