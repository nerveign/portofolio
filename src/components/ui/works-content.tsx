import { WorksCards } from './works-cards';
import { WorksHeading } from './works-heading';

export const WorksContent = () => {
  return (
    <div className="w-full max-w-5xl flex mx-auto px-6">
      <div className="flex justify-center flex-col gap-2 lg:gap-4 w-[442px] lg:w-full mx-auto">
        <WorksHeading />
        <WorksCards />
      </div>
    </div>
  );
};
