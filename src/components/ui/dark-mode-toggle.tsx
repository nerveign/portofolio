import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/theme-provider';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const checkTheme = () => {
    return theme === 'dark' ? 'light' : 'dark';
  };

  // Check User's theme preference
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }

    const checkDarkMode = () => {
      if (theme === 'system') {
        const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(systemIsDark);
      } else {
        setIsDark(theme === 'dark');
      }
    };

    checkDarkMode();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => checkDarkMode();

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const handleToggle = () => {
    const newTheme = checkTheme();
    setTheme(newTheme);
  };

  return (
    <div className="size-8 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-[#252525] duration-300 border rounded-lg flex items-center justify-center cursor-pointer" onClick={handleToggle}>
      {isDark ? <Moon className="text-zinc-700 dark:text-slate-50" size={16} /> : <Sun className="text-zinc-700 dark:text-slate-50" size={16} />}
    </div>
  );
};
