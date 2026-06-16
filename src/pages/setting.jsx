import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Footer from "../components/footer";

const SettingsPage = () => {

  const { t, i18n } = useTranslation();

  const [activeTab, setActiveTab] = useState("notifications");
  const [darkMode, setDarkMode] = useState(false);

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const [privacy, setPrivacy] = useState({
    profile: true,
    search: false,
    activity: true,
  });

  const [payment, setPayment] = useState({
    card: "",
    expiry: "",
    cvv: "",
  });

  const tabs = [
    "notifications",
    "payments",
    "privacy",
    "language",
    "appearance",
  ];

  return (
    <>
      <div
        className={`w-full pt-25 pb-8 flex flex-col md:flex-row gap-4 px-4 ${
          darkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >

        {/* SIDEBAR */}
        <div className={`md:w-64 w-full shadow-sm p-6 rounded-md ${
          darkMode ? "bg-slate-800 text-white" : "bg-white"
        }`}>
          <h2 className="text-xl text-blue-600 font-bold mb-4">
            {t("Settings")}
          </h2>

          <div className={`space-y-2 rounded-md px-2 py-2 ${
            darkMode ? "bg-slate-900" : "bg-gray-50"
          }`}>
            {tabs.map((category, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between gap-2 px-2 py-2 rounded-lg hover:bg-gray-100"
              >
                <span
                  className={`w-4 h-4 border bg-white shadow-sm flex items-center justify-center rounded-full transition-all duration-300
                  ${activeTab === category ? "border-blue-600" : "border-gray-400"}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300
                    ${activeTab === category ? "bg-blue-600" : "bg-gray-500"}`}
                  ></span>
                </span>

                <button
                  onClick={() => setActiveTab(category)}
                  className={`w-full text-left capitalize text-sm font-semibold transition-all duration-300 hover:text-blue-600
                  ${activeTab === category ? "text-blue-600" : darkMode ? "text-gray-200" : "text-gray-600"}`}
                >
                  {t(category)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 w-full pb-4">

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className={`p-6 rounded-md shadow space-y-6 w-full ${
              darkMode ? "bg-slate-800 text-white" : "bg-white"
            }`}>
              <h3 className="text-xl text-blue-600 font-semibold">
                {t("Notifications")}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">{t("Email Notifications")}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={() =>
                      setNotifications({ ...notifications, email: !notifications.email })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">{t("SMS Notifications")}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.sms}
                    onChange={() =>
                      setNotifications({ ...notifications, sms: !notifications.sms })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">{t("Push Notifications")}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.push}
                    onChange={() =>
                      setNotifications({ ...notifications, push: !notifications.push })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          )}

          {/* PAYMENTS */}
          {activeTab === "payments" && (
            <div className={`p-6 rounded-md shadow space-y-5 ${
              darkMode ? "bg-slate-800 text-white" : "bg-white"
            }`}>

              <h3 className="text-xl font-semibold text-blue-600">
                {t("Payment Methods")}
              </h3>

              <input
                className={`w-full p-3 border rounded-md ${
                  darkMode ? "bg-slate-900 text-white border-slate-700" : ""
                }`}
                placeholder={t("Card Number")}
                value={payment.card}
                onChange={(e) => setPayment({ ...payment, card: e.target.value })}
              />

              <input
                className={`w-full p-3 border rounded-md ${
                  darkMode ? "bg-slate-900 text-white border-slate-700" : ""
                }`}
                placeholder={t("Expiry Date")}
                value={payment.expiry}
                onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
              />

              <input
                className={`w-full p-3 border rounded-md ${
                  darkMode ? "bg-slate-900 text-white border-slate-700" : ""
                }`}
                placeholder={t("CVV")}
                value={payment.cvv}
                onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
              />

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-md">
                {t("Save Payment Method")}
              </button>
            </div>
          )}

          {/* PRIVACY */}
          {activeTab === "privacy" && (
            <div className={`p-6 rounded-md shadow space-y-6 ${
              darkMode ? "bg-slate-800 text-white" : "bg-white"
            }`}>
              <h3 className="text-xl font-semibold text-blue-500">
                {t("Privacy")}
              </h3>

              {[
                ["profile", "Show Profile Publicly"],
                ["search", "Allow Search Engines"],
                ["activity", "Share Activity Data"],
              ].map(([key, label]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-500">{t(label)}</span>
                  <input
                    type="checkbox"
                    checked={privacy[key]}
                    onChange={() =>
                      setPrivacy({ ...privacy, [key]: !privacy[key] })
                    }
                  />
                </div>
              ))}
            </div>
          )}

          {/* LANGUAGE */}
          {activeTab === "language" && (
            <div className={`p-6 rounded-md shadow space-y-6 ${
              darkMode ? "bg-slate-800 text-white" : "bg-white"
            }`}>
              <h3 className="text-xl text-blue-600 font-semibold">
                {t("Language & Region")}
              </h3>

              <select
                className="w-full p-3 border rounded-md text-black"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-md">
                {t("Save Preferences")}
              </button>
            </div>
          )}

          {/* APPEARANCE */}
          {activeTab === "appearance" && (
            <div className={`p-6 rounded-md shadow space-y-6 ${
              darkMode ? "bg-slate-800 text-white" : "bg-white"
            }`}>
              <h3 className="text-xl font-semibold text-blue-600">
                {t("Appearance")}
              </h3>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>

              <div className={`p-4 rounded-lg border ${
                darkMode
                  ? "bg-slate-900 text-white border-slate-700"
                  : "bg-blue-50 border-blue-200 text-blue-600"
              }`}>
                <p className="text-sm">
                  {t("Preview: This is how your theme will look.")}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default SettingsPage;