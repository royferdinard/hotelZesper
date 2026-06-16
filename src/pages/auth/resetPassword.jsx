import React from "react";
import { useState, useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderCircle } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {

  const { t, i18n } = useTranslation();

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validConfirmpassword, setValidConfirmPassword] = useState(null)

  const validatepassword = (value) => {
    const format = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isvalid = format.test(value);
    setValidPassword(isvalid)
    return (isvalid);
  }

  const validateConfirmPassword = (value) => {
    if (password === confirmPassword) {
      setValidConfirmPassword(true)
    } else {
      setValidConfirmPassword(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validPassword = validatepassword(password)
    const validConfirmPassword = (password === confirmPassword);

    if (!validConfirmPassword || !validPassword) {
      console.error("Enter valid sign up detail before continueing")
      toast.error("Enter valid sign up detail before continueing")
    } else {
      toast.success("You have successfully created your account")
      console.log("You have successfully created an account")
    }

    if (password === "") {
      toast.error("Password is required")
    }

    if (confirmPassword === "") {
      toast.error("Confirm your password")
    }
  }

  return (
    <>
      <div className="font-poppins min-h-screen w-full flex items-center justify-center bg-linear-to-br from-blue-50 via-gray-100 to-blue-100 px-4 py-4">

        <form className="overflow-x-hidden scroll-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-100 max-w-md w-full h-[83vh] overflow-y-auto bg-white shadow rounded-md p-8 flex flex-col gap-6 border border-gray-200">

          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-900 text-white rounded-full text-2xl shadow-md">
              <FaUnlockKeyhole />
            </div>

            <h1 className="text-3xl font-bold text-blue-900">
              {t("Reset Password")}
            </h1>

            <p className="text-sm text-gray-500 text-center">
              {t("Create a new password for your account")}
            </p>
          </div>

          {/* New Password */}
          <label className="flex flex-col gap-2">
            <span className="font-medium text-gray-700">
              {t("New Password")}
            </span>

            <input
              type="password"
              placeholder={t("Enter new password")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                validatepassword(e.target.value);
              }}
            />

            {password.trim() !== "" && validPassword === false && (
              <span className="text-sm text-red-600">
                {t("Must be at least 8 characters with letters and numbers")}
              </span>
            )}
          </label>

          {/* Confirm Password */}
          <label className="flex flex-col gap-2">
            <span className="font-medium text-gray-700">
              {t("Confirm Password")}
            </span>

            <input
              type="password"
              placeholder={t("Confirm new password")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                validateConfirmPassword(e.target.value)
              }}
            />

            {confirmPassword.trim() !== "" && validConfirmpassword === false && (
              <span className="text-sm text-red-600">
                {t("It should match password")}
              </span>
            )}
          </label>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg"
          >
            <span>{t("Reset Password")}</span>
          </button>

          {/* Back to Login */}
          <p className="text-center text-sm text-gray-500">
            {t("Remember your password?")}
            <Link to={"/login"} className="text-blue-800 font-semibold cursor-pointer ml-1 hover:text-blue-900">
              {t("Login")}
            </Link>
          </p>

        </form>
      </div>
    </>
  )
}

export default ResetPassword;