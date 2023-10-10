import navbar from "./navbar.module.css";

const Navlink = ({ children, href }) => (
  <li>
    <a href={href} className={navbar.navlink}>
      {children}
    </a>
  </li>
);

const Navlinks = ({ isMobile }) => (
  <ul
    className={`${navbar.flex} ${isMobile && navbar.flex_column} ${
      navbar.gap_2
    } ${navbar.align_center}`}
  >
    <Navlink href={"#"}>About</Navlink>
    <Navlink href={"#"}>Skills</Navlink>
    <Navlink href={"#"}>Projects</Navlink>
    <Navlink href={"#"}>Contact</Navlink>
  </ul>
);

export default Navlinks;
