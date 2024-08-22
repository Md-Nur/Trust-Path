"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion";

const NavLink = ({ to, name }: { to: string; name?: string }) => {
  const pathName = usePathname();
  return (
    <motion.li
    whileHover={{ scale: 1.1 }}
    >
      <Link
        href={to}
        className={`capitalize ${pathName === to ? "active" : ""}`}
      >
        {name || to.split("/")[1]}
      </Link>
    </motion.li>
  );
};

export default NavLink;
