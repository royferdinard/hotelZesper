import React from "react";
import { useTranslation } from 'react-i18next';
import Cards from "./card/card";
import image1 from "../assets/roomBooking.jfif";
import image2 from "../assets/chicken.png";
import image3 from "../assets/confrence.jfif";
import image4 from "../assets/drink2.webp";
import image5 from "../assets/parking.jpg";
import image6 from "../assets/accommodation.png";
import image7 from "../assets/checking.webp";
import image8 from "../assets/covinientservice.jpg";
import { Link } from "react-router-dom";

const Services = () => {

  const { t, i18n } = useTranslation();

  const CardContent = [
    {
      img: image1,
      title: t("Room Booking"),
      desc: t("Book comfortable and elegant rooms designed for relaxation, business stays, and memorable experiences with premium comfort.")
    },
    {
      img: image2,
      title: t("Restaurant & Dining"),
      desc: t("Enjoy freshly prepared local and international meals served in our restaurant with quality hospitality and delicious flavors.")
    },
    {
      img: image3,
      title: t("Conference & Events"),
      desc: t("Host meetings, conferences, weddings, and special events in our spacious and well-organized event facilities.")
    },
    {
      img: image4,
      title: t("Bar & Refreshments"),
      desc: t("Relax and unwind with premium drinks, cocktails, beverages, and snacks in a welcoming and stylish atmosphere.")
    },
    {
      img: image5,
      title: t("Secure Parking"),
      desc: t("Enjoy safe, spacious, and convenient parking facilities available for guests throughout their stay.")
    },
    {
      img: image6,
      title: t("Luxury Accommodation"),
      desc: t("Experience modern rooms equipped with Smart TVs, quality bedding, WiFi, and premium amenities for maximum comfort.")
    },
    {
      img: image7,
      title: t("24/7 Front Desk"),
      desc: t("Our reception team is available around the clock to assist with check-in, reservations, inquiries, and guest support.")
    },
    {
      img: image8,
      title: t("Laundry & Guest Services"),
      desc: t("Enjoy professional housekeeping, laundry, and personalized guest services designed for a smooth and comfortable stay.")
    },
  ];

  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 py-8 px-4 md:px-4">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-600 font-sans">
          <span className="text-blue-950 dark:text-white">{t("Our")}</span> {t("Services")}
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm leading-relaxed font-sans text-center">
          {t("We offer a wide range of premium services to make your stay at Hotel Zesper comfortable, enjoyable, and unforgettable. From luxury experiences to essential conveniences, everything is designed for you.")}
        </p>
      </div>

      {/* GRID */}
      <div className="w-full flex md:flex-nowrap flex-wrap gap-4 justify-start overflow-x-auto overflow-y-hidden px-4 items-start py-4 scrollbar-none">

        {CardContent.map((service, index) => (
          <Cards key={index}>
            <div className="bg-white dark:bg-gray-900 overflow-hidden flex flex-col h-full">

              {/* IMAGE */}
              <div className="h-[50%] w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col grow">

                <h3 className="text-lg font-semibold text-blue-950 dark:text-blue-600">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 grow">
                  {service.desc}
                </p>

                <Link
                  to={'/about'}
                  className="mt-4 text-sm font-medium text-blue-950 dark:text-blue-600 hover:text-blue-700 transition text-left"
                >
                  {t("Learn more →")}
                </Link>

              </div>
            </div>
          </Cards>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-4">
        <Link
          to="/rooms"
          className="inline-block bg-blue-950 dark:bg-blue-800 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-900 dark:hover:bg-blue-700 transition shadow-md"
        >
          {t("View All Services")}
        </Link>
      </div>

    </section>
  );
};

export default Services;