import React from "react";
import { useTranslation } from 'react-i18next';
import ReuseableHero from "./reusableHero";
import callImage from "../../assets/hotelzesper-front1.webp";
import image from "../../assets/aboutimage.avif";

const ContactHero = () => {

  const { t, i18n } = useTranslation();

  return (
    <>
      <ReuseableHero image={image}>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="">{t('Contact')}</span> <span className="text-blue-400">Zesper</span>
        </h1>

        <p className="text-white mt-2 text-sm  leading-relaxed text-center">
          {t(' Have a question or need help with a booking, our team is always here to assist you.')}
        </p>
      </ReuseableHero>
    </>
  )
}

export default ContactHero