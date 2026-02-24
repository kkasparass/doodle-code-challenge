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
      <header className="flex justify-center h-10 bg-blue-500">
        <div className="w-full max-w-3xl">{header}</div>
      </header>
      <main className="flex justify-center grow bg-[url(/body-bg.png)]">
        <div className="w-full max-w-3xl text-black px-3">{children}</div>
      </main>
      <footer className="flex justify-center h-10 bg-blue-500">
        <div className="w-full max-w-3xl">{footer}</div>
      </footer>
    </div>
  );
};

export default Page;
