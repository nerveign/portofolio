import { ContactContent } from './ContactContent';

export const ContactSection = () => {
  return (
    <>
      <div className="mt-22 lg:mt-36 mb-10 lg:mb-16">
        <div className="animate-fade-in">
          <ContactContent />
        </div>
      </div>
    </>
  );
};
