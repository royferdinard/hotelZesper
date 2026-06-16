import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { House, Download } from "lucide-react";
import { Link } from "react-router-dom";
import {jsPDF} from 'jspdf'
const EventReceipt = () => {

    const { t, i18n } = useTranslation();

    const [booking, setBooking] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("eventBooking"));
        setBooking(data);
    }, []);

    if (!booking) {
        return (
            <div className="w-full h-screen flex items-center justify-center flex-col bg-gray-100 dark:bg-slate-900">
                <div className="w-14 h-14 rounded-full shadow-sm flex items-center justify-center bg-blue-600 text-white animate-bounce">
                    <House />
                </div>

                <h2 className="text-2xl text-gray-600 dark:text-gray-200 font-bold mt-4">
                    {t("No Event Booking Found")}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 px-4 md:w-[60%]">
                    {t("You have not booked any event yet.")}
                </p>

                <Link
                    to={"/events"}
                    className="mt-4 bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-800"
                >
                    {t("Back To Events")}
                </Link>
            </div>
        );
    }

    const finalPrice =
        (booking?.event?.price || 0) * (booking?.guests || 1);

//     const downloadReceipt = () => {
//         const text = `
// ${t("EVENT BOOKING RECEIPT")}

// ${t("Booking ID")}: ${booking.id}
// ${t("Name")}: ${booking.fullName}
// ${t("Email")}: ${booking.email}
// ${t("Phone")}: ${booking.phone}

// ${t("Event")}: ${booking.event.name}
// ${t("Price per ticket")}: ${booking.event.price}

// ${t("Guests")}: ${booking.guests}
// ${t("Payment Method")}: ${booking.paymentMethod}

// ${t("Check-in")}: ${booking.checkIn}
// ${t("Check-out")}: ${booking.checkOut}

// ${t("Total")}: ${finalPrice}

// ${t("Booked At")}: ${booking.bookedAt}

// ${t("Thank you for booking with us!")}
//         `;

//         const blob = new Blob([text], { type: "text/plain" });
//         const url = URL.createObjectURL(blob);

//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "event-receipt.txt";
//         a.click();
//     };

const downloadReceipt = () => {
    const doc = new jsPDF();

    // HEADER
    doc.setFillColor(30, 64, 175);
    doc.rect(0, 0, 210, 40, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text(
        t("EVENT BOOKING RECEIPT"),
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
    doc.setTextColor(0, 0, 0);

    // CONTENT
    let y = 55;

    const receiptData = [
        [t("Name"), booking.fullName],
        [t("Email"), booking.email],
        [t("Phone"), booking.phone],
        [t("Event"), booking.event.name],
        [
            t("Price per Ticket"),
            `Ksh ${booking.event.price}`,
        ],
        [t("Guests"), booking.guests],
        [
            t("Payment Method"),
            booking.paymentMethod,
        ],
        [t("Check In"), booking.checkIn],
        [t("Check Out"), booking.checkOut],
        [t("Booked At"), booking.bookedAt],
    ];

    receiptData.forEach(([label, value]) => {
        // Label Box
        doc.setFillColor(240, 244, 248);
        doc.roundedRect(
            15,
            y - 6,
            180,
            12,
            2,
            2,
            "F"
        );

        doc.setFontSize(11);
        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.text(
            `${label}:`,
            20,
            y + 1
        );

        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.text(
            `${value}`,
            80,
            y + 1
        );

        y += 16;
    });

    // TOTAL SECTION
    doc.setFillColor(30, 64, 175);

    doc.roundedRect(
        15,
        y + 5,
        180,
        18,
        3,
        3,
        "F"
    );

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.text(
        t("Total Amount"),
        20,
        y + 17
    );

    doc.text(
        `Ksh ${finalPrice}`,
        150,
        y + 17
    );

    // THANK YOU MESSAGE
    doc.setTextColor(80, 80, 80);
    doc.setFontSize(11);
    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.text(
        t(
            "Thank you for booking with us!"
        ),
        55,
        y + 38
    );

    // DOWNLOAD
    doc.save(
        "event-booking-receipt.pdf"
    );
};

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4 pt-24">

            {/* EMPTY STATE */}
            {!booking ? (
                <div className="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-br from-gray-100 to-blue-50 dark:from-slate-900 dark:to-slate-800">

                    <div className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white animate-bounce">
                        <House />
                    </div>

                    <h2 className="text-2xl text-gray-700 dark:text-gray-200 font-bold mt-4">
                        {t("No Event Booking Found")}
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 px-4 md:w-[60%]">
                        {t("You have not booked any event yet.")}
                    </p>

                    <Link
                        to={"/events"}
                        className="mt-6 bg-blue-600 px-6 py-3 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 shadow-md"
                    >
                        {t("Back To Events")}
                    </Link>
                </div>
            ) : (
                /* CARD */
                <div className="w-full md:max-w-4xl bg-white dark:bg-slate-900 shadow-sm rounded-lg overflow-hidden border border-gray-100 dark:border-slate-700">

                    {/* HEADER */}
                    <div className="bg-blue-900 text-white p-8 relative">

                        <h1 className="text-2xl font-bold tracking-wide">
                            {t("Event Receipt")}
                        </h1>

                        <p className="text-sm text-blue-100 mt-2">
                            {t("Booking ID")}: <span className="font-semibold">#{booking.id}</span>
                        </p>

                        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Name")}</span>
                            <span className="font-medium">{booking.fullName}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Email")}</span>
                            <span className="font-medium break-all">{booking.email}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Phone")}</span>
                            <span className="font-medium">{booking.phone}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Event")}</span>
                            <span className="font-medium">{booking.event.name}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Price")}</span>
                            <span className="font-medium">Ksh {booking.event.price}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Guests")}</span>
                            <span className="font-medium">{booking.guests}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Payment Method")}</span>
                            <span className="uppercase font-medium">{booking.paymentMethod}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Check In")}</span>
                            <span className="font-medium">{booking.checkIn}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Check Out")}</span>
                            <span className="font-medium">{booking.checkOut}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border-gray-200 dark:border-slate-700 border md:col-span-2">
                            <span className="font-semibold text-gray-600 dark:text-gray-300">{t("Booked At")}</span>
                            <span className="font-medium">{booking.bookedAt}</span>
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

export default EventReceipt;