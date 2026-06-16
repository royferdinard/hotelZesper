import React from "react";
import { useState, useEffect, useRef, useTranslation } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderCircle } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HotelIcon } from "lucide-react";
import Login from "./login";
import { X } from "lucide-react";

const SignUp = ({ closing }) => {

  const { t, i18n } = useTranslation();

  const [openLogin, setOpenLogin] = useState(false)
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(null);
  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(null)
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalid = format.test(value);
    setValidEmail(isvalid)
    return (isvalid);
  }

  const validatepassword = (value) => {
    const format = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isvalid = format.test(value);
    setValidPassword(isvalid)
    return (isvalid);
  }

  const validateConfirmPassword = (value) => {
    const isValid = password === value;
    setMatchPassword(isValid);
    return (isValid)
  }

  const validateUsername = (value) => {
    const format = /^(?=.*[A-Za-z])[A-Za-z\d]{3,}$/;
    const isvalid = format.test(value);
    setValidUserName(isvalid)
    return (isvalid);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = validateEmail(email);
    const validUsername = validateUsername(userName);
    const validPassword = validatepassword(password)
    const validConfirmPassword = validateConfirmPassword(confirmPassword);

    if (!validEmail || !validUsername || !validConfirmPassword || !validPassword) {
      toast.error(t("Enter valid sign up detail before continuing"))
    } else {

      const newUser = {
        userName,
        email,
        password,
        createdAt: new Date().toLocaleString(),
      };

      const existingUsers =
        JSON.parse(localStorage.getItem("users")) || [];

      const userExists = existingUsers.find(
        (user) => user.email === email
      );

      const usernameExist = existingUsers.find((user) => user.userName === userName)

      if (usernameExist) {
        toast.error(t("This user already has an account"))
        return
      }

      if (userExists) {
        toast.error(t("Email already exists"));
        return;
      }

      const updatedUsers = [...existingUsers, newUser];

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      toast.success(t("Account created successfully"));

      setTimeout(() => {
        setOpenLogin(true);
      }, 3000);
    }

    if (email === "") toast.error(t("Email is required"))
    if (password === "") toast.error(t("Password is required"))
    if (userName === "") toast.error(t("Username is required"))
    if (confirmPassword === "") toast.error(t("Confirm your password"))
  }

  const handleOpenLogin = () => setOpenLogin(true)

  return (
    <>
      <div className="fixed flex-col inset-0 bg-black/70 dark:bg-black/80 z-50 font-poppins min-h-screen w-full flex items-center justify-center px-4 py-4">

        <form onSubmit={handleSubmit} className="relative overflow-x-hidden scroll-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-100 max-w-md w-full h-[83vh] overflow-y-auto bg-white dark:bg-gray-900 shadow rounded-md p-8 flex flex-col gap-6 border border-gray-200 dark:border-gray-700">

          <button
            onClick={closing}
            className="text-gray-500 dark:text-gray-300 absolute top-2 right-2 flex flex-col items-center justify-center w-9 h-9 rounded-full bg-gray-50 dark:bg-gray-800 text-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>

          {/* HEADER */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-900 text-white rounded-full text-sm shadow-md">
              <HotelIcon />
            </div>

            <h1 className="text-xl font-bold text-blue-900 dark:text-blue-300">
              {t("Create Account")}
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
              {t("Sign up to access your Task Management Dashboard")}
            </p>
          </div>

          {/* GOOGLE */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition py-2.5 text-sm rounded-md font-medium text-gray-600 dark:text-gray-300"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              className="w-5 h-5"
            />
            {t("Continue with Google")}
          </button>

          {/* OR */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="text-xs text-gray-400 dark:text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* USERNAME */}
          <label className="flex flex-col gap-2">
            <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
              {t("Username")}
            </span>

            <input
              type="text"
              placeholder={t("Enter username")}
              className="text-gray-600 dark:text-gray-200 font-poppins w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2.5 text-sm outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition bg-white dark:bg-gray-800"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value)
                validateUsername(e.target.value);
              }}
            />

            {userName.trim() !== "" && validUserName === false && (
              <span className="text-xs text-red-600">
                {t("Username should have at least 3 characters")}
              </span>
            )}
          </label>

          {/* EMAIL */}
          <label className="flex flex-col gap-2">
            <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
              {t("Email")}
            </span>

            <input
              type="email"
              placeholder={t("example@gmail.com")}
              className="w-full border border-gray-300 dark:border-gray-600 text-sm rounded-md px-4 py-2.5 outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition bg-white dark:bg-gray-800 dark:text-gray-200"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                validateEmail(e.target.value);
              }}
            />

            {email.trim() !== "" && validEmail === false && (
              <span className="text-xs text-red-600">
                {t("Please input a valid email")}
              </span>
            )}
          </label>

          {/* PASSWORD */}
          <label className="flex flex-col gap-2">
            <span className="font-medium text-gray-600 dark:text-gray-300 text-sm">
              {t("Password")}
            </span>

            <input
              type="password"
              placeholder={t("Password")}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2.5 text-sm outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition bg-white dark:bg-gray-800 dark:text-gray-200"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                validatepassword(e.target.value);
                validateConfirmPassword(confirmPassword)
              }}
            />

            {password.trim() !== "" && validPassword === false && (
              <span className="text-xs text-red-600">
                {t("Must be at least 8 characters with letters and numbers")}
              </span>
            )}
          </label>

          {/* CONFIRM PASSWORD */}
          <label className="flex flex-col gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300 text-sm ">
              {t("Confirm Password")}
            </span>

            <input
              type="password"
              placeholder={t("Confirm password")}
              className="w-full border border-gray-300 dark:border-gray-600 text-sm rounded-sm px-4 py-2.5 outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition text-gray-600 dark:text-gray-200 bg-white dark:bg-gray-800"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                validateConfirmPassword(e.target.value)
              }}
            />

            {confirmPassword.trim() !== "" && matchPassword === false && (
              <span className="text-xs text-red-600">
                {t("It should match password")}
              </span>
            )}
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all duration-200 text-white font-semibold py-2.5 rounded-md shadow-md hover:shadow-lg"
          >
            <span>{t("Sign Up")}</span>
            <FaSignInAlt className="text-lg rotate-180" />
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-300">
            {t("Already have an account?")}
            <Link onClick={handleOpenLogin} className="text-blue-800 dark:text-blue-400 font-semibold cursor-pointer ml-1 hover:text-blue-900 dark:hover:text-blue-300">
              {t("Login")}
            </Link>
          </p>

        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      {openLogin && <Login />}
    </>
  )
}

export default SignUp;