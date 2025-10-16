import { Contact } from './contact-heading';
import { ContactForm } from './contact-form';

export const ContactContent = () => {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-[442px] md:w-[442px] md:max-w-full lg:w-full mx-auto">
          <Contact />
          <ContactForm />
        </div>
      </div>
    </>
  );
};
