import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { House, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";

const SpaReceipt = () => {

  const { t, i18n } = useTranslation();

  const [booking, setBooking] = useState(null);

  // DARK MODE ADDED ONLY
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("spaBooking"));
    setBooking(data);
  }, []);

  const finalPrice =
    (booking?.service?.price || 0) * (booking?.guests || 1);

//   const downloadReceipt = () => {
//     const text = `
// SPA BOOKING RECEIPT

// Booking ID: ${booking.id}
// Name: ${booking.fullName}
// Email: ${booking.email}
// Phone: ${booking.phone}

// Spa Service: ${booking.service.name || booking.service.head}
// Price per session: ${booking.service.price}

// Sessions: ${booking.guests}
// Payment Method: ${booking.paymentMethod}

// Check-in: ${booking.checkIn}
// Check-out: ${booking.checkOut}

// Total: ${finalPrice}

// Booked At: ${booking.bookedAt}

// Thank you for booking our spa services!
//     `;

//     const blob = new Blob([text], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "spa-receipt.txt";
//     a.click();
//   };

const downloadReceipt = () => {
  const doc = new jsPDF();

  // HEADER
  doc.setFillColor(30, 64, 175);
  doc.rect(0, 0, 210, 40, "F");

  // HEADER TEXT
  doc.setTextColor(255, 255, 255);
  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(22);

  doc.text(
    t("SPA BOOKING RECEIPT"),
    20,
    20
  );

  doc.setFontSize(12);

  doc.text(
    `${t("Booking ID")}: #${booking.id}`,
    20,
    30
  );

  // RESET COLOR
  doc.setTextColor(
    0,
    0,
    0
  );

  let y = 55;

  // RECEIPT DATA
  const receiptData = [
    [
      t("Name"),
      booking.fullName,
    ],
    [
      t("Email"),
      booking.email,
    ],
    [
      t("Phone"),
      booking.phone,
    ],
    [
      t("Spa Service"),
      booking.service.name ||
        booking.service.head,
    ],
    [
      t("Price per Session"),
      `Ksh ${booking.service.price}`,
    ],
    [
      t("Sessions"),
      booking.guests,
    ],
    [
      t("Payment Method"),
      booking.paymentMethod,
    ],
    [
      t("Check In"),
      booking.checkIn,
    ],
    [
      t("Check Out"),
      booking.checkOut,
    ],
    [
      t("Booked At"),
      booking.bookedAt,
    ],
  ];

  receiptData.forEach(
    ([label, value]) => {
      // ROW BACKGROUND
      doc.setFillColor(
        240,
        244,
        248
      );

      doc.roundedRect(
        15,
        y - 6,
        180,
        12,
        2,
        2,
        "F"
      );

      // LABEL
      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(11);

      doc.text(
        `${label}:`,
        20,
        y + 1
      );

      // VALUE
      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.text(
        `${value}`,
        85,
        y + 1
      );

      y += 16;
    }
  );

  // TOTAL SECTION
  doc.setFillColor(
    30,
    64,
    175
  );

  doc.roundedRect(
    15,
    y + 5,
    180,
    18,
    3,
    3,
    "F"
  );

  doc.setTextColor(
    255,
    255,
    255
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(14);

  doc.text(
    t("Total Amount"),
    20,
    y + 17
  );

  doc.text(
    `Ksh ${finalPrice}`,
    145,
    y + 17
  );

  // THANK YOU TEXT
  doc.setTextColor(
    100,
    100,
    100
  );

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(11);

  doc.text(
    t(
      "Thank you for booking our spa services!"
    ),
    45,
    y + 38
  );

  // SAVE PDF
  doc.save(
    "spa-booking-receipt.pdf"
  );
};
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 pt-24 transition-all duration-300
      ${darkMode
          ? "bg-slate-900 text-white"
          : "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 text-gray-800"
        }`}
    >

      {/* DARK MODE TOGGLE */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg z-50"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* EMPTY STATE */}
      {!booking ? (
        <div className={`w-full h-screen flex items-center justify-center flex-col
          ${darkMode ? "bg-slate-900" : "bg-gradient-to-br from-gray-100 to-blue-50"}`}>

          <div className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white animate-bounce">
            <House />
          </div>

          <h2 className={`text-2xl font-bold mt-4
            ${darkMode ? "text-white" : "text-gray-700"}`}>
            {t("No Spa Booking Found")}
          </h2>

          <p className={`text-sm text-center mt-2 px-4 md:w-[60%]
            ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
            {t("You have not booked any spa service yet.")}
          </p>

          <Link
            to={"/spa"}
            className="mt-6 bg-blue-600 px-6 py-3 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            {t("Back To Spa")}
          </Link>
        </div>
      ) : (
        /* CARD */
        <div
          className={`w-full md:max-w-4xl shadow-sm rounded-lg overflow-hidden border transition-all duration-300
          ${darkMode
              ? "bg-slate-800 border-slate-700 text-white"
              : "bg-white border-gray-100 text-gray-600"
            }`}
        >

          {/* HEADER */}
          <div className="bg-blue-900 text-white p-8 relative">

            <h1 className="text-2xl font-bold tracking-wide">
              {t("Spa Receipt")}
            </h1>

            <p className="text-sm text-blue-100 mt-2">
              {t("Booking ID")}: <span className="font-semibold">#{booking.id}</span>
            </p>

            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
          </div>

          {/* CONTENT */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Name")}</span>
              <span>{booking.fullName}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Email")}</span>
              <span className="break-all">{booking.email}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Phone")}</span>
              <span>{booking.phone}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Spa Service")}</span>
              <span>{booking.service.name || booking.service.head}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Price")}</span>
              <span>Ksh {booking.service.price}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Sessions")}</span>
              <span>{booking.guests}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Payment Method")}</span>
              <span className="uppercase">{booking.paymentMethod}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Check In")}</span>
              <span>{booking.checkIn}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Check Out")}</span>
              <span>{booking.checkOut}</span>
            </div>

            <div className={`flex justify-between p-4 rounded-lg border md:col-span-2
              ${darkMode ? "bg-slate-700 border-slate-600 text-white" : "bg-gray-50 border-gray-200"}`}>
              <span className="font-semibold">{t("Booked At")}</span>
              <span>{booking.bookedAt}</span>
            </div>

            {/* TOTAL */}
            <div className="md:col-span-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg flex justify-between items-center shadow-lg">
              <span className="font-semibold text-lg">{t("Total Amount")}</span>
              <span className="text-xl font-bold">
                Ksh {finalPrice}
              </span>
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2">
              <button
                onClick={downloadReceipt}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <Download size={18} />
                {t("Download Receipt")}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SpaReceipt;