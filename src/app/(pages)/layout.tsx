import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="max-w-7xl flex-col mx-auto flex justify-center items-center w-full min-h-[calc(100vh-294px)]">
      {children}
    </main>
  );
};

export default PageLayout;
