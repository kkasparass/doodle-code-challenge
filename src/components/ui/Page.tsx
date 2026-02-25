import { SCROLL_CONTAINER_ID } from "@/src/constants/constants";
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
    <div className="flex flex-col justify-between h-screen">
      <header className="flex justify-center py-2 bg-sky-600 font-bold box-border">
        <div className="flex items-center justify-center w-full max-w-3xl">
          {header}
        </div>
      </header>
      <main
        className="flex justify-center grow bg-[url(/body-bg.png)] px-3 lg:px-0 py-4 overflow-y-scroll box-border"
        id={SCROLL_CONTAINER_ID}
      >
        <div className="w-full max-w-3xl text-black h-fit">{children}</div>
      </main>
      <footer className="flex justify-center bg-sky-600 items-center py-2 px-2 lg:px-0 box-border">
        <div className="w-full max-w-3xl">{footer}</div>
      </footer>
    </div>
  );
};

export default Page;
