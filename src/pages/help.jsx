import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import jsPDF from "jspdf";
import ReuseableHero from "../components/hero/reusableHero";
import HelpHero from "../components/hero/helpHero";
import HelpBanner from "../components/helpComponents/helpBanner";
import FaqData from "../components/helpComponents/helpStore";
import Footer from "../components/footer";

const categories = ["All", "Booking", "Payments", "Support", "Account"];

const HelpPage = () => {

  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const [openId, setOpenId] = useState(null);

  // ✅ DARK MODE ADDED (NEW)
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // FILTER FAQ
  let filtered = FaqData.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // SORT
  if (sort === "a-z") {
    filtered.sort((a, b) => a.question.localeCompare(b.question));
  } else if (sort === "z-a") {
    filtered.sort((a, b) => b.question.localeCompare(a.question));
  }

  // PDF DOWNLOAD
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Hotel Services Guide", 20, 20);

    let y = 40;

    const services = [
      "Spa & Wellness Treatments",
      "Luxury Bar & Drinks",
      "Room Booking Services",
      "Restaurant & Dining",
      "Event & Conference Booking",
    ];

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    doc.text("Available Services:", 20, y);
    y += 10;

    services.forEach((s, i) => {
      doc.text(`${i + 1}. ${s}`, 20, y);
      y += 10;
    });

    doc.save("services-guide.pdf");
  };

  // TOGGLE FAQ
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <HelpHero />
      <HelpBanner downLoad={downloadPDF} />

      {/* DARK MODE WRAPPER (classes added, no removal) */}
      <div className={''}>

        <div className={`w-full bg-gray-50 dark:bg-gray-800 px-4 py-4`}>

          {/* FILTER BAR */}
          <div className=" w-full rounded-md bg-white dark:bg-gray-900 dark:border dark:border-slate-700 px-4 py-4 shadow-sm flex flex-col md:flex-row gap-4 justify-center items-center md:items-start md:justify-between">

            <input
              type="text"
              placeholder={t("Search FAQs...")}
              className="w-full md:w-1/3 p-3 border rounded-lg border-gray-200 bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-white text-sm placeholder:text-gray-400 outline-none md:h-19 md:w-[40%]  dark:border-slate-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          
            <div className="flex gap-2 flex-col items-start justify-start bg-gray-50 dark:bg-gray-900 py-4 px-2 rounded-md border border-gray-200 w-full md:flex-row md:gap-5 md:h-19 md:items-center md:justify-center md:w-[40%] dark:border-slate-700">

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className="flex flex-row items-center justify-between gap-2"
                >
                  <span
                    className={`w-4 h-4 border bg-white shadow-sm flex flex-col items-center justify-center rounded-full transition-all duration-300
        ${category === cat
                        ? "border-blue-600"
                        : "border-gray-600"
                      }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300
          ${category === cat
                          ? "bg-blue-600"
                          : "bg-gray-600"
                        }`}
                    ></span>
                  </span>

                  <span
                    className={`transition-all duration-300 text-sm hover:text-blue-600 font-semibold
        ${category === cat
                        ? "text-blue-600"
                        : "text-gray-600 dark:text-gray-200"
                      }`}
                  >
                    {t(cat)}
                  </span>
                </button>
              ))}

              

            </div>

            <div className="w-full flex items-start justify-start gap-2 flex-col bg-gray-50 dark:bg-gray-900 px-3 py-3 rounded-md border border-gray-200 md:w-[20%] dark:border-slate-700">
              <h6 className="text-gray-600 dark:text-gray-200 text-sm font-bold md:hidden">
                {t("Sort")}
              </h6>
              <select
                className="p-3 border rounded-md border-gray-200 outline-none bg-white dark:bg-gray-900 dark:text-white dark:border-slate-700 w-full text-gray-500"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">{t("Sort FAQs")}</option>
                <option value="a-z">{t("A → Z")}</option>
                <option value="z-a">{t("Z → A")}</option>
              </select>
            </div>

          </div>

        </div>

        {/* FAQ LIST (ACCORDION) */}
        <div className="w-full mx-auto px-4 md:px-20 py-8 flex flex-col items-center justify-center gap-4 dark:bg-slate-800">

          {filtered.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-900 dark:border dark:border-slate-700 rounded-md shadow transition w-full overflow-hidden"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`w-full flex justify-between items-center p-5 text-left
                ${openId === faq.id ? "bg-blue-900" : "bg-white dark:bg-gray-900"}
                `}
              >
                <h3 className={`font-semibold text-sm md:text-md text-gray-800 dark:text-white
                ${openId === faq.id ? "text-white" : "text-blue-900 dark:text-white"}
                `}>
                  {t(faq.question)}
                </h3>

                <span className={`text-sm md:text-lg font-bold text-blue-900
                 ${openId === faq.id ? "text-white" : "text-blue-900 dark:text-white"}
                `}>
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {openId === faq.id && (
                <div className="px-5 pb-5 pt-4 text-gray-600 dark:text-gray-200 border-t border-gray-200 text-xs md:text-sm dark:bg-slate-900">
                  {t(faq.answer)}

                  <div className="mt-2 text-sm text-blue-600">
                    {t(faq.category)}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
              {t("No FAQs found.")}
            </p>
          )}
        </div>

        <Footer />

      </div>
    </>
  );
};

export default HelpPage;