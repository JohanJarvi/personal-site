import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavBarContainer = styled.ul`
  position: absolute;
  display: flex;
  background: #154d5b;
  height: 40px;
  left: 0px;
  right: 0px;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 425px) {
    justify-content: space-around;
    bottom: 0px;
  }

  @media (min-width: 426px) {
    top: 0px;
  }
`;

const NavItem = styled.li`
  padding: 0px 10px;
`;

const StyledLink = styled.a`
  font-size: 18px;
  color: #f7eac6;
`;

const NavBar = () => {
  const formatNavLink = (displayLink: string) => {
    if (displayLink.toLowerCase() === "home") return "/";

    return "/" + displayLink.toLowerCase().replace(/[^a-z]/gi, "");
  };

  const links = ["Home", "About", "Resume", "Blog"];

  return (
    <NavBarContainer>
      {links.map((link) => (
        <NavItem key={link}>
          <Link href={formatNavLink(link)}>
            <StyledLink>{link}</StyledLink>
          </Link>
        </NavItem>
      ))}
    </NavBarContainer>
  );
};
export default NavBar;
