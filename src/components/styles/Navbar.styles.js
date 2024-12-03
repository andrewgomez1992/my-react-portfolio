import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavbarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff; /* Plain white background */
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  img {
    width: 200px;
    cursor: pointer;
    position: relative;
    right: 50px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    right: 95px;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const Menu = styled.div`
  ul {
    display: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-right: 20px;

    @media (min-width: 768px) {
      display: flex;
      letter-spacing: 1px;
      font-weight: 800;

      li {
        padding: 0 30px;
        cursor: pointer;
      }

      a {
        color: #333333;
        text-decoration: none;

        &:hover {
          color: #097969;
        }
      }
    }
  }
`;

export const Hamburger = styled.div`
  display: block;
  z-index: 10;
  font-size: 32px; /* Increase icon size */
  cursor: pointer;
  margin-right: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 80px; /* Below the navbar */
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: #ffffff; /* Plain white */
  z-index: 9;

  li {
    padding: 12px;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    font-size: 22px;
    text-align: right;
    cursor: pointer;

    a {
      color: #333333;
      font-weight: 600;
      letter-spacing: 3px;
      text-decoration: none;

      &:hover {
        color: #0a7969;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 35%;
    left: 0;

    ul {
      li {
        width: 160px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: -100px;
        padding: 0 16px;
        background-color: #ffffff;
        cursor: pointer;

        &:hover {
          margin-left: -10px;
        }

        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          color: #000000;
          text-decoration: none;

          svg {
            font-size: 1.8rem; /* Increase icon size here */
          }

          &:hover {
            color: #0a7969;
          }
        }
      }
    }
  }
`;

export const HamburgerIcon = styled(FaBars)`
  color: #097969;
  font-size: 24px; /* Consistent size for icons */
`;

export const CloseIcon = styled(FaTimes)`
  color: #097969;
  font-size: 24px; /* Consistent size for icons */
`;
