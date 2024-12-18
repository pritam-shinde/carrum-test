import React, { useState, useEffect, useCallback } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({ isScrolled }) => {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return width > 1199 ? <NavbarDesktop isScrolled={isScrolled} /> : <NavbarMobile isScrolled={isScrolled} />;
};

export default Navbar;
