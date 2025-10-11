import { AvatarLogo } from './AvatarLogo';
import { MenuBar } from './menubar';
import { MenuList } from './menu-list';
import { ThemeToggle } from './dark-mode-toggle';

export const Navbar = () => {
  return (
    <>
      <nav className="w-full relative z-50">
        <div className="flex justify-center w-full relative">
          <div className="mx-auto fixed lg:top-1 lg:rounded-xl border-b-1 lg:border-1 w-full lg:w-3/4 px-6 h-16 lg:h-[72px] flex justify-between items-center backdrop-blur-lg bg-white/80 dark:bg-[#181818]/80">
            <div>
              <AvatarLogo />
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <MenuBar />
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <MenuList />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
