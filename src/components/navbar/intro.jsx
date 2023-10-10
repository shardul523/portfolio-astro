import { useLayoutEffect, useState } from "react";
import { useWindowWidth } from "../../hooks";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const width = useWindowWidth();
  const isMobile = width < 750;

  if (isMobile) return <MobileNav />;
  return <DesktopNav />;
};

export default Navbar;
