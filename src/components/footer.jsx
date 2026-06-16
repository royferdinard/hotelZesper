import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Check, Send } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {

  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Hotels", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubscribe = () => {
    if (!email) {
      setMessage({ type: "error", text: t("Enter your email") });
      return;
    }

    if (!isValidEmail(email)) {
      setMessage({ type: "error", text: t("Invalid email address") });
      return;
    }

    setLoading(true);
    setMessage(null);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
      setMessage({ type: "success", text: t("Subscribed successfully!") });
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    { name: <FaFacebook />, href: '' },
    { name: <FaInstagram />, href: '' },
    { name: <FaTwitter />, href: '' },
    { name: <FaYoutube />, href: '' },
    { name: <FaEnvelope size={18} />, href: '' },
  ];

  return (
    <footer className="w-full bg-blue-950 text-white dark:bg-slate-950 border-blue-800">

      <div className="w-full mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-10 ">

        {/* HOTEL INFO */}
        <div className="flex flex-col gap-3 items-start justify-start">

          <h1 className="text-2xl font-bold tracking-wide text-white">
            {t("Hotel")} <span className="text-blue-500">Zesper</span>
          </h1>

          <p className="text-sm text-gray-300 leading-relaxed">
            {t("Discover refined comfort and exceptional hospitality crafted for your perfect stay. Every detail is designed for a memorable experience.")}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            {socialLinks.map((Icon, i) => (
              <a
                key={i}
                href={Icon.href}
                className="bg-blue-700 hover:bg-blue-900 p-2 rounded-full transition transform hover:scale-110 flex items-center justify-center"
              >
                {Icon.name}
              </a>
            ))}
          </div>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">
            {t("Quick Links")}
          </h2>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-blue-400 transition"
              >
                {t(link.name)}
              </Link>
            ))}
          </div>

        </div>

        {/* SUPPORT */}
        <div>

          <h2 className="text-xl font-bold mb-4 text-white">
            {t("Support")}
          </h2>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link to={'/help'} className="hover:text-blue-400 transition">
              {t("FAQs")}
            </Link>

            <Link to={'/help'} className="hover:text-blue-400 transition">
              {t("Booking Process")}
            </Link>

            <Link to={'/rooms'} className="hover:text-blue-400 transition">
              {t("Rooms")}
            </Link>

            <Link to={'/help'} className="hover:text-blue-400 transition">
              {t("Help Center")}
            </Link>

            <Link to={'/bar'} className="hover:text-blue-400 text-left transition">
              {t("Drinks")}
            </Link>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div>

          <h2 className="text-xl font-bold mb-4 text-white">
            {t("Newsletter")}
          </h2>

          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            {t("Get updates, offers, and exclusive deals directly in your inbox.")}
          </p>

          <div className="flex flex-row items-center justify-center w-full h-10 bg-white rounded-lg overflow-hidden gap-2">

            <input
              type="email"
              placeholder={t("Enter your email")}
              className="px-2 w-full h-[75%] text-sm bg-transparent text-gray-800 placeholder:text-gray-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleSubscribe}
              className="w-[25%] h-full bg-blue-600 hover:bg-blue-800 p-1 text-white text-sm font-semibold transition flex flex-col items-center justify-center"
            >
              <Send />
            </button>

          </div>

          <span className="mt-2 block h-5">
            {message && (
              <p
                className={`text-sm ${
                  message.type === "error" ? "text-red-400" : "text-green-400"
                }`}
              >
                {t(message.text)}
              </p>
            )}
          </span>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-blue-800 dark:bg-slate-900 px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">

        <p className="text-white">
          {t("© 2026 Hotel Zesper. All rights reserved.")}
        </p>

        <div className="flex gap-5 text-white">

          <Link to={'/terms'} className="hover:text-blue-400 transition">
            {t("Terms")}
          </Link>

          <Link to={'/privacy'} className="hover:text-blue-400 transition">
            {t("Privacy")}
          </Link>

          <Link to={'/cookies'} className="hover:text-blue-400 transition">
            {t("Cookies")}
          </Link>

        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-xl animate-bounce">
          <Check className="inline mr-2" />
          {t("Subscription successful!")}
        </div>
      )}

    </footer>
  );
};

export default Footer;