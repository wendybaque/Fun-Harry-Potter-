import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  background-color: black;
  padding: 1rem;
  border-radius: 2rem;
`;

const Image = styled.img`
  width: 20rem;
  height: 17rem;
  border-radius: 50%;
`;

const Name = styled.p`
  padding: 1rem 0rem;
  color: white;
  font-family: "julee";
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContainerDesc = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  border-radius: 2rem;
  -webkit-box-shadow: 36px 38px 66px -19px goldenrod;
  -moz-box-shadow: 36px 38px 66px -19px goldenrod;
  box-shadow: 36px 38px 66px -19px goldenrod;
  border-radius: 2rem;
`;

const Description = styled.p`
  padding-bottom: 0.5rem;
`;

const Perso = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} alt={item.name} />
      <Name>{item.name}</Name>
      <ContainerDesc>
        <Description>House: {item.house}</Description>
        <Description>Patronus: {item.patronus}</Description>
        <Description>Actor: {item.actor}</Description>
        <Description>Day of Birth: {item.dateOfBirth}</Description>
        <Description>Ancestry: {item.ancestry}</Description>
      </ContainerDesc>
    </Container>
  );
};

export default Perso;
