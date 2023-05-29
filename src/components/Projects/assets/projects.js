import clonner from "./clonnerboxd.web.app.png";
import umai from "./umai-restaurant.web.app.png";
import photo from "./a-photo-tagging-app.web.app_.png";
import battleships from './howtoplay.gif'
const projects = [
  {
    id: 1,
    title: "Letterboxd Clone 🎥",
    description: [
      {
        id: 11,
        text: "As an avid film lover, I re-created a fully responsive clone of the popular social movie platform.",
      },
      {
        id: 12,
        text: "Create an account or try the app from the demo one.",
      },
      {
        id: 13,
        text: "Search, save and review your favorite movies fetched from TMDB API.",
      },
    ],
    tech: [
      {
        id: 111,
        name: "React",
      },
      {
        id: 122,
        name: "Firebase",
      },
      {
        id: 133,
        name: "TailwindCSS",
      },
      {
        id: 144,
        name: "API",
      },
    ],
    demoLink: "https://clonnerboxd.web.app/",
    repoLink: "https://github.com/janaiscoding/letterboxd-clone",
    variant: "fromLeft",
    image: clonner,
    translateY: "70",
  },
  {
    id: 2,
    title: "Umaī Restaurant 🍣",
    description: [
      {
        id: 21,
        text: "Umaī is a fictive asian restaurant with a shopping cart functionality.",
      },
      {
        id: 22,
        text: "The UI is inspired by visiting resturant websites and design platforms targeting the same audience.",
      },
      {
        id: 23,
        text: "Add to cart, remove, subscribe to the newsletter for “25% discount” or book a “reservation”.",
      },
    ],
    tech: [
      {
        id: 211,
        name: "React",
      },
      {
        id: 222,
        name: "CSS3",
      },
      {
        id: 233,
        name: "TailwindCSS",
      },
      {
        id: 244,
        name: "Shopping Cart",
      },
    ],
    demoLink: "https://umai-restaurant.web.app/",
    repoLink: "https://github.com/janaiscoding/shopping-cart",
    variant: "fromLeft",
    image: umai,
    translateY: "70",
  },
  {
    id: 3,
    title: "Historical Photo Tagging App 📸",
    description: [
      {
        id: 31,
        text: "A Find Waldo-like game set inside the chinese painting “Discussing the Divine Comedy with Dante”.",
      },
      {
        id: 32,
        text: "Global sorted leaderboard based on user timers implemented through Firebase DB.",
      },
      {
        id: 33,
        text: "Find all 3 targets and save your score, see how fast you can be!",
      },
    ],
    tech: [
      {
        id: 311,
        name: "React",
      },
      {
        id: 322,
        name: "Firestore Cloud",
      },
      {
        id: 333,
        name: "CSS3",
      },
      {
        id: 344,
        name: "Framer Motion",
      },
    ],
    demoLink: "https://a-photo-tagging-app.web.app/",
    repoLink: "https://github.com/janaiscoding/photo-tagging-app",
    variant: "fromLeft",
    image: photo,
    translateY: "20",
  },
  {
    id: 4,
    title: "Battleship Game 🏴‍☠️",
    description: [
      {
        id: 41,
        text: "Built in Vanilla JS by implementing TDD unit testing with Jest.",
      },
      {
        id: 42,
        text: "Using Classes constructors and following SOLID principles for Ship/Player/Gameboard and AI player.",
      },
      {
        id: 43,
        text: "Furthermore, I implemented a 'How to play' modal and a mobile version that toggles between the boards on every move.",
      },
    ],
    tech: [
      {
        id: 411,
        name: "Vanilla JS",
      },
      {
        id: 422,
        name: "OOP",
      },
      {
        id: 433,
        name: "CSS3",
      },
      {
        id: 444,
        name: "HTML5",
      },
      {
        id: 445,
        name: "Jest",
      },
    ],
    demoLink: "https://janaiscoding.github.io/battleship/",
    repoLink: "https://github.com/janaiscoding/battleship",
    variant: "fromLeft",
    image: battleships,
    translateY: "10",
  },
];

export default projects;
