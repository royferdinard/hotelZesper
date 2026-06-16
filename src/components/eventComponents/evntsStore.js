import image1 from '../../assets/copEvent.jpg'
import image2 from '../../assets/wedding.webp'
import image3 from '../../assets/birthday.webp'
import image4 from '../../assets/winner.webp'
import image5 from '../../assets/productEvent.webp'

const Events = [
  {
    id: 'weddingCeremony',
    name: "Luxury Wedding Ceremony",
    category: "Weddings",
    description:
      "A beautifully curated wedding experience with elegant décor, premium catering, and a breathtaking venue setup designed for your perfect day.",
    image: image2,
    price: 40000
  },

  {
    id: 'corporateConference',
    name: "Corporate Conference",
    category: "Conferences",
    description:
      "Professional meeting spaces equipped with modern AV systems, high-speed internet, and full support for seamless business events.",
    image: image1,
    price: 35000
  },

  {
    id: 'businessMeeting',
    name: "Executive Business Meeting",
    category: "Corporate Meetings",
    description:
      "Private meeting rooms designed for executives, strategy sessions, and professional business gatherings.",
    image: image1,
    price: 30000
  },

  {
    id: 'birthdayCelebration',
    name: "Birthday Celebration",
    category: "Birthday Parties",
    description:
      "Celebrate your special day with customized décor, music, catering, and a lively atmosphere tailored just for you.",
    image: image3,
    price: 15000
  },

  {
    id: 'anniversaryDinner',
    name: "Anniversary Celebration",
    category: "Anniversary Celebrations",
    description:
      "Create unforgettable memories with romantic décor, premium dining, and elegant event setups.",
    image: image4,
    price: 22000
  },

  {
    id: 'babyShowerEvent',
    name: "Baby Shower Celebration",
    category: "Baby Showers",
    description:
      "Celebrate your growing family with themed décor, catering, and a cozy venue for loved ones.",
    image: image3,
    price: 18000
  },

  {
    id: 'graduationParty',
    name: "Graduation Party",
    category: "Graduation Parties",
    description:
      "Celebrate academic success with a stylish party setup, food, music, and entertainment.",
    image: image4,
    price: 20000
  },

  {
    id: 'privateDinner',
    name: "Luxury Private Dinner",
    category: "Private Dinners",
    description:
      "Exclusive dining experiences for intimate celebrations, romantic dinners, or VIP guests.",
    image: image4,
    price: 25000
  },

  {
    id: 'musicNight',
    name: "Live Music Event",
    category: "Music Events",
    description:
      "Host energetic live performances with premium sound systems and luxury event spaces.",
    image: image4,
    price: 45000
  },

  {
    id: 'networkingEvent',
    name: "Professional Networking Event",
    category: "Networking Events",
    description:
      "Premium venue spaces for connecting professionals, startups, and business leaders.",
    image: image1,
    price: 28000
  },

  {
    id: 'valentineSpecial',
    name: "Valentine Special Dinner",
    category: "Valentine Specials",
    description:
      "Romantic candlelight setups and luxury dining experiences for couples.",
    image: image4,
    price: 26000
  },

  {
    id: 'luxuryEvent',
    name: "Luxury Gala Dinner Night",
    category: "Luxury Events",
    description:
      "An exclusive evening of fine dining, luxury ambiance, and entertainment for elite guests.",
    image: image4,
    price: 50000
  },

  {
    id: 'productLaunchEvent',
    name: "Product Launch Event",
    category: "Corporate Meetings",
    description:
      "Showcase your brand with a powerful launch setup, stage design, lighting, and media-ready presentation spaces.",
    image: image5,
    price: 89000
  },
];

export default Events;