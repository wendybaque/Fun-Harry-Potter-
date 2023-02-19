import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { desktop } from "../responsive";
import axios from "axios";

const Container = styled.div`
  background-color: black;
  text-decoration: none;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  padding-top: 1rem;
  font-size: 1.5rem;
  font-family: "julee";
  color: white;
  text-align: center;
  ${desktop({ fontSize: "3rem" })}
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  ${desktop({ padding: "2rem" })}
`;

const WizardName = styled.p`
  font-family: "julee";
  color: goldenrod;
  font-size: 1.5rem;
  margin: 0.5em;
  ${desktop({ fontSize: "2.5rem" })}
`;

const WizardInfo = styled.p`
  color: whitesmoke;
  padding: 1rem;
  ${desktop({ fontSize: "2rem" })}
`;

const WizardImage = styled.img`
  border-radius: 2rem;
  -webkit-box-shadow: 36px 38px 66px -19px goldenrod;
  -moz-box-shadow: 36px 38px 66px -19px goldenrod;
  box-shadow: 36px 38px 66px -19px goldenrod;
  width: 17rem;
  height: 17rem;
  ${desktop({ width: "20rem", height: "20rem" })}
`;

const Wizard = () => {
  const [wizard, setWizard] = useState(null);

  const fetchWizard = async () => {
    try {
      const res = await axios.get("https://hp-api.onrender.com/api/characters");
      setWizard(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWizard();
  }, []);

  return (
    <Container>
      <Title>3 main wizards</Title>
      <ContainerCard>
        {!wizard
          ? ""
          : wizard
              .filter(
                (heros) =>
                  heros.name === "Harry Potter" ||
                  heros.name === "Hermione Granger" ||
                  heros.name === "Ron Weasley"
              )
              .map((hero) => (
                <Card key={hero.id}>
                  <WizardName>{hero.name}</WizardName>
                  <WizardImage src={hero.image} alt={hero.name}></WizardImage>
                  <WizardInfo>Gender: {hero.gender}</WizardInfo>
                  <WizardInfo>Actor: {hero.actor}</WizardInfo>
                  <WizardInfo>House: {hero.house}</WizardInfo>
                  <WizardInfo>Patronus: {hero.patronus}</WizardInfo>
                </Card>
              ))}
      </ContainerCard>
    </Container>
  );
};

export default Wizard;
