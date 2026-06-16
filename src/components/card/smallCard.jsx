import React from "react";
import { useTranslation } from 'react-i18next';

const SmallCard = ({ children }) => {

    const { t, i18n } = useTranslation();

  return (
    <div
      className="
        bg-white
        dark:bg-[#0f172a]

        rounded-md
        shadow-sm
        dark:shadow-black/30

        border border-slate-100
        dark:border-white/10

        overflow-hidden
        transition-all duration-300

        hover:shadow-md
        hover:-translate-y-1

        w-full h-70
        md:w-[32%] 
        shrink-0

        text-slate-800
        dark:text-slate-100
      "
    >
      {children}
    </div>
  );
};

export default SmallCard;