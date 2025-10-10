import { year } from '@/lib/getYear';

export const WorksHeading = () => {
  return (
    <>
      <div className="W-[27rem] border-b-1 mb-2">
        <h2 className="font-semibold text-xl lg:text-3xl">Project Showcase</h2>
        <div className="mt-2 lg:mt-3 text-zinc-600">
          <p className="text-sm lg:text-base">A collection of my favorite projects where I tried out ideas, learned new things, and had fun creating.</p>
        </div>
        <div className="flex justify-between mt-10 mb-2 text-zinc-500 text-sm">
          <p>© {year}</p>
          <p>List of my projects</p>
        </div>
      </div>
    </>
  );
};
