import { useLayoutEffect, useState } from "react";
import { useWindowWidth } from "../../hooks";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const width = useWindowWidth();
  const isMobile = width < 750;

  if (isMobile) return <MobileNavbar />;

  return <DesktopNavbar />;
};

export default Navbar;
