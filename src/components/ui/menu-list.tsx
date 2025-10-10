import { NavLink } from 'react-router-dom';

export const MenuList = () => {
  return (
    <ul className="flex gap-6 text-zinc-500">
      <li>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-zinc-600')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/works" className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-zinc-600')}>
          Works
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-zinc-600')}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
