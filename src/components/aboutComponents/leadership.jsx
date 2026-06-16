import React from "react";
import { useTranslation } from 'react-i18next';
import Cards from "../card/card";
import image1 from '../../assets/m4.jpg';
import image2 from '../../assets/m2.jpg';
import image3 from '../../assets/m3.jpg';
import image4 from '../../assets/m1.jpg';
import SmallCard from "../card/smallCard";

const Leadership = () => {
  const { t, i18n } = useTranslation();

  const Leaders = [
    {
      name: 'Simon',
      Role: t('Executive Manager'),
      image: image1,
      testimony: t("At Hotel Zesper, we are dedicated to delivering more than just a stay — we create exceptional experiences defined by comfort, elegance, and genuine hospitality. Every guest is welcomed with warmth and treated with personalized care to ensure memorable moments from arrival to departure. Welcome to Luxury, comfort, service, business, relaxation."),
    },

    {
      name: 'Moses',
      Role: t("Operations Manager"),
      image: image2,
      testimony: t("As the Operations Manager at Hotel Zesper, I am dedicated to ensuring every guest enjoys a smooth, comfortable, and memorable experience. From exceptional service to seamless operations, our commitment is to deliver hospitality that exceeds expectations from arrival to departure.")
    },

    {
      name: 'Ouma',
      Role: t('Senior Chef'),
      image: image3,
      testimony: t("As the Senior Chef at Hotel Zesper, I am committed to crafting exceptional culinary experiences that blend flavor, freshness, and creativity. I warmly invite you to join us and enjoy delicious meals prepared with passion and served with excellence, creating unforgettable dining moments filled with taste, warmth, satisfaction, and joy.")
    },

    {
      name: 'Angeline',
      Role: t('Reservation Manager'),
      image: image4,
      testimony: t("As the Reservation Manager at Hotel Zesper, I warmly welcome you to book your stay with us and experience seamless reservations, exceptional comfort, and outstanding hospitality. From the moment you reserve your room, our commitment is to ensure a smooth, convenient, and memorable experience tailored to your needs.")
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-slate-900 px-4 py-8">

        <div className="">
          <h2 className="text-center text-xl text-blue-950 dark:text-blue-600 font-bold mb-2">
            {t("Our Leadership")}
          </h2>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            {t("Meet our leadership team, the driving force behind the smooth and efficient running of Hotel Zesper. ")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-nowrap items-start justify-start gap-4 px-1 py-8 overflow-y-hidden overflow-x-auto scrollbar-none">

          {
            Leaders.map((leader, index) => (
              <SmallCard key={index}>

                <div className="w-full h-full p-4">

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t(leader.testimony)}
                  </p>

                  <div className="flex flex-row items-start py-3 justify-between">

                    <div className="flex flex-col items-start justify-start gap-0">

                      <h6 className="text-blue-950 dark:text-blue-600 font-bold">
                        {t(leader.Role)}
                      </h6>

                      <p className="text-gray-800 dark:text-gray-200">
                        {t(leader.name)}
                      </p>

                    </div>

                    <div className="w-20 h-20 overflow-hidden border-3 border-blue-950 dark:border-blue-400 flex items-center justify-center flex-col rounded-full">

                      <img
                        src={leader.image}
                        alt=""
                        className="w-full h-full object-center"
                      />

                    </div>

                  </div>

                </div>

              </SmallCard>
            ))
          }

        </div>
      </div>
    </>
  );
};

export default Leadership;