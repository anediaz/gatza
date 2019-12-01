import React from "react";
import styled from "styled-components";
import data from "../data/data.json";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 0.2rem;
  background-color: black;
  height: 100vh;
`;

const Img = styled.img`
  height: 100%;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 11rem;
  }
`;

const { liburua } = data;
const Liburua = () => (
  <Wrapper>
    <a href={liburua.url} target="_blank" rel="noopener noreferrer">
      <Img src={liburua.src} title={liburua.title} alt={liburua.alt} />
    </a>
  </Wrapper>
);
export default Liburua;
