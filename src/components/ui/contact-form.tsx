import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from './button';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  return (
    <>
      <div className="w-full max-w-[442px] xl:w-[27rem] mx-auto md:mx-0 p-5 md:p-6 bg-white dark:bg-[#191919] rounded-xl border-1">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Get in Touch</h3>
          <p className="mt-2 text-sm lg:text-base  text-zinc-500 dark:text-[#A5A3A3]">You can reach me anytime</p>
        </div>
        <form className="mt-6" action="">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input className="text-sm bg-slate-50" id="name" type="text" placeholder="Enter your name" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input className="text-sm bg-slate-50" id="email" type="email" placeholder="yourmail@example.com" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="text-sm h-24 bg-slate-50 resize-none" id="message" placeholder="How can we help?" />
            </div>
          </div>
          <Button
            className="w-full mt-6 bg-[linear-gradient(178deg,#A5D8FF_-172.89%,#0068F0_206.02%)] hover:bg-[linear-gradient(178deg,_#60BAFF_-172.89%,_#0068F0_206.02%)] border-blue-500 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 dark:text-white font-medium"
            type="submit"
          >
            <Send />
            Send
          </Button>
        </form>
      </div>
    </>
  );
};
