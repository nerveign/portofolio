import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/theme-provider';
import { useLocalStorage } from 'react-use';

type Theme = 'light' | 'dark' | 'system';

export const ThemeToggle = () => {
  const [myTheme, setMyTheme] = useLocalStorage<Theme>('ui-theme', 'light');
  const [toggle, setToggle] = useState(myTheme === 'dark');
  const { setTheme } = useTheme();

  useEffect(() => {
    const safeTheme: Theme = myTheme === 'dark' || myTheme === 'system' ? myTheme : 'light';
    setTheme(safeTheme);
  }, [myTheme, setTheme]);

  const handleToggle = () => {
    const newTheme: Theme = toggle ? 'light' : 'dark';
    setMyTheme(newTheme);
    setTheme(newTheme);
    setToggle(!toggle);
  };

  return (
    <div className="size-8 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-[#252525] duration-300 border-1 rounded-lg flex items-center justify-center cursor-pointer" onClick={handleToggle}>
      {toggle ? <Moon className="text-zinc-700 dark:text-slate-50" size={16} /> : <Sun className="text-zinc-700 dark:text-slate-50" size={16} />}
    </div>
  );
};
