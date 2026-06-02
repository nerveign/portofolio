type Project = {
  imageURL: string;
  title: string;
  description: string;
  label: string[];
};

const url: string = '/works';

export const data: Project[] = [
  {
    imageURL: `${url}/Portofolio-BJG.png`,
    title: 'BJG Point of Sales',
    description: 'Managed operational, transaction processes, developed modules, APIs, and database functionalities to support business workflows and transaction management.',
    label: ['ExpressJS', 'PostgreSQL', 'Redis'],
  },
  {
    imageURL: `${url}/Portofolio-Haloop.png`,
    title: 'Haloop.AI Contact Management',
    description: 'Developed a full-stack contact management platform that helps users organize and manage professional relationships more effectively.',
    label: ['NextJS', 'ExpressJS', 'PostgreSQL'],
  },
  {
    imageURL: `${url}/portofolio-1.png`,
    title: 'PureCycle Mobile UI',
    description: 'Designed and prototyped a mobile application focused on recyclable waste management. Created user flows and interface designs to provide an intuitive user experience.',
    label: ['UI/UX', 'Prototype'],
  },
  {
    imageURL: `${url}/portofolio-5.png`,
    title: 'Friskay Cat Landing Page',
    description: 'Converted a design mockup into a responsive landing page using React and TypeScript. Focused on pixel-accurate implementation and responsive user interfaces.',
    label: ['ReactJS', 'Typescript'],
  },
  {
    imageURL: `${url}/portofolio-4.png`,
    title: 'Cashmate Financial Management',
    description: 'Developed a full-stack personal finance management application using React, Express, and MongoDB. Features include income and expense tracking, financial dashboards, and Excel report exports.',
    label: ['ReactJS', 'ExpressJS', 'MongoDB'],
  },
  {
    imageURL: `${url}/portofolio-3.png`,
    title: 'React Tetris Game',
    description: 'Built a browser-based implementation of the classic Tetris game using React. Implemented core gameplay mechanics, scoring, and keyboard controls.',
    label: ['ReactJS'],
  },
];
