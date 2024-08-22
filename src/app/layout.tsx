import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";
import GlobalProvider from "@/provider/GlobalProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrustPath Accounting & Taxation Service",
  description: "TrustPath Accounting & Taxation Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tl from-base-100 via-base-300 to-neutral bg-fixed bg-cover`}
      >
        <GlobalProvider>
          <Nav />
          {children}
          <Footer />
        </GlobalProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
