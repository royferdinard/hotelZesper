import React from 'react'
import { useTranslation } from 'react-i18next';
import ReuseableHero from './reusableHero'
import image1 from '../../assets/spaHero.jfif'
function SpaHero() {

      const { t, i18n } = useTranslation();

    return (
        <>
            <ReuseableHero image={image1}>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                    <span>{t('Our')}</span> <span className="text-blue-600">{t('Spa')}</span>
                </h1>

                <p className="text-white mt-2 text-sm leading-relaxed text-center max-w-2xl mx-auto">
                    {t('Relax, refresh, and rejuvenate in our luxury spa with soothing treatments designed for your comfort and wellness.')}
                </p>
            </ReuseableHero>
        </>
    )
}

export default SpaHero