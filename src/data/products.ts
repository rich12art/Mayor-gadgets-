import imgIphone15 from "../assets/images/iphone_15_pro_max_1779201113808.png";
import imgIphone14 from "../assets/images/iphone_14_pro_1779201137440.png";
import imgS24Ultra from "../assets/images/s24_ultra_1779201154820.png";
import imgAppleWatch from "../assets/images/apple_watch_9_1779201171187.png";
import imgAirPods from "../assets/images/airpods_pro_2_1779201187692.png";
import imgA54 from "../assets/images/samsung_a54_1779201208114.png";
import imgJBLCharge from "../assets/images/jbl_charge_5_1779201251653.png";
import imgMagSafe from "../assets/images/magsafe_charger_1779201269477.png";

export interface Product {
  id: number;
  category: string;
  name: string;
  specs: string;
  price: string;
  oldPrice: string | null;
  badge: "popular" | "new" | "hot" | null;
  rating: number;
  reviews: number;
  certBadges: string[];
  image: string;
  filter: string;
}

export const products: Product[] = [
  {
    id: 1,
    category: "iPhone",
    name: "Apple iPhone 15 Pro Max",
    specs: "256GB · Natural Titanium · A17 Pro",
    price: "₦980,000",
    oldPrice: "₦1,050,000",
    badge: "popular",
    rating: 5,
    reviews: 48,
    certBadges: ["✓ Battery 92%+", "✓ Screen Perfect", "✓ No Repairs"],
    image: imgIphone15,
    filter: "iPhones"
  },
  {
    id: 2,
    category: "iPhone",
    name: "Apple iPhone 14 Pro",
    specs: "128GB · Deep Purple · A16 Bionic",
    price: "₦680,000",
    oldPrice: null,
    badge: "new",
    rating: 5,
    reviews: 31,
    certBadges: ["✓ Battery 90%+", "✓ Unlocked", "✓ Factory Reset"],
    image: imgIphone14,
    filter: "iPhones"
  },
  {
    id: 3,
    category: "Android",
    name: "Samsung Galaxy S24 Ultra",
    specs: "256GB · Titanium Black · 200MP",
    price: "₦890,000",
    oldPrice: "₦950,000",
    badge: "hot",
    rating: 5,
    reviews: 27,
    certBadges: ["✓ Battery 91%+", "✓ Screen Perfect", "✓ No Repairs"],
    image: imgS24Ultra,
    filter: "Android"
  },
  {
    id: 4,
    category: "Smartwatch",
    name: "Apple Watch Series 9",
    specs: "GPS · 45mm · Midnight Aluminium",
    price: "₦320,000",
    oldPrice: null,
    badge: "new",
    rating: 4,
    reviews: 19,
    certBadges: ["✓ Battery 88%+", "✓ Full Hardware Check", "✓ Unlocked"],
    image: imgAppleWatch,
    filter: "Smartwatches"
  },
  {
    id: 5,
    category: "AirPods",
    name: "Apple AirPods Pro 2nd Gen",
    specs: "MagSafe Case · Active Noise Cancellation",
    price: "₦185,000",
    oldPrice: "₦210,000",
    badge: "popular",
    rating: 5,
    reviews: 62,
    certBadges: ["✓ Both Earbuds Perfect", "✓ ANC Working", "✓ Case Included"],
    image: imgAirPods,
    filter: "AirPods"
  },
  {
    id: 6,
    category: "Android",
    name: "Samsung Galaxy A54",
    specs: "128GB · Awesome Black · 50MP",
    price: "₦240,000",
    oldPrice: null,
    badge: null,
    rating: 4,
    reviews: 14,
    certBadges: ["✓ Battery 89%+", "✓ Unlocked", "✓ Factory Reset"],
    image: imgA54,
    filter: "Android"
  },
  {
    id: 7,
    category: "Speaker",
    name: "JBL Charge 5",
    specs: "Portable Bluetooth · IP67 Waterproof",
    price: "₦95,000",
    oldPrice: "₦115,000",
    badge: "hot",
    rating: 4,
    reviews: 33,
    certBadges: ["✓ Full Sound Check", "✓ Battery 85%+", "✓ No Damage"],
    image: imgJBLCharge,
    filter: "Speakers"
  },
  {
    id: 8,
    category: "Accessory",
    name: "Apple MagSafe Charger Bundle",
    specs: "15W MagSafe · Cable + Case Included",
    price: "₦45,000",
    oldPrice: null,
    badge: null,
    rating: 4,
    reviews: 22,
    certBadges: ["✓ Charging Verified", "✓ Original Apple", "✓ No Faults"],
    image: imgMagSafe,
    filter: "Accessories"
  }
];
