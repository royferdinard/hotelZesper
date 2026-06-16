import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { BeatLoader } from "react-spinners";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const ChatbotPopup = ({ closeChat }) => {

  const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("zesper-chat");

    return saved
      ? JSON.parse(saved)
      : [
        {
          text: t("Hi 👋 Welcome to Zesper Hotel! How can I help?"),
          sender: "bot",
        },
      ];
  });

  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);
  const [listening, setListening] = useState(false);

  const chatEndRef = useRef(null);

  // ================= SAVE CHAT =================
  useEffect(() => {
    localStorage.setItem("zesper-chat", JSON.stringify(messages));
  }, [messages]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loader]);

  // ================= BOT LOGIC =================
  const getBotResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes("price") || q.includes("cost")) {
      return { text: t("Rooms start from 💰 Ksh.1500 per night."), sender: "bot" };
    }
    if (q.includes("sorry") || q.includes("apologize")) {
      return {
        text: t("No worries 😊 How can I help you?"),
        sender: "bot",
      };

      if (q.includes("price") || q.includes("cost")) {
        return { text: t("Rooms start from 💰 Ksh.1500 per night."), sender: "bot" };
      }
      if (q.includes("location") || q.includes("address") || q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("call") || q.includes("reach") || q.includes("find") || q.includes("where") || q.includes("located") || q.includes("location")) {
        return { text: t("We are located 🌍🌍 in kisii county, Nyanchwa sub-county. For more information email us at hotelzesper@gmail.com or call us at +254 739 279 531"), sender: "bot" };
      }
      if (q.includes("check-in") || q.includes("check in") || q.includes("checkin") || q.includes("check-in time") || q.includes("check in time") || q.includes("checkin time")) {
        return { text: t("⏰Check-in is from 2PM to normal guest and 6:00Pm to VIPs."), sender: "bot" };
      }
      if (q.includes("hey") || q.includes("hello") || q.includes("hi")) {
        return { text: t("Hello!😂😂 How can I help you?"), sender: "bot" };
      }
      if (q.includes("thank") || q.includes("thanks")) {
        return { text: t("You're welcome! Let me know if you have any other questions."), sender: "bot" };
      }
      if (q.includes("bye") || q.includes("goodbye")) {
        return { text: t("Goodbye!🙌🙌 Have a great day!"), sender: "bot" };
      }
      if (q.includes("amenities") || q.includes("facilities")) {
        return { text: t("We offer free 🛜 Wi-Fi, a fitness center, and a swimming pool."), sender: "bot" };
      }
      if (q.includes("reservation") || q.includes("booking")) {
        return { text: t("You can make a reservation on our website or by calling our front desk."), sender: "bot" };
      }
      if (q.includes("cancellation") || q.includes("policy")) {
        return { text: t("Our cancellation policy allows free cancellation up to 24 hours before check-in."), sender: "bot" };
      }
      if (q.includes("parking")) {
        return { text: t("We have a free🚗🚗 parking lot available for our guests."), sender: "bot" };
      }
      if (q.includes("restaurant") || q.includes("dining")) {
        return { text: t("Our🍨🍨 on-site restaurant serves breakfast, lunch, and dinner."), sender: "bot" };
      }
      if (q.includes("pool") || q.includes("swimming")) {
        return { text: t("Our🏊‍♀️🏊‍♀️ swimming pool is open from 8 AM to 10 PM. They are a great place to relax and enjoy the sun. Children and adults swim in different areas."), sender: "bot" };
      }
      if (q.includes("gym") || q.includes("fitness")) {
        return { text: t("Our🏋️‍♂️🏋️‍♂️ fitness center is open 24/7 and equipped with cardio machines, weights, and yoga mats."), sender: "bot" };
      }
      if (q.includes("spa") || q.includes("wellness")) {
        return { text: t("Our spa offers a variety of treatments including massages, facials, and body wraps."), sender: "bot" };
      }
      if (q.includes("events") || q.includes("meetings")) {
        return { text: t("We have event spaces available for meetings, conferences, and social gatherings. Please contact our events team for more information."), sender: "bot" };

      }
      if (q.includes("pet") || q.includes("pets")) {
        return { text: t("We are a pet-friendly hotel. Please contact us for our pet policy and any additional fees."), sender: "bot" };
      }
      if (q.includes("security") || q.includes("safety")) {
        return { text: t("👮👮We have a 24/7 security presence to ensure the safety of our guests."), sender: "bot" };
      }
      if ((q.includes("meals") || q.includes("food") || (q.includes("meals") || q.includes("food") || q.includes("dining") || q.includes("restaurant")))) {
        return { text: t("We have a restaurant on-site that serves🍗🍗🍗 breakfast, lunch, and dinner. We dispose of all food waste responsibly. Ready to join us?"), sender: "bot" };
      }
      if (q.includes("yes") || q.includes("sure") || q.includes("okay") || q.includes("alright") || q.includes("sounds good") || q.includes("definitely") || q.includes("absolutely") || q.includes("yeah") || q.includes("yep") || q.includes("of course") || q.includes("why not") || q.includes("let's do it") || q.includes("let us do it") || q.includes("let's go") || q.includes("let us go") || q.includes("ok") || q.includes("alrighty") || q.includes("great") || q.includes("awesome") || q.includes("fantastic") || q.includes("wonderful") || q.includes("amazing") || q.includes("perfect") || q.includes("sounds great") || q.includes("sounds perfect") || q.includes("sounds wonderful") || q.includes("sounds amazing") || q.includes("sounds fantastic")) {
        return { text: t("👍👍👍Contact us at hotelzesper@gmail.com or call +254 739 279 531 for more information or visit our website (www.hotelzesper.com) to book your stay."), sender: "bot" };
      }
      if (q.includes("no") || q.includes("nope") || q.includes("not really")) {
        return { text: t("🫣🫣I understand. Let us know if you have any other questions."), sender: "bot" };
      }
      if (q.includes("name") || q.includes("who are you") || q.includes("what's your name") || q.includes("who am i talking to")) {
        return { text: t("I am 🤖 the Zesper Chatbot, here to assist you with any questions about our hotel. You may also call me your AI assistant! How can I help you today?"), sender: "bot" };
      }
      if (((q.includes("bar") || q.includes("drinks") || q.includes("cocktails") || q.includes("beverages")))) {
        return { text: t("Yah, We have a bar 🍷 on-site that serves a variety of drinks, including cocktails and non-alcoholic beverages.🍾🍾🍾"), sender: "bot" };
      }
      if (q.includes("hotel") || q.includes("zesper")) {
        return { text: t("We are the Zesper Hotel, located in kisii county, Nyanchwa sub-county. Do you need more information?"), sender: "bot" };
      }
      if (q.includes("fuck") || q.includes("shit") || q.includes("damn") || q.includes("bitch") || q.includes("asshole") || q.includes("dick") || q.includes("pussy") || q.includes("bastard") || q.includes("slut") || q.includes("whore") || q.includes("cunt") || q.includes("fucker") || q.includes("motherfucker") || q.includes("dickhead") || q.includes("asshat") || q.includes("douchebag") || q.includes("prick") || q.includes("twat") || q.includes("whore") || q.includes("slut") || q.includes("bitch") || q.includes("asshole") || q.includes("dick") || q.includes("pussy") || q.includes("bastard") || q.includes("fuck you") || q.includes("silly")) {
        return { text: t("Oops!😭😞 That's not nice. How can I help you?"), sender: "bot" };
      }
      if (q.includes("apologize") || q.includes("sorry")) {
        return { text: t("Thank 🤣🤣 you for apologizing! How can I help you?"), sender: "bot" };
      }
    }


    if (q.includes("hello") || q.includes("hi")) {
      return { text: t("Hello 👋 How can I help you today?"), sender: "bot" };
    }

    if (q.includes("location") || q.includes("where")) {
      return { text: t("We are located in Kisii County, Nyanchwa sub-county 📍"), sender: "bot" };
    }

    if (
      q.includes("address") ||
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("phone") ||
      q.includes("call") ||
      q.includes("reach") ||
      q.includes("find") ||
      q.includes("located")
    ) {
      return {
        text: t("We are located 🌍 in Kisii County, Nyanchwa sub-county. Contact us at hotelzesper@gmail.com or +254 739 279 531"),
        sender: "bot",
      };
    }

    if (
      q.includes("check-in") ||
      q.includes("check in") ||
      q.includes("checkin") ||
      q.includes("check-in time")
    ) {
      return { text: t("⏰ Check-in is from 2PM."), sender: "bot" };
    }

    if (q.includes("thank") || q.includes("thanks")) {
      return {
        text: t("You're welcome! Let me know if you have any other questions."),
        sender: "bot",
      };
    }

    if (q.includes("bye") || q.includes("goodbye")) {
      return { text: t("Goodbye!🙌 Have a great day!"), sender: "bot" };
    }

    if (q.includes("amenities") || q.includes("facilities")) {
      return {
        text: t("We offer free Wi-Fi, a fitness center, and a swimming pool."),
        sender: "bot",
      };
    }

    if (q.includes("reservation") || q.includes("booking")) {
      return {
        text: t("You can make a reservation on our website or call our front desk."),
        sender: "bot",
      };
    }

    if (q.includes("cancellation") || q.includes("policy")) {
      return {
        text: t("Free cancellation up to 24 hours before check-in."),
        sender: "bot",
      };
    }

    if (q.includes("parking")) {
      return { text: t("Free parking is available for all guests."), sender: "bot" };
    }

    if (q.includes("restaurant") || q.includes("dining")) {
      return {
        text: t("Our on-site restaurant serves breakfast, lunch, and dinner."),
        sender: "bot",
      };
    }

    if (q.includes("pool") || q.includes("swimming")) {
      return {
        text: t("Our swimming pool is open from 8 AM to 10 PM."),
        sender: "bot",
      };
    }

    if (q.includes("gym") || q.includes("fitness")) {
      return {
        text: t("Our fitness center is open 24/7 with modern equipment."),
        sender: "bot",
      };
    }

    if (q.includes("spa") || q.includes("wellness")) {
      return {
        text: t("Our spa offers massages, facials, and body treatments."),
        sender: "bot",
      };
    }

    if (q.includes("events") || q.includes("meetings")) {
      return {
        text: t("We offer event spaces for meetings and gatherings."),
        sender: "bot",
      };
    }

    if (q.includes("pet") || q.includes("pets")) {
      return {
        text: t("We are a pet-friendly hotel. Contact us for details."),
        sender: "bot",
      };
    }

    if (q.includes("security") || q.includes("safety")) {
      return {
        text: t("We have 24/7 security to ensure guest safety."),
        sender: "bot",
      };
    }

    if (q.includes("food") || q.includes("meals") || q.includes("dining")) {
      return {
        text: t("We serve breakfast, lunch, and dinner at our restaurant."),
        sender: "bot",
      };
    }

    if (
      q.includes("yes") ||
      q.includes("okay") ||
      q.includes("ok") ||
      q.includes("sure") ||
      q.includes("alright") ||
      q.includes("sounds good")
    ) {
      return {
        text: t("Great 👍 Contact us at hotelzesper@gmail.com or +254 739 279 531"),
        sender: "bot",
      };
    }

    if (q.includes("no") || q.includes("nope")) {
      return {
        text: t("Alright 🫣 Let us know if you need anything else."),
        sender: "bot",
      };
    }

    // if (q.includes("name") || q.includes("who are you")) {
    //   return {
    //     text: t("I am the Zesper AI Chatbot 🤖 ready to assist you."),
    //     sender: "bot",
    //   };
    // }

    // if (q.includes("bar") || q.includes("drinks")) {
    //   return {
    //     text: t("We have a bar serving cocktails and beverages 🍹"),
    //     sender: "bot",
    //   };
    // }

    // if (q.includes("hotel") || q.includes("zesper")) {
    //   return {
    //     text: t("Zesper Hotel is located in Kisii County, Nyanchwa."),
    //     sender: "bot",
    //   };
    // }


    return {
      text: t("Sorry, I didn’t understand. Ask me about Zesper Hotel 😊"),
      sender: "bot",
    };
  };

  // ================= SEND MESSAGE =================
  const handleSend = () => {
    const cleanInput = input.trim();
    if (!cleanInput) return;

    const userMessage = {
      text: cleanInput,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoader(true);

    setTimeout(() => {
      const botReply = getBotResponse(cleanInput);
      setMessages((prev) => [...prev, botReply]);
      setLoader(false);
    }, 1200);
  };

  // ================= VOICE INPUT =================
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(t("Voice input not supported in this browser"));
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    setListening(true);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setInput(text);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  };

  return (
  <div className="w-full md:bg-transparent">
    <div className="fixed md:bottom-5 bottom-1 right-2 md:right-5 z-50 w-[96%] sm:w-[380px] h-[98.5%] md:h-120 
      bg-white/90 dark:bg-slate-900/95
      backdrop-blur-lg 
      border border-slate-200 dark:border-slate-700
      shadow-[0_20px_50px_rgba(0,0,0,0.15)]
      rounded-xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 dark:from-slate-800 dark:to-slate-900 text-white p-4 flex items-center justify-between shadow-md">

        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <BsRobot size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-sm">
              {t("Zesper Assistant")}
            </h2>

            <div className="flex items-center gap-2 text-xs text-blue-100 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {t("Online")}
            </div>
          </div>
        </div>

        <button
          onClick={closeChat}
          className="hover:bg-white/20 p-2 rounded-full transition-all"
        >
          <IoClose size={24} />
        </button>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto px-4 py-5 
        bg-gradient-to-b from-slate-50 to-blue-50
        dark:from-slate-900 dark:to-slate-800
        space-y-4 scrollbar-thin">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="bg-blue-600 dark:bg-slate-700 text-white p-2 rounded-full shadow-md">
                <BsRobot size={18} />
              </div>
            )}

            <div
              className={`max-w-[78%] px-4 py-3 rounded-3xl text-sm shadow-sm transition-all ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-md"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-gray-700 dark:text-slate-200 rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>

            {msg.sender === "user" && (
              <FaUserCircle
                size={32}
                className="text-blue-600 dark:text-blue-400"
              />
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {loader && (
          <div className="flex items-end gap-2">
            <div className="bg-blue-600 dark:bg-slate-700 text-white p-2 rounded-full shadow-md">
              <BsRobot size={18} />
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-3xl rounded-bl-md shadow-sm flex items-center gap-3">
              <BeatLoader size={8} color="#2563eb" />

              <span className="text-xs text-gray-500 dark:text-slate-400">
                {t("typing...")}
              </span>
            </div>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      {/* INPUT AREA */}
      <div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3">

        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-2xl px-2 py-2">

          <input
            className="flex-1 bg-transparent outline-none text-sm px-3 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            placeholder={
              listening
                ? t("🎤 Listening...")
                : t("Ask anything...")
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSend()
            }
          />

          {/* Voice */}
          <button
            onClick={startVoice}
            className={`p-3 rounded-xl transition-all ${
              listening
                ? "bg-red-500 text-white animate-pulse"
                : "bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-300"
            }`}
          >
            <FaMicrophone className="dark:text-white" />
          </button>

          {/* Send */}
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-xl transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>

    </div>
  </div>
);
};

export default ChatbotPopup;