import React from "react";
import { useTranslation } from 'react-i18next';

const Popup = ({status, children})=>{

      const { t, i18n } = useTranslation();

    return (
        <>
         {success && (
        <div className="fixed top-6 right-6 z-50">
          <div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
            {/* <span className="text-xl">✔</span>
            <span>Message sent successfully</span> */}
            {children}
          </div>
        </div>
      )}
        </>
    )
}

export default Popup