import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "../button";
import { FaQuestion } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";

function HelpBanner({ downLoad }) {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="px-4 py-6 dark:bg-slate-900">

        <div className="w-full p-6 bg-white dark:bg-gray-900 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>
              <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
                <span className="flex items-center justify-center w-9 h-9 bg-blue-600 text-white rounded-full text-sm">
                  <FaQuestion />
                </span>
                <span>{t('Help & Support Center')}</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {t('Need assistance? Find answers to common questions, contact support, or learn how to use our platform.')}
              </p>
            </div>

            {/* Download PDF Button */}
            <Button
              onClick={downLoad}
              backgroundColor={'bg-blue-600'}
              borderColor={'border-blue-600'}
              textColor={'text-white'}
            >
              <span>{t('Download Services')}</span>
            </Button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FAQ Section */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-md border border-blue-100 dark:border-blue-800 hover:shadow-md transition">

              <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                📖 {t('Frequently Asked Questions')}
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                <li>{t('✔ How do I book a room?')}</li>
                <li>{t('✔ How can I cancel my reservation?')}</li>
                <li>{t('✔ How do I contact hotel support?')}</li>
                <li>{t('✔ How can I reset my password?')}</li>
              </ul>

              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                {t('View FAQs')}
              </button>
            </div>

            {/* Contact Support */}
            <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-md border border-green-100 dark:border-green-800 hover:shadow-md transition">

              <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="text-green-200 border border-white/30 rounded-full flex items-center justify-center w-8 h-8 bg-gray-50 dark:bg-gray-800">
                  <FaComment />
                </span>
                {t('Contact Support')}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                {t('Our support team is available 24/7 to assist you with bookings, account issues, and hotel services.')}
              </p>

              <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">

                <p className="flex flex-row items-start gap-2">
                  <Phone size={17} />
                  <span>+254 700 123 456</span>
                </p>

                <p className="flex flex-row items-start gap-2">
                  <Mail size={17} />
                  <span>support@hotelzesper.com</span>
                </p>

              </div>

              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                {t('Chat with Support')}
              </button>
            </div>

          </div>

          {/* Bottom Help Tip */}
          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-4 rounded-md">

            <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
              💡
              <span>
                {t('Tip: Check FAQs first for faster solutions.')}
              </span>
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default HelpBanner;