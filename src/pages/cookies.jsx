import React from "react";
import { useTranslation } from 'react-i18next';
import Footer from "../components/footer";
import { useEffect } from "react";

const sections = [
  {
    id: "section1",
    title: "Introduction",
    content: [
      "Hotel Zesper uses cookies and similar technologies to improve your browsing experience, personalize content, analyze website traffic, and provide better hospitality services.",

      "This Cookies Policy explains what cookies are, how we use them, and the choices available to you regarding their use.",

      "By continuing to browse hotelzesper.com, you consent to the use of cookies as described in this policy.",
    ],
  },

  {
    id: "section2",
    title: "What Are Cookies?",
    content: [
      "Cookies are small text files stored on your device when you visit a website. They help websites function efficiently and remember user preferences.",

      "Cookies may remember login information, booking preferences, browsing history, language settings, and other interactions to improve website performance.",
    ],
  },

  {
    id: "section3",
    title: "How We Use Cookies",
    content: [
      "Hotel Zesper uses cookies to improve website performance, personalize guest experiences, maintain secure sessions, and support reservation functionality.",

      "Cookies also help us analyze website traffic, understand guest interactions, and improve the quality of our services and digital experience.",
    ],
  },

  {
    id: "section4",
    title: "Types of Cookies We Use",
    content: [
      "Essential Cookies: Necessary for website functionality, secure navigation, and booking processes.",

      "Performance Cookies: Help us understand website usage, visitor behavior, and optimize performance.",

      "Functional Cookies: Remember guest preferences such as language, region, and booking settings.",

      "Marketing Cookies: Used to provide relevant promotions, advertisements, and personalized hotel offers.",
    ],
  },

  {
    id: "section5",
    title: "Third-Party Cookies",
    content: [
      "Some cookies may be placed by trusted third-party providers including analytics services, payment processors, booking platforms, and advertising partners.",

      "These providers may collect information in accordance with their own privacy and cookies policies.",
    ],
  },

  {
    id: "section6",
    title: "Managing Cookies",
    content: [
      "Most browsers allow you to manage, disable, or delete cookies through browser settings.",

      "Please note that disabling cookies may affect certain website features including reservation systems, saved preferences, and personalized experiences.",
    ],
  },

  {
    id: "section7",
    title: "Data Collected Through Cookies",
    content: [
      "Cookies may collect information such as browser type, device information, IP address, session duration, visited pages, and interaction behavior.",

      "This information is primarily used to improve website usability, performance, and guest experiences.",
    ],
  },

  {
    id: "section8",
    title: "Changes to This Cookies Policy",
    content: [
      "Hotel Zesper reserves the right to update this Cookies Policy periodically to reflect operational, legal, or technological changes.",

      "Updated versions will be published on this page with a revised 'Last Updated' date.",
    ],
  },

  {
    id: "section9",
    title: "Contact Information",
    content: [
      "If you have questions regarding our use of cookies or this Cookies Policy, please contact us.",

      "Email: support@hotelzesper.com",
      "Phone: +254 XXX XXX XXX",
      "Address: Hotel Zesper, Nairobi, Kenya",
    ],
  },
];

const CookiesPolicy = () => {

  const { t, i18n } = useTranslation();
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
  let attempts = 0;
  const maxAttempts = 10;

  const tryScroll = () => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return true;
    }

    return false;
  };

  const interval = setInterval(() => {
    attempts++;

    const success = tryScroll();

    if (success || attempts >= maxAttempts) {
      clearInterval(interval);
    }
  }, 200);

  const handleHashChange = () => tryScroll();

  window.addEventListener("hashchange", handleHashChange);

  return () => {
    clearInterval(interval);
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);

  return (
    <>
      <div className="bg-linear-to-b from-slate-100 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen py-8 px-4 md:px-4 pt-25">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">

          {/* SIDEBAR */}
          <aside className="lg:w-[320px] lg:sticky lg:top-24 h-fit">

            <div className="bg-white dark:bg-gray-900 rounded-md border border-slate-200 dark:border-gray-700 shadow-sm overflow-hidden">

              {/* HEADER */}
              <div className="bg-blue-900 p-6 text-white">
                <p className="uppercase tracking-[3px] text-sm text-blue-200">
                  {t("Hotel Zesper")}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {t("Cookies Policy")}
                </h2>

                <p className="text-blue-100 text-sm mt-3 leading-6">
                  {t("Learn how Hotel Zesper uses cookies to improve your browsing experience and website functionality.")}
                </p>

                <p className="text-xs text-blue-200 mt-4">
                  {t("Last Updated: June 8, 2026")}
                </p>
              </div>

              {/* TABLE OF CONTENTS */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 dark:text-gray-200 mb-4">
                  {t("Table of Contents")}
                </h3>

                <ul className="space-y-2">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(section.id);
                        }}
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 p-3 rounded-xl transition hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-sm font-semibold group-hover:bg-blue-600 group-hover:text-white transition">
                          {index + 1}
                        </div>

                        <span className="text-sm text-slate-600 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                          {t(section.title)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

          {/* CONTENT */}
          <main className="flex-1">

            <div className="bg-white dark:bg-gray-900 rounded-md border border-slate-200 dark:border-gray-700 shadow-sm overflow-hidden">

              {/* HERO */}
              <div className="bg-blue-900 px-8 md:px-10 py-8 text-white">

                <p className="uppercase tracking-[4px] text-blue-200 text-sm">
                  {t("Legal Information")}
                </p>

                <h1 className="text-xl md:text-2xl font-bold mt-2 tracking-[1px]">
                  {t("Cookies Policy")}
                </h1>

                <p className="mt-2 text-blue-100 max-w-3xl tracking-[1px] text-sm leading-8">
                  {t("Hotel Zesper uses cookies and related technologies to enhance website performance, personalize guest experiences, analyze traffic, and improve our hospitality services.")}
                </p>

              </div>

              {/* POLICY CONTENT */}
              <div className="p-6 md:p-12 space-y-8">

                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 bg-slate-50 dark:bg-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700 p-6 md:p-8 hover:shadow-md transition"
                  >

                    {/* TITLE */}
                    <div className="flex gap-4 items-start mb-6">

                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                          {t(section.title)}
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-3"></div>
                      </div>

                    </div>

                    {/* PARAGRAPHS */}
                    <div className="space-y-5 md:ml-16">
                      {section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-slate-600 dark:text-gray-300 leading-8 text-sm md:text-base"
                        >
                          {t(paragraph)}
                        </p>
                      ))}
                    </div>

                  </section>
                ))}

              </div>

            </div>

          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CookiesPolicy;