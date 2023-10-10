import HamburgerMenu from "./HamburgerMenu";
import NavContainer from "./NavContainer";
import Logo from "./Logo";
import navbar from "./navbar.module.css";
import { useState } from "react";
import Navlinks from "./Navlinks";

const MobileNav = () => {
  const [isOpen, toggleOpen] = useState(false);

  const onHamburgerClick = () => toggleOpen((prev) => !prev);

  return (
    <NavContainer isMobile>
      <div
        className={`${navbar.flex} ${navbar.justify_space_around} ${navbar.align_center} ${navbar.min_h_15}`}
      >
        <Logo />
        <HamburgerMenu onClick={onHamburgerClick} isOpen={isOpen} />
      </div>
      {isOpen && <Navlinks isMobile />}
    </NavContainer>
  );
};

export default MobileNav;
