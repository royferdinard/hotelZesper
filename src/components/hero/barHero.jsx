import React from 'react'
import { useTranslation } from 'react-i18next';
import ReuseableHero from './reusableHero'
import barImage from '../../assets/lounge-hotelzesper2.webp'

function BarHero() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <ReuseableHero image={barImage}>
        <h1 className="text-2xl font-bold md:text-3xl text-white">
          {t("Our")} <span className="text-blue-500">{t("Bar")}</span>
        </h1>
        <p className='text-white '>{t(' Explore cocktails, wines & exclusive drinks')}</p>
      </ReuseableHero>
    </>
  )
}

export default BarHero
