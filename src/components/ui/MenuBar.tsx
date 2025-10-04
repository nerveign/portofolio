import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ItemList } from './ItemList';

export const MenuBar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="focus:outline-none cursor-pointer border bg-white border-slate-200 rounded-md px-4 py-1">Menu</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 md:hidden gap-2 flex flex-col">
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList icon="./home.svg" heading="Home" text="Back to home" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList icon="./briefcase.svg" heading="Works" text="List of projects" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base cursor-pointer">
          <ItemList icon="./phone.svg" heading="Contact" text="Contact detail" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
