import {
  reactLogo,
  sassLogo,
  d3Logo,
  threeLogo,
  axiosLogo,
  expressLogo,
  nodeLogo,
  mongodbLogo,
  openFrameworksLogo,
  maxMspLogo,
  p5jsLogo,
  figmaLogo,
  gitLogo,
  vscodeLogo,
  powershellLogo,
  tailwindLogo,
  graphQlLogo,
  nextLogo,
} from "./assets";

import { modularexpansion_cover, nandn_cover, cannibal_cover } from "./assets";

export const projects = [
  {
    id: 1,
    title: "Cannibal Radio",
    subtitle: "Website made with React / Next",
    desc_full:
      "As a sole developer I was in charge of the website's design using Figma, front end implementation using React, integration with Wordpress CMS using WP GraphQL, live streaming functionality and metadata generation.",
    gitHub: "https://github.com/ioannis-b-dev/cannibal-radio",
    demo: "https://cannibalradio.com/",
    image: cannibal_cover,
    isPaid: true,
  },
  {
    id: 2,
    title: "Modular Expansion",
    subtitle: "Website made with React / Next",
    desc_full:
      "As a sole developer I was in charge of design, webscrapping data, building and deploying a website for an Athens / Berlin based Techno Label.",
    gitHub: "https://github.com/ioannis-b-dev/cinephilia-client",
    demo: "https://modularexpansion.com/",
    image: modularexpansion_cover,
    isPaid: true,
  },
  {
    id: 3,
    title: "Wedding Anniversary",
    subtitle: "Website made with React",
    desc_full:
      "An invitational website to celebrate the client's wedding anniversary and be used as a platform for invitations.",
    gitHub: "https://github.com/ioannis-b-dev/dinosnanou",
    demo: "https://ntinosandnanou.netlify.app/",
    image: nandn_cover,
    isPaid: true,
  },

  // {
  //   id: 4,
  //   title: "Creative Coding",
  //   desc: "A selection of projects",
  //   image: ml_cover,
  //   isPaid: false,
  // },
];
export const skills = [
  {
    category: "Client Side",
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "Next", logo: nextLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Sass", logo: sassLogo },
      { name: "D3", logo: d3Logo },
      { name: "Three", logo: threeLogo },
    ],
  },
  {
    category: "API / Server Side",
    technologies: [
      { name: "Axios", logo: axiosLogo },
      { name: "GraphQL", logo: graphQlLogo },
      { name: "Express", logo: expressLogo },
      { name: "Node", logo: nodeLogo },
      { name: "Mongodb", logo: mongodbLogo },
    ],
  },
  {
    category: "Creative Coding",
    technologies: [
      { name: "OF", logo: openFrameworksLogo },
      { name: "Max Msp", logo: maxMspLogo },
      { name: "P5", logo: p5jsLogo },
    ],
  },
  {
    category: "Utilities",
    technologies: [
      { name: "Figma", logo: figmaLogo },
      { name: "Git", logo: gitLogo },
      { name: "VsCode", logo: vscodeLogo },
      { name: "Powershell", logo: powershellLogo },
    ],
  },
];
