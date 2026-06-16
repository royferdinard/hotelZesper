import React from 'react'
import { useTranslation } from 'react-i18next';
import ReuseableHero from './reusableHero'
import image1 from '../../assets/events.jfif'

function EventHero() {

      const { t, i18n } = useTranslation();

    return (
        <>
            <ReuseableHero image={image1}>
                <h1 className="text-2xl md:text-3xl font-bold text-white"> {t('Hotel Events & Experiences')}</h1>
                <p className="text-white mt-2 text-sm  leading-relaxed text-center">
                   {t(' Celebrate weddings, conferences, parties & more')}
                </p>
            </ReuseableHero>
        </>
    )
}

export default EventHero