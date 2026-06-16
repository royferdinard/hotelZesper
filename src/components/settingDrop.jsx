import { useState, useRef, useEffect } from "react";
import {
  Settings,
  User,
  Bell,
  Globe,
  Moon,
  Sun,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SettingsDropdown = ({ open, close }) => {

  const { t, i18n } = useTranslation();

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

function toggleDarkMode(){
  const theme = document.documentElement.classList.toggle('dark')

  if(theme === 'dark'){
    // document.documentElement.classList.add('dark')
    // localStorage.setItem(JSON.stringify('theme', 'dark'))
    localStorage.setItem("theme", "dark")
  }else{
    // document.documentElement.classList.remove('dark')
    // localStorage.setItem(JSON.stringify('theme', 'light'))
    localStorage.setItem("theme", "light");
  }
}
  // load dark mode on refresh
useEffect(()=>{
  // const storedTheme = JSON.parse(localStorage.getItem('theme'))
  const storedTheme = localStorage.getItem("theme");
  if(storedTheme === 'dark'){
    document.documentElement.classList.add('dark')
    // setDarkMode(true)
  }else{
    document.documentElement.classList.remove('dark')
    // setDarkMode(false)
  }
},[])
 return (
  <div className="relative z-50 ">

    {open && (
      <div
        ref={dropdownRef}
        className="fixed right-6 dark:bg-slate-900 dark:border-slate-700 top-16 w-72 bg-white border border-slate-200 rounded-md shadow-2xl z-[9999] overflow-hidden"
      >

        {/* HEADER */}
        <div className="px-5 py-4 border-b bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
          <h3 className="font-semibold text-slate-800 dark:text-white">
            {t("Quick Settings")}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-300">
            {t("Manage your preferences")}
          </p>
        </div>

        {/* MENU ITEMS */}
        <div className="py-2">

          <button className="flex items-center justify-between w-full px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <div className="flex items-center gap-3 text-slate-800 dark:text-white">
              <User size={18} />
              <span>{t("Profile Settings")}</span>
            </div>
            <ChevronRight size={16} className="text-slate-600 dark:text-slate-300" />
          </button>

          <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <div className="flex items-center gap-3 text-slate-800 dark:text-white">
              <Bell size={18} />
              <span>{t("Notifications")}</span>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition ${notifications ? "bg-blue-500" : "bg-slate-300"
                }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transition ${notifications ? "translate-x-5" : ""
                  }`}
              />
            </button>
          </div>

          <button className="flex items-center justify-between w-full px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <div className="flex items-center gap-3 text-slate-800 dark:text-white">
              <Globe size={18} />
              <span>{t("Language")}</span>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-300">
              {t("English")}
            </span>
          </button>

          <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <div className="flex items-center gap-3 text-slate-800 dark:text-white">
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
              <span>{t("Theme Mode")}</span>
            </div>

            <button
              onClick={() => { setDarkMode(!darkMode); toggleDarkMode() }}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition ${darkMode ? "bg-blue-600" : "bg-slate-300"
                }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transition ${darkMode ? "translate-x-5" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t p-3 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 space-y-2 border-gray-200 w-full">

          <Link
            to={'/setting'}
            onClick={close}
            className="w-full flex flex-row items-center justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition px-2"
          >
            {t("More Settings")}
          </Link>

          <button className="w-full flex items-center justify-center gap-2 text-red-500 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-slate-700 transition">
            <LogOut size={16} />
            {t("Logout")}
          </button>

        </div>
      </div>
    )}
  </div>
);
};

export default SettingsDropdown;