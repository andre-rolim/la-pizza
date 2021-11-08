import React from "react";
import styled from "styled-components";
import Main from "./Components/Main";
import MaisVendidas from "./Components/MostSales";

const MainContainer = styled.section`
  width: 100vw;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <MainContainer>
      <Main />
      <MaisVendidas />
    </MainContainer>
  );
}

export default App;
