import { ContactSection } from '../ui/contact-section';
import { Toaster } from '../ui/sonner';

export const ContactLayout = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <ContactSection />
        <Toaster />
      </div>
    </>
  );
};
