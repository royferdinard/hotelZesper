import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../button'
import { BeatLoader } from "react-spinners";
import { ScaleLoader } from "react-spinners";
import { DotLoader } from "react-spinners";
import { ClipLoader } from "react-spinners";
import { CircleLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactForm() {

  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: ""
  });

  const [error, setError] = useState({})
  const [errorActivator, setErrorActivator] = useState(true)
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.value

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.firstName.trim() === "") {
      setErrorActivator(true);
      setError((prev) => ({
        ...prev,
        firstName: t("FirstName is required")
      }))
      return;
    }
    if (formData.lastName.trim() === "") {
      setErrorActivator(true)
      setError((prev) => ({
        ...prev, lastName: t("LastName is required")
      }))
      return;
    }
    if (formData.phoneNumber.trim() === "") {
      setErrorActivator(true)
      setError((prev) => ({
        ...prev, phoneNumber: t("Phone number is required")
      }))
      return;
    }
    if (formData.email.trim() === "") {
      setErrorActivator(true)
      setError((prev) => ({
        ...prev, email: t("Email is required")
      }))
      return;
    }
    if (formData.subject.trim() === "") {
      setErrorActivator(true)
      setError((prev) => ({
        ...prev, subject: t("Subject is required")
      }))
      return;
    }
    if (formData.message.trim() === "") {
      setErrorActivator(true)
      setError((prev) => ({
        ...prev, message: t("Message is required")
      }))
      return;
    }

    try {
      setLoading(true);
      setTimeout(() => {
        toast.success(t("Thanks for contacting us. Our team will call you soon"))
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });
        setLoading(false)
        setError({});
      }, 5000);
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <>
      <ToastContainer autoClose={5000} position='top-right' />

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-sm shadow-sm h-full border border-white dark:border-gray-700 w-full transition-colors">

        <h2 className="text-xl md:2xl font-bold text-blue-900 dark:text-gray-50 mb-2">
          {t('Send Us a Message')}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* FIRST + LAST NAME */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-medium text-blue-900 dark:text-gray-200 text-sm">
                {t('First Name')}
              </label>

              <input
                type="text"
                name="firstName"
                placeholder="John"
                onChange={handleChange}
                value={formData.firstName}
                className="w-full border text-sm bg-gray-50 dark:bg-gray-800 dark:text-white text-gray-600 border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {error.firstName && errorActivator === true && (
                <p className="text-red-500 text-xs mt-2">
                  {t(error.firstName)}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-blue-900 dark:text-gray-200 text-sm">
                {t('Last Name')}
              </label>

              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                onChange={handleChange}
                value={formData.lastName}
                className="w-full border text-sm bg-gray-50 dark:bg-gray-800 dark:text-white text-gray-600 border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {error.lastName && errorActivator === true && (
                <p className="text-red-500 text-xs mt-2">
                  {t(error.lastName)}
                </p>
              )}
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-medium text-blue-900 dark:text-gray-200 text-sm">
              {t('Email Address')}
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              onChange={handleChange}
              value={formData.email}
              className="w-full border text-sm bg-gray-50 dark:bg-gray-800 dark:text-white text-gray-600 border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {error.email && errorActivator === true && (
              <p className="text-red-500 text-xs mt-2">
                {t(error.email)}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-2 font-medium text-blue-900 dark:text-gray-200 text-sm">
              {t('Phone Number')}
            </label>

            <input
              type="tel"
              name="phoneNumber"
              placeholder="+254 700 000000"
              onChange={handleChange}
              value={formData.phoneNumber}
              className="w-full border text-sm bg-gray-50 dark:bg-gray-800 dark:text-white text-gray-600 border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {error.phoneNumber && errorActivator === true && (
              <p className="text-red-500 text-xs mt-2">
                {t(error.phoneNumber)}
              </p>
            )}
          </div>

          {/* SUBJECT */}
          <div>
            <label className="block mb-2 font-medium text-blue-900 dark:text-gray-200 text-sm">
              {t('Subject')}
            </label>

            <select
              name="subject"
              onChange={handleChange}
              value={formData.subject}
              className="w-full border text-sm bg-gray-50 dark:bg-gray-800 dark:text-white text-gray-600 border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{t('Select a subject')}</option>
              <option value="reservation">{t('Booking Inquiry')}</option>
              <option value="feedback">{t('Feedback')}</option>
              <option value="complaint">{t('Complaint')}</option>
              <option value="other">{t('Other')}</option>
            </select>

            {error.subject && errorActivator === true && (
              <p className="text-red-500 text-xs mt-2">
                {t(error.subject)}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-2 font-medium text-blue-900 dark:text-gray-200 text-sm">
              {t('Message')}
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder={t("How can we help you?")}
              onChange={handleChange}
              value={formData.message}
              className="w-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-white bg-gray-50 dark:bg-gray-800 text-sm rounded-md px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            />

            {error.message && errorActivator === true && (
              <p className="text-red-500 text-xs mt-2">
                {t(error.message)}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={loading}
            backgroundColor={'bg-blue-700'}
            borderColor={'border-blue-700'}
            textColor={'text-white'}
          >
            {loading ? (
              <span className="flex flex-row items-center justify-center gap-2">
                <ScaleLoader color='white' />
                {t('Sending...')}
              </span>
            ) : (
              t("Send Message")
            )}
          </Button>

        </form>
      </div>
    </>
  )
}

export default ContactForm