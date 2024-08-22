"use client";
import { MdMenu } from "react-icons/md";
import NavLinks from "./NavLinks";
import Link from "next/link";
import useUser from "@/provider/UserProvider";

const Nav = () => {
  const { user, setUser } = useUser();
  
  return (
    <nav className="navbar bg-base-200 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <h1 className="text-2xl font-bold text-primary hover:text-primary-darker transition-colors        ">
            TrustPath
            <p className="text-sm text-base-content">
              Accounting & Taxation Service
            </p>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={() => setUser(null)}
            className="btn btn-accent btn-sm"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="btn btn-accent btn-sm">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
