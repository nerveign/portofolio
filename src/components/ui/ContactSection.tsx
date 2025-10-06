import { ContactContent } from './ContactContent';

export const ContactSection = () => {
  return (
    <>
      <div className="mt-22 lg:mt-36 mb-10 md:mb-16 w-full lg:w-3/4">
        <div className="animate-fade-in">
          <ContactContent />
        </div>
      </div>
    </>
  );
};
