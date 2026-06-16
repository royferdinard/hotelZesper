import React from 'react'
import { useTranslation } from 'react-i18next';

function LongCard({children}) {

    const { t, i18n } = useTranslation();

  return (
    <>
    <div className="
        w-full h-96
        bg-white
        dark:bg-[#0f172a]
        rounded-md
        shadow-sm
        dark:shadow-black/30
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-0.5
        border border-transparent
        dark:border-white/10
        text-slate-800
        dark:text-slate-100
      ">
      {children}
    </div>
    </>
  )
}

export default LongCard