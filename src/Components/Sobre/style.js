import styled from "styled-components";

export const Container = styled.section`
  background-color: #fcfcfc;
  padding-top: 20px;
  width: 99vw;
  overflow: hidden;
  align-self: center;
`;

export const Hold = styled.div`
  max-width: 1084px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const Restaurante = styled.figure`
  position: relative;
  left: -40px;

  @media only screen and (max-width: 1000px) {
    left: 0;
    margin: 0 auto;
  }

  @media only screen and (max-width: 450px) {
    text-align: center;
    img {
      max-width: 90%;
      width: 100vw;
    }
  }
`;

export const Pizza = styled.figure`
  position: absolute;
  left: -120px;
  top: 50px;
  z-index: 1000;

  @media only screen and (max-width: 1000px) {
    left: -40px;
    top: -30px;
  }

  @media only screen and (max-width: 750px) {
    left: 50px;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const Pizza2 = styled.figure`
  position: absolute;
  right: -180px;
  top: 250px;
  z-index: 1000;

  @media only screen and (max-width: 1000px) {
    right: 0;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
  flex-wrap: wrap;
  align-self: center;
  span {
    font-size: 36px;
    font-weight: 600;
    font-style: normal;
    line-height: 45px;
    color: #2e2e2e;

    @media only screen and (max-width: 500px) {
      font-size: 31px;
    }
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    color: #2e2e2e;
    display: inline-block;
    height: 100%;
    margin-bottom: 50px;
  }

  button {
    width: 148px;
    height: 39px;
    background: #ffa200;
    border-radius: 25px;
    margin: 10px 0 20px 0;
    border: none;
    transition: 0.5s;
    cursor: pointer;
    font-size: 16px;
    line-height: 15px;
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
    margin: 0 auto;
  }

  @media only screen and (max-width: 350px) {
    max-width: 349px;
    width: 100%;
    text-align: center;
    button {
      margin: 0 auto;
    }
    span {
      margin: 0 auto;
    }
  }
`;

export const H2Yellow = styled.span`
  color: #ffa200 !important;
`;
export const H2Red = styled.span`
  color: #cf3031 !important;
`;
export const H2Green = styled.span`
  color: #5c913b !important;
`;
