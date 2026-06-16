import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { House, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";

const DrinkReceipt = () => {

    const { t, i18n } = useTranslation();

    const [booking, setBooking] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("drinkBooking"));
        setBooking(data);
    }, []);

    const finalPrice =
        (booking?.drink?.price || 0) * (booking?.guests || 1);

//     const downloadReceipt = () => {
//         const text = `
// DRINK ORDER RECEIPT

// Order ID: ${booking.id}
// Name: ${booking.fullName}
// Email: ${booking.email}
// Phone: ${booking.phone}

// Drink: ${booking.drink.name}
// Price per item: ${booking.drink.price}

// Quantity: ${booking.guests}
// Payment Method: ${booking.paymentMethod}

// Check-in: ${booking.checkIn}
// Check-out: ${booking.checkOut}

// Total: ${finalPrice}

// Ordered At: ${booking.bookedAt}

// Thank you for ordering with us!
//         `;

//         const blob = new Blob([text], { type: "text/plain" });
//         const url = URL.createObjectURL(blob);

//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "drink-receipt.txt";
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
        t("DRINK ORDER RECEIPT"),
        20,
        20
    );

    doc.setFontSize(12);

    doc.text(
        `${t("Order ID")}: #${booking.id}`,
        20,
        30
    );

    // RESET TEXT COLOR
    doc.setTextColor(0, 0, 0);

    let y = 55;

    // RECEIPT DATA
    const receiptData = [
        [t("Name"), booking.fullName],
        [t("Email"), booking.email],
        [t("Phone"), booking.phone],
        [t("Drink"), booking.drink.name],
        [
            t("Price per Item"),
            `Ksh ${booking.drink.price}`,
        ],
        [t("Quantity"), booking.guests],
        [
            t("Payment Method"),
            booking.paymentMethod,
        ],
        [t("Check In"), booking.checkIn],
        [t("Check Out"), booking.checkOut],
        [t("Ordered At"), booking.bookedAt],
    ];

    receiptData.forEach(([label, value]) => {
        // BOX
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
            80,
            y + 1
        );

        y += 16;
    });

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

    // THANK YOU MESSAGE
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
            "Thank you for ordering with us!"
        ),
        55,
        y + 38
    );

    // DOWNLOAD PDF
    doc.save(
        "drink-order-receipt.pdf"
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
                        {t("No Drink Order Found")}
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 px-4 md:w-[60%]">
                        {t("You have not ordered any drink yet.")}
                    </p>

                    <Link
                        to={"/drinks"}
                        className="mt-6 bg-blue-600 px-6 py-3 rounded-xl text-white hover:bg-blue-700 transition-all duration-300 shadow-md"
                    >
                        {t("Back To Drinks")}
                    </Link>
                </div>
            ) : (
                /* CARD */
                <div className="w-full md:max-w-4xl bg-white dark:bg-slate-900 shadow-sm rounded-lg overflow-hidden border border-gray-100 dark:border-slate-700">

                    {/* HEADER */}
                    <div className="bg-blue-900 text-white p-8 relative">

                        <h1 className="text-2xl font-bold tracking-wide">
                            {t("Drink Receipt")}
                        </h1>

                        <p className="text-sm text-blue-100 mt-2">
                            {t("Order ID")}: <span className="font-semibold">#{booking.id}</span>
                        </p>

                        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Name")}</span>
                            <span>{booking.fullName}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Email")}</span>
                            <span className="break-all">{booking.email}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Phone")}</span>
                            <span>{booking.phone}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Drink")}</span>
                            <span>{booking.drink.name}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Price")}</span>
                            <span>Ksh {booking.drink.price}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Quantity")}</span>
                            <span>{booking.guests}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Payment Method")}</span>
                            <span className="uppercase">{booking.paymentMethod}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Check In")}</span>
                            <span>{booking.checkIn}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                            <span className="font-semibold">{t("Check Out")}</span>
                            <span>{booking.checkOut}</span>
                        </div>

                        <div className="flex justify-between bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 md:col-span-2">
                            <span className="font-semibold">{t("Ordered At")}</span>
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

export default DrinkReceipt;