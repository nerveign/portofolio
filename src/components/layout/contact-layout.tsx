import { ContactSection } from '../ui/contact-section';
import { Toaster } from '../ui/sonner';

export const ContactLayout = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center mt-6 md:mt-0">
        <ContactSection />
        <Toaster />
      </div>
    </>
  );
};
