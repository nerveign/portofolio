import { Contact } from './Contact';
import { ContactForm } from './ContactForm';

export const ContactContent = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <Contact />
        <ContactForm />
      </div>
    </>
  );
};
