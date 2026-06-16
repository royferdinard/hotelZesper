import React from "react";
import { useTranslation } from 'react-i18next';
import Footer from "../components/footer";
import { useEffect } from "react";

const sections = [
  {
    id: "section1",
    title: "Introduction",
    content: [
      "Hotel Zesper respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you access our website, make reservations, or interact with our hospitality services.",
      "By using hotelzesper.com, booking accommodations, or engaging with our services, you agree to the collection and use of information in accordance with this Privacy Policy.",
      "This Privacy Policy applies to all guests, visitors, and users of our website and hotel-related services.",
    ],
  },
  {
    id: "section2",
    title: "Information We Collect",
    content: [
      "We may collect personal information such as your name, email address, phone number, billing information, booking details, guest preferences, and identification information required for reservations or check-ins.",
      "We may automatically collect technical information including browser type, operating system, IP address, referring pages, and website interaction data to improve our platform.",
      "Information may also be collected when you contact support, subscribe to newsletters, participate in promotions, or provide feedback regarding your stay.",
    ],
  },
  {
    id: "section3",
    title: "How We Use Your Information",
    content: [
      "We use your information to process reservations, manage guest stays, provide hospitality services, and communicate booking confirmations or updates.",
      "Information may also be used to personalize your hotel experience, improve website performance, and provide customer support.",
      "Where permitted by law, Hotel Zesper may send offers, newsletters, discounts, and marketing communications related to our services.",
    ],
  },
  {
    id: "section4",
    title: "Sharing of Information",
    content: [
      "Hotel Zesper may share limited personal information with trusted third-party providers for payment processing, reservation management, analytics, and customer communication services.",
      "We may disclose information if required by law, legal process, or to protect the safety, rights, and property of Hotel Zesper, our guests, or others.",
      "Hotel Zesper does not sell personal information to third parties.",
    ],
  },
  {
    id: "section5",
    title: "Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies and similar technologies to improve functionality, remember preferences, analyze website traffic, and enhance your browsing experience.",
      "Cookies help us understand how visitors use our website so we can improve usability and performance.",
      "You may disable cookies in your browser settings, though some website features may not function properly.",
    ],
  },
  {
    id: "section6",
    title: "Data Security",
    content: [
      "Hotel Zesper implements commercially reasonable safeguards to protect your information from unauthorized access, disclosure, misuse, or destruction.",
      "Sensitive booking and payment information is processed using secure technologies and trusted providers.",
      "While we take reasonable steps to secure your information, no online transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "section7",
    title: "Data Retention",
    content: [
      "We retain personal information only for as long as necessary to provide services, fulfill legal obligations, resolve disputes, and enforce agreements.",
      "Certain records related to reservations, billing, and guest interactions may be retained for legal, tax, or fraud-prevention purposes.",
    ],
  },
  {
    id: "section8",
    title: "Your Privacy Rights",
    content: [
      "Depending on applicable laws in your region, you may have rights to access, correct, update, or request deletion of your personal information.",
      "You may opt out of promotional communications at any time by following unsubscribe instructions or contacting Hotel Zesper directly.",
    ],
  },
  {
    id: "section9",
    title: "Third-Party Links & Services",
    content: [
      "Our website may contain links to third-party websites or booking services not controlled by Hotel Zesper.",
      "We are not responsible for the content, privacy practices, or policies of external websites. We encourage users to review third-party privacy policies.",
    ],
  },
  {
    id: "section10",
    title: "Children's Privacy",
    content: [
      "Hotel Zesper does not knowingly collect personal information from children without appropriate parental or legal guardian consent.",
      "If we become aware that information from a child has been collected improperly, we will take reasonable steps to remove it.",
    ],
  },
  {
    id: "section11",
    title: "International Data Transfers",
    content: [
      "Your information may be processed or stored in countries outside your own jurisdiction where privacy laws may differ.",
      "By using our services, you consent to the transfer and processing of information where legally permitted.",
    ],
  },
  {
    id: "section12",
    title: "Changes to This Privacy Policy",
    content: [
      "Hotel Zesper may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes.",
      "Updated versions will be posted on this page with a revised 'Last Updated' date.",
    ],
  },
  {
    id: "section13",
    title: "Contact Information",
    content: [
      "If you have questions about this Privacy Policy or how your information is handled, please contact us.",
      "Email: support@hotelzesper.com",
      "Phone: +254 XXX XXX XXX",
      "Address: Hotel Zesper, Nairobi, Kenya",
    ],
  },
];

const PrivacyPolicy = () => {

  const { t, i18n } = useTranslation();
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

 useEffect(() => {
  const scrollToHash = () => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");

    const tryScroll = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return true;
      }
      return false;
    };

    // retry until DOM is ready (fixes GitHub Pages delay)
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;

      if (tryScroll() || attempts > 10) {
        clearInterval(interval);
      }
    }, 200);
  };

  scrollToHash();

  window.addEventListener("hashchange", scrollToHash);

  return () => {
    window.removeEventListener("hashchange", scrollToHash);
  };
}, []);

  return (
    <>
      <div className="bg-linear-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 min-h-screen py-8 px-4 md:px-4 pt-25">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">

          {/* SIDEBAR */}
          <aside className="lg:w-[320px] lg:sticky lg:top-24 h-fit">
            <div className="bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">

              <div className="bg-blue-900 p-6 text-white">

                <p className={t("uppercase tracking-[3px] text-sm text-blue-200")}>
                  {t("Hotel Zesper")}
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  {t("Privacy Policy")}
                </h2>

                <p className="text-blue-100 text-sm mt-3 leading-6">
                  {t("Learn how we collect, use, and protect your information.")}
                </p>

                <p className="text-xs text-blue-200 mt-4">
                  {t("Last Updated: June 8, 2026")}
                </p>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  {t("Table of Contents")}
                </h3>

                <ul className="space-y-2">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();

                          const el = document.getElementById(section.id);

                          if (el) {
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });

                            window.history.pushState(null, "", `#${section.id}`);
                          }
                        }}
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 p-3 rounded-xl transition hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"
                      >
                        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm font-semibold group-hover:bg-blue-600 group-hover:text-white transition">
                          {index + 1}
                        </div>

                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-blue-700">
                          {t(section.title)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

          {/* CONTENT */}
          <main className="flex-1">
            <div className="bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">

              {/* HERO */}
              <div className="bg-blue-900 px-8 md:px-10 py-8 text-white">
                <p className="uppercase tracking-[4px] text-blue-200 text-sm">
                  {t("Legal Information")}
                </p>

                <h1 className="text-xl md:text-2xl font-bold mt-2 tracking-[1px]">
                  {t("Privacy Policy")}
                </h1>

                <p className="mt-2 text-blue-100 max-w-3xl tracking-[1px] text-sm leading-8">
                  {t("At Hotel Zesper, your privacy matters. This policy explains how we collect, store, and protect personal information when you use our website or services.")}
                </p>
              </div>

              {/* SECTIONS */}
              <div className="p-6 md:p-12 space-y-8">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 md:p-8 hover:shadow-md transition"
                  >
                    <div className="flex gap-4 items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {t(section.title)}
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-3"></div>
                      </div>
                    </div>

                    <div className="space-y-5 md:ml-16">
                      {section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-slate-600 dark:text-slate-300 leading-8 text-sm md:text-base"
                        >
                          {t(paragraph)}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;