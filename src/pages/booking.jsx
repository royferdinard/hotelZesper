import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Footer from "../components/footer";

const Booking = () => {

  const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const room = location.state?.room;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  if (!room) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col px-4 bg-gray-50 dark:bg-gray-900">

        <div className="w-12 h-12 rounded-full shadow-sm flex-col flex items-center justify-center bg-blue-600 transition-all duration-300 animate-bounce text-white">
          <House />
        </div>

        <h2 className="text-2xl text-gray-500 dark:text-gray-300 font-bold pb-2">
          {t("No Room Selected")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center pb-2 px-4 md:w-[63%]">
          {t('Please select any room of your choice from the featured rooms. Click "Back To Room" to select another room.')}
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      id: `HTZBK${Date.now()}`,
      room,
      ...form,
      bookedAt: `${new Date().toLocaleString()}`,
    };

    localStorage.setItem("latestBooking", JSON.stringify(bookingData));

    navigate("/receipt");
  };

  return (
    <>
      <div className="w-full bg-gray-100 dark:bg-gray-950 px-4 pt-22 md:pt-25 pb-8">

        <div className="w-full mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden flex flex-col items-center justify-center md:flex-row">

          {/* SUMMARY */}
          <div className="bg-blue-900 text-white p-4">

            <h2 className="text-xl font-bold">
              {t("Booking Summary")}
            </h2>

            <div className="mt-3 flex flex-col md:items-start gap-4 items-center">

              <div className="w-full items-center flex-col flex justify-center overflow-hidden h-70 rounded-sm">
                <img
                  src={room.image}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {room.name}
                </h3>

                <p className="text-blue-200 text-sm">
                  {room.description}
                </p>

                <p className="mt-2 font-bold text-lg">
                  ${room.price || 120} / night
                </p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white dark:bg-gray-900 w-full">

            <input
              name="fullName"
              placeholder={t("Full Name")}
              className="w-full p-3 border rounded-md text-gray-500 dark:text-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder={t("Email")}
              className="w-full p-3 border rounded-md text-gray-500 dark:text-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder={t("Phone")}
              className="w-full p-3 border rounded-md text-gray-500 dark:text-gray-200 border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="date"
                name="checkIn"
                className="w-full text-gray-500 dark:text-gray-200 p-3 border rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="checkOut"
                className="w-full text-gray-500 dark:text-gray-200 p-3 border rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="number"
              name="guests"
              placeholder={t("Enter number of guest")}
              min="1"
              className="w-full p-3 border rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-500 dark:text-gray-200 text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
              required
            />

            <Button
              type='submit'
              backgroundColor={'bg-blue-600'}
              borderColor={'border-blue-600'}
              textColor={'text-white'}
            >
              {t("Confirm Booking")}
            </Button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Booking;