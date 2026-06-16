import React from 'react'
import { useTranslation } from 'react-i18next';
import EventHero from '../components/hero/eventHero'
import EventBanner from '../components/eventComponents/eventbanner'
import FeaturedEvents from '../components/eventComponents/featuredEvents'
import EventAmenity from '../components/eventComponents/eventAmenities'
import CallToAction from '../components/cta'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

function Events() {

    const { t, i18n } = useTranslation();

  return (
    <>
      <EventHero />
      <EventBanner />
      <FeaturedEvents />
      <EventAmenity />

      <CallToAction>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          {t("Ready to Host an Unforgettable Event?")}
        </h3>

        <p className="text-gray-200 mb-6 text-center max-w-xl mx-auto">
          {t("Book your perfect event space today and let us help you create memorable weddings, corporate meetings, and celebrations tailored to your needs.")}
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col md:flex-row sm:flex-row gap-4 sm:gap-6 items-center justify-center">

          {/* Book Event Button */}
          <Link
            to="/events-booking"
            className="w-full md:w-40 h-10 md:h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base flex items-center justify-center border-2 border-blue-500"
          >
            {t("Book Event")}
          </Link>

          {/* Explore Events Button */}
          <Link
            to="/events"
            className="w-full md:w-40 h-10 md:h-12 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base border-2 border-white flex items-center justify-center"
          >
            {t("Explore Events")}
          </Link>
        </div>
      </CallToAction>

      <Footer />
    </>
  )
}

export default Events