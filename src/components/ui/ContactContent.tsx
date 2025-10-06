import { Contact } from './Contact';
import { ContactForm } from './ContactForm';

export const ContactContent = () => {
  return (
    <>
      <div className="w-full px-6">
        <div className="flex justify-center flex-col lg:flex-row gap-8 lg:gap-10 w-[442px] lg:w-full mx-auto">
          <Contact />
          <ContactForm />
        </div>
      </div>
    </>
  );
};
