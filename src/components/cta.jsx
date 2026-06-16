import React from "react";
import { useTranslation } from 'react-i18next';
import image1 from '../assets/cta.jfif'
const CallToAction = ({ children }) => {

    const { t, i18n } = useTranslation();

  return (
    <section className="w-full  md:h-[40vh] h-[50vh] relative overflow-hidden">
      <div className='w-full h-full overflow-hidden z-0 absolute'>
        <img src={image1} className={'w-full h-full object-cover '}/>
      </div>
      
      <div className="px-4 w-full h-full bg-black/50 z-10 flex relative flex-col items-center justify-center ">
        {children}
      </div>

    </section>
  );
};

export default CallToAction;