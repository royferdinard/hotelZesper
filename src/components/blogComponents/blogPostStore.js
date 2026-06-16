import Logo from '../../assets/logo.jfif'
import { useTranslation } from 'react-i18next';


// const {t}= useTranslation();
const BlogsData = [
  {
    id: 1,
    title: "Luxury Weekend Experience at Hotel Zesper",
    author: "Grace Wanjiku",
    date: "June 4, 2026",
    category: "Luxury Stay",
    logo:{Logo},
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    shortDescription:
      "Enjoy a premium luxury experience with elegant suites, spa relaxation and unforgettable moments.",
    fullDescription:
      "At Hotel Zesper, every weekend transforms into a luxury escape. Guests enjoy premium suites, spa sessions, breathtaking dining experiences, personalized room service, rooftop relaxation and luxury accommodations crafted for unforgettable comfort. Whether for family vacations, romantic getaways or solo relaxation, Hotel Zesper creates lasting memories.",
    likes: 145,
    comments: [
      {
        id: 1,
        name: "James Mwangi",
        text: "Looks amazing! Definitely visiting soon 🔥",
        time: "2h ago",
      },
    ],
  },

  {
    id: 2,
    title: "Dream Wedding Destination",
    author: "Hotel Zesper Events Team",
    date: "May 30, 2026",
    category: "Events",
    logo:{Logo},
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
    shortDescription:
      "Celebrate your dream wedding in elegance and luxury.",
    fullDescription:
      "Hotel Zesper offers world-class wedding venues with elegant decoration, luxury dining, premium accommodation and event planning services tailored to create unforgettable wedding experiences.",
    likes: 98,
    comments: [],
  },

  {
    id: 3,
    title: "Premium Dining Experience",
    author: "Chef Amanda",
    date: "May 26, 2026",
    category: "Dinning",
    logo:{Logo},
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    shortDescription:
      "Taste unforgettable breakfast, lunch and dinner experiences.",
    fullDescription:
      "Our chefs craft exceptional dishes from fresh premium ingredients. Guests enjoy luxury dining spaces, professional hospitality and unforgettable culinary moments.",
    likes: 76,
    comments: [],
  },
];

export default BlogsData 