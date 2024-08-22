import NavLink from "../Navbar/NavLink";
import Address from "./Address";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <h1 className="text-3xl font-bold text-center text-white font-serif">
          TrustPath
          <p className="text-base">Accounting & Taxation Service</p>
        </h1>
        <Social />
        <div className="max-w-xs"></div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <NavLink to="/audit-assurance" name="AUDIT & ASSURANCE" />
        <NavLink to="/taxation" name="TAXATION" />
        <NavLink to="/corporate-law" name="CORPORATE LAW" />
        <NavLink to="/business-advisory" name="BUSINESS ADVISORY" />
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <NavLink to="/about" />
        <NavLink to="/clients" />
        <NavLink to="/team" />
        <NavLink to="/contact" />
      </nav>
      <nav>
        <h6 className="footer-title">Find Us</h6>
        <Address />
      </nav>
    </footer>
  );
};

export default Footer;
