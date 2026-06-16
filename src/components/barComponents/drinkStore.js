import image1 from "../../assets/dr2.webp";
import image2 from "../../assets/dr16.jpg";
import image3 from "../../assets/drink2.webp";
import image4 from "../../assets/dr21.webp";


const Drinks = [
  {
    image: image1,
    id: "Shampeign",
    head: "Shampeign",
    category: "Premium Drinks",
    description:
      "A premium sparkling drink crafted for celebrations, offering a crisp, elegant taste perfect for special occasions.",
    points: 15,
    price: 1450,
  },

  {
    image: image2,
    id: "lemonJuice",
    head: "Lemon Juice",
    category: "Juices",
    description:
      "Freshly squeezed lemons blended into a refreshing citrus drink, perfect for boosting energy and hydration.",
    points: 7,
    price: 800,
  },

  {
    image: image3,
    id: "viceRoy",
    head: "Vice Roy Cocktail",
    category: "Cocktails",
    description:
      "A smooth and balanced cocktail mix with a rich flavor profile, ideal for evening relaxation and social gatherings.",
    points: 9,
    price: 1050,
  },

  {
    image: image4,
    id: "monin",
    head: "Monin Syrup Drink",
    category: "Soft Drinks",
    description:
      "A sweet and flavorful soft drink infused with premium Monin syrup for a smooth and refreshing taste experience.",
    points: 17,
    price: 2770,
  },
];

export default Drinks;