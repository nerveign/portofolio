import { HeroContent } from './hero-content';

export const HeroSection = () => {
  return (
    <div className="mx-6 py-8 mt-8 rounded-2xl w-full px-4 lg:w-3/4  lg:h-4/5 lg:mt-10 lg:rounded-2xl flex flex-col-reverse lg:flex-row gap-6 justify-center items-center">
      <HeroContent />
    </div>
  );
};
