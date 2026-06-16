import React from "react";
import { useState, useEffect, useRef, useTranslation } from "react";
import { useLocation } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderCircle } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./login";



const ForgetPassword = () => {

       const { t, i18n } = useTranslation();

     const [openLogin, setOpenLogin] = useState(false)
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(null);

    const validateEmail = (value) => {
        const format = /^[^\s@]+@[^\s@]+\.[^\s@]$/;
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
    const handleOpenLogin = ()=>setOpenLogin(true)
    return (
        <>
            <div className="fixed flex-col  inset-0 bg-black/70 z-50 font-poppins min-h-screen w-full flex items-center justify-center  px-4 py-4">

                <form className="max-w-md w-full bg-white shadow rounded-md p-8 flex flex-col gap-6 border border-gray-200">

                    {/* Header */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-full text-xl shadow-md">
                            <FaLock />
                        </div>

                        <h1 className="text-xl font-bold text-blue-900">
                            Forgot Password
                        </h1>

                        <p className="text-sm text-gray-500 text-center">
                            Enter your email and we’ll send you a link to reset your password
                        </p>
                    </div>

                    {/* Email Input */}
                    <label className="flex flex-col gap-2">
                        <span className="font-medium text-gray-600 text-sm">Email Address</span>

                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-900 transition"
                        />

                        <span className="text-xs text-red-600">
                            Please input a valid email!
                        </span>
                    </label>

                    {/* Send Button */}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 text-sm bg-blue-900 hover:bg-blue-800 active:scale-95 transition-all duration-200 text-white font-semibold py-2.5 rounded-md shadow-md hover:shadow-lg"
                    >
                        <span>Send Reset Link</span>
                    </button>

                    {/* Back to Login */}
                    <p className="text-center text-sm text-gray-500">
                        Remember your password?
                        <Link onClick={handleOpenLogin} className="text-blue-800 font-semibold cursor-pointer ml-1 hover:text-blue-900">
                            Login
                        </Link>
                    </p>

                </form>
            </div>
             {
                openLogin&&(
                    <Login/>
                )
            }
        </>
    )
}
export default ForgetPassword