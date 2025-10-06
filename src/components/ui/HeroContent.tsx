import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const HeroContent = () => {
  return (
    <>
      <div className="animate-fade-in">
        <div className="text-center w-96 md:w-[454px] lg:text-start lg:w-[472px]">
          <div className="relative">
            <div>
              <Badge className="flex justify-center mx-auto bg-white" asChild variant={'outline'}>
                <p>📖 Love to learn something</p>
              </Badge>
              <img className="absolute -right-2 md:right-[2px] lg:-right-3 top-[-12px]" src="/me-no.svg" alt="me" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mt-3 lg:mt-4 text-center uppercase">Fathurrizqo</h1>
          <p className="mt-3 lg:mt-5 text-sm md:text-base text-zinc-600 text-center">On my way to persue happines. I love computer science, religion and also philosophy.</p>
        </div>
        <div className="flex justify-center gap-3 mt-5 lg:mt-6">
          <Button className="bg-[linear-gradient(178deg,#A5D8FF_-172.89%,#0068F0_206.02%)] hover:bg-[linear-gradient(178deg,_#60BAFF_-172.89%,_#0068F0_206.02%)] border-blue-500 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
            <a href="/Fathurrizqo_Resume2025.pdf" download={'Fathurrizqo_Resume2025.pdf'}>
              Download CV
            </a>
          </Button>
          <Button className="cursor-pointer" variant={'outline'}>
            <Link to={'/works'}>Works</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
