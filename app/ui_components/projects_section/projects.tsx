import socializer from "../../../public/projects_assets/socializerme.vercel.app_.webp";
import clonner from "../../../public/projects_assets/clonnerboxd.web.app.webp";
import umai from "../../../public/projects_assets/umai-restaurant.web.app.webp";
import photo from "../../../public/projects_assets/PTAPP.webp";
import battleships from "../../../public/projects_assets/howtoplay.gif";
const projects = [
  {
    id: "socializer",
    title: "Socializer 🫶",
    description: [
      {
        id: "socializer-description-1",
        text: "Enabled users to manage friendship, upload images and posts ",
      },
      {
        id: "socializer-description-2",
        text: "Implemented a secure RESTful API, with JWT authentication and CRUD operations",
      },
      {
        id: "socializer-description-3",
        text: "Enhanced the user and developer experience by integrating the React Context API and React Custom Hooks",
      },
    ],
    tech: [
      {
        id: "socializer-tech-1",
        name: "TypeScript",
      },
      {
        id: "socializer-tech-2",
        name: "Node.js",
      },
      {
        id: "socializer-tech-3",
        name: "MongoDB",
      },
      {
        id: "socializer-tech-4",
        name: "React",
      },
      {
        id: "socializer-tech-5",
        name: "TailwindCSS",
      },
    ],
    demoLink: "https://socializerme.vercel.app/",
    repoLink: "https://github.com/janaiscoding/socializer/",
    variant: "fromLeft",
    image: socializer,
    translateY: "-10",
  },
  {
    id: "clonnerboxd",
    title: "Letterboxd Clone 🎥",
    description: [
      {
        id: "clonnerboxd-description-1",
        text: "As an avid film lover, I re-created a fully responsive clone of the popular social movie platform.",
      },
      {
        id: "clonnerboxd-description-2",
        text: "Create an account or try the app from the demo one.",
      },
      {
        id: "clonnerboxd-description-3",
        text: "Search, save and review your favorite movies fetched from TMDB API.",
      },
    ],
    tech: [
      {
        id: "clonnerboxd-tech-1",
        name: "React",
      },
      {
        id: "clonnerboxd-tech-2",
        name: "Firebase",
      },
      {
        id: "clonnerboxd-tech-3",
        name: "TailwindCSS",
      },
      {
        id: "clonnerboxd-tech-4",
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
    id: "umai",
    title: "Umaī Restaurant 🍣",
    description: [
      {
        id: "umai-description-1",
        text: "Umaī is a fictive asian restaurant with a shopping cart functionality.",
      },
      {
        id: "umai-description-2",
        text: "Add to cart, remove, subscribe to the newsletter for “25% discount” or book a “reservation”.",
      },
    ],
    tech: [
      {
        id: "umai-tech-1",
        name: "React",
      },
      {
        id: "umai-tech-2",
        name: "CSS3",
      },
      {
        id: "umai-tech-3",
        name: "TailwindCSS",
      },
      {
        id: "umai-tech-4",
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
    id: "photo",
    title: "Historical Photo Tagging App 📸",
    description: [
      {
        id: "photo-description-1",
        text: "A Find Waldo-like game set inside the chinese painting “Discussing the Divine Comedy with Dante”.",
      },
      {
        id: "photo-description-2",
        text: "Global sorted leaderboard based on user timers implemented through Firebase DB.",
      },
      {
        id: "photo-description-3",
        text: "Find all 3 targets and save your score, see how fast you can be!",
      },
    ],
    tech: [
      {
        id: "photo-tech-1",
        name: "React",
      },
      {
        id: "photo-tech-2",
        name: "Firestore Cloud",
      },
      {
        id: "photo-tech-3",
        name: "CSS3",
      },
      {
        id: "photo-tech-4",
        name: "Framer Motion",
      },
    ],
    demoLink: "https://a-photo-tagging-app.web.app/",
    repoLink: "https://github.com/janaiscoding/photo-tagging-app",
    variant: "fromLeft",
    image: photo,
    translateY: "20",
  },
  //   {
  //     id: "battleship",
  //     title: "Battleship Game 🏴‍☠️",
  //     description: [
  //       {
  //         id: 41,
  //         text: "Built in Vanilla JS by implementing TDD unit testing with Jest.",
  //       },
  //       {
  //         id: 42,
  //         text: "Using Classes constructors and following SOLID principles for Ship/Player/Gameboard and AI player.",
  //       },
  //       {
  //         id: 43,
  //         text: "Furthermore, I implemented a 'How to play' modal and a mobile version that toggles between the boards on every move.",
  //       },
  //     ],
  //     tech: [
  //       {
  //         id: 411,
  //         name: "Vanilla JS",
  //       },
  //       {
  //         id: 422,
  //         name: "OOP",
  //       },
  //       {
  //         id: 433,
  //         name: "CSS3",
  //       },
  //       {
  //         id: 444,
  //         name: "HTML5",
  //       },
  //       {
  //         id: 445,
  //         name: "Jest",
  //       },
  //     ],
  //     demoLink: "https://janaiscoding.github.io/battleship/",
  //     repoLink: "https://github.com/janaiscoding/battleship",
  //     variant: "fromLeft",
  //     image: battleships,
  //     translateY: "10",
  //   },
];

export default projects;
