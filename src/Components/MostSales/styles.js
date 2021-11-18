import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 200px;

  h1 {
    margin-top: 140px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 80px;
  }
`;

export const Pizzas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  ul {
    display: flex;
    flex-direction: column;
    background: #fef6f4;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    width: 256px;
    position: relative;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    margin-top: 70px;
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
    margin-bottom: 50px;
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
    position: absolute;
    bottom: -35px;
    &:hover {
      background: #d43c13;
      transition: 0.5s;
    }
  }

  img {
    position: absolute;
    top: -60px;
  }

  @media only screen and (max-width: 750px) {
    flex-wrap: wrap;
    ul {
      width: 33%;
      flex-wrap: wrap;
      margin-bottom: 90px;
    }
  }

  @media only screen and (max-width: 500px) {
    flex-wrap: wrap;
    ul {
      width: 50%;
    }
  }

  @media only screen and (max-width: 350px) {
    ul {
      width: 70%;
    }
  }
`;

export const Retangulo = styled.figure`
  position: absolute;
  left: 160px;
  top: 30px;
  cursor: pointer;
`;

export const Coracao = styled.figure`
  position: absolute;
  left: 170px;
  top: 41px;
  cursor: pointer;
  display: ${(props) => (props.active ? "none" : "block")};
`;

export const Caule = styled.figure`
  width: 110px;
  height: 110px;
  position: absolute;
  top: -68px;
  left: -40px;
`;

export const Cogumelo = styled.figure`
  position: absolute;
  right: 150px;
  top: 50px;

  @media only screen and (max-width: 750px) {
    right: 0;
  }

  @media only screen and (max-width: 350px) {
    top: 150px;
  }
`;

export const Peixe = styled.figure`
  position: absolute;
  left: 340px;
  top: 70px;

  @media only screen and (max-width: 750px) {
    left: 250px;
    top: 20px;
  }

  @media only screen and (max-width: 500px) {
    left: 120px;
    top: 10px;
  }

  @media only screen and (max-width: 350px) {
    top: -20px;
    left: 120px;
  }
`;

export const Folha = styled.figure`
  position: absolute;
  right: 70px;
  bottom: 90px;

  @media only screen and (max-width: 500px) {
    left: 0px;
    bottom: 650px;
  }

  @media only screen and (max-width: 350px) {
    left: 200px;
    bottom: 700px;
  }
`;

export const Pimenta = styled.figure`
  position: absolute;
  left: 0;
  bottom: -140px;

  @media only screen and (max-width: 350px) {
    bottom: -70px;
  }
`;

export const Tomate = styled.figure`
  position: absolute;
  right: 0;
  bottom: -270px;
  z-index: 1000;
`;
