import hero from "@/assets/hero.jpg";
import v2 from "@/assets/villa-2.jpg";
import v3 from "@/assets/villa-3.jpg";
import v4 from "@/assets/villa-4.jpg";
import v5 from "@/assets/villa-5.jpg";

export type Villa = {
  slug: string;
  name: string;
  location: "Chiclana" | "Roche";
  image: string;
  guests: number;
  bedrooms: number;
  tagline: string;
  description: string;
  features: string[];
};

export const villas: Villa[] = [
  {
    slug: "villa-atalaya",
    name: "Villa Atalaya",
    location: "Roche",
    image: hero,
    guests: 10,
    bedrooms: 5,
    tagline: "Above the cliffs, facing the sunset",
    description:
      "A whitewashed hillside retreat with an infinity pool that melts into the Atlantic horizon, olive groves and bougainvillea-draped terraces.",
    features: ["Infinity pool", "Sea views", "Olive garden", "Outdoor dining for 12"],
  },
  {
    slug: "casa-pinar",
    name: "Casa Pinar",
    location: "Roche",
    image: v2,
    guests: 8,
    bedrooms: 4,
    tagline: "Modern calm beneath the umbrella pines",
    description:
      "Clean, contemporary lines set within a private pine forest, with a 20-metre lap pool and sweeping lawns for children to roam.",
    features: ["Lap pool", "Private pine forest", "Lawn garden", "Minutes from the coves"],
  },
  {
    slug: "cortijo-lavanda",
    name: "Cortijo Lavanda",
    location: "Chiclana",
    image: v3,
    guests: 12,
    bedrooms: 6,
    tagline: "An Andalusian estate wrapped in lavender",
    description:
      "A traditional cortijo with terracotta roofs, palm-lined gardens and a generous pool — made for multi-generational family gatherings.",
    features: ["Large pool", "Palm & lavender gardens", "Shaded porches", "Family suites"],
  },
  {
    slug: "villa-candela",
    name: "Villa Candela",
    location: "Chiclana",
    image: v4,
    guests: 6,
    bedrooms: 3,
    tagline: "Intimate evenings by candlelight",
    description:
      "Designed for couples and small families: a lantern-lit pool terrace, sea glimpses and an outdoor table where the private chef sets dinner.",
    features: ["Heated pool", "Sunset terrace", "Private chef kitchen", "Romantic suites"],
  },
  {
    slug: "casa-duna",
    name: "Casa Duna",
    location: "Chiclana",
    image: v5,
    guests: 10,
    bedrooms: 5,
    tagline: "Where the garden meets the dunes",
    description:
      "Steps from the golden sands of La Barrosa, a serene villa with mature gardens, a sun-drenched pool and direct path towards the sea.",
    features: ["Pool & sun deck", "Near the beach", "Mature gardens", "Kids' play area"],
  },
];
