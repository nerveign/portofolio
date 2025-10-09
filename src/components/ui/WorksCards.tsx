import { data } from '@/data/projectsData';
import { ProjectCard } from './ProjectCard';

export const WorksCards = () => {
  return (
    <>
      <div className="mt-4 w-full">
        {data?.map((item) => (
          <>
            <ProjectCard imageURL={item.imageURL} title={item.title} description={item.description} label={item.label} />
          </>
        ))}
      </div>
    </>
  );
};
