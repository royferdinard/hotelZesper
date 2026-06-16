import React from "react";
import { useTranslation } from 'react-i18next';
import { FaComments } from "react-icons/fa";

const ChatButton = ({toggleChat}) => {

    const { t, i18n } = useTranslation();

  return (
    <button className="w-12 h-12 flex flex-col items-center justify-center rounded-full shadow-lg bg-blue-600 text-white fixed bottom-4 right-4 z-30 transition-all duration-300 hover:bg-blue-900 text-lg" onClick={toggleChat}>
      <FaComments/>
    </button>
  );
};

export default ChatButton;
