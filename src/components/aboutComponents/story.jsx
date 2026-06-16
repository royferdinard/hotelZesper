import React from "react";
import { useTranslation } from "react-i18next";
import image from "../../assets/hotelzesper-front1.webp";
import { IceCreamBowl } from "lucide-react";

const Story = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col md:flex-row items-start justify-between gap-8 py-12 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">

      {/* IMAGE SECTION */}
      <div className="w-full md:w-[47%] h-80 md:h-[360px] bg-white dark:border dark:border-slate-700 dark:bg-slate-800 shadow-sm hover:shadow-md rounded-md overflow-hidden flex items-center justify-center p-4 transition-all duration-300">
        <img
          src={image}
          alt="Hotel Zesper Story"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      {/* CONTENT SECTION */}
      <article className="w-full md:w-[50%] flex flex-col gap-4">

        {/* TITLE */}
        <header className="flex items-center gap-3 mb-2">
          <span className="w-9 h-9 flex items-center justify-center bg-blue-600 dark:bg-blue-600 text-white rounded-md shadow-sm">
            <IceCreamBowl size={18} />
          </span>

          <h2 className="text-xl md:text-2xl font-bold text-blue-950 dark:text-blue-600">
            {t("Our story")}
          </h2>
        </header>

        {/* PARAGRAPHS */}
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">

          <p>
            <strong className="text-gray-800 dark:text-white">
              {t("Hotel Zesper")}
            </strong>{" "}
            {t(
              "is a serene and elegant destination nestled in a breathtaking hilltop location, offering a perfect blend of modern comfort and natural tranquility. Designed to provide a unique escape from the ordinary, our hotel features top-tier amenities and 24-hour services that cater to both business and leisure travelers. Every corner of Hotel Zesper reflects its own character, creating a distinctive atmosphere that sets us apart and ensures a memorable experience for every guest."
            )}
          </p>

          <p>
            {t(
              "We pride ourselves on delivering personalized hospitality, where every guest’s comfort and satisfaction come first. Our commitment goes beyond service—we aim to build lasting relationships by understanding and exceeding expectations. Guided by a passionate team and inspired by the rich traditions of our local community, Hotel Zesper continues to offer exceptional experiences that make every stay truly special and unforgettable."
            )}
          </p>

          <p>
            {t(
              "Driven by a passionate team and inspired by the rich traditions of our local community, Hotel Zesper continues to stand out as a place where comfort, culture, and exceptional service come together—making every stay not just enjoyable, but truly unforgettable."
            )}
          </p>

        </div>
      </article>
    </section>
  );
};

export default Story;