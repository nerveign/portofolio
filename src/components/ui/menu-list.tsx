import { NavLink } from 'react-router-dom';

export const MenuList = () => {
  return (
    <ul className="flex gap-6 text-zinc-500 dark:text-zinc-400 ">
      <li>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-white' : 'hover:text-zinc-600 dark:hover:text-zinc-300')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/works" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-white' : 'hover:text-zinc-600 dark:hover:text-zinc-300')}>
          Works
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500 dark:text-white' : 'hover:text-zinc-600 dark:hover:text-zinc-300')}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
