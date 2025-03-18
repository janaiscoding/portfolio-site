import luxuria from "@/public/projects_assets/luxuria1.png";
import socializer from "@/public/projects_assets/socializerme.vercel.app_.png";
import clonner from "@/public/projects_assets/clonnerboxd.web.app.webp";
import photo from "@/public/projects_assets/PTAPP.webp";

const projects = [
  {
    id: "clonnerboxd",
    title: "Letterboxd Clone 🎥",
    description: [
      {
        id: "clonnerboxd-description-1",
        text: "A clone of a popular tracking app, with movies fetched from TMDB API",
      },
      {
        id: "clonnerboxd-description-2",
        text: "Mark as favorite, watched or write reviews in the app alongside with the other active users",
      },
      {
        id: "clonnerboxd-description-3",
        text: "Implemented Google Auth and a demo option",
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
    variant: "slideInFromLeft",
    image: clonner,
    translateY: "70",
  },
  {
    id: "luxuria",
    title: "Luxuria Hotel 🏨",
    description: [
      {
        id: "luxuria-description-1",
        text: "Full stack hotel website with accomodation booking services",
      },
      {
        id: "luxuria-description-2",
        text: "Designed a robust and secure RESTful API for users and bookings",
      },
      {
        id: "luxuria-description-3",
        text: "Authentication sessions are handled with credentials or OAuth",
      },
    ],
    tech: [
      {
        id: "socializer-tech-1",
        name: "TypeScript",
      },
      {
        id: "socializer-tech-2",
        name: "Next.js",
      },
      {
        id: "socializer-tech-3",
        name: "PostgreSQL",
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
    demoLink: "https://luxuria-hotel.vercel.app/",
    repoLink: "https://github.com/janaiscoding/luxuria-hotel",
    variant: "slideInFromLeft",
    image: luxuria,
    translateY: "-1",
  },
  {
    id: "socializer",
    title: "Socializer 🫶",
    description: [
      {
        id: "socializer-description-1",
        text: "Full stack social platform, with profiles and manage friendships",
      },
      {
        id: "socializer-description-2",
        text: "RESTful API with full CRUD operations and JWT authentication",
      },
      // {
      //   id: "socializer-description-3",
      //   text: "Increased fetching speed by 90% by integrating a SaaS CDN",
      // },
      {
        id: "socializer-description-4",
        text: "Adhered to WCAG guidelines for a11y, with a 95%+ Lighthouse score",
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
    variant: "slideInFromLeft",
    image: socializer,
    translateY: "-10",
  },
  {
    id: "photo",
    title: "Historical Photo Tagging App 📸",
    description: [
      {
        id: "photo-description-1",
        text: "Find Waldo-like game set within the paiting “Discussing the Divine Comedy with Dante”",
      },
      {
        id: "photo-description-2",
        text: "Global leaderboard based on time-score implemented with Firebase DB",
      },
      {
        id: "photo-description-3",
        text: "Find all 3 targets and save your score, see how fast you can be ;)",
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
    variant: "slideInFromLeft",
    image: photo,
    translateY: "20",
  },
];

export default projects;
