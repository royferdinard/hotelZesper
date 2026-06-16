import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./login";
import { X, ArrowLeft } from "lucide-react";

const ForgetPassword = ({ setClose }) => {

  const { t, i18n } = useTranslation();

  const [openLogin, setOpenLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [newPassword, setNewPassword] = useState("");
  const [validPassword, setValidPassword] = useState(null);

  const validatepassword = (value) => {
    const format = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isvalid = format.test(value);
    setValidPassword(isvalid);
    return isvalid;
  };

  // STEP 1
  const handleCheckEmail = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userEmail = users.find(
      (user) =>
        user.email.trim().toLowerCase() === email.trim().toLowerCase()
    );

    if (!userEmail) {
      toast.error(t("Email not found!"));
      return;
    }

    toast.success(t("Email verified! Set new password."));
    setStep(2);
  };

  // STEP 2
  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!validatepassword(newPassword)) {
      toast.error(t("Invalid password format"));
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) =>
      user.email.trim().toLowerCase() === email.trim().toLowerCase()
        ? { ...user, password: newPassword }
        : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success(t("Password updated successfully!"));

    setTimeout(() => {
      setOpenLogin(true);
    }, 1200);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">

        {/* STEP 1 */}
        {step === 1 && (
          <form
            onSubmit={handleCheckEmail}
            className="max-w-md w-full bg-white dark:bg-gray-900 dark:text-white p-8 rounded-md flex flex-col gap-5 relative border border-gray-200 dark:border-gray-800"
          >
            <button
              onClick={() => setClose(false)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 w-9 h-9 bg-gray-50 dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"
            >
              <X />
            </button>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-900 text-white rounded-full">
                <FaLock />
              </div>

              <h1 className="text-xl font-bold mt-3">
                {t("Forgot Password")}
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("Enter your email to continue")}
              </p>
            </div>

            <input
              type="email"
              placeholder={t("Enter email")}
              className="border p-2.5 rounded outline-none border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 text-sm focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
              {t("Verify Email")}
            </button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form
            onSubmit={handleResetPassword}
            className="max-w-md w-full bg-white dark:bg-gray-900 dark:text-white relative p-8 rounded-md flex flex-col gap-5 border border-gray-200 dark:border-gray-800"
          >
            <button
              onClick={() => setStep(1)}
              className="absolute top-2 left-2 w-9 h-9 bg-gray-50 dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-900 text-white rounded-full">
                <FaLock />
              </div>

              <h1 className="text-xl font-bold mt-3">
                {t("Set New Password")}
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("Enter your new password")}
              </p>
            </div>

            <input
              type="password"
              placeholder={t("New password")}
              className="border p-2.5 rounded outline-none border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 text-sm focus:ring-2 focus:ring-blue-500"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                validatepassword(e.target.value);
              }}
              required
            />

            {newPassword.trim() !== "" && validPassword === false && (
              <span className="text-xs text-red-500">
                {t("Must be at least 8 characters with uppercase, lowercase and number")}
              </span>
            )}

            <button className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
              {t("Reset Password")}
            </button>
          </form>
        )}
      </div>

      <ToastContainer autoClose={3000} position="top-right" />

      {openLogin && <Login />}
    </>
  );
};

export default ForgetPassword;