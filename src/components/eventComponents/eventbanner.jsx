import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../button'

  import { jsPDF } from "jspdf";
  import Events from './evntsStore';

function EventBanner() {

  const { t, i18n } = useTranslation();

const downloadEventsPDF = async () => {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(22);
  doc.text("Hotel Zesper Events Menu", 55, 20);

  doc.setFontSize(12);
  doc.text(
    "Luxury Events, Celebrations & Conferences",
    40,
    30
  );

  let yPosition = 40;

  for (const event of Events) {
    // Convert image to base64
    const imgData = await getBase64Image(
      event.image
    );

    // Add image
    doc.addImage(
      imgData,
      "JPEG",
      15,
      yPosition,
      40,
      35
    );

    // Event Name
    doc.setFontSize(16);
    doc.text(
      event.name,
      65,
      yPosition + 8
    );

    // Category
    doc.setFontSize(11);
    doc.text(
      `Category: ${event.category}`,
      65,
      yPosition + 16
    );

    // Description
    doc.setFontSize(10);

    const splitDescription =
      doc.splitTextToSize(
        event.description,
        120
      );

    doc.text(
      splitDescription,
      65,
      yPosition + 25
    );

    // Price
    doc.setFontSize(12);
    doc.text(
      `Price: Ksh ${event.price}`,
      65,
      yPosition + 50
    );

    // Space between events
    yPosition += 70;

    // Add new page if full
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
  }

  // Save PDF
  doc.save("hotel-zesper-events-menu.pdf");
};

// Convert image to base64
const getBase64Image = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.crossOrigin =
      "Anonymous";

    img.src = imageUrl;

    img.onload = () => {
      const canvas =
        document.createElement(
          "canvas"
        );

      const ctx =
        canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height =
        img.height;

      ctx.drawImage(img, 0, 0);

      const dataURL =
        canvas.toDataURL(
          "image/jpeg"
        );

      resolve(dataURL);
    };

    img.onerror = (error) =>
      reject(error);
  });
};

  return (
    <>
      <div className="px-4 py-8 dark:bg-slate-900">

        {/* EVENT & HOTEL SECTION */}
        <div className="w-full p-4 bg-white dark:bg-slate-900 rounded-md shadow-sm border border-gray-100 dark:border-slate-700">

          <div className="flex flex-col items-start justify-start py-3 gap-4 md:flex-row md:items-start md:justify-between">

            <div className="flex flex-col items-start justify-start gap-0.5">
              <h2 className="text-xl font-bold flex items-center gap-2 text-blue-950 dark:text-blue-300">
                🎉 {t("Premium Event & Conference Hosting")}
              </h2>

              <p className="text-gray-600 dark:text-slate-400 text-sm">
                {t("Host unforgettable events, weddings, meetings, and conferences in our elegant and fully equipped venues.")}
              </p>
            </div>

            <Button
              backgroundColor={'bg-blue-600 dark:bg-blue-500'}
              borderColor={'border-blue-600 dark:border-blue-500'}
              textColor={'text-white'}
              onClick={downloadEventsPDF}
            >
              <span>{t("Download Packages")}</span>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">

            {/* Event Services */}
            <div className="flex-1 bg-blue-50 dark:bg-slate-800 dark:border dark:border-slate-700 p-4 rounded-md">
              <h3 className="font-semibold text-blue-950 dark:text-blue-300">
                {t("Event Services")}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-slate-400 mt-2 space-y-1">
                <li>{t("Weddings & private celebrations")}</li>
                <li>{t("Corporate meetings & conferences")}</li>
                <li>{t("Banquets & gala dinners")}</li>
              </ul>
            </div>

            {/* Event Experience */}
            <div className="flex-1 bg-green-50 dark:bg-slate-800 dark:border dark:border-slate-700 p-4 rounded-md">
              <h3 className="font-semibold text-blue-950 dark:text-blue-300">
                {t("Event Experience")}
              </h3>

              <p className="text-gray-600 dark:text-slate-400 mt-2">
                {t("Create memorable moments with modern venues, professional planning, and premium hospitality.")}
              </p>

              <div className="mt-2 bg-gray-200 dark:bg-slate-700 h-2 rounded-full">
                <div className="bg-green-500 h-2 w-4/5 rounded-full"></div>
              </div>

              <p className="text-sm mt-2 text-gray-500 dark:text-slate-400">
                {t("100% seamless event execution ✨")}
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default EventBanner