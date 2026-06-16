import React from "react";
import { useTranslation } from 'react-i18next';
import { useParams, Link, useNavigate } from "react-router-dom";
import Drinks from "./drinkStore";
import { House } from "lucide-react";
import Button from "../button";
import Footer from "../footer";

const DrinkDetails = () => {

  const { t } = useTranslation();

  const { id } = useParams();
  const navigate = useNavigate();

  const drink = Drinks.find((drink) => drink.id === String(id));

  if (!drink) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 transition-colors duration-300">

        <div className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white animate-bounce">
          <House />
        </div>

        <h2 className="text-2xl text-gray-700 dark:text-gray-200 font-bold mt-4">
          {t("Drink not found")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 px-4 md:w-[63%]">
          {t("The drink you selected might have been removed or does not exist.")}{" "}
          {t('Click')} <b>{t("Back To Drinks")}</b>{" "}
          {t("to select another drink.")}
        </p>

        <Link
          to={"/barDrink"}
          className="mt-5 bg-blue-600 px-6 py-2 rounded-xl shadow-md text-white hover:bg-blue-700 transition-all duration-300"
        >
          {t("Back To Drinks")}
        </Link>
      </div>
    );
  }

  const handleBooking = () => {
    navigate("/drinkBooking", { state: { drink } });
  };

  return (
    <>
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-24 md:pt-28 pb-12 px-4 flex flex-col md:flex-row gap-6 transition-colors duration-300">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 md:w-[50%]">

          {/* IMAGE */}
          <div className="w-full h-[360px] overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">

            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400">
              {t(drink.name)}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 pt-2 text-sm leading-relaxed">
              {t(drink.description)}
            </p>

            <p className="text-gray-600 dark:text-gray-400 pt-2 text-sm leading-relaxed">
              {t("This drink is carefully prepared, refreshing, and perfect for all occasions. It delivers a premium taste experience with high-quality ingredients.")}
            </p>

            <div className="mt-4 bg-blue-50 dark:bg-gray-800 p-4 rounded-xl border border-blue-100 dark:border-gray-700">

              <h3 className="font-semibold text-blue-900 dark:text-blue-300">
                {t("Drink Features")}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>{t("Freshly prepared ingredients")}</li>
                <li>{t("Premium taste quality")}</li>
                <li>{t("Served chilled")}</li>
                <li>{t("Available in different sizes")}</li>
                <li>{t("Perfect for events & relaxation")}</li>
              </ul>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-[50%] flex flex-col gap-6">

          {/* REQUIREMENTS */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">

            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">
              {t("Order Requirements")}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>{t("Must be 18+ for alcoholic drinks (if applicable)")}</li>
              <li>{t("Orders may require upfront payment")}</li>
              <li>{t("Delivery time depends on location")}</li>
              <li>{t("Fresh preparation on order")}</li>
              <li>{t("Cancellation allowed before preparation starts")}</li>
            </ul>

          </div>

          {/* PRICE + ACTION */}
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-sm transition-colors duration-300">

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t("Price per drink")}
            </p>

            <p className="text-2xl font-bold text-blue-900 dark:text-blue-300 mt-1 mb-3">
              {t("Ksh.")}{drink.price || "120"}
            </p>

            <Button
              backgroundColor={"bg-blue-600"}
              borderColor={"border-blue-600"}
              textColor={"text-white"}
              onClick={handleBooking}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 text-white py-3 rounded-xl transition-all duration-300"
            >
              {t("Confirm Order")}
            </Button>

          </div>

          {/* BACK LINK */}
          <div>
            <Link
              to="/barDrink"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              {t("← Back to Drinks")}
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default DrinkDetails;