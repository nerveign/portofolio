import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from './button';
import { Loader2, Send } from 'lucide-react';
import { sendEmail } from '@/lib/emailService';

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    body: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await sendEmail(form);

      setForm({
        name: '',
        email: '',
        body: '',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full max-w-[442px] xl:w-[30rem] mx-auto md:mx-0 p-5 md:p-6 bg-white dark:bg-[#191919] rounded-xl border-1">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold">Get in Touch</h3>
        <p className="mt-2 text-sm lg:text-base text-zinc-500 dark:text-[#A5A3A3]">You can reach me anytime</p>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              className="text-sm bg-slate-50"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="text-sm bg-slate-50"
              id="email"
              type="email"
              placeholder="yourmail@example.com"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="text-sm h-24 bg-slate-50 resize-none"
              id="message"
              placeholder="How can we help?"
              value={form.body}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  body: e.target.value,
                }))
              }
              required
            />
          </div>
        </div>

        <Button
          className="w-full mt-6 bg-[linear-gradient(178deg,#A5D8FF_-172.89%,#0068F0_206.02%)] hover:bg-[linear-gradient(178deg,_#60BAFF_-172.89%,_#0068F0_206.02%)] border-blue-500 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 dark:text-white font-medium"
          type="submit"
          disabled={isSending}
        >
          {isSending ? (
            <>
              <Loader2 className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send />
              Send
            </>
          )}
        </Button>
      </form>
    </div>
  );
};
