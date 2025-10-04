import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ItemList } from './ItemList';
import { HamburgerToggle } from './HamburgerToggle';

export const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer flex gap-2 bg-gradient-to-br from-blue-200/40 to-zinc-400/40 backdrop-blur-sm  px-4 py-2 items-center rounded-lg">
          <HamburgerToggle isOpen={open} />
          <div className="text-sm font-semibold">Menu</div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={4} className="w-48 lg:hidden gap-2 flex flex-col z-50">
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList route="/" icon="./home.svg" heading="Home" text="Back to home" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList route="/works" icon="./briefcase.svg" heading="Works" text="List of projects" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList route="/contact" icon="./phone.svg" heading="Contact" text="Contact detail" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
