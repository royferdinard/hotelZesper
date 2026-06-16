import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { House } from "lucide-react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

const Receipt = () => {

  const { t, i18n } = useTranslation();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("latestBooking"));
    setBooking(data);
  }, []);

  if (!booking) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col px-">
        <div className="w-12 h-12 rounded-full shadow-sm flex-col flex items-center justify-center bg-blue-600 transition-all duration-300 animate-bounce text-white">
          <House />
        </div>

        <h2 className="text-2xl text-gray-500 dark:text-gray-300 font-bold pb-2">
          {t("No Booking Found")}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center pb-2 px-4 md:w-[63%]">
          {t("You have not booked any room. Click Back To Room to select and book a room.")}
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

//   const downloadReceipt = () => {
//     const text = `
// HOTEL ZESPER BOOKING RECEIPT

// ${t("Booking ID")}: ${booking.id}
// ${t("Name")}: ${booking.fullName}
// ${t("Email")}: ${booking.email}
// ${t("Phone")}: ${booking.phone}

// ${t("Room")}: ${booking.room.name}
// ${t("Price")}: $${booking.room.price}

// ${t("Check-in")}: ${booking.checkIn}
// ${t("Check-out")}: ${booking.checkOut}
// ${t("Guests")}: ${booking.guests}

// ${t("Booked At")}: ${booking.bookedAt}

// ${t("Thank you for booking with Hotel Zesper!")}
//     `;

//     const blob = new Blob([text], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "booking-receipt.txt";
//     a.click();
//   };

const downloadReceipt = () => {
  const doc = new jsPDF();

  // HEADER BACKGROUND
  doc.setFillColor(30, 58, 138);
  doc.rect(0, 0, 210, 40, "F");

  // HEADER TEXT
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);

  doc.text(
    t("HOTEL ZESPER BOOKING RECEIPT"),
    20,
    20
  );

  doc.setFontSize(12);

  doc.text(
    `${t("Receipt ID")}: #${booking.id}`,
    20,
    30
  );

  // RESET COLOR
  doc.setTextColor(0, 0, 0);

  let y = 55;

  // RECEIPT DETAILS
  const receiptData = [
    [t("Booking ID"), booking.id],
    [t("Name"), booking.fullName],
    [t("Email Address"), booking.email],
    [t("Contact"), booking.phone],
    [t("Room"), booking.room.name],
    [
      t("Price"),
      `Ksh ${booking.room.price}`,
    ],
    [
      t("Number of Guest"),
      booking.guests,
    ],
    [t("Check-In"), booking.checkIn],
    [
      t("Check-Out"),
      booking.checkOut,
    ],
    [
      t("Booked At"),
      booking.bookedAt,
    ],
  ];

  receiptData.forEach(
    ([label, value]) => {
      // BOX BACKGROUND
      doc.setFillColor(
        245,
        247,
        250
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
    58,
    138
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
    t("Total Price"),
    20,
    y + 17
  );

  doc.text(
    `Ksh ${finalPrice}`,
    145,
    y + 17
  );

  // THANK YOU
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
      "Thank you for booking with Hotel Zesper!"
    ),
    45,
    y + 38
  );

  // DOWNLOAD PDF
  doc.save(
    "hotel-booking-receipt.pdf"
  );
};

  const finalPrice = parseFloat(((booking?.room.price || 0) * (booking?.guests || 1)).toFixed(2));

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center md:items-center md:justify-center md:pt-24 pt-20 justify-center p-4 md:p-8">

      {/* MOBILE */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg shadow-md rounded-lg overflow-hidden border border-gray-100 dark:border-slate-700">

        {/* Header */}
        <div className="bg-blue-900 p-6 text-white">
          <h1 className="text-2xl font-bold">
            {t("Booking Receipt")}
          </h1>

          <p className="text-sm text-blue-100 mt-1">
            {t("Receipt ID")}: #{booking.id}
          </p>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm flex flex-col items-center justify-center w-full">

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Booking Id")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.id}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Name")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.fullName}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Email Address")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300 break-all text-right">{booking.email}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Contact")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.phone}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Room")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.room.name}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Price")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">Ksh.{booking.room.price}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Number of Guest")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.guests}</span>
            </p>

            {/* Highlight Total */}
            <div className="w-full bg-blue-900 text-white rounded-lg p-5 shadow-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">{t("Total Price")}</span>
                <span className="text-2xl font-bold">Ksh.{finalPrice}</span>
              </div>
            </div>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Check-In")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.checkIn}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Check-Out")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.checkOut}</span>
            </p>

            <p className="flex w-full items-center justify-between bg-slate-50 dark:bg-slate-800 py-4 px-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="font-bold text-gray-700 dark:text-gray-200">{t("Booked At")}</span>
              <span className="font-semibold text-gray-600 dark:text-gray-300">{booking.bookedAt}</span>
            </p>
          </div>

          <button
            onClick={downloadReceipt}
            className="mt-6 w-full bg-blue-900 hover:bg-blue-700 transition-all duration-300 text-white py-4 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <Download size={18} />
            {t("Download Receipt")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;