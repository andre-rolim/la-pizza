import React from "react";
import * as C from "./style";

const Sobre = () => {
  return (
    <C.Container>
      <C.Hold>
        <C.Pizza>
          <img
            src="https://www.datocms-assets.com/58094/1636579331-pizza1.png"
            alt="imagem de uma Pizza"
          />
        </C.Pizza>
        <C.Pizza2>
          <img
            src="https://www.datocms-assets.com/58094/1637100992-pizza2.png"
            alt="imagem de uma Pizza"
          />
        </C.Pizza2>
        <C.Restaurante>
          <img
            src="https://www.datocms-assets.com/58094/1636579067-restaurante.png"
            alt="imagem do Restaurante"
          />
        </C.Restaurante>
        <C.Text>
          <span>
            Sobre a La P<C.H2Yellow>i</C.H2Yellow>
            <C.H2Red>i</C.H2Red>
            <C.H2Green>z</C.H2Green>
            <span>a</span>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
            justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor
            tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor
            purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam
            pharetra lectus in pharetra. Nullam viverra elementum neque quis
            fermentum.{" "}
          </p>
          <button>Ler mais</button>
        </C.Text>
      </C.Hold>
    </C.Container>
  );
};

export default Sobre;
