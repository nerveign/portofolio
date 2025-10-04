export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="border-t-1 text-sm md:text-base text-zinc-500 py-8 flex flex-col md:flex-row gap-2 justify-center lg:justify-between lg:max-w-3/4 mx-auto">
        <div className="text-center lg:text-start">
          Design by{' '}
          <a className="underline" href="https://www.instagram.com/fathurrizqo/">
            Fathurrizqo
          </a>
        </div>
        <div className="text-center lg:text-start">Copyright © {year}.</div>
      </footer>
    </>
  );
};
