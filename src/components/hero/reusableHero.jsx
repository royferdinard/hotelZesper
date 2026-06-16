import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ReuseableHero =({children,image})=>{


    const { t, i18n } = useTranslation();


  return (
    <>
    <section className="relative w-full h-[50vh] overflow-hidden">
      <div className="w-full h-full overflow-hidden z-0 absolute">
        <img src={image} alt="" className='w-full h-full object-cover'/>
      </div>
      <div className="flex flex-col items-center justify-center bg-black/70 relative z-0 w-full h-full px-4">
        {children}
      </div>
     </section>
        </>
  );
};

export default ReuseableHero;
