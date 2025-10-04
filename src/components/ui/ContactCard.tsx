import { Mail } from 'lucide-react';

export const ContactCard = () => {
  return (
    <div>
      <h2 className="font-semibold text-3xl lg:text-4xl">Reach Me!</h2>
      <div className="mt-4 text-zinc-600">
        <p>Email or complete the form if you have a business purpose.</p>
        <div className="flex gap-2 items-center mt-2">
          <Mail className="size-5 text-blue-500" />
          <p className="text-base font-medium">riszqofathur@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
