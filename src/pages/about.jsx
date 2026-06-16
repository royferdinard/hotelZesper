import React from 'react'
import { useTranslation } from 'react-i18next';
import ReuseableHero from '../components/hero/reusableHero'
import Story from '../components/aboutComponents/story'
import Reason from '../components/aboutComponents/reason'
import Leadership from '../components/aboutComponents/leadership'
import Location from '../components/aboutComponents/location'
import Footer from '../components/footer'
import image1 from '../assets/abouImage.avif'

function About() {

    const { t, i18n } = useTranslation();

  return (
    <>
      <ReuseableHero image={image1}>
        <h1 className='text-white text-2xl md:text-3xl font-bold text-center mb-1'>
          <span>{t("About")}</span>{" "}
          <span className="text-blue-500">
            {t("Zesper")}
          </span>
        </h1>

        <p className='text-sm text-white'>
          {t("Discover comfort and luxury at our hotel, where every stay feels special.")}
        </p>
      </ReuseableHero>

      <Story />
      <Reason />
      <Leadership />
      <Location />
      <Footer />
    </>
  )
}

export default About