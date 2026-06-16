import React from 'react'
import { useTranslation } from 'react-i18next';
import ReuseableHero from './reusableHero'
import image1 from '../../assets/checking.webp'

function HelpHero() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <ReuseableHero image={image1}>
        <h1 className="text-white text-2xl md:text-3xl font-bold"><span>{t('Help')}</span> <span className="text-blue-600">{t('Center')}</span></h1>
        <p className='text-white text-sm text-center'>{t('Find answers or download our full services guide')}</p>
      </ReuseableHero>
    </>
  )
}

export default HelpHero