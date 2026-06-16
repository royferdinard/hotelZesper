import React from 'react'
import { useTranslation } from 'react-i18next';
import SpaHero from '../components/hero/spaHero'
import SpaBanner from '../components/spaComponents/spaBanner'
import SpaCategory from '../components/spaComponents/spaCategory'
import BestSpaServices from '../components/spaComponents/spaServices'
import Why from '../components/spaComponents/whySpa'
import CallToAction from '../components/cta'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

function Spa() {

    const { t, i18n } = useTranslation();

  return (
    <>
      <SpaHero />
      <SpaBanner />
      <SpaCategory />
      <BestSpaServices />
      <Why />
      
      <CallToAction>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t("Ready to Experience Pure Relaxation?")}
        </h3>

        <p className="text-gray-200 mb-6 text-center max-w-xl">
          {t("Book your spa session today and indulge in soothing treatments designed to restore your mind, body, and soul.")}
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col md:flex-row sm:flex-row gap-4 sm:gap-6 items-center justify-center">

          {/* Book Session Button */}
          <Link
            to="/booking"
            className="w-full md:w-40 h-10 md:h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base flex items-center justify-center border-2 border-blue-500"
          >
            {t("Book Session")}
          </Link>

          {/* Explore Services Button */}
          <Link
            to="/services"
            className="w-full md:w-40 h-10 md:h-12 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base border-2 border-white flex items-center justify-center"
          >
            {t("Explore Services")}
          </Link>
        </div>
      </CallToAction>

      <Footer />
    </>
  )
}

export default Spa