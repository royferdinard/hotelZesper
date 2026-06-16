import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { House, CreditCard, Smartphone, Wallet } from "lucide-react";
import Button from "../components/button";
import Footer from "../components/footer";

const EventBooking = () => {

    const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    paymentMethod: "mpesa",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      id: `HTZENTBK${Date.now()}`,
      event,
      ...form,
      bookedAt: new Date().toLocaleString(),
    };

    localStorage.setItem("eventBooking", JSON.stringify(bookingDetails));
    navigate("/eventReceipt");
  };

  if (!event) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col bg-gray-100 dark:bg-gray-900">

        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white animate-bounce shadow-lg">
          <House />
        </div>

        <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-200 mt-4">
          {t("No Event Selected")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 px-4 md:w-[60%]">
          {t("Please select an event before booking.")}
        </p>

        <Link
          to="/events"
          className="mt-4 bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded-md shadow-md transition"
        >
          {t("Back To Events")}
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 pt-24 pb-8">

        <div className="w-full mx-auto grid md:grid-cols-2 gap-4">

          {/* ================= SUMMARY ================= */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800">

            <div className="relative h-72">
              <img
                src={event.image}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                {t("Booking Summary")}
              </h2>
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-blue-600">
                {event.name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {event.description}
              </p>

              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm">{t("Price")}</span>
                <span className="text-blue-900 dark:text-blue-300 font-bold text-lg">
                  Ksh.{event.price || 120}
                </span>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 space-y-4 border border-gray-100 dark:border-gray-800"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-2">
              {t("Event Booking Details")}
            </h2>

            <input
              name="fullName"
              placeholder={t("Full Name")}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              name="email"
              placeholder={t("Email")}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              name="phone"
              placeholder={t("Phone")}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                name="checkIn"
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />

              <input
                type="date"
                name="checkOut"
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <input
              type="number"
              name="guests"
              min="1"
              placeholder={t("Number of Guests")}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            {/* ================= PAYMENT ================= */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                {t("Payment Method")}
              </h3>

              <div className="space-y-2">

                <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition text-gray-600 dark:text-gray-200 ${
                  form.paymentMethod === "mpesa"
                    ? "border-blue-100 bg-blue-50 dark:bg-gray-700"
                    : "border-gray-200 dark:border-gray-700"
                }`}>
                  <Smartphone size={18} />
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={form.paymentMethod === "mpesa"}
                    onChange={handleChange}
                  />
                  {t("M-Pesa")}
                </label>

                <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition text-gray-600 dark:text-gray-200 ${
                  form.paymentMethod === "card"
                    ? "border-blue-100 bg-blue-50 dark:bg-gray-700"
                    : "border-gray-200 dark:border-gray-700"
                }`}>
                  <CreditCard size={18} />
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={form.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  {t("Card Payment")}
                </label>

                <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition text-gray-600 dark:text-gray-200 ${
                  form.paymentMethod === "cash"
                    ? "border-blue-100 bg-blue-50 dark:bg-gray-700"
                    : "border-gray-200 dark:border-gray-700"
                }`}>
                  <Wallet size={18} />
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={form.paymentMethod === "cash"}
                    onChange={handleChange}
                  />
                  {t("Pay on Arrival")}
                </label>

              </div>
            </div>

            {/* BUTTON */}
            <div className="pt-2">
              <Button
                type="submit"
                backgroundColor={"bg-blue-600"}
                borderColor={"border-blue-600"}
                textColor={"text-white"}
                className="w-full py-3 text-lg font-semibold"
              >
                {t("Confirm Booking")}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventBooking;