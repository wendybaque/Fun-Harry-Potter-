import React, { useState } from "react";
import styled from "styled-components";
import { desktop } from "../responsive";
import AllPerso from "../components/AllPerso";

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding-top: 1rem;
  font-size: 1.5rem;
  font-family: "julee";
  color: white;
  text-align: center;
  ${desktop({ fontSize: "3rem" })}
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${desktop({ flexDirection: "row", justifyContent: "space-evenly" })}
`;

const Filter = styled.div`
  margin: 1rem 1.25rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilterText = styled.span`
  font-size: 1.5rem;
  font-family: "julee";
  color: goldenrod;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  margin: 0.8rem;
  padding: 0.9rem;
  border-radius: 2rem;
  text-align: center;
`;

const Option = styled.option``;

const AllPersoList = () => {
  const [filter, setFilter] = useState({});
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Title>All persos list</Title>
      <FilterContainer>
      <Filter>
          <FilterText>Filter by gender</FilterText>
          <Select name="gender" onChange={handleFilter}>
            <Option selected disabled> Gender : </Option>
            <Option>male</Option>
            <Option>female</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Filter by House</FilterText>
          <Select name="house" onChange={handleFilter}>
            <Option selected  disabled> House : </Option>
            <Option>Gryffindor</Option>
            <Option>Slytherin</Option>
            <Option>Hufflepuff</Option>
            <Option>Ravenclaw</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter by ancestry</FilterText>
          <Select name="ancestry" onChange={handleFilter}>
            <Option selected  disabled> Ancestry : </Option>
            <Option>half-blood</Option>
            <Option>pure-blood</Option>
            <Option>muggleborn</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AllPerso filter={filter} />
    </Container>
  );
};

export default AllPersoList;
