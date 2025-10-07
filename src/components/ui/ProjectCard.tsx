import { Badge } from './badge';

type ProjectProps = {
  imageSrc: string;
  title: string;
  description: string;
  label: string[];
};

export const ProjectCard = ({ imageSrc, title, description, label }: ProjectProps) => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-6 pb-10 border-b mb-4 lg:mb-5">
        <div>
          <img className="border-1 w-full lg:w-[600px]" src={imageSrc} alt="card-project" />
        </div>
        <div className="flex flex-col lg:w-[500px] justify-between">
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
            <p className="text-zinc-500 mt-3 lg:mt-4">{description}</p>
          </div>
          <div className="flex gap-2 mt-4 lg:mt-0 ">
            {label.map((item) => (
              <>
                <Badge className="py-2 px-2 rounded-lg border-zinc-300" variant={'outline'}>
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
