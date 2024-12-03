import React from "react";
import {
  FooterContainer,
  FooterContent,
  SocialIcons,
  FooterBottom,
} from "./styles/Footer.styles";

const Footer = ({ name, description, socialLinks, year }) => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Left Side */}
        <div className="footer-left">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        {/* Right Side - Social Links */}
        <div className="footer-right">
          <h3>SOCIAL</h3>
          <SocialIcons>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </SocialIcons>
        </div>
      </FooterContent>

      {/* Footer Bottom */}
      <FooterBottom>
        <p>
          © Copyright {year}. Made by <a href="/">{name}</a>
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
