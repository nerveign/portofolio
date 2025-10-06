import { Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl lg:text-2xl w-full">Reach Me!</h2>
      <div className="mt-2 lg:mt-3 text-zinc-600">
        <p className="text-sm lg:text-base ">Email or complete the form if you have a business purpose.</p>
        <div className="flex gap-2 items-center mt-2">
          <Mail className="size-5 text-blue-500" />
          <p className="text-sm lg:text-base  font-medium">riszqofathur@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
