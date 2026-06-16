import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../button'
import {jsPDF} from 'jspdf';
import Services from './spaStore';

function SpaBanner() {

  const { t, i18n } = useTranslation();
  const downloadSpaPDF = async () => {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(22);
  doc.text("Hotel Zesper Spa Menu", 60, 20);

  doc.setFontSize(12);
  doc.text(
    "Luxury Wellness & Relaxation Services",
    50,
    30
  );

  let yPosition = 40;

  for (const service of Services) {
    // Load image
    const imgData = await getBase64Image(service.image);

    // Add service image
    doc.addImage(
      imgData,
      "JPEG",
      15,
      yPosition,
      40,
      35
    );

    // Service Name
    doc.setFontSize(16);
    doc.text(service.head, 65, yPosition + 8);

    // Category
    doc.setFontSize(11);
    doc.text(
      `Category: ${service.category}`,
      65,
      yPosition + 16
    );

    // Duration
    doc.text(
      `Duration: ${service.duration} mins`,
      65,
      yPosition + 24
    );

    // Description
    doc.setFontSize(10);

    const splitDescription = doc.splitTextToSize(
      service.description,
      120
    );

    doc.text(
      splitDescription,
      65,
      yPosition + 32
    );

    // Price
    doc.setFontSize(12);
    doc.text(
      `Price: Ksh ${service.price}`,
      65,
      yPosition + 50
    );

    // Space between services
    yPosition += 70;

    // New page if full
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
  }

  // Save PDF
  doc.save("hotel-zesper-spa-menu.pdf");
};

// Convert image URL to base64
const getBase64Image = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas =
        document.createElement("canvas");

      const ctx =
        canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const dataURL =
        canvas.toDataURL("image/jpeg");

      resolve(dataURL);
    };

    img.onerror = (error) =>
      reject(error);
  });
};

  return (
    <>
      <div className="px-4 py-8 dark:bg-slate-900">

        {/* SPA WELLNESS SECTION */}
        <div className="w-full p-4 bg-white dark:bg-slate-900 dark:border dark:border-slate-700 rounded-md shadow-sm">
          <div className="flex flex-col items-start justify-start py-3 gap-4 md:flex-row md:items-start md:justify-between">

            <div className="flex flex-col items-start justify-start gap-0.5">
              <h2 className="text-xl font-bold flex items-center gap-2 text-blue-950 dark:text-blue-300">
                💆 {t("Luxury Spa Experience")}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Relax your body and mind with soothing spa treatments designed for wellness and comfort.")}
              </p>
            </div>

            <Button
              backgroundColor={'bg-blue-600 dark:bg-blue-700'}
              borderColor={'border-blue-600 dark:border-blue-700'}
              textColor={'text-white'}
              onClick={downloadSpaPDF}
            >
              <span>{t("Download Services")}</span>
            </Button>

          </div>

          <div className="flex flex-col md:flex-row gap-6">

            {/* Spa Services */}
            <div className="flex-1 bg-blue-50 dark:bg-gray-800 dark:border dark:border-slate-700 p-4 rounded-md">
              <h3 className="font-semibold text-blue-950 dark:text-blue-300">
                {t("Spa Services")}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>{t("✔ Relaxing full-body massage")}</li>
                <li>{t("✔ Facial & skincare treatments")}</li>
                <li>{t("✔ Aromatherapy & wellness sessions")}</li>
              </ul>
            </div>

            {/* Guest Relaxation */}
            <div className="flex-1 bg-green-50 dark:bg-gray-800 dark:border dark:border-slate-700 p-4 rounded-md">
              <h3 className="font-semibold text-blue-950 dark:text-blue-300">
                {t("Wellness Benefits")}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {t("Rejuvenate your body, reduce stress, and enjoy complete relaxation.")}
              </p>

              <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div className="bg-green-500 h-2 w-4/5 rounded-full"></div>
              </div>

              <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                {t("80% relaxation guaranteed ✨")}
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default SpaBanner