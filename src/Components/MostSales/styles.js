import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin-top: 140px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
  }
`;

export const Pizzas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    background: #fef6f4;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    width: 256px;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    max-width: 180px;
    line-height: 20px;
    text-align: center;
    color: #616161;
  }

  span {
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
  }

  button {
    width: 157px;
    height: 31px;
    background: #ffa200;
    border-radius: 25px;
    margin: 10px 0 20px 0;
    border: none;
    transition: 0.5s;
    cursor: pointer;
  }

  button:hover {
    background: #d43c13;
    transition: 0.5s;
  }
`;

export const Folha = styled.figure`
  width: 110px;
  height: 110px;
  position: absolute;
  top: -68px;
  left: -40px;
`;

export const Cogumelo = styled.figure`
  width: 110px;
  height: 110px;
  position: absolute;
`;
