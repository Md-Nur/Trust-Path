import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-center text-5xl my-10 font-bold uppercase">
      {children}
    </h1>
  );
};

export default Title;
