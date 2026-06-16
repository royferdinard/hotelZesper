import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderCircle } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Hotel } from "lucide-react";
import { HotelIcon } from "lucide-react";
import SignUp from "./signup";
import ForgetPassword from "./forgetPassword";
import { useTranslation } from "react-i18next";

const Login = ({ close, setClosing }) => {

    const { t, i18n } = useTranslation();

    const [openSignUp, setOpenSignUp] = useState(false)
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(null);
    const navigate = useNavigate()
    const [openForgetPassord, setOpenForgetPassword] = useState(false)

    const validateEmail = (value) => {
        const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isvalid = format.test(value);
        setValidEmail(isvalid)
        return (isvalid);
    }

    const validatepassword = (value) => {
        const format = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isvalid = format.test(value);
        setValidPassword(isvalid)
        return (isvalid);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            toast.error(t("Email is required"));
            return;
        }

        if (password.trim() === "") {
            toast.error(t("Password is required"));
            return;
        }

        const validEmail = validateEmail(email);
        const validPassword = validatepassword(password);

        if (!validEmail || !validPassword) {
            toast.error(t("Enter valid login details"));
            return;
        }

        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (user) =>
                user.email === email &&
                user.password === password
        );

        if (!foundUser) {
            toast.error(t("Invalid email or password"));
            return;
        }

        localStorage.setItem(
            "currentUser",
            JSON.stringify(foundUser)
        );

        toast.success(t("Login successful"));

        setTimeout(() => {
            close();
            navigate("/");
        }, 3000);
    };

    const openCreateAccount = () => setOpenSignUp(true)

    return (
        <>
            <div className="fixed flex-col inset-0 bg-black/70 z-50 font-poppins min-h-screen w-full flex items-center justify-center px-4 py-4">

                <form onSubmit={handleSubmit} className="overflow-x-hidden scroll-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-100 max-w-md w-full h-[83vh] overflow-y-auto bg-white shadow rounded-md p-8 flex flex-col gap-6 border border-gray-200 relative">

                    <button onClick={close} className="text-gray-500 absolute top-2 right-2 flex flex-col items-center justify-center w-9 h-9 rounded-full bg-gray-50 text-sm transition-all duration-300 hover:bg-gray-100">
                        <X size={20} />
                    </button>

                    {/* login head */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-full text-lg shadow-md">
                            <HotelIcon />
                        </div>

                        <h1 className="text-xl font-bold text-blue-900">
                            {t("Welcome Back")}
                        </h1>

                        <p className="text-sm text-gray-500 text-center">
                            {t("Login to access more services and settings")}
                        </p>
                    </div>

                    {/* continue with google */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-100 transition py-2.5 rounded-md font-medium text-gray-600 text-sm"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                            className="w-4 h-5"
                        />
                        {t("Continue with Google")}
                    </button>

                    {/* OR */}
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-xs text-gray-400">OR</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* email */}
                    <label className="flex flex-col gap-2">
                        <span className="font-medium text-gray-600 text-sm">
                            {t("Email")}
                        </span>

                        <input
                            type="email"
                            placeholder={t("example@gmail.com")}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setValidEmail(e.target.value)
                            }}
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition text-sm"
                        />

                        {validEmail === false && email.trim() !== "" && (
                            <span className="text-xs text-red-600">
                                {t("Please input a valid email!")}
                            </span>
                        )}
                    </label>

                    {/* password */}
                    <label className="flex flex-col gap-2">
                        <span className="font-medium text-gray-600 text-sm">
                            {t("Password")}
                        </span>

                        <input
                            type="password"
                            placeholder={t("Password")}
                            value={password}
                            onChange={(e) => {
                                setValidPassword(e.target.value)
                                setPassword(e.target.value)
                            }}
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition text-sm"
                        />

                        {password.trim() !== "" && validPassword === false && (
                            <span className="text-xs text-red-600">
                                {t("Please input a valid password")}
                            </span>
                        )}
                    </label>

                    {/* forgot password */}
                    <div className="flex justify-end">
                        <Link
                            onClick={() => setOpenForgetPassword(true)}
                            className="text-sm text-blue-800 hover:text-blue-900 font-medium"
                        >
                            {t("Forgot Password?")}
                        </Link>
                    </div>

                    {/* login button */}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all duration-200 text-white font-semibold py-2.5 rounded-md shadow-md hover:shadow-lg"
                    >
                        <span>{t("Login")}</span>
                        <FaSignInAlt className="text-lg" />
                    </button>

                    {/* signup */}
                    <p className="text-center text-sm text-gray-500">
                        {t("Don’t have an account?")}
                        <Link
                            onClick={openCreateAccount}
                            className="text-blue-800 font-semibold cursor-pointer ml-1 hover:text-blue-900"
                        >
                            {t("Sign Up")}
                        </Link>
                    </p>

                </form>
            </div>

            {openSignUp && <SignUp />}
            {openForgetPassord && <ForgetPassword setClose={setOpenForgetPassword} />}
        </>
    )
}

export default Login