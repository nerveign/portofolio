import { Link } from 'react-router-dom';

type ItemListProps = {
  icon: string;
  heading: string;
  text: string;
  route: string;
};

export const ItemList = ({ icon, heading, text, route }: ItemListProps) => {
  return (
    <Link to={route} className="flex gap-4 items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200/40 to-zinc-400/40 backdrop-blur-sm flex justify-center items-center border border-white/40 shadow-md">
        <img src={icon} alt="logo" width={20} />
      </div>
      <div>
        <h4>{heading}</h4>
        <p className="text-zinc-500 text-sm">{text}</p>
      </div>
    </Link>
  );
};
