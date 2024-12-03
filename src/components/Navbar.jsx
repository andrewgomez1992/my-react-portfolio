import React from "react";
import {
  NavbarContainer,
  LogoContainer,
  Menu,
  Hamburger,
  MobileMenu,
  SocialIcons,
  HamburgerIcon,
  CloseIcon,
} from "./styles/Navbar.styles";
import { scrollToSection } from "../util/scrollToSection";

const Navbar = ({
  logo,
  title,
  menuItems,
  socialLinks,
  menuOpen,
  setMenuOpen,
}) => {
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <NavbarContainer>
      {/* Logo */}
      <LogoContainer href="/">
        <img src={logo} alt="logo" />
        <h1>{title}</h1>
      </LogoContainer>

      {/* Desktop Menu */}
      <Menu>
        <ul>
          {menuItems.map((item) => (
            <li key={item.section}>
              <a
                href={`#${item.section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.section);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </Menu>

      {/* Hamburger Menu */}
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Hamburger>

      {/* Mobile Menu */}
      <MobileMenu $isOpen={menuOpen}>
        {menuItems.map((item) => (
          <li key={item.section} onClick={toggleMenu}>
            <a
              href={`#${item.section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.section);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </MobileMenu>

      {/* Social Icons */}
      <SocialIcons>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name} {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </SocialIcons>
    </NavbarContainer>
  );
};

export default Navbar;
