import { ReactNode } from "react";

const Page = ({
  header,
  footer,
  children,
}: {
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-center h-10 bg-sky-600 font-bold">
        <div className="flex items-center justify-center w-full max-w-3xl">
          {header}
        </div>
      </header>
      <main className="flex justify-center grow bg-[url(/body-bg.png)]">
        <div className="w-full max-w-3xl text-black px-3 lg:px-0 py-4">
          {children}
        </div>
      </main>
      <footer className="flex justify-center bg-sky-600 items-center">
        <div className="w-full max-w-3xl py-2 px-2 lg:px-0">{footer}</div>
      </footer>
    </div>
  );
};

export default Page;
