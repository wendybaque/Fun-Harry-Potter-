import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { desktop } from "../responsive";
import axios from "axios";
import sorts from "../assets/sorts.jpg";

const Container = styled.div`
  background-color: black;
  text-decoration: none;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${sorts});
`;

const Title = styled.h1`
  padding-top: 1rem;
  font-size: 1.5rem;
  font-family: "julee";
  color: #cf0101df;
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
  background-color: black;
  margin: 2rem;
  border-radius: 2rem;
  -webkit-box-shadow: 36px 38px 66px -19px goldenrod;
  -moz-box-shadow: 36px 38px 66px -19px goldenrod;
  box-shadow: 36px 38px 66px -19px goldenrod;
  ${desktop({ margin: "5rem 5rem", padding: "2rem" })}
`;

const SpellsName = styled.p`
  font-family: "julee";
  text-align: center;
  color: goldenrod;
  font-size: 1.5rem;
  margin: 0.5em;
  ${desktop({ fontSize: "2.5rem" })}
`;

const SpellsInfo = styled.p`
  color: whitesmoke;
  text-align: center;
  padding: 1rem;
  ${desktop({ fontSize: "2rem" })}
`;

const Spells = () => {
  const [Spells, setSpells] = useState(null);

  const fetchSpells = async () => {
    try {
      const res = await axios.get("https://hp-api.onrender.com/api/spells");
      setSpells(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSpells();
  }, []);

  return (
    <Container>
      <Title>3 forbidden spells</Title>
      <ContainerCard>
        {!Spells
          ? ""
          : Spells.filter(
              (spells) =>
                spells.name === "Avada Kedavra" ||
                spells.name === "Imperio" ||
                spells.name === "Crucio"
            ).map((spell) => (
              <Card key={spell.id}>
                <SpellsName>{spell.name}</SpellsName>
                <SpellsInfo>Description: {spell.description}</SpellsInfo>
              </Card>
            ))}
      </ContainerCard>
    </Container>
  );
};

export default Spells;
