import React from "react";
import styled from "styled-components";
import logo from "../assets/emblem.png";
import { desktop } from "../responsive";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Container = styled.div`
  background-color: black;
  text-decoration: none;
  display: flex;
  text-decoration: none;
  color: white;
`;

const Left = styled.div`
  flex: 1;
  margin-left: 1rem;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 5rem;
  margin: 0.5rem;
  cursor: pointer;
  ${desktop({ width: "7rem" })}
`;

const Copyright = styled.p`
  color: white;
  font-family: "julee";
  cursor: pointer;
  font-size: 0.8rem;
  margin: 0.4rem;
  text-decoration: none;
  text-align: center;
  ${desktop({ fontSize: "1.5rem" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const Link = styled.a`
  cursor: pointer;
  color: white;
  &:link,
  &:active,
  &:visited {
    color: white;
    text-align: center;
    text-decoration: none;
  }
  &:hover {
    border-bottom: 4px solid goldenrod;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo} alt="logo"></Logo>
      </Left>
      <Center>
        <Copyright>
          Made with ❤ by{" "}
          <a
            href="https://wendybaqueportfoliodev.wendev.fr/"
            target="_blank"
            rel="noreferrer"
            alt="portfolio de Wendy Baqué"
          >
            Wendy Baqué
          </a>
        </Copyright>
      </Center>
      <Center>
        <Copyright>
          Based on{" "}
          <a
            href="https://www.youtube.com/watch?v=pXz4dWmCAxA&list=PLpG_QqfOtrUeUqV1unw5W1kD4m9CIcQk5"
            target="_blank"
            rel="noreferrer"
            alt="Youtube tutorial of Nonoduweb"
          >
            Nonoduweb
          </a>{" "}
          tutorials.©
        </Copyright>
      </Center>
      <Right>
        <Link
          href="https://www.facebook.com/WenDevWeb"
          alt="WenDev Facebook profile"
          rel="noreferrer"
          target="_blank"
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://www.instagram.com/wendevweb/"
          alt="WenDev Instagram profile"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
          alt="Wendy Baqué LinkedIn profile"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/wendybaque"
          alt="Wendy Baqué Github profile"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://wendev.fr/"
          alt="WenDev Website"
          rel="noreferrer"
          target="_blank"
        >
          <LanguageIcon />
        </Link>
      </Right>
    </Container>
  );
};

export default Footer;
