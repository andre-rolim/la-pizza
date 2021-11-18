import React from "react";
import styled from "styled-components";
import Main from "./Components/Main";
import MaisVendidas from "./Components/MostSales";
import Sobre from "./Components/Sobre";

const MainContainer = styled.section`
  width: 100vw;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;

  footer {
    padding: 30px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
  }
`;

function App() {
  return (
    <MainContainer>
      <Main />
      <MaisVendidas />
      <Sobre />
      <footer>TODOS OS DIREITOS RESERVADOS</footer>
    </MainContainer>
  );
}

export default App;
