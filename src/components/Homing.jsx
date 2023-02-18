import React from "react";
import styled from "styled-components";
import { desktop } from "../responsive";
import bg from "../assets/pouddlard.jpg"

const Container = styled.div`
  background-color: black;
  text-decoration: none;
  background-image: url(${bg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
font-family: "julee";
color: white;
text-align:center;
padding-top: 4rem;
font-size: 3rem;
${desktop({fontSize:"4rem"})}
`;

const Homing = () => {
  return (
    <Container>
      <Title>Harry Potter Infos</Title>
    </Container>
  );
};

export default Homing;
