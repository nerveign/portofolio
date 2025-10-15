import { ContactContent } from './contact-content';

export const ContactSection = () => {
  return (
    <>
      <div className="w-full lg:w-4/5">
        <div className="animate-fade-in">
          <ContactContent />
        </div>
      </div>
    </>
  );
};
