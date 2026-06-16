import React from 'react'
import { useTranslation } from 'react-i18next';
import ReuseableHero from './reusableHero'
import blogHeroImage from '../../assets/c6.webp'

function BlogHero() {

      const { t, i18n } = useTranslation();

    return (
        <>
            <ReuseableHero image={blogHeroImage}>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{t('Blog')}</h1>
                <p className="text-white mt-2 text-sm  leading-relaxed text-center">
                  {t('  Discover luxury hospitality, premium experiences and travel inspiration.  ')}
                </p>
            </ReuseableHero>
        </>
    )
}

export default BlogHero