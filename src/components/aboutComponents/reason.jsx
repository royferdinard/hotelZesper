import React from "react";
import { useTranslation } from 'react-i18next';
import Card from '../card/card'
import image1 from '../../assets/room.avif';
import image2 from '../../assets/24service.png';
import image3 from '../../assets/dinning.png';
import image4 from '../../assets/parking.jpg';
import image5 from '../../assets/hall.png';
import image6 from '../../assets/laundry.jfif';
import image7 from '../../assets/swimming.jpg';
import image8 from '../../assets/fit.jpg';

const Reason = () => {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="py-12 px-4 dark:bg-slate-800">

        <div className="">
          <h2 className="w-full text-center text-xl font-bold">
            <span className="text-blue-950 dark:text-white">{t("Why")}</span>{" "}
            <span className="text-blue-600 dark:text-blue-600">Zesper</span>
          </h2>

          <p className="w-full text-center text-sm text-gray-600 dark:text-gray-300">
            {t("Experience the perfect blend of comfort, elegance, and warm hospitality that makes every stay truly special.")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-start gap-4 overflow-x-auto overflow-y-hidden py-8 px-1 scrollbar-none">

          {/* 1 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image1} alt="Comfortable Rooms" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("Comfortable Rooms")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Relax in our well-furnished and spacious rooms designed to give you maximum comfort, privacy, and a peaceful stay experience.")}
              </p>
            </div>
          </Card>

          {/* 2 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image2} alt="24/7 Service" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("24/7 Customer Service")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Our friendly staff is always available around the clock to assist you with anything you need for a smooth and enjoyable stay.")}
              </p>
            </div>
          </Card>

          {/* 3 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image3} alt="Restaurant Dining" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("Restaurant & Dining")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Enjoy delicious local and international cuisines prepared by our professional chefs in a warm and elegant dining environment.")}
              </p>
            </div>
          </Card>

          {/* 4 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image4} alt="Secure Parking" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("Secure Parking")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("We provide safe and spacious parking facilities to ensure your vehicle is secure throughout your stay.")}
              </p>
            </div>
          </Card>

          {/* 5 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image5} alt="Conference Hall" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("Conference Hall")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Host meetings, events, and corporate gatherings in our fully equipped, modern conference facilities designed for productivity and comfort.")}
              </p>
            </div>
          </Card>

          {/* 6 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image6} alt="Laundry Services" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("Laundry Services")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Keep your clothes fresh and clean with our fast and reliable laundry and dry-cleaning services available during your stay.")}
              </p>
            </div>
          </Card>

          {/* 7 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image7} alt="Swimming Pool" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("Swimming Pool")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Unwind and relax in our clean and refreshing swimming pool, perfect for leisure, fitness, or a peaceful afternoon escape.")}
              </p>
            </div>
          </Card>

          {/* 8 */}
          <Card>
            <div className="w-full h-[50%] overflow-hidden">
              <img src={image8} alt="Fitness Center" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">
                {t("Fitness Center")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("Stay active during your visit with our fully equipped gym, designed to help you maintain your fitness routine while traveling.")}
              </p>
            </div>
          </Card>

        </div>
      </div>
    </>
  );
}

export default Reason;