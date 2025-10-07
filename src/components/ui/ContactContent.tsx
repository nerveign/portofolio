import { Contact } from './Contact';
import { ContactForm } from './ContactForm';

export const ContactContent = () => {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-10 w-[442px] lg:w-full mx-auto">
          <Contact />
          <ContactForm />
        </div>
      </div>
    </>
  );
};
