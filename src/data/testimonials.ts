export interface Testimonial {
  id: number;
  stars: number;
  review: string;
  product: string;
  reviewer: string;
  location: string;
  avatarInitial: string;
  avatarGradient: string;
  timeAgo: string;
  row: 1 | 2;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    review: "I was skeptical at first — I've been burned before by 'Grade A' phones that turned out to be locally repaired. But Mayor Gadgets was different. They sent me the battery health screenshot before I even paid. iPhone arrived exactly as described. Battery at 93%. Not a scratch.",
    product: "iPhone 14 Pro",
    reviewer: "Chukwuemeka Obi",
    location: "Lekki, Lagos",
    avatarInitial: "C",
    avatarGradient: "linear-gradient(135deg, #3B82F6, #6366F1)",
    timeAgo: "2 weeks ago",
    row: 1
  },
  {
    id: 2,
    stars: 5,
    review: "The Canada sourcing is real. I asked them to prove it and they showed me everything. My Samsung S24 Ultra arrived with the Canadian carrier unlock sticker still on the box. 200MP camera is mad. Service was fast and they replied my WhatsApp in minutes.",
    product: "Samsung Galaxy S24 Ultra",
    reviewer: "Adaeze Nwosu",
    location: "Victoria Island, Lagos",
    avatarInitial: "A",
    avatarGradient: "linear-gradient(135deg, #F472B6, #EC4899)",
    timeAgo: "1 month ago",
    row: 1
  },
  {
    id: 3,
    stars: 5,
    review: "Ordered AirPods Pro and was worried about getting fakes. These are 100% original. The ANC is insane — nothing like the knockoffs flooding the market. Mayor Gadgets told me exactly what to check on my iPhone to verify authenticity. Completely transparent.",
    product: "AirPods Pro 2nd Gen",
    reviewer: "Babatunde Fashola",
    location: "Ikeja, Lagos",
    avatarInitial: "B",
    avatarGradient: "linear-gradient(135deg, #34D399, #059669)",
    timeAgo: "3 weeks ago",
    row: 1
  },
  {
    id: 4,
    stars: 5,
    review: "This is my third order from Mayor Gadgets. First was an iPhone 13, then Apple Watch, now iPhone 15 Pro Max. Each time the process is smooth, the device is exactly Grade A as promised, and delivery is fast. They've earned my loyalty completely.",
    product: "iPhone 15 Pro Max",
    reviewer: "Kemi Adeyemi",
    location: "Surulere, Lagos",
    avatarInitial: "K",
    avatarGradient: "linear-gradient(135deg, #FBBF24, #F59E0B)",
    timeAgo: "5 days ago",
    row: 1
  },
  {
    id: 5,
    stars: 5,
    review: "I specifically asked about the battery health before ordering. They sent me a screenshot showing 91% — and when the phone arrived and I checked myself, it was exactly 91%. That level of honesty is rare in this Lagos market. I'll be recommending Mayor Gadgets to everyone.",
    product: "iPhone 13 Pro",
    reviewer: "Tunde Bakare",
    location: "Yaba, Lagos",
    avatarInitial: "T",
    avatarGradient: "linear-gradient(135deg, #A78BFA, #7C3AED)",
    timeAgo: "2 months ago",
    row: 2
  },
  {
    id: 6,
    stars: 5,
    review: "Got a JBL speaker and couldn't believe the condition. It looks and sounds brand new. Mayor Gadgets told me it was Grade A and they meant it — no scratches, full charge, original box accessories included. Canada quality is a different thing entirely.",
    product: "JBL Charge 5",
    reviewer: "Ngozi Eze",
    location: "Ajah, Lagos",
    avatarInitial: "N",
    avatarGradient: "linear-gradient(135deg, #FB923C, #EA580C)",
    timeAgo: "3 weeks ago",
    row: 2
  },
  {
    id: 7,
    stars: 5,
    review: "What I respect most is that they don't overpromise. When I asked about a specific iPhone color they didn't have, they told me directly instead of selling me something else. That kind of honesty is why I trust them completely. Already recommended to 4 people.",
    product: "iPhone 15",
    reviewer: "Emeka Okafor",
    location: "Maryland, Lagos",
    avatarInitial: "E",
    avatarGradient: "linear-gradient(135deg, #2DD4BF, #0D9488)",
    timeAgo: "1 week ago",
    row: 2
  },
  {
    id: 8,
    stars: 5,
    review: "Apple Watch Series 9 arrived in perfect condition. Band was clean, screen pristine, paired instantly with my iPhone. Battery health was 89% as they told me upfront. The unboxing felt premium — you can feel the Canada quality difference immediately.",
    product: "Apple Watch Series 9",
    reviewer: "Folake Ogundimu",
    location: "Gbagada, Lagos",
    avatarInitial: "F",
    avatarGradient: "linear-gradient(135deg, #60A5FA, #2563EB)",
    timeAgo: "2 weeks ago",
    row: 2
  }
];
