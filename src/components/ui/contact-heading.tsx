import { Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-3xl lg:text-5xl">Contact Me</h2>
        <div className="mt-3 lg:mt-4 text-zinc-600 dark:text-[#A5A3A3]">
          <div className="xl:max-w-5/6">
            <p>For other queries please get in touch with me via email or complete the form.</p>
          </div>
          <div className="flex gap-2 items-center mt-2 lg:mt-3">
            <div className="flex gap-2 items-center mt-2">
              <Mail className="size-5 text-zinc-600 dark:text-white" />
              <p className="text-sm font-medium dark:text-white">riszqofathur@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
