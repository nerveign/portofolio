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
    label: ['Strategy', 'Design', 'UX'],
  },
  {
    imageURL: `${url}/portofolio-2.png`,
    title: 'UNNES Career Mobile UI',
    description: 'This application prototype combines job and career vacancy listings with online course offerings in a unified platform.',
    label: ['UI', 'UX', 'Prototyping'],
  },
];
