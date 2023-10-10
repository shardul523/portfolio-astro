import { useState } from "react";

import HamburgerMenu from "./HamburgerMenu";

const MobileNavbar = () => {
  const [isOpen, toggleOpen] = useState(false);

  return <HamburgerMenu />;
};

export default MobileNavbar;
