type Project = {
  imageURL: string;
  title: string;
  description: string;
  label: string[];
};
const url: string = '/works';

export const data: Project[] = [
  {
    imageURL: `${url}/portofolio-1.png`,
    title: 'PureCycle Mobile UI',
    description: 'Build user-flow for recycling applications, design and prototyping the UI.',
    label: ['UI', 'UX', 'Strategy', 'Prototyping'],
  },
  {
    imageURL: `${url}/portofolio-2.png`,
    title: 'UNNES Career Mobile UI',
    description: 'This application prototype combines job and career vacancy listings with online course offerings in a unified platform.',
    label: ['UI', 'UX', 'Prototyping'],
  },
  {
    imageURL: `${url}/portofolio-3.png`,
    title: 'React Tetris Game',
    description: 'Browser-based implementation of the classic Tetris puzzle game built entirely with ReactJS and powered by Vite for development.',
    label: ['Frontend', 'Game', 'ReactJS'],
  },
  {
    imageURL: `${url}/portofolio-4.png`,
    title: 'Cashmate Financial Management',
    description: 'Financial management app, build with ReactJS + ExpressJS. ',
    label: ['Fullstack', 'ReactJS', 'ExpressJS', 'MongoDB'],
  },
  {
    imageURL: `${url}/portofolio-5.png`,
    title: 'Friskay Cat Landing Page',
    description: 'Simple landing page for exercise building UI.',
    label: ['Frontend', 'ReactJS'],
  },
  {
    imageURL: `${url}/portofolio-6.png`,
    title: 'Zustand To Do List App',
    description: 'Simple to do list app with Zustand state management application.',
    label: ['ReactJS', 'Zustand'],
  },
];
