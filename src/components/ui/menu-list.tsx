import { NavLink } from 'react-router-dom';

const menuItemClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'text-blue-500 dark:text-white' : 'hover:text-zinc-600 dark:hover:text-zinc-300';
};

export const MenuList = () => {
  return (
    <ul className="flex gap-6 text-zinc-400 dark:text-zinc-400 ">
      <li>
        <NavLink to="/" end className={menuItemClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/works" className={menuItemClass}>
          Works
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={menuItemClass}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
