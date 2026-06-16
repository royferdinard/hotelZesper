import React from 'react'
import { useTranslation } from 'react-i18next';
import MiniCard from '../card/miniCard'
import image1 from '../../assets/dr2.webp'
import image2 from '../../assets/dr13.jpg'
import image3 from '../../assets/dr19.jpg'
import image4 from '../../assets/dr15.jpg'

function DrinkCategory() {

  const { t } = useTranslation();

  const Categories = [
    {
      image: image1,
      name: 'Cocktails',
      description: "Hight quality and first class cocktail drinks"
    },
    {
      image: image2,
      name: "Wine",
      description: "Pure and high quality wine with zero percent drink mixture."
    },
    {
      image: image3,
      name: "Soft Drink",
      description: "Pocket friendly and good for non-alcoholic consumers"
    },
    {
      image: image4,
      name: "Juices",
      description: "Juices are freshly blended on arrival to preserve taste"
    }
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-10 px-4 transition-colors duration-300">

      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          <span>{t("Top")}</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">{t("Categories")}</span>
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {t("Find your desired drink based on the categories")}
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-5 overflow-x-auto scrollbar-none px-1">

        {Categories.map((category, index) => (
          <MiniCard key={index}>

            <div className="w-full h-[70%] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3">
              <h6 className="text-blue-950 dark:text-blue-300 text-lg text-center font-bold">
                {t(category.name)}
              </h6>

              <p className="text-xs text-slate-500 dark:text-gray-400 text-center mt-1">
                {t(category.description)}
              </p>
            </div>

          </MiniCard>
        ))}

      </div>
    </div>
  )
}

export default DrinkCategory