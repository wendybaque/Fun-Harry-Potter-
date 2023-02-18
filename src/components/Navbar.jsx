import React from "react";
import styled from "styled-components";
import logo from "../assets/emblem.png";
import { desktop } from "../responsive";

const Container = styled.div`
  background-color: black;
  text-decoration: none;
`;

const NavList = styled.ul`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-family: "julee";
  list-style: none;
  text-align: center;
  text-decoration: none;
  ${desktop({ padding: "1rem 7rem" })}
`;

const NavItem = styled.li`
  font-weight: bold;
  cursor: pointer;
  padding: 0.6rem;
  font-size: 0.8rem;
  border-bottom: 4px solid black;
  &:hover {
    border-bottom: 4px solid goldenrod;
  }
  ${desktop({ fontSize: "1.3rem" , padding:"1rem"})}
`;

const Link = styled.a`
  &:link,
  &:active,
  &:visited {
    color: white;
    text-align: center;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 60%;
  cursor: pointer;
  ${desktop({ width: "10%" })}
`;

const Navbar = () => {
  return (
    <Container>
      <NavList>
        <Link href="/">
          <Logo src={logo} alt="Emblem" />
        </Link>
        <Link href="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/All">
          <NavItem>All</NavItem>
        </Link>
        <Link href="/Contact">
          <NavItem>Contact</NavItem>
        </Link>
      </NavList>
    </Container>
  );
};

export default Navbar;
