import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jfif";
import { Globe, Settings, Menu, X } from "lucide-react";
import SettingsDropdown from "./settingDrop";
import { useNavigate } from "react-router-dom";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import ProfileDrop from "./popup/chat/profileDrop";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [openSetting, setOpenSetting] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef(null);

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  const navLinks = [
    { name: t("Home"), path: "/" },
    { name: t("About"), path: "/about" },
    { name: t("Contact"), path: "/contact" },
    { name: t("Blog"), path: "/blog" },
    { name: t("Gallery"), path: "/gallery" },
    { name: t("Bar"), path: "/bar" },
    { name: t("Spa"), path: "/spa" },
    { name: t("Rooms"), path: "/rooms" },
    { name: t("Events"), path: "/events" },
    { name: t("Testimonials"), path: "/testimonial" },
    { name: t("Help"), path: "/help" },
  ];

  const openDrop = () => setOpenSetting(!openSetting);

  const handleLoginDisplay = () => setOpenLogin(true);
  const handleClose = () => setOpenLogin(false);
  const openSignupForm = () => setOpenSignUp(true);
  const handlesignupclose = () => setOpenSignUp(false);

  const languages = [
    { code: "en", label: "ENG" },
    { code: "sw", label: "KIS" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      {/* HEADER */}
      <header className="bg-white dark:bg-slate-900 shadow-sm fixed top-0 left-0 z-50 w-full h-16 md:h-20 border-b border-gray-100 dark:border-slate-800">
        <div className="w-full h-full px-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center w-32 h-full shrink-0">
            <Link to="/" className="w-full h-full flex items-center">
              <img
                src={logo}
                alt={t("Hotel Zesper Logo")}
                className="w-full h-full object-contain hover:scale-105 transition duration-300"
              />
            </Link>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex flex-1 justify-start items-center gap-1 lg:gap-2 overflow-x-auto overflow-y-hidden scrollbar-none">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-2 shrink-0 relative">

            {/* LANGUAGE */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <Globe size={16} />
                <span>{currentLanguage}</span>
              </button>

              {languageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-24 bg-white dark:bg-slate-900 shadow-xl border border-gray-200 dark:border-slate-700 rounded-md overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.label);
                        setLanguageDropdownOpen(false);
                        changeLanguage(lang.code);
                      }}
                      className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-800 ${
                        currentLanguage === lang.label
                          ? "bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-slate-900"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* SETTINGS */}
            <button
              onClick={openDrop}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
            >
              <Settings size={18} />
            </button>

            {/* AUTH BUTTONS */}
            {currentUser ? (
              <div
                onClick={() => setOpenProfile(!openProfile)}
                className="w-7 h-7 rounded-full bg-blue-900 dark:bg-blue-700 text-white border border-white/30 flex items-center justify-center text-sm font-semibold uppercase transition-all duration-300 hover:bg-blue-600 cursor-pointer hover:border-blue-600"
              >
                {currentUser.userName?.charAt(0)}
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    openSignupForm();
                    setIsMenuOpen(false);
                  }}
                  className="hidden md:flex items-center justify-center w-24 h-10 text-sm font-semibold text-white bg-blue-900 dark:bg-blue-700 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                >
                  {t("Sign Up")}
                </button>

                <button
                  onClick={() => {
                    handleLoginDisplay();
                    setIsMenuOpen(false);
                  }}
                  className="hidden md:flex items-center justify-center w-24 h-10 text-sm font-semibold text-blue-900 dark:text-blue-200 border border-blue-900 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 transition"
                >
                  {t("Login")}
                </button>
              </>
            )}

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black/40 dark:bg-black/60 z-40 md:hidden">
          <div className="absolute right-0 top-0 h-[95%] w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl overflow-hidden animate-in slide-in-from-right duration-300">

            {/* USER SECTION */}
            <div className="bg-blue-900 dark:bg-slate-800 p-5 text-white">

              {currentUser ? (
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-xl font-bold uppercase">
                    {currentUser.userName?.charAt(0)}
                  </div>

                  <div className="flex flex-col">
                    <h2 className="font-semibold text-lg">
                      {currentUser.userName}
                    </h2>
                    <span className="text-sm text-blue-100 dark:text-slate-300">
                      {currentUser.email}
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-lg font-semibold">
                    {t("Welcome to Hotel Zesper")}
                  </h2>

                  <p className="text-sm text-blue-100 dark:text-slate-300 mt-1">
                    {t("Login to access bookings and services")}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 h-11 rounded-md bg-white text-blue-900 font-semibold">
                      {t("Sign Up")}
                    </button>

                    <button className="flex-1 h-11 rounded-md border border-white text-white font-semibold">
                      {t("Login")}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* NAV */}
            <div className="p-4 overflow-y-auto h-full pb-32">
              <nav className="flex flex-col gap-1 pb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-blue-400 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {currentUser && (
                <div className="mt-6 border-t border-gray-200 dark:border-slate-700 pt-5">
                  <button className="w-full h-12 rounded-xl border border-red-200 dark:border-red-500 text-red-600 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-slate-800 transition">
                    {t("Logout")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {openSetting && (
        <SettingsDropdown open={openSetting} close={() => setOpenSetting(false)} />
      )}

      {openLogin && <Login close={handleClose} />}
      {openSignUp && <SignUp closing={handlesignupclose} />}
      {openProfile && (
        <ProfileDrop
          open={openProfile}
          dropdownRef={dropdownRef}
          currentUser={currentUser}
        />
      )}
    </>
  );
};

export default Header;