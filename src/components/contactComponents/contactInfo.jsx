import { Clock, Mail, MapIcon, MapPin, Phone } from "lucide-react";
import React from "react";
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {

  const { t } = useTranslation();

  const infos = [
    {
      title: "Location",
      value: "Kisii-Nyanchwa Sub County, Kenya",
      icon: <MapPin size={18} />
    },
    {
      title: "Phone",
      value: "+254 739 279531",
      icon: <Phone size={18} />
    },
    {
      title: "Email",
      value: "hotelZesper@gmail.com",
      icon: <Mail size={18} />
    },
    {
      title: "Hours",
      value: "24/7 Customer Support",
      icon: <Clock size={18} />
    },
  ]

  return (
    <>
      {/* Contact Info */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-sm md:h-180 shadow-sm border border-gray-100 dark:border-slate-700 w-full">

        <h2 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-white">
          {t("Get In Touch")}
        </h2>

        <p className="text-gray-500 dark:text-slate-100 mt-1 mb-3 text-sm">
          {t("Have a question or need assistance? We’re here to help.")}
        </p>

        <div className="flex items-start flex-col justify-start w-full gap-4">

          {infos.map((info, index) => (
            <div
              key={index}
              className="flex gap-4 w-full py-3 px-2 rounded-sm hover:bg-gray-50 dark:hover:bg-slate-950 transition items-center justify-start bg-white dark:bg-slate-950 dark:border-slate-700 dark:border shadow-sm"
            >
              <div className="w-10 h-10 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-gray-100 font-bold">
                {info.icon}
              </div>

              <div>
                <h3 className="font-semibold text-sm text-blue-900 dark:text-gray-100">
                  {t(info.title)}
                </h3>

                <p className="text-gray-600 dark:text-slate-400 text-xs">
                  {t(info.value)}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default ContactInfo