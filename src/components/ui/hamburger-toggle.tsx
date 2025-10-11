type HamburgerToggleProps = {
  isOpen: boolean;
};

export const HamburgerToggle = ({ isOpen }: HamburgerToggleProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className={`bg-blue-500 dark:bg-white block h-0.5 w-5 rounded-sm transition-all duration-200 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
      <span className={`bg-blue-500 dark:bg-white block h-0.5 w-5 rounded-sm my-0.5 transition-all duration-200 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`bg-blue-500 dark:bg-white block h-0.5 w-5 rounded-sm transition-all duration-200 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
    </div>
  );
};
