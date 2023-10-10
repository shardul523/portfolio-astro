import navbar from "./navbar.module.css";

const NavContainer = ({ children, isMobile }) => (
  <nav
    className={`${navbar.flex} ${navbar.shadow} ${
      isMobile && navbar.flex_column
    } ${!isMobile && navbar.min_h_15} ${!isMobile && navbar.align_center} ${
      isMobile ? navbar.justify_center : navbar.justify_space_around
    }`}
  >
    {children}
  </nav>
);

export default NavContainer;
