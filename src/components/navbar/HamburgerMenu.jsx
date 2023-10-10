import hamburger from "./hamburger.module.css";

const HamburgerMenu = ({ isOpen }) => (
  <div className={`${hamburger.hamburger} ${isOpen && hamburger.open}`}>
    <span className={hamburger.bar}></span>
    <span className={hamburger.bar}></span>
    <span className={hamburger.bar}></span>
  </div>
);

export default HamburgerMenu;
