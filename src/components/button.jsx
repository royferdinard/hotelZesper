import React from "react";
import { useTranslation } from 'react-i18next';

const Button = ({ 
  children, 
  onClick, 
  backgroundColor ,
  borderColor,
  textColor,
  hover,
  border,
}) => {

      const { t, i18n } = useTranslation();

    return (
        <button onClick={onClick} className={`w-full md:w-40 h-10 md:h-12  transform hover:scale-105 shadow-lg text-center text-sm  flex items-center justify-center border-2  rounded-md font-semibold transition-all duration-300 ${backgroundColor} ${borderColor} ${textColor} ${hover}`}>
            {children}
        </button>
    );
};

export default Button;
