import hamburger from "./navbar.module.css";

const HamburgerMenu = ({ isOpen, onClick }) => (
  <div onClick={onClick} className={`${hamburger.hamburger} ${isOpen && hamburger.open}`}>
    <span className={hamburger.bar}></span>
    <span className={hamburger.bar}></span>
    <span className={hamburger.bar}></span>
  </div>
);

export default HamburgerMenu;
