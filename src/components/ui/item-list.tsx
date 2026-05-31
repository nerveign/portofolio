import { Link } from 'react-router-dom';

type ItemListProps = {
  icon: React.ReactNode;
  heading: string;
  text: string;
  route: string;
};

export const ItemList = ({ icon: Icon, heading, text, route }: ItemListProps) => {
  return (
    <Link to={route} className="flex gap-4 items-center">
      <div className="w-12 h-12 rounded-full bg-[linear-gradient(178deg,#A5D8FF_-172.89%,#0068F0_206.02%)] hover:bg-[linear-gradient(178deg,_#60BAFF_-172.89%,_#0068F0_206.02%)] flex justify-center items-center border border-white/40">
        {Icon}
      </div>
      <div>
        <h4>{heading}</h4>
        <p className="text-zinc-500 dark:text-[#A5A3A3] text-sm">{text}</p>
      </div>
    </Link>
  );
};
