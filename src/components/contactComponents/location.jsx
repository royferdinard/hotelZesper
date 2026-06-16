import React from 'react'
import { useTranslation } from 'react-i18next';

function ContactLocation() {

  const { t } = useTranslation();

  return (
    <>
      <section className="bg-gray-50 dark:bg-slate-800 py-4">
        <div className="w-full px-4">

          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-600">
              {t("Our Location")}
            </h2>

            <p className="text-gray-600 dark:text-slate-100 mt-1 text-sm">
              {t("Find us on the map below")}
            </p>
          </div>

          <div className="rounded-md overflow-hidden dark:border dark:border-slate-700 shadow-sm p-2 h-96 bg-white dark:bg-slate-900 border border-gray-100 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.000542127652!2d34.75949743748834!3d-0.6707191704657999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3bd105df4633%3A0xa5a04e5e02e1654d!2sHOTEL%20ZESPER!5e1!3m2!1sen!2ske!4v1777382048522!5m2!1sen!2ske"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              title="Hotel Zesper Location"
              className='w-full h-full object-cover'
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactLocation