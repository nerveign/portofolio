import { useState } from 'react';

export const HamburgerToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <button onClick={handleClick} className="flex flex-col justify-center items-center">
      <span className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
      <span className={`bg-black block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />{' '}
    </button>
  );
};
