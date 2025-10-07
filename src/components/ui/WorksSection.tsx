import { WorksContent } from './WorksContent';

export const WorksSection = () => {
  return (
    <>
      <div className="mt-22 lg:mt-36 mb-10 md:mb-16 w-full lg:w-4/5">
        <div className="animate-fade-in">
          <WorksContent />
        </div>
      </div>
    </>
  );
};
