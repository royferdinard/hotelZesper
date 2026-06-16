import React from 'react'
import { useTranslation } from 'react-i18next';
import BlogHero from '../components/hero/blogHero'
import BlogContent from '../components/blogComponents/blogContent'
import Footer from '../components/footer'

function Blog() {

    const { t, i18n } = useTranslation();

  return (
    <>
    <BlogHero />
    <BlogContent/>
    <Footer/>
    
    </>
  )
}

export default Blog