import React from 'react'
import { useTranslation } from 'react-i18next';
import CallToAction from '../cta'
import callImage from "../../assets/hotelzesper-front1.webp";
import Button from '../button';

function ContactCta() {

  const { t } = useTranslation();

  return (
    <>
      <CallToAction>
        <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-white">
          {t("Ready to book your stay?")}
        </h2>

        <p className="text-gray-200 dark:text-slate-300 text-center mt-4 text-md">
          {t("Join hundreds of tourists who enjoy our luxury environment and premium hospitality.")}
        </p>

        <div className="flex flex-nowrap flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full ">

          <Button
            backgroundColor={'bg-blue-600'}
            borderColor={'border-blue-600'}
            textColor={'text-white'}
          >
            <span>{t("Book Now")}</span>
          </Button>

          <Button
            backgroundColor={'bg-white'}
            borderColor={'border-white'}
            textColor={'text-blue-600 '}
          >
            {t("View Rooms")}
          </Button>

        </div>
      </CallToAction>
    </>
  )
}

export default ContactCta