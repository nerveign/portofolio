import { data } from '@/data/projectsData';
import { ProjectCard } from './ProjectCard';

export const WorksCards = () => {
  return (
    <>
      <div className="mt-4 w-full">
        <ProjectCard imageURL={data.imageURL} title={data.title} description={data.description} label={data.label} />
        <ProjectCard imageURL="/works/portofolio-2.png" title="UNNES Career Mobile UI" description="lorem ipsum dolor sit amet" label={['UI', 'UX', 'Prototyping']} />
      </div>
    </>
  );
};
