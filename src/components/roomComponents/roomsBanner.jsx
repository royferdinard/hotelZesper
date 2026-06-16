import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "../button";

function RoomsBanner() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="px-4 py-8 dark:bg-slate-900">

        {/* ROOMS REWARDS / BOOKING BENEFITS */}
        <div className="w-full p-4 bg-white dark:bg-gray-900 dark:border dark:border-slate-700 rounded-md shadow-sm">

          <div className="flex flex-col items-start justify-start py-3 gap-4 md:flex-row md:items-start md:justify-between">

            <div className="flex flex-col items-start justify-start gap-0.5">
              <h2 className="text-xl font-bold flex items-center gap-2 text-blue-950 dark:text-blue-300">
                🏨 {t("Room Rewards Program")}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Earn rewards every time you book a room and unlock exclusive stay benefits.")}
              </p>
            </div>

            <Button
              backgroundColor={"bg-blue-600 dark:bg-blue-700"}
              borderColor={"border-blue-600 dark:border-blue-700"}
              textColor={"text-white"}
            >
              <span>{t("View Rooms")}</span>
            </Button>

          </div>

          <div className="flex flex-col md:flex-row gap-6">

            {/* HOW IT WORKS */}
            <div className="flex-1 bg-blue-50 dark:bg-gray-800 dark:border dark:border-slate-700 p-4 rounded-md">
              <h3 className="font-semibold text-blue-950 dark:text-blue-300">
                {t("How it works")}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>{t("✔ Every room booking earns reward points")}</li>
                <li>{t("✔ 3 stays = free upgrade (subject to availability)")}</li>
                <li>{t("✔ VIP members get priority booking & discounts")}</li>
              </ul>
            </div>

            {/* STATUS */}
            <div className="flex-1 bg-green-50 dark:bg-gray-800 dark:border dark:border-slate-700 p-4 rounded-md">
              <h3 className="font-semibold text-blue-950 dark:text-blue-300">
                {t("Your Status")}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {t("Standard Guest")}
              </p>

              <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div className="bg-green-500 h-2 w-1/3 rounded-full"></div>
              </div>

              <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                {t("1/3 stays to next reward tier")}
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default RoomsBanner;