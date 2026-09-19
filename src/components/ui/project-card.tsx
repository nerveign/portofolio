import { useState } from 'react';
import { Badge } from './badge';
import { ProjectCardSkeleton } from './project-card-skeleton';

type ProjectProps = {
  imageURL: string;
  title: string;
  description: string;
  label: string[];
};

export const ProjectCard = ({ imageURL, title, description, label }: ProjectProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      {!isImageLoaded && <ProjectCardSkeleton />}
      <div className={`w-full flex flex-col lg:flex-row gap-6 pb-10 border-b mb-5 ${isImageLoaded ? '' : 'hidden'}`}>
        <div>
          <img className="border-1 w-full lg:w-[600px] rounded-lg" src={imageURL} alt="card-project" onLoad={() => setIsImageLoaded(true)} />
        </div>
        <div className="flex flex-col lg:w-[500px] justify-between">
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
            <p className="text-zinc-500 mt-3 text-sm lg:mt-4 dark:text-[#A5A3A3]">{description}</p>
          </div>
          <div className="flex gap-2 mt-4 lg:mt-0 ">
            {label.map((item, index) => (
              <>
                <Badge className="py-2 px-2 rounded-lg border-zinc-300 dark:border-zinc-600 dark:text-[#A5A3A3]" variant={'outline'} key={index}>
                  {item}
                </Badge>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
