import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Hotel } from 'lucide-react';
import { FileText } from 'lucide-react';
import { LogOut } from 'lucide-react';

function ProfileDrop({open,dropdownRef,currentUser}) {

    const { t, i18n } = useTranslation();

  return (
    <>
   {open && (
  <div
    ref={dropdownRef}
    className="fixed right-5 top-16 md:w-70 w-[65%] bg-white border overflow-y-auto h-[70%] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-blue-900 border-slate-200 rounded-lg shadow-lg z-50 overflow-hidden"
  >
    {/* USER HEADER */}
    <div className="bg-linear-to-r from-blue-900 to-blue-700 px-3 py-2 text-white">
      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-lg font-semibold uppercase">
          {currentUser?.userName?.charAt(0)}
        </div>

        {/* USER INFO */}
        <div>
          <h2 className="font-semibold text-lg">
            {currentUser?.userName}
          </h2>

          <p className="text-sm text-blue-100">
            {currentUser?.email}
          </p>
        </div>
      </div>
    </div>

    {/* ACCOUNT OPTIONS */}
    <div className="py-2">

      <Link
        to="/profile"
       
        className="flex items-center justify-between px-5 py-4 hover:bg-slate-100 transition"
      >
        <div className="flex items-center gap-3">
          <User size={18} />
          <span className="font-medium">
           {t(' My Profile')}
          </span>
        </div>

        <ChevronRight size={16} />
      </Link>

      {/* <Link
        to="/booking"
        
        className="flex items-center justify-between px-5 py-4 hover:bg-slate-100 transition"
      >
        <div className="flex items-center gap-3">
          <Hotel size={18} />
          <span className="font-medium">
            My Bookings
          </span>
        </div>

        <ChevronRight size={16} />
      </Link> */}

      <Link
        to="/receipt"
        
        className="flex items-center justify-between px-5 py-4 hover:bg-slate-100 transition"
      >
        <div className="flex items-center gap-3">
          <FileText size={18} />
          <span className="font-medium">
            {t('Room Bookings')}
          </span>
        </div>

        <ChevronRight size={16} />
      </Link>

      <Link
        to="/drinkReceipt"
        
        className="flex items-center justify-between px-5 py-4 hover:bg-slate-100 transition"
      >
        <div className="flex items-center gap-3">
          <FileText size={18} />
          <span className="font-medium">
            {t('Drink Bookings')}
          </span>
        </div>

        <ChevronRight size={16} />
      </Link>

      <Link
        to="/eventReceipt"
        
        className="flex items-center justify-between px-5 py-4 hover:bg-slate-100 transition"
      >
        <div className="flex items-center gap-3">
          <FileText size={18} />
          <span className="font-medium">
            {t('Event Bookings')}
          </span>
        </div>

        <ChevronRight size={16} />
      </Link>

      <Link
        to="/spaReceipt"
        
        className="flex items-center justify-between px-5 py-4 hover:bg-slate-100 transition"
      >
        <div className="flex items-center gap-3">
          <FileText size={18} />
          <span className="font-medium">
            {t('Spa Bookings')}
          </span>
        </div>

        <ChevronRight size={16} />
      </Link>

      <Link
        to="/setting"
       
        className="flex items-center justify-between px-5 py-4 hover:bg-slate-100 transition"
      >
        <div className="flex items-center gap-3">
          <Settings size={18} />
          <span className="font-medium">
            {t('Account Settings')}
          </span>
        </div>

        <ChevronRight size={16} />
      </Link>
    </div>

    {/* FOOTER */}
    <div className="border-t border-slate-200 p-4 bg-slate-50">
      <button
        onClick={() => {
          localStorage.removeItem("currentUser");
          navigate("/");
          close();
        }}
        className="w-full flex items-center justify-center gap-2 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium"
      >
        <LogOut size={18} />
        {t('Logout')}
      </button>
    </div>
  </div>
)}
    </>
  )
}

export default ProfileDrop