import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import ReuseableHero from "../components/hero/reusableHero";
import CallToAction from "../components/cta";
import callImage from "../assets/hotelzesper-front1.webp";
import Button from "../components/button";
import Footer from "../components/footer";
// import BookingPopup from "./bookingPopup";
import ContactHero from "../components/hero/contactHero";
import ContactInfo from "../components/contactComponents/contactInfo";
import ContactForm from "../components/forms/contactForm";
import ContactLocation from "../components/contactComponents/location";
import ContactCta from "../components/contactComponents/contactCta";

const Contact = () => {

    const { t, i18n } = useTranslation();

    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleBooking = () => {
        setIsBookingOpen(true);
    };

    const fakeBackend = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "Success" });
            }, 2000);
        });
    };

    const validate = (data) => {
        let err = {};

        if (!data.firstName) err.firstName = "First name is required";
        if (!data.lastName) err.lastName = "Last name is required";
        if (!data.email) err.email = "Email is required";
        if (!data.phone) err.phone = "Phone is required";
        if (!data.subject) err.subject = "Subject is required";
        if (!data.message) err.message = "Message is required";

        return err;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        setSuccess(false);

        try {
            await fakeBackend();

            setSuccess(true);
            e.target.reset();
            setErrors({});

            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ContactHero />

            <section className="w-full gap-4 bg-slate-100 dark:bg-gray-950 px-4 md:px-4 py-8 flex items-start md:flex-row flex-col justify-center">

                {/* Contact Info */}
                <div className="w-full lg:w-[40%] sticky h-fit">
                    <ContactInfo />
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-[60%]">
                    <ContactForm />
                </div>

            </section>

            <ContactLocation />
            <ContactCta />
            <Footer />

            {isBookingOpen && (
                <BookingPopup
                    closeForm={() => setIsBookingOpen(false)}
                />
            )}
        </>
    );
};

export default Contact;