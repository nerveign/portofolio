import { Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl lg:text-4xl">Contact Me</h2>
        <div className="mt-3 lg:mt-4 text-zinc-600 dark:text-[#A5A3A3]">
          <div className="xl:max-w-5/6">
            <p>For other queries please get in touch with me via email or complete the form.</p>
          </div>
          <div className="flex gap-4 items-center mt-2 lg:mt-3">
            <div className="flex gap-2 md:gap-4 items-center mt-2">
              <div className="size-10 flex justify-center items-center text-blue-500 bg-blue-500/10 dark:bg-[linear-gradient(178deg,#A5D8FF_-172.89%,#0068F0_206.02%)] rounded-full p-1">
                <Mail className="size-5 text-blue-500 dark:text-white" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-[#A5A3A3]">riszqofathur@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
