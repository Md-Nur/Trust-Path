"use client";
import useUser from "@/provider/UserProvider";
import NavLink from "./NavLink";

const NavLinks = () => {
  const { user } = useUser();
  return (
    <>
      <NavLink to="/" name="Home" />
      <NavLink to="/about" />
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <NavLink to="/audit-assurance" name="AUDIT & ASSURANCE" />
            <NavLink to="/taxation" />
            <NavLink to="/consulting" />
            <NavLink to="/corporate-law" name="CORPORATE LAW" />
            <NavLink to="/business-advisory" name="BUSINESS ADVISORY" />
          </ul>
        </details>
      </li>
      <NavLink to="/clients" />
      <NavLink to="/team" />
      <NavLink to="/contact" />
      {user && (
        <li>
          <details>
            <summary>Admin</summary>
            <ul className="p-2">
              <NavLink to="/manage-services" name="Manage Services" />
              <NavLink to="/add-service" name="Add Service" />
              <NavLink to="/manage-clients" name="Manage Clients" />
              <NavLink to="/add-client" name="Add Client" />
              <NavLink to="/manage-messages" name="Messages" />
              <NavLink to="/add-team" name="Add Team" />
              <NavLink to="/manage-team" name="Manage Team" />
            </ul>
          </details>
        </li>
      )}
    </>
  );
};

export default NavLinks;
