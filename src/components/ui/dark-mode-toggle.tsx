import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export const ThemeToggle = () => {
  const [toggle, setToggle] = useState(false);

  <>
    <div onClick={() => setToggle(!toggle)}>
      {toggle ? (
        <>
          <Moon />
        </>
      ) : (
        <>
          <Sun />
        </>
      )}
    </div>
  </>;
};
