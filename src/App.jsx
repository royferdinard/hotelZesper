import { useState, useTranslation } from 'react'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import About from './pages/about'
import Gallery from './pages/gallery'
import TestimonialSection from './pages/testimonial'
import BarPage from './pages/bar'
import SpaPage from './pages/spa'
import HelpPage from './pages/help'
import EventsPage from './pages/events'
import Blog from './pages/blog'
import Contact from './pages/contact'
import SettingsPage from './pages/setting'
import Rooms from './pages/rooms'
import PrivacyPolicy from './pages/privacy'
import CookiesPolicy from './pages/cookies'
import Terms from './pages/terms'
import RoomDetails from './components/roomComponents/roomDetail'
import Booking from './pages/booking'
import Receipt from './pages/receipt'
import EventDetail from './components/eventComponents/eventDetail'
import EventBooking from './pages/eventBooking'
import EventReceipt from './pages/eventReceipt'
import DrinkDetails from './components/barComponents/drinkDetail'
import DrinkBooking from './pages/drinkBooking'
import DrinkReceipt from './pages/drinkReceipt'
import SpaDetails from './components/spaComponents/spaDetail'
import SpaBooking from './pages/spaBook'
import SpaReceipt from './pages/spaReceipt'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarDrinks from './components/barComponents/barDrink'
import SpaServicesContent from './components/spaComponents/spaServicesContent'
import HotelEvents from './components/eventComponents/hotelEvents'
import ChatButton from './components/button/chatbotButton'
import ChatbotPopup from './components/popup/chat/chatbotPop'
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup'
import ForgetPassword from './pages/auth/forgetPassword'
import ResetPassword from './pages/auth/resetPassword'
import './components/translation/i18n'
function App() {

  const [openChat, setOpenChat] = useState(false);
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Header />
      <ChatButton toggleChat={() => setOpenChat(true)} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/testimonial' element={<TestimonialSection />} />
        <Route path='/bar' element={<BarPage />} />
        <Route path='/spa' element={<SpaPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/setting' element={<SettingsPage />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/cookies' element={<CookiesPolicy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/bar/:id" element={<DrinkDetails />} />
        <Route path="/spa/:id" element={<SpaDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/spaBooking" element={<SpaBooking />} />
        <Route path="/drinkBooking" element={< DrinkBooking />} />
        <Route path="/eventBooking" element={<EventBooking />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/eventReceipt" element={<EventReceipt />} />
        <Route path="/drinkReceipt" element={<DrinkReceipt />} />
        <Route path="/spaReceipt" element={<SpaReceipt />} />
        <Route path="/barDrink" element={<BarDrinks />} />
        <Route path="/hotelEvents" element={<HotelEvents />} />
        <Route path="/spaServicesContent" element={<SpaServicesContent />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />*/}
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} /> 
      </Routes>

      {openChat && (
        <ChatbotPopup closeChat={() => setOpenChat(false)} />
      )}
    </>
  )
}

export default App
