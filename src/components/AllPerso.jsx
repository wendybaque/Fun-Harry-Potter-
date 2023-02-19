import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Perso from "./Perso";

const Container = styled.div`
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const AllPerso = ({ filter }) => {
  const [allPerso, setAllPerso] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchAllPersos = async () => {
    const res = await axios.get("https://hp-api.onrender.com/api/characters");
    setAllPerso(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchAllPersos();
  }, []);

  useEffect(() => {
    setFiltered(
      allPerso.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [allPerso, filter]);

  return (
    <Container>
      {!filtered
        ? ""
        : filtered.map((item) => <Perso item={item} key={item.id} />)}
    </Container>
  );
};

export default AllPerso;
