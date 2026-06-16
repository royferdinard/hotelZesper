import React from 'react'
import { useTranslation } from 'react-i18next';
import RoomHero from '../components/hero/roomHero'
import RoomsBanner from '../components/roomComponents/roomsBanner'
import FeaturedRoom from '../components/featuredRoom'
import RoomAmenity from '../components/roomComponents/roomAmenities'
import CallToAction from '../components/cta'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

function Rooms() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <RoomHero />
      <RoomsBanner />
      <FeaturedRoom />
      <RoomAmenity />

      <CallToAction>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t("Ready to Experience Luxury?")}
        </h3>

        <p className="text-gray-200 mb-6 text-center max-w-xl">
          {t("Book your stay at Hotel Zesper today and indulge in unparalleled comfort and elegance.")}
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col md:flex-row sm:flex-row gap-4 sm:gap-6 items-center justify-center">

          {/* Book Room Button */}
          <Link
            to="/booking"
            className="w-full md:w-40 h-10 md:h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base flex items-center justify-center border-2 border-blue-600"
          >
            {t("Book Room")}
          </Link>

          {/* Explore Rooms Button */}
          <Link
            to="/rooms"
            className="w-full md:w-40 h-10 md:h-12 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base border-2 border-white flex items-center justify-center"
          >
            {t("Explore Rooms")}
          </Link>

        </div>
      </CallToAction>

      <Footer />
    </>
  )
}

export default Rooms