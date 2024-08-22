"use client";
import NavLink from "@/components/Navbar/NavLink";
import useUser from "@/provider/UserProvider";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { toast } from "react-toastify";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const router = useRouter();
  if (!user) {
    toast.error("Please Login First");
    router.push("/login");
    return <h1>You are not authorized</h1>;
  }
  return children;
};

export default AdminLayout;
