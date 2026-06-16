import React from 'react'
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react'
import { X } from 'lucide-react';

function ImagePopup({ blogImage, onClose }) {

    const { t, i18n } = useTranslation();

  const handleDownload = () => {
    if (!blogImage) return;

    const link = document.createElement("a");
    link.href = blogImage;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {blogImage && (
        <div className="w-full h-full inset-0 z-50 px-4 fixed flex flex-col items-center justify-center bg-black/50">

          <div className="bg-white w-full md:w-[50%] h-96 rounded-md shadow-sm overflow-hidden flex flex-col relative">

            {/* IMAGE */}
            <div className="w-full h-[85%]">
              <img
                src={blogImage}
                alt="popup"
                className="w-full h-full object-cover"
              />
            </div>
            <button onClick={onClose} className='absolute top-2 right-2 w-9 h-9 flex flex-col items-center justify-center rounded-full bg-black/30 transition-all duration-300 hover:bg-black/50'><X/></button>
            {/* ACTIONS */}
            <div className="w-full h-[15%] flex items-center justify-between px-4 border-t">

              <h6 className="text-sm text-gray-600">
               {t(' Image Preview')}
              </h6>

              <button
                onClick={handleDownload}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Download />
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  )
}

export default ImagePopup