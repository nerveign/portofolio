import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ItemList } from './item-list';
import { HamburgerToggle } from './hamburger-toggle';
import { Home, Phone, Briefcase } from 'lucide-react';

export const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer select-none flex gap-2 bg-[linear-gradient(178deg,#A5D8FF_-172.89%,#0068F0_206.02%)] hover:bg-[linear-gradient(178deg,_#60BAFF_-172.89%,_#0068F0_206.02%)]-sm px-4 py-2 items-center rounded-lg">
          <HamburgerToggle isOpen={open} />
          <div className="text-sm font-medium text-blue-500 text-white">Menu</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} className="w-48 lg:hidden gap-2 flex flex-col z-50 backdrop-blur-lg bg-white/80 dark:bg-[#181818]/90">
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList route="/" icon={<Home className="size-5 text-blue-500 text-white" />} heading="Home" text="Back to home" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList route="/works" icon={<Briefcase className="size-5 text-blue-500 text-white" />} heading="Works" text="List of projects" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList route="/contact" icon={<Phone className="size-5 text-blue-500 text-white" />} heading="Contact" text="Contact detail" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
