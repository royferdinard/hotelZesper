import React from 'react'
import { useTranslation } from 'react-i18next';
import MiniCard from '../card/miniCard'
import image1 from '../../assets/dr2.webp'
import image2 from '../../assets/dr16.jpg'
import image3 from '../../assets/drink2.webp'
import image4 from '../../assets/dr21.webp'

function Why() {

    const { t } = useTranslation();

    const Drinks = [
        {
            image: image1,
            head: "Premium Cocktails",
            description:
                "Enjoy expertly crafted cocktails made with premium spirits, fresh ingredients, and unique flavors for an unforgettable experience.",
        },
        {
            image: image2,
            head: "Luxury Atmosphere",
            description:
                "Relax in a stylish and elegant environment designed to give you comfort, class, and a memorable nightlife experience.",
        },
        {
            image: image3,
            head: "Wide Drink Selection",
            description:
                "Choose from a wide variety of wines, whiskies, cocktails, beers, and non-alcoholic beverages tailored to every taste.",
        },
        {
            image: image4,
            head: "Live Entertainment",
            description:
                "Experience exciting live music, DJ performances, and special events that keep the energy vibrant all night long.",
        },
    ];

    return (
        <>
            <div className="py-8 px-4 bg-gray-50 dark:bg-gray-800">
                <div className="pb-6">
                    <h1 className='text-xl text-blue-600 dark:text-blue-400 text-center font-bold'>
                        {t("why Choose Our Drinks")}
                    </h1>

                    <p className='text-sm text-gray-600 dark:text-gray-300 text-center'>
                        {t("Discore the secret behind the flavour of our drinks")}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-nowrap overflow-y-hidden overflow-x-auto md:justify-start md:items-start py-4 scrollbar-none">
                    {
                        Drinks.map((drink, index) => (
                            <MiniCard key={index}>

                                <div className="w-full h-[50%] overflow-hidden">
                                    <img
                                        src={drink.image}
                                        alt=""
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className="p-2">
                                    <h6 className='text-md text-blue-600 dark:text-blue-400 font-semibold'>
                                        {t(drink.head)}
                                    </h6>

                                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                                        {t(drink.description)}
                                    </p>
                                </div>

                            </MiniCard>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Why