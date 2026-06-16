// import React, { useState, useTranslation } from "react";
// import { useTranslation } from 'react-i18next';
// import Spinner from "./spinningBar";

// const ChatbotPopup = ({ closeChat }) => {

//     const { t, i18n } = useTranslation();

//   const [messages, setMessages] = useState([
//     { text: "Hi 👋 Welcome to Zesper Hotel! How can I help?", sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");
//   const [loader,setLoader]=useState(false);

//   const handleSend = () => {
//     const cleanInput = input.trim();
//     if (!cleanInput){
//       setLoader(true);
//       const noData =  {
//          text:"Please!! ask me any question about hotel zesper.",
//         sender: "bot",
//        }
//         setTimeout(() => {
//           setMessages((prev)=>[
//             ...prev,
//             userMessage
//           ]);
//        return;
//         }, 4000);
//     };

//     const userMessage = { text: input, sender: "user" };
//     setInput("");
//     setLoader(true);
//     setTimeout(() => {
//       setLoader(false);
//       const botReply = getBotResponse(input);
//     setMessages([...messages, userMessage, botReply]);
//     }, 4000);
//   };

//   window.addEventListener("keyDown",(e)=>{
//     if(e.key === "Enter"){
//       handleSend()
//     }
//   });

//   {/*answer to user questions*/}
//   const getBotResponse = (question) => {
//     const q = question.toLowerCase();

    // if (q.includes("price") || q.includes("cost")) {
    //   return { text: "Rooms start from 💰 Ksh.1500 per night.", sender: "bot" };
    // }
    // if (q.includes("location")|| q.includes("address")|| q.includes("contact")|| q.includes("email")|| q.includes("phone")|| q.includes("call")|| q.includes("reach")|| q.includes("find")|| q.includes("where")|| q.includes("located")|| q.includes("location")) {
    //   return { text: "We are located 🌍🌍 in kisii county, Nyanchwa sub-county. For more information email us at hotelzesper@gmail.com or call us at +254 739 279 531", sender: "bot" };
    // }
    // if (q.includes("check-in")|| q.includes("check in")|| q.includes("checkin")|| q.includes("check-in time")|| q.includes("check in time")|| q.includes("checkin time")) {
    //   return { text: "⏰Check-in is from 2PM.", sender: "bot" };
    // }
    //  if (q.includes("hey") || q.includes("hello") || q.includes("hi")) {
    //   return { text: "Hello!😂😂 How can I help you?", sender: "bot" };
    // }
    // if  (q.includes("thank") || q.includes("thanks")) {
    //   return { text: "You're welcome! Let me know if you have any other questions.", sender: "bot" };
    // }
    // if (q.includes("bye") || q.includes("goodbye")) {
    //   return { text: "Goodbye!🙌🙌 Have a great day!", sender: "bot" };
    // }
    // if (q.includes("amenities") || q.includes("facilities")) {
    //   return { text: "We offer free 🛜 Wi-Fi, a fitness center, and a swimming pool.", sender: "bot" };
    // }
    // if (q.includes("reservation") || q.includes("booking")) {
    //   return { text: "You can make a reservation on our website or by calling our front desk.", sender: "bot" };
    // }
    // if (q.includes("cancellation") || q.includes("policy")) {
    //   return { text: "Our cancellation policy allows free cancellation up to 24 hours before check-in.", sender: "bot" };
    // }
    // if  (q.includes("parking")) {
    //   return { text: "We have a free🚗🚗 parking lot available for our guests.", sender: "bot" };
    // }
    // if  (q.includes("restaurant") || q.includes("dining")) {
    //   return { text: "Our🍨🍨 on-site restaurant serves breakfast, lunch, and dinner.", sender: "bot" };
    // }
    // if  (q.includes("pool") || q.includes("swimming")) {
    //   return { text: "Our🏊‍♀️🏊‍♀️ swimming pool is open from 8 AM to 10 PM. They are a great place to relax and enjoy the sun. Children and adults swim in different areas.", sender: "bot" };
    // }
    // if (q.includes("gym") || q.includes("fitness")) {
    //   return { text: "Our🏋️‍♂️🏋️‍♂️ fitness center is open 24/7 and equipped with cardio machines, weights, and yoga mats.", sender: "bot" };
    // }
    // if (q.includes("spa") || q.includes("wellness")) {
    //   return { text: "Our spa offers a variety of treatments including massages, facials, and body wraps.", sender: "bot" };
    // }
    // if (q.includes("events") || q.includes("meetings")) {
    //   return { text: "We have event spaces available for meetings, conferences, and social gatherings. Please contact our events team for more information.", sender: "bot" };

    // }
    // if (q.includes("pet") || q.includes("pets")) {
    //   return { text: "We are a pet-friendly hotel. Please contact us for our pet policy and any additional fees.", sender: "bot" };
    // }
    //  if (q.includes("security") || q.includes("safety")) {
    //   return { text: "👮👮We have a 24/7 security presence to ensure the safety of our guests.", sender: "bot" };
    // }
    //  if( (q.includes("meals") || q.includes("food")||(q.includes("meals") || q.includes("food") || q.includes("dining") || q.includes("restaurant")))) {
    //   return { text: "We have a restaurant on-site that serves🍗🍗🍗 breakfast, lunch, and dinner. We dispose of all food waste responsibly. Ready to join us?", sender: "bot" };
    // }
    //  if (q.includes("yes") || q.includes("sure") || q.includes("okay") || q.includes("alright")|| q.includes("sounds good")|| q.includes("definitely")|| q.includes("absolutely")|| q.includes("yeah")|| q.includes("yep")|| q.includes("of course")|| q.includes("why not")|| q.includes("let's do it")|| q.includes("let us do it")|| q.includes("let's go")|| q.includes("let us go")|| q.includes("ok")|| q.includes("alrighty")|| q.includes("great")|| q.includes("awesome")|| q.includes("fantastic")|| q.includes("wonderful")|| q.includes("amazing")|| q.includes("perfect")|| q.includes("sounds great")|| q.includes("sounds perfect")|| q.includes("sounds wonderful")|| q.includes("sounds amazing")|| q.includes("sounds fantastic")) {
    //   return { text: "👍👍👍Contact us at hotelzesper@gmail.com or call +254 739 279 531 for more information or visit our website (www.hotelzesper.com) to book your stay.", sender: "bot" };
    // }
    //  if (q.includes("no") || q.includes("nope") || q.includes("not really")) {
    //   return { text: "🫣🫣I understand. Let us know if you have any other questions.", sender: "bot" };
    // }
    //  if (q.includes("name") || q.includes("who are you") || q.includes("what's your name") || q.includes("who am i talking to")) {
    //   return { text: "I am 🤖 the Zesper Chatbot, here to assist you with any questions about our hotel. You may also call me your AI assistant! How can I help you today?", sender: "bot" };
    // }
    // if (((q.includes("bar") || q.includes("drinks") || q.includes("cocktails") || q.includes("beverages")))) {
    //   return { text: "Yah, We have a bar 🍷 on-site that serves a variety of drinks, including cocktails and non-alcoholic beverages.🍾🍾🍾", sender: "bot" };
    // }
    //  if (q.includes("hotel") ||  q.includes("zesper")) {
    //   return { text: "We are the Zesper Hotel, located in kisii county, Nyanchwa sub-county. Do you need more information?", sender: "bot" };
    // }
    //  if (q.includes("fuck") ||  q.includes("shit") || q.includes("damn") || q.includes("bitch") || q.includes("asshole") || q.includes("dick") || q.includes("pussy") || q.includes("bastard") || q.includes("slut") || q.includes("whore") || q.includes("cunt") || q.includes("fucker") || q.includes("motherfucker") || q.includes("dickhead") || q.includes("asshat") || q.includes("douchebag") || q.includes("prick") || q.includes("twat") || q.includes("whore") || q.includes("slut") || q.includes("bitch") || q.includes("asshole") || q.includes("dick") || q.includes("pussy") || q.includes("bastard") || q.includes("fuck you")|| q.includes("silly")) {
    //   return { text: "Oops!😭😞 That's not nice. How can I help you?", sender: "bot" };
    // }
    // if (q.includes("apologize") ||  q.includes("sorry")) {
    //   return { text: "Thank 🤣🤣 you for apologizing! How can I help you?", sender: "bot" };
    // }




//     return {
//       text: "Sorry, I didn’t understand. I am only instructed to answer question about Hotel Zesper?",
//       sender: "bot",
//     };
//   };

//   return (
//     <div className="tailwindcss here">
//       <div className="tailwindcss here">
//         <span className="tailwindcss here">Zesper Chatbot</span>
//         <button className="tailwindcss here" onClick={closeChat}>X</button>
//       </div>

//       <div className="tailwindcss here">
//         {messages.map((msg, index) => (
//           <div key={index} className="tailwindcss here"`}>
//             <span className="tailwindcss here"`}>
//               {msg.text}
//             </span>
//           </div>
//         ))}

//         {loader && (
//           <div className="tailwindcss here">
//             <span className="tailwindcss here">
//               <Spinner>Just moment...</Spinner>
//             </span>
//           </div>
//         )}
//       </div>

//       <div className="tailwindcss here">
//         <input
//           className="tailwindcss here"
//           placeholder="Ask anything..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleSend();
//             }
//           }}
//         />
//         <button className="tailwindcss here" onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatbotPopup;

//   ":": ":",
//   "\"Back To Drinks\"": "\"Rudi kwenye Vinywaji\"",
//   "\"Back To Events\"": "\"Rudi kwa Matukio\"",
//   "\"Back To Room\"": "\"Rudi Chumbani\"",
//   "\"Back To Spa Services\"": "\"Rudi kwenye Huduma za Biashara\"",
//   "{blog.author}": "{blog.author}",
//   "{blog.category}": "{blog.category}",
//   "{blog.date}": "{blog.date}",
//   "{blog.shortDescription}": "{blog.shortDescription}",
//   "{booking.bookedAt}": "{booking.bookedAt}",
//   "{booking.checkIn}": "{booking.checkIn}",
//   "{booking.checkOut}": "{booking.checkOut}",
//   "{booking.drink.name}": "{booking.drink.name}",
//   "{booking.email}": "{booking.email}",
//   "{booking.event.name}": "{booking.event.name}",
//   "{booking.fullName}": "{booking.fullName}",
//   "{booking.guests}": "{booking.guests}",
//   "{booking.id}": "{booking.id}",
//   "{booking.paymentMethod}": "{booking.paymentMethod}",
//   "{booking.phone}": "{booking.phone}",
//   "{booking.room.name}": "{booking.room.name}",
//   "{booking.service.name || booking.service.head}": "{booking.service.name || booking.service.head}",
//   "{category.description}": "{category.description}",
//   "{category.name}": "{category.name}",
//   "{children}": "{children}",
//   "{currentLanguage}": "{currentLanguage}",
//   "{drink.category}": "{drink.category}",
//   "{drink.description}": "{drink.description}",
//   "{drink.head}": "{drink.head}",
//   "{drink.name}": "{drink.name}",
//   "{drink.points}pts": "{drink.points}pts",
//   "{leader.name}": "{leader.name}",
//   "{leader.Role}": "{leader.Role}",
//   "{leader.testimony}": "{leader.testimony}",
//   "{room.description}": "{room.description}",
//   "{room.name}": "{room.name}",
//   "{subscribeState[blog.id]?.count || 0}": "{subscribeState[blog.id]?.count || 0}",
//   "{viewState[blog.id]?.count || 0}": "{viewState[blog.id]?.count || 0}",
 "© 2026 Hotel Zesper. All rights reserved.": "© 2026 Hotel Zesper. Haki zote zimehifadhiwa.",
  "+254 700 123 456": "+254 700 123 456",
    "✔ 100 points = free cocktail": "✔ pointi 100 = cocktail ya bure",
      "+254 739 279531": "+254 739 279531",
       "✔ 3 stays = free upgrade (subject to availability)": "✔ kukaa mara 3 = sasisho bila malipo (kulingana na upatikanaji)",
        "✔ Every drink earns points": "✔ Kila kinywaji hupata pointi",
  "✔ Every room booking earns reward points": "✔ Kila chumba cha kuhifadhi kinapata pointi za zawadi",
  "✔ VIP members get double points": "✔ Wanachama wa VIP wanapata alama mara mbili",
  "✔ VIP members get priority booking & discounts": "✔ Wanachama wa VIP wanapata uhifadhi wa kipaumbele na punguzo",
   "24/7 Customer Service": "24/7 Huduma kwa Wateja",
    "About": "Kuhusu",
     "Advance booking confirmation is required": "Uthibitishaji wa kuhifadhi mapema unahitajika",
  "Advance booking recommended": "Uhifadhi wa mapema unapendekezwa",
   "Arrive 10–15 minutes before appointment": "Fika dakika 10-15 kabla ya miadi",
    "Back To Events": "Rudi kwa Matukio",
  "Back To Rooms": "Rudi kwenye Vyumba",
   "Bar": "Baa",
     "Book Now": "Weka Nafasi Sasa",
       "Booking Process": "Mchakato wa Kuhifadhi Nafasi",
         "Cancellation allowed before 24 hours": "Kughairi kunaruhusiwa kabla ya saa 24",
          "Cancellation or rescheduling policy applies": "Sera ya kughairi au kupanga upya inatumika",
          "Categories": "Kategoria",
  "Center": "Kituo",
    "Check-in": "Ingia",
      "Check-out": "Ondoka",
        "Comfortable Rooms": "Vyumba vya Starehe",
         "Confirm Password": "Thibitisha Nenosiri",
          "Conference Hall": "Ukumbi wa Mikutano",
  "Confirm new password": "Thibitisha nenosiri jipya",
    "Contact": "Wasiliana",
      "Cookies": "Vidakuzi",
       "Damage to venue property may result in extra charges": "Uharibifu wa mali ya ukumbi unaweza kusababisha malipo ya ziada",
        "Download menu": "Pakua menyu",
  "Download Packages": "Pakua Vifurushi",
  "Download Services": "Pakua Huduma",
   "Email": "Barua pepe",
  "Email Address": "Anwani ya Barua Pepe",
   "English": "Kiingereza",
  "Enjoy delicious local and international cuisines prepared by our professional chefs in a warm and elegant dining environment.": "Furahia vyakula vitamu vya kitaifa na kimataifa vilivyotayarishwa na wapishi wetu wa kitaalamu katika mazingira ya kulia na ya kifahari.",
  "Enter email": "Weka barua pepe",
  "Enter email address": "Weka barua pepe",
  "Enter new password": "Weka nenosiri jipya",
  "Enter username": "Ingiza jina la mtumiaji",
  "Enter your email": "Weka barua pepe yako",
   "Event": "Tukio",
  "Event ending time must be respected": "Muda wa kuisha kwa tukio lazima uheshimiwe",
  "Event Not Found": "Tukio Halijapatikana",
  "Event setup and decoration time must be scheduled in advance": "Muda wa kuweka tukio na mapambo lazima uratibiwe mapema",
  "example@gmail.com": "mfano@gmail.com",
  "Experience the perfect blend of comfort, elegance, and warm hospitality that makes every stay truly special.": "Furahia mseto kamili wa starehe, umaridadi, na ukarimu mchangamfu ambao hufanya kila kukaa kuwa maalum.",
   "Explore cocktails, wines & exclusive drinks": "Gundua Visa, divai na vinywaji vya kipekee",
     "FAQs": "Maswali Yanayoulizwa Mara kwa Mara",
       "Find answers or download our full services guide": "Pata majibu au pakua mwongozo wetu kamili wa huduma",
        "Find your desired drink based on the categories": "Pata kinywaji chako unachotaka kulingana na kategoria",
  "First Name": "Jina la kwanza",
  "Fitness Center": "Kituo cha Fitness",
  "Follow": "Fuata",
  "Followed": "Imefuatwa",
  "Forgot Password": "Umesahau Nenosiri",
    "Full Name": "Jina Kamili",
  "Full or partial deposit payment may be required": "Malipo kamili au sehemu ya amana yanaweza kuhitajika",
    "Get In Touch": "Wasiliana",
     "Guest Member": "Mjumbe Mgeni",
  "Guests": "Wageni",
  "Health conditions should be disclosed": "Hali za kiafya zinapaswa kufichuliwa",
  "Help": "Msaada",
  "Help & Support Center": "Kituo cha Usaidizi na Usaidizi",
  "Help Center": "Kituo cha Usaidizi",
   "Host meetings, events, and corporate gatherings in our fully equipped, modern conference facilities designed for productivity and comfort.": "Mwenyeji wa mikutano, matukio, na mikusanyiko ya kampuni katika vifaa vyetu vya kisasa vya mikutano vilivyoundwa kwa ajili ya tija na faraja.",
  "Hotel Events & Experiences": "Matukio ya Hoteli na Matukio",
  "Hotel Zesper": "Hoteli ya Zesper",
  "Hotel Zesper Location": "Hoteli ya Zesper Mahali",
    "hotelZesper@gmail.com": "hotelZesper@gmail.com",
  "Hours": "Saa",
    "How it works": "Jinsi inavyofanya kazi",
     "Keep your clothes fresh and clean with our fast and reliable laundry and dry-cleaning services available during your stay.": "Weka nguo zako safi na safi kwa huduma zetu za haraka na za kutegemewa za kusafisha nguo na kukausha nguo zinazopatikana wakati wa kukaa kwako.",
       "Language": "Lugha",
        "Last Name": "Jina la mwisho",
  "Laundry Services": "Huduma za Kufulia",
  "Location": "Mahali",
  "Login": "Ingia",
   "Logout": "Ondoka",
    "Maximum guest capacity must be followed": "Idadi ya juu zaidi ya wageni lazima ifuatwe",
      "Music and entertainment must comply with venue regulations": "Muziki na burudani lazima zifuate kanuni za ukumbi",
       "New password": "Nenosiri mpya",
         "New Password": "Nenosiri Mpya",
  "Newsletter": "Jarida",
  "Next slide": "Slaidi inayofuata",
   "No comments yet": "Hakuna maoni bado",
  "No Room Selected": "Hakuna Chumba Kilichochaguliwa",
  "Notifications": "Arifa",
    "Our": "Yetu",
  "Our friendly staff is always available around the clock to assist you with anything you need for a smooth and enjoyable stay.": "Wafanyikazi wetu walio rafiki wanapatikana kila saa ili kukusaidia kwa chochote unachohitaji ili kukaa vizuri na kufurahisha.",
   "Our Location": "Eneo Letu",
  "Our story": "Hadithi yetu",
  "Outside catering or vendors may require prior approval": "Nje ya upishi au wachuuzi wanaweza kuhitaji idhini ya awali",
  "Password": "Nenosiri",
  "Payment may be required before session": "Malipo yanaweza kuhitajika kabla ya kikao",
    "Phone": "Simu",
      "Previous slide": "Slaidi iliyotangulia",
       "Price per night": "Bei kwa usiku",
       "Privacy": "Faragha",
  "Profile Settings": "Mipangilio ya Wasifu",
   "Quantity": "Kiasi",
  "Quick Links": "Viungo vya Haraka",
  "Ready to Experience Luxury?": "Je, uko tayari Kufurahia Anasa?",
    "Relax in our well-furnished and spacious rooms designed to give you maximum comfort, privacy, and a peaceful stay experience.": "Tulia katika vyumba vyetu vilivyo na samani na wasaa vilivyoundwa ili kukupa faraja ya hali ya juu, faragha na hali tulivu ya kukaa.",
     "Reset Password": "Weka upya Nenosiri",
  "Restaurant & Dining": "Mkahawa na Chakula",
    "Room Facilities": "Vifaa vya Chumba",
      "Room not found": "Chumba hakijapatikana",
  "Rooms": "Vyumba",
  "Search drinks": "Tafuta vinywaji",
    "Search events": "Tafuta matukio",
      "Search spa services": "Tafuta huduma za spa",
        "Search spa services": "Tafuta huduma za spa",
          "Select a subject": "Chagua somo",
            "Send": "Tuma",
              "Set New Password": "Weka Nenosiri Jipya",
              "Sign Up": "Jisajili",
                "Sort": "Panga",
                  "Spa": "Biashara",
  "Spa Categories": "Vikundi vya Biashara",
   "Standard Guest": "Mgeni wa Kawaida",
  "Stay active during your visit with our fully equipped gym, designed to help you maintain your fitness routine while traveling.": "Endelea kujishughulisha unapotembelea ukitumia gym yetu iliyo na vifaa kamili, iliyoundwa ili kukusaidia kudumisha utaratibu wako wa siha unaposafiri.",
  "Subscribe": "Jisajili",
  "Subscribed": "Umejisajili",
  "Support": "Msaada",
  "support@hotelzesper.com": "support@hotelzesper.com",
   "Standard Guest": "Mgeni wa Kawaida",
  "Stay active during your visit with our fully equipped gym, designed to help you maintain your fitness routine while traveling.": "Endelea kujishughulisha unapotembelea ukitumia gym yetu iliyo na vifaa kamili, iliyoundwa ili kukusaidia kudumisha utaratibu wako wa siha unaposafiri.",
  "Subscribe": "Jisajili",
  "Subscribed": "Umejisajili",
  "Support": "Msaada",
  "support@hotelzesper.com": "support@hotelzesper.com",
    "Theme Mode": "Hali ya Mandhari",
      "Top": "Juu",
       "Unwind and relax in our clean and refreshing swimming pool, perfect for leisure, fitness, or a peaceful afternoon escape.": "Pumzika na ustarehe katika kidimbwi chetu cha kuogelea safi na cha kuburudisha, kinachofaa zaidi kwa starehe, siha au kutoroka kwa amani alasiri.",
        "Username": "Jina la mtumiaji",
  "Valid ID or organization details required for booking": "Kitambulisho sahihi au maelezo ya shirika yanahitajika ili kuhifadhi",
   "View": "Tazama",
  "View All Rooms": "Tazama Vyumba Vyote",
  "View Rooms": "Angalia Vyumba",
   "Viewed": "Imetazamwa",
  "We provide safe and spacious parking facilities to ensure your vehicle is secure throughout your stay.": "Tunatoa maegesho salama na ya wasaa ili kuhakikisha gari lako liko salama wakati wote wa kukaa kwako.",
  "Welcome to Hotel Zesper": "Karibu Hotelini Zesper",
  "Hotel room {{number}}": "Chumba cha hoteli {{number}}",
  "Go to slide {{number}}": "Nenda kwenye slaidi {{number}}",
  "Why": "Kwa nini",
    "Write a comment...": "Andika maoni...",
      "Your Status": "Hali yako",
        "Zesper": "Zesper",
          "Home": "Nyumbani",
          "Events": "Matukio",
           "Blog": "Makala",
  "Experience luxury and comfort in the heart of paradise. Discover our exquisite rooms and world-class amenities.": "Pata anasa na starehe katikati ya paradiso. Gundua vyumba vyetu vya kipekee na huduma bora za kimataifa.",
  "Book Room": "Nafasi Ya Chumba",
  "Explore Rooms": "Chunguza Vyumba",
    "Restaurant & Dining": "Mkahawa na Chakula",
      "Secure Parking": "Maegesho Salama",
        "Hotel Zesper": "Hoteli ya Zesper",
          "How it works": "Jinsi inavyofanya kazi",
            "Your Status": "Hali Yako",
             "Cocktails": "Visa",
  "Wine": "Mvinyo",
    "Juices": "Juisi",
     "All": "Zote",
  "Cocktails": "Visa",
   "Soft Drinks": "Vinywaji baridi",
  "Juices": "Juisi",
    "Premium Drinks": "Vinywaji vya kiwango cha juu",
    "Newest First": "Vipya Kwanza",
  "Oldest First": "Vya Zamani Kwanza",
  "Price High-Low": "Bei Juu hadi Chini",
  "Price Low-High": "Bei Chini hadi Juu",
  "Most Popular": "Maarufu Zaidi",
  "Top Rated": "Vilivyokadiriwa Zaidi",
  "A-Z": "A-Z",
  "Z-A": "Z-A",
     "All": "Zote",
       "Newest First": "Vipya Kwanza",
  "Oldest First": "Vya Zamani Kwanza",
  "A-Z": "A-Z",
  "Z-A": "Z-A",
  "Most Popular": "Maarufu Zaidi",

  "High-Low Subscription": "Usajili: Juu hadi Chini",
  "High-Low Likes": "Kupendwa: Juu hadi Chini",
  "High-Low Followers": "Wafuasi: Wengi hadi Wachache",
    "Blog": "Makala",
     "Search blogs...": "Tafuta makala...",
       "Search blogs...": "Tafuta makala...",
  "Filter": "Chuja",
  "Sort": "Panga",
   "All": "Zote",
  "Events": "Matukio",
   "Newest First": "Vipya kwanza",
  "Oldest First": "Vya zamani kwanza",
  "Most Popular": "Maarufu zaidi",
  "High-Low Subscription": "Usajili mkubwa hadi mdogo",
  "High-Low Likes": "Pendo nyingi hadi chache",
  "High-Low Followers": "Wafuasi wengi hadi wachache",
  "A-Z": "A hadi Z",
  "Z-A": "Z hadi A",
   "Follow": "Fuata",
  "Followed": "Umefuata",
  "Subscribe": "Jisajili",
  "Subscribed": "Umejisajili",
  "View": "Tazama",
  "Viewed": "Umeangaliwa",
    "Newest First": "Vipya kwanza",
  "Oldest First": "Vya zamani kwanza",
  "Most Popular": "Maarufu zaidi",
   "A-Z": "A hadi Z",
  "Z-A": "Z hadi A",
    "Subscribe": "Jisajili",
    "Comments": "Maoni",
  "No comments yet": "Hakuna maoni bado",
  "Write a comment...": "Andika maoni...",
  "Send": "Tuma",

  "Download": "Pakua",
    "Events": "Matukio",
      "Book Now": "Weka Nafasi Sasa",
  "View Rooms": "Angalia Vyumba",
   "Phone": "Simu",
  "Email": "Barua pepe",
   "Grand Event Hall": "Ukumbi Mkubwa wa Matukio",
  "A spacious and elegantly designed hall suitable for weddings, conferences, and large celebrations.": "Ukumbi mkubwa na uliobuniwa kwa umaridadi unaofaa kwa harusi, mikutano na sherehe kubwa.",

  "Wedding Platform Stage": "Jukwaa la Harusi",
  "Beautifully decorated raised stage perfect for wedding ceremonies, speeches, and special moments.": "Jukwaa lililopambwa kwa umaridadi linalofaa kwa sherehe za harusi, hotuba na matukio maalum.",

  "Modern Audio & Lighting System": "Mfumo wa Kisasa wa Sauti na Mwanga",
  "High-quality sound system and dynamic lighting setup to enhance every event experience.": "Mfumo wa sauti wa ubora wa juu na mwanga wa kisasa unaoboresha uzoefu wa kila tukio.",

  "Luxury Dining & Catering": "Huduma ya Chakula ya Kifahari",
  "On-site catering services offering customized menus, buffet setups, and fine dining experiences.": "Huduma za chakula ndani ya eneo zikitoa menyu maalum, buffet na uzoefu wa vyakula vya kifahari.",

  "VIP Lounge Area": "Eneo la VIP",
  "Private and comfortable lounge space for VIP guests, organizers, and special attendees.": "Eneo la faragha na starehe kwa wageni wa VIP, waandaaji na wageni maalum.",

  "Decor & Event Styling": "Mapambo na Urembo wa Matukio",
  "Professional decoration services including floral arrangements, themed setups, and elegant styling.": "Huduma za kitaalamu za mapambo zikiwemo maua, mandhari maalum na urembo wa kisasa.",
    "Event": "Tukio",
      "Grand Event Hall": "Ukumbi Mkubwa wa Matukio",
      
  "Wedding Platform Stage": "Jukwaa la Harusi",
   "Modern Audio & Lighting System": "Mfumo wa Kisasa wa Sauti na Mwanga",
     "Luxury Dining & Catering": "Huduma ya Chakula ya Kifahari",
     
  "VIP Lounge Area": "Eneo la VIP",
    "Decor & Event Styling": "Mapambo na Urembo wa Matukio",
     "Book Event": "Weka Nafasi ya Tukio",
  "View Details": "Tazama Maelezo",
  
  "Back To Events": "Rudi kwenye Matukio",
    "Book Event": "Weka Nafasi ya Tukio",
     "All": "Zote",
  "Weddings": "Harusi",
  "Conferences": "Mikutano",
  "Corporate Meetings": "Mikutano ya Kampuni",
  "Birthday Parties": "Sherehe za Kuzaliwa",
  "Anniversary Celebrations": "Sherehe za Maadhimisho",
  "Baby Showers": "Sherehe za Mtoto Mchanga",
  "Graduation Parties": "Sherehe za Mahafali",
  "Private Dinners": "Chakula cha Jioni cha Faragha",
  "Music Events": "Matukio ya Muziki",
  "Networking Events": "Matukio ya Mitandao",
  "Valentine Specials": "Matukio ya Siku ya Wapendanao",
  "Luxury Events": "Matukio ya Kifahari",

  "Newest First": "Vipya Kwanza",
  "Oldest First": "Vya Zamani Kwanza",
  "Price High-Low": "Bei Juu hadi Chini",
  "Price Low-High": "Bei Chini hadi Juu",
  "Most Popular": "Maarufu Zaidi",
  "Top Rated": "Vilivyokadiriwa Zaidi",
  "A-Z": "A-Z",
  "Z-A": "Z-A",
    "Book Event": "Weka Nafasi ya Tukio",
  "View Details": "Tazama Maelezo",
     "Rooms": "Vyumba",
  "Drinks": "Vinywaji",
    "Spa": "Spa",
      "Guests": "Wageni",
        "Quantity": "Kiasi",
        
  "Search Rooms": "Tafuta Vyumba",
  "Search Drinks": "Tafuta Vinywaji",
  "Search Events": "Tafuta Matukio",
  "Search Spa": "Tafuta Spa",
  "Email is required": "Barua pepe inahitajika",
    "Download Services": "Pakua Huduma",
      "Blog": "Blogu",
      
  "Contact": "Wasiliana",
    "Help Center": "Kituo cha Msaada",
     "Book Room": "Weka Chumba",
  "Explore Rooms": "Chunguza Vyumba",
    "Rooms": "Vyumba",
  "Our": "Vyetu",
    "Logout": "Toka",
      "Back To Rooms": "Rudi kwenye Vyumba",
        "Booking Requirements": "Masharti ya Kuhifadhi",
          "Confirm Booking": "Thibitisha Uhifadhi",
            "Confirm Booking": "Thibitisha Uhifadhi",
            
"Aromatherapy": "Aromatherapy",
"Ksh.": "Shilingi",
"Book Now": "Weka Nafasi",
"Service not found": "Huduma haijapatikana",

"Booking Requirements": "Masharti ya Booking",
"Book Spa Session": "Weka Nafasi ya Spa",
"Search spa services": "Tafuta huduma za spa",
"All": "Zote",
"Best Spa Services": "Huduma Bora za Spa",
"Explore our most loved spa treatments for complete relaxation.": "Gundua matibabu yetu ya spa yanayopendwa zaidi kwa utulivu kamili.",
"Book Now": "Weka Nafasi",

"View All Services": "Tazama Huduma Zote",
"Why Choose Our Spa": "Kwa Nini Uchague Spa Yetu",
"Experience luxury spa treatments, relaxation, and complete wellness.": "Pata matibabu ya spa ya kifahari, utulivu na afya kamili.",
"Featured Rooms": "Vyumba Vilivyoangaziwa",
"Discover our most popular room types, designed to provide the perfect blend of comfort, luxury, and style for your stay at Hotel Zesper.": "Gundua aina zetu maarufu za vyumba, vilivyoundwa kutoa mchanganyiko kamili wa starehe, kifahari na mtindo kwa ukaaji wako Hotel Zesper.",

"Book Now": "Weka Nafasi",
"View Details": "Tazama Maelezo",
"View All Rooms": "Tazama Vyumba Vyote",
"Subscribe to our Newsletter": "Jiandikishe kwa Jarida Letu",
"Get hotel updates, offers, events, and exclusive deals.": "Pata taarifa za hoteli, ofa, matukio na punguzo maalum.",

"Enter email address": "Weka anwani ya barua pepe",
"Subscribe": "Jiandikishe",
"Quick Links": "Viungo vya Haraka",
"Support": "Msaada",

"FAQs": "Maswali Yanayoulizwa Mara kwa Mara",
"Booking Process": "Mchakato wa Kuhifadhi",
"Rooms": "Vyumba",
"Help Center": "Kituo cha Msaada",
"Drinks": "Vinywaji",

"Newsletter": "Jarida",
"Get updates, offers, and exclusive deals directly in your inbox.": "Pata taarifa, ofa na punguzo maalum moja kwa moja kwenye barua pepe yako.",
"Enter your email": "Weka barua pepe yako",
"Subscribe": "Jiandikishe",

"Subscribed successfully!": "Umejiandikisha kwa mafanikio!",
"Enter your email": "Ingiza barua pepe yako",
"Invalid email address": "Barua pepe si sahihi",
"Enter your email": "Weka barua pepe yako",
"Terms": "Masharti",
"Privacy": "Faragha",
"Cookies": "Vidakuzi",
"Our Services": "Huduma Zetu",

"Room Booking": "Uhifadhi wa Chumba",

"Restaurant & Dining": "Mkahawa na Chakula",
"Conference & Events": "Mikutano na Matukio",

"Bar & Refreshments": "Baa na Viburudisho",

"Secure Parking": "Maegesho Salama",
"Luxury Accommodation": "Malazi ya Kifahari",
"24/7 Front Desk": "Huduma ya Mapokezi 24/7",
"Learn more →": "Jifunze zaidi →",
"View All Services": "Tazama Huduma Zote",
"Quick Settings": "Mipangilio ya Haraka",
"Manage your preferences": "Dhibiti mapendeleo yako",

"Profile Settings": "Mipangilio ya Wasifu",
"Notifications": "Arifa",
"Language": "Lugha",
"Theme Mode": "Hali ya Muonekano",
"More Settings": "Mipangilio Zaidi",
"Logout": "Toka",
"What Our Guests Say": "Wageni Wetu Wanasema Nini",
"Real experiences from guests at Hotel Zesper.": "Uzoefu wa kweli kutoka kwa wageni wa Hotel Zesper.",
"Forgot Password": "Umesahau Nenosiri",
"Enter your email to continue": "Weka barua pepe yako kuendelea",
"Enter email": "Weka barua pepe",
"Verify Email": "Thibitisha Barua Pepe",

"Set New Password": "Weka Nenosiri Jipya",
"Reset Password": "Weka Upya Nenosiri",
"Email not found!": "Barua pepe haijapatikana!",
"Email verified! Set new password.": "Barua pepe imethibitishwa! Weka nenosiri jipya.",
"Password updated successfully!": "Nenosiri limebadilishwa kwa mafanikio!",
"Welcome Back": "Karibu Tena",
"Login to access more services and settings": "Ingia ili kupata huduma na mipangilio zaidi",

"Continue with Google": "Endelea na Google",
"OR": "AU",

"Email": "Barua Pepe",
"Password": "Nenosiri",

"Forgot Password?": "Umesahau Nenosiri?",
"Login": "Ingia",

"Don’t have an account?": "Huna akaunti?",
"Sign Up": "Jisajili",
"Email is required": "Barua pepe inahitajika",
"Password is required": "Nenosiri linahitajika",
"Enter valid login details": "Ingiza taarifa sahihi za kuingia",
"Reset Password": "Weka Upya Nenosiri",
"Create a new password for your account": "Tengeneza nenosiri jipya la akaunti yako",

"New Password": "Nenosiri Jipya",
"Must be at least 8 characters with letters and numbers": "Lazima iwe angalau herufi 8 zenye herufi na namba",

"Confirm Password": "Thibitisha Nenosiri",
"Confirm new password": "Thibitisha nenosiri jipya",
"It should match password": "Lazima ilingane na nenosiri",

"Reset Password": "Weka Upya Nenosiri",
"Login": "Ingia",
"Welcome Back": "Karibu Tena",
  "Login to access more services and settings": "Ingia ili kupata huduma zaidi na mipangilio",

  "Continue with Google": "Endelea na Google",
   "Email": "Barua pepe",
  "Password": "Nenosiri",

  "Forgot Password?": "Umesahau Nenosiri?",
    "Don’t have an account?": "Huna akaunti?",
  "Sign Up": "Jisajili",

  "Create Account": "Fungua Akaunti",
  "Sign up to access your Task Management Dashboard": "Jisajili kupata dashibodi yako",

  "Username": "Jina la mtumiaji",
    "Already have an account?": "Tayari una akaunti?",

  "Reset Password": "Weka Nenosiri Jipya",
  "Create a new password for your account": "Tengeneza nenosiri jipya kwa akaunti yako",
  "New Password": "Nenosiri Jipya",
  "Confirm Password": "Thibitisha Nenosiri",

  "Forgot Password": "Umesahau Nenosiri",
  "Enter your email to continue": "Weka barua pepe yako kuendelea",
  "Verify Email": "Thibitisha Barua Pepe",
  "Set New Password": "Weka Nenosiri Jipya",

  "View All Services": "Tazama Huduma Zote",
    "Book Now": "Weka Nafasi",
      "Subscribe to our Newsletter": "Jiandikishe kwa Jarida Letu",
  "Get hotel updates, offers, events, and exclusive deals.": "Pata taarifa, ofa na matukio",

  "Enter email address": "Weka barua pepe",
  "Subscribe": "Jiandikishe",

  "Subscribed successfully!": "Umejiandikisha kwa mafanikio!",
    "Notifications": "Arifa",
     "What Our Guests Say": "Maoni ya Wageni Wetu",
  "Real experiences from guests at Hotel Zesper.": "Uzoefu wa kweli kutoka wageni wa Hotel Zesper",
   "Quick Links": "Viungo vya Haraka",
  "Support": "Msaada",
  "Newsletter": "Jarida",
  "Get updates, offers, and exclusive deals directly in your inbox.": "Pata ofa na taarifa moja kwa moja kwenye barua pepe yako",

  "Terms": "Masharti",
  "Privacy": "Faragha",
  "Cookies": "Vidakuzi",
    "Discover comfort and luxury at our hotel, where every stay feels special.": "Gundua starehe na anasa katika hoteli yetu, kila ukaaji ni wa kipekee.",
   "Ready to Experience Luxury?": "Tayari Kufurahia Anasa?",
  "Book your stay at Hotel Zesper today and indulge in unparalleled comfort and elegance.": "Weka nafasi Hotel Zesper leo ufurahie starehe na anasa za hali ya juu.",

  "Book Room": "Weka Chumba",
  "Explore Rooms": "Gundua Vyumba",
  "No Room Selected": "Hakuna Chumba Kilichochaguliwa",
   "Back To Rooms": "Rudi Vyumbani",
  "Booking Summary": "Muhtasari wa Uhifadhi",

  "Full Name": "Jina Kamili",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Check In": "Kuingia",
  "Check Out": "Kutoka",
  "Enter number of guest": "Weka idadi ya wageni",

  "Confirm Booking": "Thibitisha Uhifadhi",
    "Support": "Msaada",
      "Privacy": "Faragha",
        "Email": "Barua Pepe",
          "Booking Summary": "Muhtasari wa Uhifadhi",
           "Back To Rooms": "Rudi Vyumbani",

  "Full Name": "Jina Kamili",
  "Phone": "Simu",
  "Check In": "Kuingia",
  "Check Out": "Kutoka",
  "Number of Guests": "Idadi ya Wageni",
  "Confirm Booking": "Thibitisha Uhifadhi",

  "Cookies Policy": "Sera ya Vidakuzi",
  "Introduction": "Utangulizi",
  "What Are Cookies?": "Vidakuzi ni Nini?",
  "How We Use Cookies": "Jinsi Tunavyotumia Vidakuzi",
    "Third-Party Cookies": "Vidakuzi vya Watu Wengine",
  "Managing Cookies": "Kusimamia Vidakuzi",
  "Data Collected Through Cookies": "Taarifa Zinazokusanywa",
  "Changes to This Cookies Policy": "Mabadiliko ya Sera ya Vidakuzi",
  "Contact Information": "Mawasiliano",
  "Cookies Policy": "Sera ya Vidakuzi",

  "Hotel Zesper uses cookies and similar technologies to improve your browsing experience, personalize content, analyze website traffic, and provide better hospitality services.": "Hotel Zesper hutumia vidakuzi na teknolojia nyingine kuboresha matumizi yako ya tovuti, kubinafsisha maudhui, kuchambua trafiki ya tovuti na kutoa huduma bora za ukarimu.",

  "This Cookies Policy explains what cookies are, how we use them, and the choices available to you regarding their use.": "Sera hii ya Vidakuzi inaeleza vidakuzi ni nini, jinsi tunavyovitumia na chaguo ulizonazo kuhusu matumizi yake.",

  "By continuing to browse hotelzesper.com, you consent to the use of cookies as described in this policy.": "Kwa kuendelea kutumia hotelzesper.com, unakubali matumizi ya vidakuzi kama ilivyoelezwa kwenye sera hii.",

  "What Are Cookies?": "Vidakuzi ni Nini?",

  "Cookies are small text files stored on your device when you visit a website. They help websites function efficiently and remember user preferences.": "Vidakuzi ni faili ndogo za maandishi zinazohifadhiwa kwenye kifaa chako unapotembelea tovuti. Husaidia tovuti kufanya kazi vizuri na kukumbuka mapendeleo ya mtumiaji.",

  "Cookies may remember login information, booking preferences, browsing history, language settings, and other interactions to improve website performance.": "Vidakuzi vinaweza kukumbuka taarifa za kuingia, mapendeleo ya uhifadhi, historia ya kuvinjari, mipangilio ya lugha na shughuli nyingine kuboresha utendaji wa tovuti.",

  "How We Use Cookies": "Jinsi Tunavyotumia Vidakuzi",

  "Hotel Zesper uses cookies to improve website performance, personalize guest experiences, maintain secure sessions, and support reservation functionality.": "Hotel Zesper hutumia vidakuzi kuboresha utendaji wa tovuti, kubinafsisha uzoefu wa wageni, kudumisha usalama wa vipindi na kusaidia mfumo wa uhifadhi.",

  "Cookies also help us analyze website traffic, understand guest interactions, and improve the quality of our services and digital experience.": "Vidakuzi pia hutusaidia kuchambua trafiki ya tovuti, kuelewa mwingiliano wa wageni na kuboresha ubora wa huduma zetu.",

  "Types of Cookies We Use": "Aina za Vidakuzi Tunavyotumia",

  "Essential Cookies: Necessary for website functionality, secure navigation, and booking processes.": "Vidakuzi Muhimu: Vinahitajika kwa uendeshaji wa tovuti, urambazaji salama na mchakato wa uhifadhi.",

  "Performance Cookies: Help us understand website usage, visitor behavior, and optimize performance.": "Vidakuzi vya Utendaji: Hutusaidia kuelewa matumizi ya tovuti na tabia za wageni ili kuboresha utendaji.",

  "Functional Cookies: Remember guest preferences such as language, region, and booking settings.": "Vidakuzi vya Kazi: Hukumbuka mapendeleo ya wageni kama lugha, eneo na mipangilio ya uhifadhi.",

  "Marketing Cookies: Used to provide relevant promotions, advertisements, and personalized hotel offers.": "Vidakuzi vya Masoko: Hutumika kutoa matangazo na ofa maalum zinazofaa kwa wageni.",

  "Third-Party Cookies": "Vidakuzi vya Watu Wengine",
 "Managing Cookies": "Kusimamia Vidakuzi",

  "Most browsers allow you to manage, disable, or delete cookies through browser settings.": "Vivinjari vingi hukuruhusu kusimamia, kuzima au kufuta vidakuzi kupitia mipangilio ya kivinjari.",

  "Please note that disabling cookies may affect certain website features including reservation systems, saved preferences, and personalized experiences.": "Kuzima vidakuzi kunaweza kuathiri baadhi ya vipengele vya tovuti kama mfumo wa uhifadhi na mapendeleo yako.",

  "Data Collected Through Cookies": "Taarifa Zinazokusanywa Kupitia Vidakuzi",

  "Cookies may collect information such as browser type, device information, IP address, session duration, visited pages, and interaction behavior.": "Vidakuzi vinaweza kukusanya taarifa kama aina ya kivinjari, kifaa, anwani ya IP, muda wa matumizi na kurasa ulizotembelea.",

  "This information is primarily used to improve website usability, performance, and guest experiences.": "Taarifa hizi hutumika kuboresha matumizi ya tovuti, utendaji na uzoefu wa wageni.",

  "Changes to This Cookies Policy": "Mabadiliko ya Sera ya Vidakuzi",

  "Hotel Zesper reserves the right to update this Cookies Policy periodically to reflect operational, legal, or technological changes.": "Hotel Zesper ina haki ya kubadilisha sera hii mara kwa mara ili kuendana na mabadiliko ya kiutendaji, kisheria au kiteknolojia.",

  "Updated versions will be published on this page with a revised 'Last Updated' date.": "Toleo jipya litachapishwa kwenye ukurasa huu pamoja na tarehe mpya ya sasisho.",

  "Contact Information": "Taarifa za Mawasiliano",

  "If you have questions regarding our use of cookies or this Cookies Policy, please contact us.": "Ikiwa una maswali kuhusu matumizi ya vidakuzi, tafadhali wasiliana nasi.",

  "Email: support@hotelzesper.com": "Barua pepe: support@hotelzesper.com",
  "Phone: +254 XXX XXX XXX": "Simu: +254 XXX XXX XXX",
  "Address: Hotel Zesper, Nairobi, Kenya": "Anwani: Hotel Zesper, Nairobi, Kenya",
  "Hotel Zesper": "Hoteli Zesper",
    "Legal Information": "Taarifa za Kisheria",
      "Last Updated: June 8, 2026": "Ilisasishwa mwisho: 8 Juni 2026",

  "Table of Contents": "Orodha ya Yaliyomo",

  "Introduction": "Utangulizi",
    "Contact Information": "Taarifa za Mawasiliano",
    "Email: support@hotelzesper.com": "Barua pepe: support@hotelzesper.com",
  "Phone: +254 XXX XXX XXX": "Simu: +254 XXX XXX XXX",
  "Address: Hotel Zesper, Nairobi, Kenya": "Anwani: Hotel Zesper, Nairobi, Kenya",
  "No Drink Selected": "Hakuna Kinywaji Kilichochaguliwa",
  "Please select a drink before placing an order.": "Tafadhali chagua kinywaji kabla ya kufanya oda.",
  "Back To Drinks": "Rudi kwenye Vinywaji",

  "Drink Summary": "Muhtasari wa Kinywaji",
  "Drink Order Details": "Maelezo ya Oda ya Kinywaji",

  "Full Name": "Jina Kamili",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Quantity": "Kiasi",

  "Payment Method": "Njia ya Malipo",
  "M-Pesa": "M-Pesa",
  "Card Payment": "Malipo kwa Kadi",
  "Pay on Delivery": "Lipa Wakati wa Kupokea",
   "Confirm Order": "Thibitisha Oda",
   "No Drink Order Found": "Hakuna Oda ya Kinywaji Iliyopatikana",
  "You have not ordered any drink yet.": "Bado hujaagiza kinywaji chochote.",
  "Back To Drinks": "Rudi kwenye Vinywaji",

  "Drink Receipt": "Risiti ya Kinywaji",
  "Name": "Jina",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Drink": "Kinywaji",
  "Price": "Bei",
  "Quantity": "Kiasi",
  "Payment Method": "Njia ya Malipo",
  "Check In": "Kuingia",
  "Check Out": "Kutoka",
  "Ordered At": "Imeagizwa Muda",
  "Total Amount": "Jumla ya Malipo",

   "Download Receipt": "Pakua Risiti",
  "No Event Selected": "Hakuna Tukio Lililochaguliwa",
  "Please select an event before booking.": "Tafadhali chagua tukio kabla ya kuweka nafasi.",
  "Back To Events": "Rudi kwenye Matukio",

  "Booking Summary": "Muhtasari wa Uhifadhi",
  "Event Booking Details": "Maelezo ya Uhifadhi wa Tukio",

  "Full Name": "Jina Kamili",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Number of Guests": "Idadi ya Wageni",

  "Payment Method": "Njia ya Malipo",
  "M-Pesa": "M-Pesa",
  "Card Payment": "Malipo kwa Kadi",
  "Pay on Arrival": "Lipa Ukifika",

  "Confirm Booking": "Thibitisha Uhifadhi",

  "Price": "Bei",
  "No Event Selected": "Hakuna Tukio Lililochaguliwa",
  "Please select an event before booking.": "Tafadhali chagua tukio kabla ya kuhifadhi.",
  "Back To Events": "Rudi Matukio",

  "Booking Summary": "Muhtasari wa Uhifadhi",

  
  "Price": "Bei",

  "Event Booking Details": "Maelezo ya Uhifadhi wa Tukio",
  "Full Name": "Jina Kamili",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Number of Guests": "Idadi ya Wageni",

  "Payment Method": "Njia ya Malipo",
  "M-Pesa": "M-Pesa",
  "Card Payment": "Malipo ya Kadi",
  "Pay on Arrival": "Lipa Ukifika",

  "Confirm Booking": "Thibitisha Uhifadhi",

  "No Event Booking Found": "Hakuna Uhifadhi wa Tukio Uliopatikana",
  "You have not booked any event yet.": "Bado hujahifadhi tukio lolote.",

   "Event Receipt": "Risiti ya Tukio",
  "Booking ID": "Namba ya Uhifadhi",
  "Name": "Jina",
  "Event": "Tukio",
  "Guests": "Wageni",
  "Check In": "Kuingia",
  "Check Out": "Kutoka",
  "Booked At": "Imehifadhiwa",
  "Total Amount": "Jumla ya Malipo",
  "Download Receipt": "Pakua Risiti",
  "Ready to Host an Unforgettable Event?": "Tayari Kuandaa Tukio Lisilosahaulika?",
  "Book your perfect event space today and let us help you create memorable weddings, corporate meetings, and celebrations tailored to your needs.": "Hifadhi eneo lako bora la tukio leo na tukusaidie kuandaa harusi, mikutano ya kibiashara na sherehe zisizosahaulika kulingana na mahitaji yako.",

  "Book Event": "Hifadhi Tukio",
  "Explore Events": "Chunguza Matukio",
  "Explore our luxurious rooms, dining, experiences, and unforgettable hotel moments.": "Gundua vyumba vyetu vya kifahari, chakula, uzoefu na matukio yasiyosahaulika ya hoteli.",

    "Search FAQs...": "Tafuta Maswali...",

  "Sort": "Panga",
  "Sort FAQs": "Panga Maswali",
  "A → Z": "A → Z",
  "Z → A": "Z → A",

   "Ready to Experience Luxury?": "Uko Tayari Kupata Anasa?",
  "Book your stay at Hotel Zesper today and indulge in unparalleled comfort and elegance.":
    "Weka nafasi yako Hotel Zesper leo na ufurahie starehe na anasa isiyo na kifani.",

  "Book Room": "Weka Chumba",
  "Explore Rooms": "Chunguza Vyumba",

  
  "Back To Drinks": "Rudi kwenye Vinywaji",
    "Price": "Bei",
     "Full Name": "Jina Kamili",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Quantity": "Idadi",
  "Payment Method": "Njia ya Malipo",

  "M-Pesa": "M-Pesa",
  "Card Payment": "Malipo kwa Kadi",

  
  "Name": "Jina",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Drink": "Kinywaji",
  "Price": "Bei",
  "Quantity": "Idadi",
  "Payment Method": "Njia ya Malipo",
  "Check In": "Kuingia",
  "Check Out": "Kutoka",
  "Ordered At": "Imeagizwa Tarehe",
  "Total Amount": "Jumla ya Malipo",
  "Download Receipt": "Pakua Risiti",

   "Back To Events": "Rudi kwenye Matukio",

  "Booking Summary": "Muhtasari wa Uwekaji Nafasi",

   "Full Name": "Jina Kamili",
  "Email": "Barua Pepe",
  "Phone": "Simu",
  "Number of Guests": "Idadi ya Wageni",

  "Payment Method": "Njia ya Malipo",
  "M-Pesa": "M-Pesa",
  "Card Payment": "Malipo kwa Kadi",
  "Pay on Arrival": "Lipa Ukifika",

  "Confirm Booking": "Thibitisha Uwekaji Nafasi",
   "Name": "Jina",
  "Email": "Barua Pepe",
  "Phone": "Simu",
    "Price": "Bei",

     "Payment Method": "Njia ya Malipo",
  "Check In": "Kuingia",
  "Check Out": "Kutoka",
  "Booked At": "Imehifadhiwa Tarehe",
  "Total Amount": "Jumla ya Malipo",
  "Download Receipt": "Pakua Risiti",
   "Privacy Policy": "Sera ya Faragha",
  "Legal Information": "Taarifa za Kisheria",
  "Hotel Zesper": "Hotel Zesper",
  "Learn how we collect, use, and protect your information.": "Jifunze jinsi tunavyokusanya, kutumia na kulinda taarifa zako.",
  "Last Updated: June 8, 2026": "Ilisasishwa Mwisho: Juni 8, 2026",

  "Table of Contents": "Orodha ya Yaliyomo",

  "Privacy Policy Hero Text":
    "Katika Hotel Zesper, faragha yako ni muhimu. Sera hii inaeleza jinsi tunavyokusanya, kuhifadhi na kulinda taarifa zako unapotumia tovuti au huduma zetu.",
     "Information We Collect": "Taarifa Tunazokusanya",

      "How We Use Your Information": "Jinsi Tunavyotumia Taarifa Zako",
        "Sharing of Information": "Kushirikisha Taarifa",
         "Cookies & Tracking Technologies": "Cookies na Teknolojia za Ufuatiliaji",
              "Data Security": "Usalama wa Taarifa",
                  "Data Retention": "Uhifadhi wa Taarifa",
                       "Your Privacy Rights": "Haki Zako za Faragha",
                         "Third-Party Links & Services": "Viungo vya Watu wa Tatu",
  "Children's Privacy": "Faragha ya Watoto",
  "International Data Transfers": "Uhamishaji wa Kimataifa wa Taarifa",
  "Changes to This Privacy Policy": "Mabadiliko ya Sera ya Faragha",
  "Contact Information": "Mawasiliano",
  "Legal Information": "Taarifa za Kisheria",
  "Hotel Zesper": "Hotel Zesper",
  "Legal Information": "Taarifa za Kisheria",
  "Hotel Zesper": "Hotel Zesper",
  
  "Introduction": "Utangulizi",
  "Contact Information": "Mawasiliano",

  "Email: support@hotelzesper.com": "Barua pepe: support@hotelzesper.com",
  "Phone: +254 XXX XXX XXX": "Simu: +254 XXX XXX XXX",
  "Address: Hotel Zesper, Nairobi, Kenya": "Anwani: Hotel Zesper, Nairobi, Kenya",
   "No Booking Found": "Hakuna Booking Iliyopatikana",
    "Back To Rooms": "Rudi kwenye Vyumba",

     "Booking Id": "Nambari ya Booking",

  "Name": "Jina",
  "Email Address": "Barua Pepe",
  "Contact": "Mawasiliano",
  "Room": "Chumba",
  "Price": "Bei",

    "Booked At": "Ilifanywa",

  "Download Receipt": "Pakua Risiti",
  "Settings": "Mipangilio",
    "Email Notifications": "Arifa za Barua Pepe",
  "SMS Notifications": "Arifa za SMS",
  "Push Notifications": "Arifa za Push",

  "Payment Methods": "Njia za Malipo",
  "Card Number": "Namba ya Kadi",
  "Expiry Date": "Tarehe ya Kuisha",
    "Show Profile Publicly": "Onyesha Profaili kwa Umma",
  "Allow Search Engines": "Ruhusu Injini za Utafutaji",
  "Share Activity Data": "Shiriki Taarifa za Shughuli",

  "Language & Region": "Lugha na Eneo",
  "Select Language": "Chagua Lugha",
  "Region / Currency": "Eneo / Sarafu",

   "Appearance": "Muonekano",
  "Dark Mode": "Hali ya Giza",
    "No Booking Found": "Hakuna Nafasi ya Booking Iliyopatikana",
     "Back To Spa": "Rudi kwenye Spa",
       "Price": "Bei",
        "Email": "Barua Pepe",
  "Phone": "Simu",
  "Number of Sessions": "Idadi ya Vipindi",

  "Payment Method": "Njia ya Malipo",
   "Back To Spa": "Rudi kwenye Spa",
   
  "Name": "Jina",

   "Spa Service": "Huduma ya Spa",
  "Price": "Bei",
  "Sessions": "Vipindi",
  "Payment Method": "Njia ya Malipo",

  "Check In": "Kuingia",
  "Check Out": "Kutoka",
  "Booked At": "Imewekwa Tarehe",

  "Total Amount": "Jumla ya Malipo",
    "Contact Information": "Mawasiliano",

     "Your Full Name": "Jina lako kamili",
  "Your Role": "Nafasi yako",
  "Your Country": "Nchi yako",
  "Testimonial Type": "Aina ya Ushuhuda",
  "Write your review...": "Andika maoni yako...",

   "Your Full Name": "Jina lako kamili",
  "Your Role": "Nafasi yako",
  "Your Country": "Nchi yako",
  "Testimonial Type": "Aina ya Ushuhuda",
  "Write your review...": "Andika maoni yako...",

    "Guest": "Mgeni",
      "Luxury Stay": "Malazi ya Anasa",