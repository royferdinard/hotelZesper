import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import room images for the slideshow
import room1 from '../../assets/room.avif';
import d1 from '../../assets/d1.jfif';
import d2 from '../../assets/d2.jfif';
import d3 from '../../assets/d3.jfif';
import h1 from '../../assets/h1.jfif';
import dr1 from '../../assets/dr1.jfif';

const HomeHero = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the slideshow
  const slideImages = [room1, d1, d2, d3, h1, dr1];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const ChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <section className="relative w-full md:h-[80vh] h-[80vh]  overflow-hidden">
      {/* Background Slideshow with z-index -1 */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={t('Hotel room {{number}}', { number: index + 1 })}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
      </div>

      {/* Content Container with z-index 10 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold md:text-4xl text-white text-center mb-4 drop-shadow-lg">
          {t('Welcome to Hotel Zesper')}
        </h1>

        {/* Subheading */}
        <p className="text-base  md:text-lg text-gray-100 text-center mb-8 max-w-2xl drop-shadow-md">
          {t('Experience luxury and comfort in the heart of paradise. Discover our exquisite rooms and world-class amenities.')}
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col md:flex-row sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          {/* Book Room Button */}
          <Link
            to="/booking"
            className="w-full md:w-40 h-10 md:h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base flex items-center justify-center border-2 border-blue-600"
          >
            {t('Book Room')}
          </Link>

          {/* Explore Rooms Button */}
          <Link
            to="/rooms"
            className="w-full md:w-40 h-10 md:h-12 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base border-2 border-white flex items-center justify-center"
          >
            {t('Explore Rooms')}
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8 sm:w-10'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={t('Go to slide {{number}}', { number: index + 1 })}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows for slides (optional) */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 sm:p-3 rounded-full transition-all duration-300"
        aria-label={t('Previous slide')}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slideImages.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 sm:p-3 rounded-full transition-all duration-300"
        aria-label={t('Next slide')}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HomeHero;
