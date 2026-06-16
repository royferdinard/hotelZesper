import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

const sections = [
  {
    id: "section1",
    title: "Introduction",
    content: [
      "Welcome to Hotel Zesper. These Terms and Conditions govern your use of our website, services, and booking system.",

      "By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our services.",

      "These Terms apply to all visitors, guests, and users of Hotel Zesper’s online platform.",
    ],
  },

  {
    id: "section2",
    title: "Eligibility & Use of Website",
    content: [
      "You must be at least 18 years old or have legal guardian consent to use our booking services.",

      "You agree to use this website only for lawful purposes and in a way that does not violate the rights of others or restrict their use of the platform.",
    ],
  },

  {
    id: "section3",
    title: "Bookings & Reservations",
    content: [
      "All reservations are subject to availability and confirmation by Hotel Zesper.",

      "A booking is only considered valid once you receive a confirmation email or message from our system.",

      "We reserve the right to refuse or cancel bookings in cases of fraud, system errors, or policy violations.",
    ],
  },

  {
    id: "section4",
    title: "Pricing & Payments",
    content: [
      "All prices displayed are subject to change without prior notice until a booking is confirmed.",

      "Payment must be completed through approved and secure payment methods.",

      "Hotel Zesper is not responsible for charges incurred due to third-party payment providers.",
    ],
  },

  {
    id: "section5",
    title: "Cancellation & Refund Policy",
    content: [
      "Cancellations must be made within the allowed time frame to qualify for a refund.",

      "Late cancellations or no-shows may result in partial or full charges depending on the booking policy.",

      "Refunds, if applicable, will be processed using the original payment method.",
    ],
  },

  {
    id: "section6",
    title: "User Responsibilities",
    content: [
      "Users must provide accurate and complete information when making reservations.",

      "You are responsible for maintaining the confidentiality of your account and booking details.",

      "Any misuse of the platform may result in suspension or termination of access.",
    ],
  },

  {
    id: "section7",
    title: "Limitation of Liability",
    content: [
      "Hotel Zesper shall not be held liable for indirect, incidental, or consequential damages arising from the use of our services.",

      "We are not responsible for delays, interruptions, or failures caused by third-party systems or force majeure events.",
    ],
  },

  {
    id: "section8",
    title: "Changes to Terms",
    content: [
      "Hotel Zesper reserves the right to modify or update these Terms at any time without prior notice.",

      "Continued use of our services after changes are published means you accept the updated Terms.",
    ],
  },

  {
    id: "section9",
    title: "Contact Information",
    content: [
      "If you have any questions regarding these Terms and Conditions, you may contact us.",

      "Email: support@hotelzesper.com",
      "Phone: +254 XXX XXX XXX",
      "Address: Hotel Zesper, Nairobi, Kenya",
    ],
  },
];

const Terms = () => {

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
const location = useLocation();

useEffect(() => {
  const id = location.hash?.replace("#", "");
  if (!id) return;

  let attempts = 0;

  const tryScroll = () => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    if (attempts < 20) {
      attempts++;
      requestAnimationFrame(tryScroll);
    }
  };

  requestAnimationFrame(tryScroll);
}, [location.hash]);

  return (
    <>
      <div
        className="min-h-screen py-8 px-4 md:px-4 pt-25 transition-all duration-300 bg-gradient-to-b from-slate-100 to-white text-slate-800 dark:from-slate-900 dark:to-slate-900 dark:text-white"
      >

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">

          {/* SIDEBAR */}
          <aside className="lg:w-[320px] lg:sticky lg:top-24 h-fit">

            <div className="rounded-md border shadow-sm overflow-hidden bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700">

              {/* HEADER */}
              <div className="bg-blue-900 p-6 text-white">
                <p className="uppercase tracking-[3px] text-sm text-blue-200">
                  {t("Hotel Zesper")}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {t("Terms & Conditions")}
                </h2>

                <p className="text-blue-100 text-sm mt-3 leading-6">
                  {t("Please read these Terms carefully before using Hotel Zesper services and booking system.")}
                </p>

                <p className="text-xs text-blue-200 mt-4">
                  {t("Last Updated: June 8, 2026")}
                </p>
              </div>

              {/* TABLE OF CONTENTS */}
              <div className="p-5">
                <h3 className="font-semibold mb-4 text-slate-800 dark:text-white">
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
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition bg-slate-100 group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-700 dark:text-white dark:group-hover:bg-blue-600">
                          {index + 1}
                        </div>

                        <span className="text-sm transition text-slate-600 group-hover:text-blue-700 dark:text-slate-200 dark:group-hover:text-blue-300">
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

            <div className="rounded-md border shadow-sm overflow-hidden bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700">

              {/* HERO */}
              <div className="bg-blue-900 px-8 md:px-10 py-8 text-white">

                <p className="uppercase tracking-[4px] text-blue-200 text-sm">
                  {t("Legal Information")}
                </p>

                <h1 className="text-xl md:text-2xl font-bold mt-2 tracking-[1px]">
                  {t("Terms & Conditions")}
                </h1>

                <p className="mt-2 text-blue-100 max-w-3xl text-sm leading-8">
                  {t("These Terms and Conditions outline the rules, responsibilities, and policies governing the use of Hotel Zesper services, website, and booking platform.")}
                </p>

              </div>

              {/* TERMS CONTENT */}
              <div className="p-6 md:p-12 space-y-8">

                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 rounded-2xl border p-6 md:p-8 hover:shadow-md transition bg-slate-50 border-slate-100 dark:bg-slate-700 dark:border-slate-600"
                  >

                    {/* TITLE */}
                    <div className="flex gap-4 items-start mb-6">

                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
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
                          className="leading-8 text-sm md:text-base text-slate-600 dark:text-slate-200"
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

export default Terms;