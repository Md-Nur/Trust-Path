import { ReactNode } from "react";
import TanstackQueryProvider from "./TanstackQueryProvider";
import { UserProvider } from "./UserProvider";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </UserProvider>
  );
};

export default GlobalProvider;
