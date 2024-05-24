import cover from "/public/images/cover.png";
import moon from "/public/images/moon.png";
import cover2 from "/public/images/cover.png";
import radan from "/public/images/radan.png";
import rot from "/public/images/rot.png";
import maiden from "/public/images/maiden.png";

export const cards = [
  {
    id: 1,
    title: "Moon",
    description: "The mystical moon that guides Ranni the Witch on her dark quest.",
    image: moon,
    link: "/moon",
  },
  {
    id: 2,
    title: "Maiden",
    description: "The enigmatic maiden who aids Tarnished on their journey.",
    image: maiden,
    link: "/maiden",
  },
  {
    id: 3,
    title: "Radahn",
    description: "The fearsome General Radahn, master of the stars and scourge of the battlefield.",
    image: radan,
    link: "/radahn",
  },
  {
    id: 4,
    title: "Scarlet Rot",
    description: "The pervasive and deadly Scarlet Rot that plagues the Lands Between.",
    image: rot,
    link: "/scarlet-rot",
  },
  {
    id: 5,
    title: "Elden Ring Cover",
    description: "The cover art of Elden Ring, depicting the epic tale of the Tarnished.",
    image: cover2,
    link: "/elden-ring-cover",
  },
];
