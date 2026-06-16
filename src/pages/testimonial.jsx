import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import {
  FaStar,
  FaQuoteLeft,
  FaAngleLeft,
  FaAngleRight,
  FaCamera,
} from "react-icons/fa";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialTestimonials = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Visitor",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "This hotel made my wedding dream come true. Hotel Zesper gave us an unforgettable event experience.",
    rating: 5,
    nationality: "America",
    type: "Wedding Experience",
  },
  {
    id: 2,
    name: "James Mwangi",
    role: "Guest",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "I enjoy the cool environment and natural breeze at Zesper. It is the perfect place for weekend relaxation.",
    rating: 5,
    nationality: "Kenya",
    type: "Luxury Stay",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Customer",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "Hotel Zesper provides amazing meals for breakfast, lunch, dinner and supper. Perfect place for events.",
    rating: 4,
    nationality: "America",
    type: "Restaurant Experience",
  },
];

const TestimonialSection = () => {

  const { t, i18n } = useTranslation();

  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const [index, setIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
    nationality: "",
    type: "",
    image: "",
  });

  // Next Slide
  const nextSlide = () => {
    setIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  // Input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl =
        URL.createObjectURL(file);

      setForm({
        ...form,
        image: imageUrl,
      });
    }
  };

  // Submit Review
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = true;
    if (!form.role.trim()) newErrors.role = true;
    if (!form.nationality.trim()) newErrors.nationality = true;
    if (!form.type.trim()) newErrors.type = true;
    if (!form.text.trim()) newErrors.text = true;
    if (!form.image) newErrors.image = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newReview = {
      id: Date.now(),
      name: form.name,
      role: form.role || "Guest",
      text: form.text,
      rating: Number(form.rating),
      nationality: form.nationality || "Guest",
      type: form.type || "Customer Review",
      image:
        form.image ||
        `https://ui-avatars.com/api/?name=${form.name}&background=random`,
    };

    setTestimonials([newReview, ...testimonials]);
    setIndex(0);

    setForm({
      name: "",
      role: "",
      text: "",
      rating: 5,
      nationality: "",
      type: "",
      image: "",
    });

    setErrors({});
  };
  return (
    <section className="w-full  pt-24   px-0  overflow-hidden dark:bg-slate-900">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* HEADER */}
      <div className="text-center w-full mx-auto mb-8 px-4">
        <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white shadow-xl mb-5 animate-pulse">
          <FaStar className="text-2xl" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white">
          {t('What Guests Say About Us')}
        </h2>

        <p className="text-slate-500 mt-2 text-sm md:text-md dark:text-gray-300">
          {t("Real experiences from guests who enjoyed the luxury, comfort and premium hospitality of Hotel Zesper.")}
        </p>
      </div>

      {/* testimony slide */}
      <div className="relative w-full p-4 bg-gray-100 dark:bg-slate-800">

        <div className="overflow-hidden rounded-md w-full ">
          <div
            className="flex transition-transform duration-700 ease-in-out bg-gray-100 dark:bg-transparent py-4 "
            style={{
              transform: `translateX(-${index * 100
                }%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-full flex justify-center px-2 dark:bg-slate-900 py-4 rounded-lg dark:border  dark:border-slate-700"
              >
                <div className="w-full md:w-[85%] bg-white dark:bg-slate-900 dark:border dark:border-slate-700 border border-white shadow-sm rounded-sm p-8 md:p-12">

                  {/* Quote + Rating */}
                  <div className="flex justify-between items-start">
                    <FaQuoteLeft className="text-4xl text-blue-100" />

                    <div className="flex gap-1 text-yellow-400 text-sm">
                      {Array.from({
                        length: item.rating,
                      }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-600 dark:text-gray-300 text-sm md:text-lg leading-relaxed italic mt-4">
                    {t(item.text)}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-10 border-t border-slate-200 pt-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100 shadow-sm"
                    />

                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-blue-900 dark:text-blue-600">
                        {t(item.name)}
                      </h4>

                      <p className="text-slate-500 dark:text-gray-300 text-sm">
                        {t(item.role)}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-nowrap gap-3 mt-8 bg-white dark:bg-slate-900 dark:border dark:border-slate-700 shadow-sm p-2 rounded-sm">
                    <span className="bg-blue-100 dark:bg-blue-900/30 dark:border dark:text-blue-600 dark:border-blue-600 text-blue-700 px-4 py-2 rounded-full text-xs font-medium shadow-sm">
                      {t(item.type)}
                    </span>

                    <span className="bg-yellow-100 text-yellow-700 dark:bg-red-900/30 dark:border dark:border-red-900 px-4 py-2 rounded-full text-xs font-medium shadow-sm">
                      {t('From')} {""} {t(item.nationality)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2  md:left-[1.5rem] top-1/2 dark:bg-slate-900 dark:border dark:border-slate-700 dark:text-white -translate-y-1/2 w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaAngleLeft className="text-blue-700 text-xl dark:text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 dark:bg-slate-900 dark:border dark:border-slate-700 dark:text-white md:right-[1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <FaAngleRight className="text-blue-700 text-xl dark:text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8 mb-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${index === i
              ? "w-10 h-3 bg-blue-600"
              : "w-3 h-3 bg-slate-300"
              }`}
          />
        ))}
      </div>

      {/* REVIEW FORM */}
      <div className="w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900 px-4 py-8">

        <div className="w-full md:w-[65%] bg-white dark:bg-slate-800 shadow-sm rounded-sm p-8 md:p-8 border border-slate-100 dark:border-slate-700">

          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-2">
            {t('Leave a Review')}
          </h3>

          <p className="text-slate-500 dark:text-slate-300 mb-4 text-sm">
            {t('Share your experience with Hotel Zesper.')}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start gap-5 w-full"
          >

            <div className="flex flex-col items-center w-full justify-center gap-4 md:flex-row md:justify-space-between md:items-start">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder={t("Your Full Name")}
                  value={form.name}
                  onChange={handleChange}
                  className="p-3 rounded-md w-full border text-xs md:text-sm bg-gray-50 dark:bg-slate-900 dark:text-white border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-gray-400"
                />
                {errors.name && (
                  <span className="text-red text-red-400 text-xs">
                    {t('This field is required!')}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-start justify-start w-full gap-2">
                {/* Role */}
                <input
                  type="text"
                  name="role"
                  placeholder={t("Your Role")}
                  value={form.role}
                  onChange={handleChange}
                  className="p-3 rounded-md border w-full text-xs md:text-sm bg-gray-50 dark:bg-slate-900 dark:text-white border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-gray-400"
                />
                {errors.role && (
                  <span className="text-red text-red-400 text-xs">
                    {t('This field is required!')}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center w-full justify-center gap-4 md:flex-row md:justify-space-between md:items-start">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                {/* Nationality */}
                <input
                  type="text"
                  name="nationality"
                  placeholder={t("Your Country")}
                  value={form.nationality}
                  onChange={handleChange}
                  className="p-3 rounded-md border w-full text-xs md:text-sm bg-gray-50 dark:bg-slate-900 dark:text-white border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-gray-400"
                />
                {errors.nationality && (
                  <span className="text-red text-red-400 text-xs">
                    {t('This field is required!')}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-start justify-start w-full gap-2">
                {/* Type */}
                <input
                  type="text"
                  name="type"
                  placeholder={t(t("Testimonial Type"))}
                  value={form.type}
                  onChange={handleChange}
                  className="p-3 rounded-md border w-full text-xs md:text-sm bg-gray-50 dark:bg-slate-900 dark:text-white border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400 dark:placeholder:text-gray-400"
                />
                {errors.type && (
                  <span className="text-red text-red-400 text-xs">
                    {t('This field is required!')}
                  </span>
                )}
              </div>
            </div>

            {/* Upload Image */}
            <div className="md:col-span-2 w-full bg-gray-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-3xl p-6 text-center hover:border-blue-500 transition">

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="imageUpload"
                className="hidden"
              />

              <label
                htmlFor="imageUpload"
                className="cursor-pointer flex flex-col items-center"
              >
                <FaCamera className="text-3xl text-blue-500 mb-3" />

                <span className="font-semibold text-sm md:text-lg text-slate-700 dark:text-slate-100">
                  {t('Upload Your Photo')}
                </span>

                <span className="text-xs md:text-sm text-slate-400 dark:text-slate-300">
                  {t('Click to upload image')}
                </span>
              </label>

              {errors.image && (
                <span className="text-red text-red-400 text-xs">
                  {t('Input your picture!')}
                </span>
              )}

              {form.image && (
                <img
                  src={form.image}
                  alt="preview"
                  className="w-15 h-15 rounded-full object-cover mx-auto mt-5 border-4 border-blue-100 dark:border-blue-800 shadow-lg"
                />
              )}
            </div>

            <div className="flex flex-col items-start justify-start w-full gap-2">
              {/* Review */}
              <textarea
                name="text"
                placeholder={t("Write your review...")}
                value={form.text}
                onChange={handleChange}
                className="md:col-span-2 bg-gray-50 dark:bg-slate-900 dark:text-white h-30 p-4 w-full rounded-md text-xs md:text-sm border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none placeholder:text-slate-400 dark:placeholder:text-gray-400"
              />

              {errors.text && (
                <span className="text-red text-red-400 text-xs">
                  {t('This field is required!')}
                </span>
              )}
            </div>

            {/* Rating */}
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="p-3 rounded-md text-slate-500 dark:text-slate-200 w-full border text-xs md:text-sm bg-gray-50 dark:bg-slate-900 border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="5">
                {t('★★★★★ Excellent')}
              </option>
              <option value="4">
                {t('★★★★ Very Good')}
              </option>
              <option value="3">
                {t('★★★ Good')}
              </option>
              <option value="2">
                {t('★★ Fair')}
              </option>
              <option value="1">
                {t('★ Poor')}
              </option>
            </select>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white w-full rounded-md px-6 py-3 font-semibold hover:scale-[1.02] transition shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              {t('Submit Review')}
            </button>
          </form>
        </div>


      </div>
      <Footer />
    </section>
  );
};

export default TestimonialSection;