import { ProjectCard } from './ProjectCard';

const data = {
  imageSrc: 'portofolio-1.png',
  title: 'PureCycle Mobile UI',
  description: 'Build user-flow for recycling applications, design and prototyping the UI.',
  label: ['Strategy', 'Design'],
};

export const WorksCards = () => {
  return (
    <>
      <div className="mt-4 w-full">
        <ProjectCard imageSrc={data.imageSrc} title={data.title} description={data.description} label={data.label} />
        <ProjectCard imageSrc="/portofolio-1.png" title="test-1" description="lorem ipsum dolor sit amet" label={['UI', 'Frontend']} />
      </div>
    </>
  );
};
