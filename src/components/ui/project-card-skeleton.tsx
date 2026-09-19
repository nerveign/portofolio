import { Skeleton } from './skeleton';

export const ProjectCardSkeleton = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 pb-10 border-b mb-5">
      <Skeleton className="w-full lg:w-[600px] h-[220px] lg:h-[338px] rounded-lg" />
      <div className="flex flex-col lg:w-[500px] justify-between">
        <div>
          <Skeleton className="h-6 lg:h-7 w-3/4" />
          <Skeleton className="h-4 w-full mt-3 lg:mt-4" />
          <Skeleton className="h-4 w-5/6 mt-2" />
        </div>
        <div className="flex gap-2 mt-4 lg:mt-0">
          <Skeleton className="h-7 w-16 rounded-lg" />
          <Skeleton className="h-7 w-16 rounded-lg" />
          <Skeleton className="h-7 w-16 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
