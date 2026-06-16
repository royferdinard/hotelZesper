import React from "react";
import { useTranslation } from 'react-i18next';
//import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Clock } from "lucide-react";

const Location = () => {

  const { t, i18n } = useTranslation();

  return (
    <>
      {/* LOCATION SECTION */}
      <section className="py-8 px-4 md:px-4 bg-gray-100 dark:bg-slate-800">
        <div className="">
          <h1 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">
            {t("Find Us")}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            {t("Discover our location and contact information to reach us easily.")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full dark:bg-slate-900 md:flex-row md:items-start bg-white dark:border dark:border-slate-700 rounded-md shadow-sm hover:shadow-md overflow-hidden">

          {/* LEFT SIDE */}
          <div className="w-full md:w-[40%] bg-blue-950 dark:bg-slate-900 p-4 rounded-none md:p-8 overflow-hidden">

            <h1 className="text-xl font-bold font-sans text-white dark:text-white">
              {t("Get In Touch")}
            </h1>

            <p className="text-sm text-gray-300 dark:text-gray-400 font-sans">
              {t("Have a question or need help, contact us in the links below.")}
            </p>

            <div className="flex flex-col flex-nowrap items-center justify-center w-full py-4 gap-4">

              {/* LOCATION */}
              <div className="w-full flex dark:bg-slate-800 dark:border dark:border-slate-700 flex-row flex-nowrap items-center justify-start gap-4 bg-transparent p-2 rounded-md hover:translate-x-1 transition-all duration-300">
                <span className="flex flex-col dark:bg-slate-900 flex-nowrap items-center justify-center bg-white dark:bg-slate-700 text-blue-950 dark:text-white rounded-[50%] w-9 h-9">
                  <MapPin size={17} />
                </span>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-md font-bold text-white dark:text-white">
                    {t("Location")}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-sm">
                    {t("Migori-Rongo sub County, Kenya")}
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="w-full flex dark:bg-slate-800 dark:border dark:border-slate-700 flex-row flex-nowrap items-center justify-start gap-4 bg-transparent p-2 rounded-md hover:translate-x-1 transition-all duration-300">
                <span className="flex flex-col dark:bg-slate-900 flex-nowrap items-center justify-center bg-white dark:bg-slate-700 text-blue-950 dark:text-white rounded-[50%] w-9 h-9">
                  <Phone size={17} />
                </span>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-md font-bold text-white dark:text-white">
                    {t("Phone")}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-sm">
                    +254 706 145498
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="w-full flex dark:bg-slate-800 dark:border dark:border-slate-700 flex-row flex-nowrap items-center justify-start gap-4 bg-transparent p-2 rounded-md hover:translate-x-1 transition-all duration-300">
                <span className="flex flex-col dark:bg-slate-900 flex-nowrap items-center justify-center bg-white dark:bg-slate-700 text-blue-900 dark:text-white rounded-[50%] w-9 h-9">
                  <Mail size={17} />
                </span>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-md font-bold text-white dark:text-white">
                    {t("Email")}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-sm">
                    edulibrary2026@gmail.com
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="w-full flex dark:bg-slate-800 dark:border dark:border-slate-700 flex-row flex-nowrap items-center justify-start gap-4 bg-transparent p-2 rounded-md hover:translate-x-1 transition-all duration-300">
                <span className="flex flex-col dark:bg-slate-900 flex-nowrap items-center justify-center bg-white text-blue-900 dark:text-white rounded-[50%] w-9 h-9">
                  <Clock size={17} />
                </span>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-md font-bold text-white dark:text-white">
                    {t("Hours")}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 text-sm">
                    {t("24/7 Borrowers Support")}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="w-full bg-white dark:bg-slate-900 p-2 rounded-md md:h-113 h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.000542127652!2d34.75949743748834!3d-0.6707191704657999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3bd105df4633%3A0xa5a04e5e02e1654d!2sHOTEL%20ZESPER!5e1!3m2!1sen!2ske!4v1777382048522!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
};

export default Location;