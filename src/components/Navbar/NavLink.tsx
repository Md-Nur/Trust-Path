"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ to, name }: { to: string; name?: string }) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={to}
        className={`capitalize ${pathName === to ? "active" : ""}`}
      >
        {name || to.split("/")[1]}
      </Link>
    </li>
  );
};

export default NavLink;
