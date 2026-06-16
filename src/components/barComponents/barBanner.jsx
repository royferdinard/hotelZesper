import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../button";
import { jsPDF } from 'jspdf'
import Drinks from "./drinkStore";
function BarBanner() {
  const { t } = useTranslation();

  const downloadPDF = async () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(22);
    doc.text("Hotel Zesper Drink Menu", 55, 20);

    doc.setFontSize(12);
    doc.text("Premium Drinks & Refreshments", 65, 30);

    let yPosition = 40;

    for (const drink of Drinks) {
      // Convert image to Base64
      const imgData = await getBase64Image(drink.image);

      // Add image
      doc.addImage(imgData, "JPEG", 15, yPosition, 40, 35);

      // Drink Name
      doc.setFontSize(16);
      doc.text(drink.head, 65, yPosition + 8);

      // Category
      doc.setFontSize(11);
      doc.text(`Category: ${drink.category}`, 65, yPosition + 16);

      // Description
      doc.setFontSize(10);

      const splitDescription = doc.splitTextToSize(
        drink.description,
        120
      );

      doc.text(splitDescription, 65, yPosition + 24);

      // Price
      doc.setFontSize(12);
      doc.text(`Price: Ksh ${drink.price}`, 65, yPosition + 48);

      // Space between drinks
      yPosition += 65;

      // Create new page if content exceeds page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
    }

    // Save PDF
    doc.save("hotel-zesper-drink-menu.pdf");
  };

  // Convert image to base64
const getBase64Image = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL("image/jpeg");
      resolve(dataURL);
    };

    img.onerror = (error) => reject(error);
  });
};

  return (
    <section className="px-4 py-8 transition-colors duration-300 dark:bg-slate-900">

      {/* MAIN CARD */}
      <div className="w-full p-5 bg-white dark:bg-slate-900 dark:border dark:border-slate-700 rounded-md shadow-sm dark:shadow-slate-800/40 transition-all duration-300">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-3">

          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold flex items-center gap-2 text-blue-950 dark:text-blue-300">
              🍹 {t("Drink Rewards Program")}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t("Earn points every time you order drinks and unlock free rewards.")}
            </p>
          </div>

          <Button
            backgroundColor={"bg-blue-600 dark:bg-blue-500"}
            borderColor={"border-blue-600 dark:border-blue-500"}
            textColor={"text-white"}
            onClick={downloadPDF}
          >
            <span>{t("Download menu")}</span>
          </Button>
        </div>

        {/* CONTENT GRID */}
        <div className="flex flex-col md:flex-row gap-6 mt-4">

          {/* HOW IT WORKS */}
          <div className="flex-1 bg-blue-50 dark:bg-slate-800 dark:border dark:border-slate-700 p-4 rounded-md transition-colors duration-300">

            <h3 className="font-semibold text-blue-950 dark:text-blue-300">
              {t("How it works")}
            </h3>

            <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              <li>{t("✔ Every drink earns points")}</li>
              <li>{t("✔ 100 points = free cocktail")}</li>
              <li>{t("✔ VIP members get double points")}</li>
            </ul>

          </div>

          {/* STATUS */}
          <div className="flex-1 bg-green-50  dark:bg-slate-800 dark:border dark:border-slate-700 p-4 rounded-md transition-colors duration-300">

            <h3 className="font-semibold text-blue-950 dark:text-blue-300">
              {t("Your Status")}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {t("Guest Member")}
            </p>

            {/* PROGRESS BAR */}
            <div className="mt-3 bg-gray-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div className="bg-green-500 h-2 w-1/3 rounded-full transition-all duration-300"></div>
            </div>

            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              {t("33/100 points to next reward")}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default BarBanner;