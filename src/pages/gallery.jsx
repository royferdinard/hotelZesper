import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Footer from "../components/footer";
import image1 from "../assets/background1.jpg";
import ReuseableHero from "../components/hero/reusableHero";

//braekfast
import b1 from '../assets/b1.jfif';
import b2 from "../assets/b2.jfif";
import b4 from "../assets/b3.jfif";
import b5 from "../assets/b4.jfif";
import b6 from "../assets/b5.jfif";
import b7 from "../assets/b6.jfif";
import b8 from "../assets/b7.jfif";
import b9 from "../assets/b8.jfif";
import b10 from "../assets/b9.jfif";
import b11 from "../assets/b10.jfif";
import b12 from "../assets/b11.jfif";
import b13 from "../assets/b12.jfif";
import b14 from "../assets/b13.jfif";
import b15 from "../assets/b14.jfif";
import b16 from "../assets/b15.jfif";
import b17 from "../assets/b16.jfif";
import b18 from "../assets/b17.jfif";

//dinner
import d1 from '../assets/d1.jfif';
import d2 from "../assets/d2.jfif";
import d3 from "../assets/d3.jfif";
import d4 from "../assets/d3.jfif";
import d5 from "../assets/d4.jfif";
import d6 from "../assets/d5.jfif";
import d7 from "../assets/d6.jfif";
import d8 from "../assets/d7.jfif";
import d9 from "../assets/d8.jfif";
import d10 from "../assets/d9.jfif";
import d11 from "../assets/d10.jfif";
import d12 from "../assets/d11.jpg";
import d13 from "../assets/d12.webp";
import d14 from "../assets/d13.jpg";
import d15 from "../assets/d14.jfif";
import d16 from "../assets/d15.jfif";
import d17 from "../assets/d16.webp";
import d18 from "../assets/d17.webp";
import d19 from "../assets/d18.jpg";
import d20 from "../assets/d19.webp";
import d21 from "../assets/d20.webp";
import d22 from "../assets/d21.jpg";
import d23 from "../assets/d22.jfif";

//lunch
import l1 from '../assets/l1.jfif';
import l2 from "../assets/l2.jfif";
import l3 from "../assets/l3.jfif";
import l4 from "../assets/l3.jfif";
import l5 from "../assets/l4.jfif";
import l6 from "../assets/l5.jfif";
import l7 from "../assets/l6.jfif";
import l8 from "../assets/l7.jfif";
import l9 from "../assets/l8.jfif";
import l10 from "../assets/l9.jfif";
import l11 from "../assets/l10.jfif";
import l12 from "../assets/l11.jfif";
import l13 from "../assets/l12.jfif";
import l14 from "../assets/l13.jfif";
import l15 from "../assets/l14.jpg";
import l16 from "../assets/l15.jfif";
import l17 from "../assets/l16.jpg";
import l18 from "../assets/l17.jpg";
import l19 from "../assets/l18.jfif";
import l20 from "../assets/l19.jfif";
import l21 from "../assets/l20.jpg";

//supper
import s1 from '../assets/s1.avif';
import s2 from "../assets/s2.jfif";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s3.jpg";
import s5 from "../assets/s4.jfif";
import s6 from "../assets/s5.jpg";
import s7 from "../assets/s6.jpg";
import s8 from "../assets/s7.jpg";
import s9 from "../assets/s8.jfif";
import s10 from "../assets/s9.jpg";
import s11 from "../assets/s10.jfif";
import s12 from "../assets/s11.jfif";
import s13 from "../assets/s12.jpg";
import s14 from "../assets/s13.jfif";
import s15 from "../assets/s14.jfif";
import s16 from "../assets/s15.jfif";
import s17 from "../assets/s16.jfif";
import s18 from "../assets/s17.jpg";
import s19 from "../assets/s18.jfif";
import s20 from "../assets/s19.jpg";
import s21 from "../assets/s20.png";
import s22 from "../assets/s21.jpg";
import s23 from "../assets/s22.jpg";
import s24 from "../assets/s23.webp";
import s25 from "../assets/s24.webp";

//Drink
import dr1 from '../assets/dr1.jfif';
import dr2 from "../assets/dr2.webp";
import dr3 from "../assets/dr3.jfif";
import dr4 from "../assets/dr3.jfif";
import dr5 from "../assets/dr4.jfif";
import dr6 from "../assets/dr5.jfif";
import dr7 from "../assets/dr6.jfif";
import dr8 from "../assets/dr7.jfif";
import dr9 from "../assets/dr8.jfif";
import dr10 from "../assets/dr9.webp";
import dr11 from "../assets/dr10.jpg";
import dr12 from "../assets/dr11.jpg";
import dr13 from "../assets/dr12.jfif";
import dr14 from "../assets/dr13.jpg";
import dr15 from "../assets/dr14.jpg";
import dr16 from "../assets/dr15.jpg";
import dr17 from "../assets/dr16.jpg";
import dr18 from "../assets/dr17.jpg";
import dr19 from "../assets/dr18.webp";
import dr20 from "../assets/dr19.jpg";
import dr21 from "../assets/dr20.jfif";
import dr22 from "../assets/dr21.webp";

//Rooms
import r1 from '../assets/room.avif';
import r2 from "../assets/room.jpg";
import r3 from "../assets/room1.jpg";
import r4 from "../assets/room2.jpg";
import r5 from "../assets/room3.jpg";
import r6 from "../assets/room4.jpg";
import r7 from "../assets/room5.jpg";
import r8 from "../assets/room6.jpg";
import r9 from "../assets/room7.jpg";
import r10 from "../assets/room8.jpg";
import r11 from "../assets/room9.jpg";
import r12 from "../assets/room10.jpg";
import r13 from "../assets/room11.jpg";
import r14 from "../assets/room12.jpg";
import r15 from "../assets/room13.jpg";
import r16 from "../assets/room14.jpg";
import r17 from "../assets/room15.jpg";
import r18 from "../assets/room16.jpg";
import r19 from "../assets/room-beds-hotelzesper.webp";
import r20 from "../assets/room-sleek-hotelzesper.webp";

//parking
import p1 from '../assets/parking.jpg'
import p2 from '../assets/parking1.jpg'
import p3 from '../assets/parking2.jpg'
import p4 from '../assets/parking3.webp'
import p5 from '../assets/parking4.jpeg'
import p6 from '../assets/parking6.webp'
//hotel
import h1 from '../assets/zesper_room2.webp';
import h2 from "../assets/room-beds-hotelzesper.webp";
import h3 from "../assets/room-sleek-hotelzesper.webp";
import h4 from "../assets/room2.jpg";
import h5 from "../assets/room3.jpg";
import h6 from "../assets/room4.jpg";
import h7 from "../assets/room5.jpg";
import h8 from "../assets/room6.jpg";
import h9 from "../assets/room7.jpg";
import h10 from "../assets/room8.jpg";
import h11 from "../assets/room9.jpg";
import h12 from "../assets/room10.jpg";

//hotel
import ht1 from '../assets/fit.jpg'
import ht2 from '../assets/fitness.jpg'
import ht3 from '../assets/grandHall.webp'
import ht4 from '../assets/hotelzesper-building.webp'
import ht5 from '../assets/hotelzesper-front1.webp'
import ht6 from '../assets/background1.jpg'
//Dinning
// import dn1 from '../assets/dinning.png'
import dn1 from '../assets/dn1.jpg'
import dn2 from '../assets/dn2.jpg'
import dn3 from '../assets/dn3.jpg'
import dn4 from '../assets/dn4.webp'
import dn5 from '../assets/dn5.webp'
import dn6 from '../assets/dn6.jpg'
import dn7 from '../assets/dn7.jpg'
import dn8 from '../assets/dn8.webp'
import dn9 from '../assets/dn9.jpg'

//celebration
import cl1 from '../assets/birthday.webp'
import cl2 from '../assets/c1.avif'
import cl3 from '../assets/c2.jpg'
import cl4 from '../assets/c3.avif'
import cl5 from '../assets/c4.avif'
import c15 from '../assets/c5.jfif'
import cl6 from '../assets/c6.webp'
import cl7 from '../assets/c7.jpg'
import cl8 from '../assets/c8.jfif'
import cl9 from '../assets/c9.jfif'
import cl10 from '../assets/c10.jfif'

//leadership
import li1 from '../assets/client.jpg'
import li2 from '../assets/client1.jpg'
import li3 from '../assets/leader.jpg'
const categories = [
  "breakfast",
  "dinner",
  "lunch",
  "supper",
  "drinks",
  "rooms",
  "hotel",
  "dinning",
  "parking",
  "celebration",
  "leadership",
];

const imageData = {
  breakfast: [
    { id: 1, src: b1, alt: "Breakfast 1" },
    { id: 2, src: b2, alt: "Breakfast 2" },
    { id: 3, src: b11, alt: "Breakfast 2" },
    { id: 4, src: b4, alt: "Breakfast 2" },
    { id: 5, src: b5, alt: "Breakfast 2" },
    { id: 6, src: b6, alt: "Breakfast 2" },
    { id: 7, src: b7, alt: "Breakfast 2" },
    { id: 8, src: b8, alt: "Breakfast 2" },
    { id: 9, src: b9, alt: "Breakfast 2" },
    { id: 10, src: b10, alt: "Breakfast 2" },
    { id: 11, src: b11, alt: "Breakfast 2" },
    { id: 12, src: b12, alt: "Breakfast 2" },
    { id: 13, src: b13, alt: "Breakfast 2" },
    { id: 14, src: b14, alt: "Breakfast 2" },
    { id: 15, src: b15, alt: "Breakfast 2" },
    { id: 16, src: b16, alt: "Breakfast 2" },
    { id: 17, src: b17, alt: "Breakfast 2" },
    { id: 18, src: b18, alt: "Breakfast 2" },
  ],
  dinner: [
    { id: 1, src: d1, alt: "Dinner 1" },
    { id: 2, src: d2, alt: "Dinner 2" },
    { id: 3, src: d3, alt: "Dinner 3" },
    { id: 4, src: d4, alt: "Dinner 4" },
    { id: 5, src: d5, alt: "Dinner 5" },
    { id: 6, src: d6, alt: "Dinner 6" },
    { id: 7, src: d7, alt: "Dinner 7" },
    { id: 8, src: d8, alt: "Dinner 8" },
    { id: 9, src: d9, alt: "Dinner 9" },
    { id: 10, src: d10, alt: "Dinner 10" },
    { id: 11, src: d11, alt: "Dinner 11" },
    { id: 12, src: d12, alt: "Dinner 12" },
    { id: 13, src: d13, alt: "Dinner 13" },
    { id: 14, src: d14, alt: "Dinner 14" },
    { id: 15, src: d15, alt: "Dinner 15" },
    { id: 16, src: d16, alt: "Dinner 16" },
    { id: 17, src: d17, alt: "Dinner 17" },
    { id: 18, src: d18, alt: "Dinner 18" },
    { id: 19, src: d19, alt: "Dinner 19" },
    { id: 20, src: d20, alt: "Dinner 20" },
    { id: 21, src: d21, alt: "Dinner 21" },
    { id: 22, src: d22, alt: "Dinner 22" },
    { id: 23, src: d23, alt: "Dinner 23" },
     { id: 9, src: d9, alt: "Dinner 9" },
  ],
  lunch: [
     { id: 1, src: l1, alt: "Dinner 1" },
    { id: 2, src: l2, alt: "Dinner 2" },
    { id: 3, src: l3, alt: "Dinner 3" },
    { id: 4, src: l4, alt: "Dinner 4" },
    { id: 5, src: l5, alt: "Dinner 5" },
    { id: 6, src: l6, alt: "Dinner 6" },
    { id: 7, src: l7, alt: "Dinner 7" },
    { id: 8, src: l8, alt: "Dinner 8" },
    { id: 9, src: l9, alt: "Dinner 9" },
    { id: 10, src: l10, alt: "Dinner 10" },
    { id: 11, src: l11, alt: "Dinner 11" },
    { id: 12, src: l12, alt: "Dinner 12" },
    { id: 13, src: l13, alt: "Dinner 13" },
    { id: 14, src: l14, alt: "Dinner 14" },
    { id: 15, src: l15, alt: "Dinner 15" },
    { id: 16, src: l16, alt: "Dinner 16" },
    { id: 17, src: l17, alt: "Dinner 17" },
    { id: 18, src: l18, alt: "Dinner 18" },
    { id: 19, src: l19, alt: "Dinner 19" },
    { id: 20, src: l20, alt: "Dinner 20" },
    { id: 21, src: l21, alt: "Dinner 21" },
    // { id: 22, src: l22, alt: "Dinner 22" },
    // { id: 23, src: l23, alt: "Dinner 23" },
    //  { id: 9, src: l9, alt: "Dinner 9" },
  ],
  supper: [
    { id: 1, src: s1, alt: "Dinner 1" },
    { id: 2, src: s2, alt: "Dinner 2" },
    { id: 3, src: s3, alt: "Dinner 3" },
    { id: 4, src: s4, alt: "Dinner 4" },
    { id: 5, src: s5, alt: "Dinner 5" },
    { id: 6, src: s6, alt: "Dinner 6" },
    { id: 7, src: s7, alt: "Dinner 7" },
    { id: 8, src: s8, alt: "Dinner 8" },
    { id: 9, src: s9, alt: "Dinner 9" },
    { id: 10, src: s10, alt: "Dinner 10" },
    { id: 11, src: s11, alt: "Dinner 11" },
    { id: 12, src: s12, alt: "Dinner 12" },
    { id: 13, src: s13, alt: "Dinner 13" },
    { id: 14, src: s14, alt: "Dinner 14" },
    { id: 15, src: s15, alt: "Dinner 15" },
    { id: 16, src: s16, alt: "Dinner 16" },
    { id: 17, src: s17, alt: "Dinner 17" },
    { id: 18, src: s18, alt: "Dinner 18" },
    { id: 19, src: s19, alt: "Dinner 19" },
    { id: 20, src: s20, alt: "Dinner 20" },
    { id: 21, src: s21, alt: "Dinner 21" },
    { id: 22, src: s22, alt: "Dinner 22" },
    { id: 23, src: s23, alt: "Dinner 23" },
     { id: 9, src: s24, alt: "Dinner 9" },
      { id: 9, src: s25, alt: "Dinner 9" },
  ],
  drinks: [
    { id: 1, src: dr1, alt: "Dinner 1" },
    { id: 2, src: dr2, alt: "Dinner 2" },
    { id: 3, src: dr3, alt: "Dinner 3" },
    { id: 4, src: dr4, alt: "Dinner 4" },
    { id: 5, src: dr5, alt: "Dinner 5" },
    { id: 6, src: dr6, alt: "Dinner 6" },
    { id: 7, src: dr7, alt: "Dinner 7" },
    { id: 8, src: dr8, alt: "Dinner 8" },
    { id: 9, src: dr9, alt: "Dinner 9" },
    { id: 10, src: dr10, alt: "Dinner 10" },
    { id: 11, src: dr11, alt: "Dinner 11" },
    { id: 12, src: dr12, alt: "Dinner 12" },
    { id: 13, src: dr13, alt: "Dinner 13" },
    { id: 14, src: dr14, alt: "Dinner 14" },
    { id: 15, src: dr15, alt: "Dinner 15" },
    { id: 16, src: dr16, alt: "Dinner 16" },
    { id: 17, src: dr17, alt: "Dinner 17" },
    { id: 18, src: dr18, alt: "Dinner 18" },
    { id: 19, src: dr19, alt: "Dinner 19" },
    { id: 20, src: dr20, alt: "Dinner 20" },
    { id: 21, src: dr21, alt: "Dinner 21" },
    { id: 22, src: dr22, alt: "Dinner 22" },
    // { id: 23, src: dr23, alt: "Dinner 23" },
    //  { id: 9, src: dr24, alt: "Dinner 9" },
    //   { id: 9, src: dr25, alt: "Dinner 9" },
  ],
  rooms: [
    { id: 1, src: r1, alt: "Dinner 1" },
    { id: 2, src: r2, alt: "Dinner 2" },
    { id: 3, src: r3, alt: "Dinner 3" },
    { id: 4, src: r4, alt: "Dinner 4" },
    { id: 5, src: r5, alt: "Dinner 5" },
    { id: 6, src: r6, alt: "Dinner 6" },
    { id: 7, src: r7, alt: "Dinner 7" },
    { id: 8, src: r8, alt: "Dinner 8" },
    { id: 9, src: r9, alt: "Dinner 9" },
    { id: 10, src: r10, alt: "Dinner 10" },
    { id: 11, src: r11, alt: "Dinner 11" },
    { id: 12, src: r12, alt: "Dinner 12" },
    { id: 13, src: r13, alt: "Dinner 13" },
    { id: 14, src: r14, alt: "Dinner 14" },
    { id: 15, src: r15, alt: "Dinner 15" },
    { id: 16, src: r16, alt: "Dinner 16" },
    { id: 17, src: r17, alt: "Dinner 17" },
    { id: 18, src: r18, alt: "Dinner 18" },
    { id: 19, src: r19, alt: "Dinner 19" },
    { id: 20, src: r20, alt: "Dinner 20" },
      { id: 1, src: h1, alt: "Dinner 1" },
    { id: 2, src: h2, alt: "Dinner 2" },
    { id: 3, src: h3, alt: "Dinner 3" },
    { id: 4, src: h4, alt: "Dinner 4" },
    { id: 5, src: h5, alt: "Dinner 5" },
    { id: 6, src: h6, alt: "Dinner 6" },
    { id: 7, src: h7, alt: "Dinner 7" },
    { id: 8, src: h8, alt: "Dinner 8" },
    { id: 9, src: h9, alt: "Dinner 9" },
    { id: 10, src: h10, alt: "Dinner 10" },
    { id: 11, src: h11, alt: "Dinner 11" },
    { id: 12, src: h12, alt: "Dinner 12" },
   
  ],
  hotel: [
    { id: 1, src: ht1, alt: "Dinner 1" },
    { id: 2, src: ht2, alt: "Dinner 2" },
    { id: 3, src: ht3, alt: "Dinner 3" },
    { id: 4, src: ht4, alt: "Dinner 4" },
    { id: 5, src: ht5, alt: "Dinner 5" },
    { id: 6, src: ht6, alt: "Dinner 6" },
  ],
  dinning: [
      { id: 1, src: dn1, alt: "Dinner 1" },
    { id: 2, src: dn2, alt: "Dinner 2" },
    { id: 3, src: dn3, alt: "Dinner 3" },
    { id: 4, src: dn4, alt: "Dinner 4" },
    { id: 5, src: dn5, alt: "Dinner 5" },
    { id: 6, src: dn6, alt: "Dinner 6" },
    { id: 7, src: dn7, alt: "Dinner 7" },
    { id: 8, src: dn8, alt: "Dinner 8" },
    { id: 9, src: dn9, alt: "Dinner 9" },
    // { id: 10, src: dn10, alt: "Dinner 10" },
    // { id: 11, src: dn11, alt: "Dinner 11" },
    // { id: 12, src: dn12, alt: "Dinner 12" },
  ],
  parking: [
     { id: 9, src: p1, alt: "Dinner 9" },
     { id: 9, src: p2, alt: "Dinner 9" },
     { id: 9, src: p3, alt: "Dinner 9" },
     { id: 9, src: p4, alt: "Dinner 9" },
     { id: 9, src: p5, alt: "Dinner 9" },
     { id: 9, src: p6, alt: "Dinner 9" },
  ],
  celebration: [
      { id: 1, src: cl1, alt: "Dinner 1" },
    { id: 2, src: cl2, alt: "Dinner 2" },
    { id: 3, src: cl3, alt: "Dinner 3" },
    { id: 4, src: cl4, alt: "Dinner 4" },
    { id: 5, src: cl5, alt: "Dinner 5" },
    { id: 6, src: cl6, alt: "Dinner 6" },
    { id: 7, src: cl7, alt: "Dinner 7" },
    { id: 8, src: cl8, alt: "Dinner 8" },
    { id: 9, src: cl9, alt: "Dinner 9" },
  ],
  leadership: [
      { id: 1, src: li1, alt: "Dinner 1" },
    { id: 2, src: li2, alt: "Dinner 2" },
    { id: 2, src: li3, alt: "Dinner 2" },
  ],
};

const Gallery = () => {

  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [activeTab, setActiveTab] = useState("images");

  return (
    <>
      {/* Hero */}
      <ReuseableHero image={image1}>
        <h1 className="text-white dark:text-white text-2xl md:text-3xl font-bold text-center mb-1">
          {t("Our")} <span className="text-blue-500">{t("Gallery")}</span>
        </h1>
        <p className="text-sm text-white dark:text-gray-200 text-center">
          {t("Explore our luxurious rooms, dining, experiences, and unforgettable hotel moments.")}
        </p>
      </ReuseableHero>

      {/* Toggle */}
      <div className="flex justify-center gap-4 pt-6 p-4 dark:bg-slate-900">
        <button
          onClick={() => setActiveTab("images")}
          className={`w-[48%] h-12 md:w-40 rounded-md font-bold transition-all hover:-translate-y-0.5 ${
            activeTab === "images"
              ? "bg-blue-900 text-white dark:bg-blue-600"
              : "bg-white dark:bg-slate-900 text-blue-900 dark:text-white border-blue-900 border-2 dark:border-slate-700"
          }`}
        >
          {t("Images")}
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`w-[48%] h-12 md:w-40 rounded-md font-bold transition-all hover:-translate-y-0.5 ${
            activeTab === "videos"
              ? "bg-blue-900 text-white dark:bg-blue-600"
              : "bg-white dark:bg-slate-900 text-blue-900 dark:text-white border-blue-900 border-2 dark:border-slate-700"
          }`}
        >
          {t("Videos")}
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-nowrap md:justify-center dark:bg-slate-900 overflow-x-auto gap-3 mt-0 px-6 py-8 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 px-4 py-2 rounded-sm text-sm capitalize transition ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-slate-900 dark:border dark:border-slate-700 text-blue-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            {t(category)}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="px-6 dark:bg-slate-800 md:px-4 mt-0">
        {activeTab === "images" ? (
          <div className="flex flex-col dark:bg-slate-800 items-center py-8 md:py-4 justify-center md:flex-row flex-wrap w-full gap-4">
            {imageData[activeCategory]?.map((img) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-sm p-2 shadow-sm bg-white dark:bg-slate-900 dark:border dark:border-slate-700 hover:scale-102 transition duration-300 w-full h-60 md:w-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-sm p-2 shadow-sm bg-white dark:bg-slate-800 hover:scale-102 transition duration-300 w-full md:w-100 h-70 my-6">
            <video
              controls
              className="w-full rounded-sm shadow-sm h-full"
              src="https://cdn.pixabay.com/video/2023/03/07/153987-805945630_large.mp4"
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Gallery;