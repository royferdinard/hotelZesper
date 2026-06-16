import React from 'react'
import { useTranslation } from 'react-i18next';
import ReuseableHero from './reusableHero'
import image1 from '../../assets/sofa.webp'

function RoomHero() {

      const { t, i18n } = useTranslation();

    return (
        <>
            <ReuseableHero image={image1}>
                <h1 className='text-white font-bold text-2xl md:text-3xl text-center'><span className="">{t('Our')}</span> <span className='text-blue-500'>{t('Rooms')}</span></h1>
                <p className="text-sm  w-full text-white text-center">
                    {t('Host unforgettable weddings, conferences, and celebrations at Hotel Zesper.')}
                </p>
            </ReuseableHero>
        </>
    )
}

export default RoomHero