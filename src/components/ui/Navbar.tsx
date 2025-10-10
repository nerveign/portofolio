import { AvatarLogo } from './AvatarLogo';
import { MenuBar } from './MenuBar';
import { MenuList } from './menu-list';

export const Navbar = () => {
  return (
    <>
      <nav className="w-full relative z-50">
        <div className="flex justify-center w-full relative">
          <div className="mx-auto fixed lg:top-1 lg:rounded-xl border-b-1 lg:border-1 w-full lg:w-3/4 px-6 h-16 lg:h-[72px] flex justify-between items-center backdrop-blur-lg bg-white/80">
            <div>
              <AvatarLogo />
            </div>
            <div className="lg:hidden">
              <MenuBar />
            </div>
            <div className="hidden lg:block">
              <MenuList />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
