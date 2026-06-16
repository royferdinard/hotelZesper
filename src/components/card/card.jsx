import React from "react";
import { useTranslation } from 'react-i18next';

const Card = ({ children }) => {

    const { t, i18n } = useTranslation();

  return (
    <div
      className="
        bg-white
        rounded-md
        shadow-sm
        border border-slate-100
        dark:border-slate-700
        overflow-hidden
        transition-all duration-300
        hover:shadow-md
        hover:-translate-y-1
        w-full h-85
        md:w-[32%] 
        shrink-0
        text-slate-800
        dark:text-slate-100
        dark:bg-slate-900
      "
    >
      {children}
    </div>
  );
};

export default Card;