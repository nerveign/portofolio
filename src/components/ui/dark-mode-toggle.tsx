import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/theme-provider';

export const ThemeToggle = () => {
  const [toggle, setToggle] = useState(false);
  const { setTheme } = useTheme();

  const handleToggle = () => {
    setToggle(!toggle);
    setTheme(toggle ? 'light' : 'dark');
  };

  return (
    <>
      <div className="size-8 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-[#252525] duration-300 border-1 rounded-lg flex items-center justify-center cursor-pointer" onClick={handleToggle}>
        {toggle ? (
          <>
            <Moon className="text-zinc-700 dark:text-slate-50" size={16} />
          </>
        ) : (
          <>
            <Sun className="text-zinc-700 dark:text-slate-50" size={16} />
          </>
        )}
      </div>
    </>
  );
};
