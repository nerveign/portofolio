import { data } from '@/data/projectsData';
import { ProjectCard } from './project-card';

export const WorksCards = () => {
  return (
    <>
      <div className="mt-6 w-full">
        {data?.map((item) => (
          <>
            <ProjectCard imageURL={item.imageURL} title={item.title} description={item.description} label={item.label} />
          </>
        ))}
      </div>
    </>
  );
};
