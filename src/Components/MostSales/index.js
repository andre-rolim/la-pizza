import React from "react";
import * as C from "./styles";

const MaisVendidas = () => {
  return (
    <C.Container>
      <h1>Mais Vendidas</h1>
      <C.Folha>
        <img
          src="https://www.datocms-assets.com/58094/1636406434-plant.svg"
          alt="imagem de folha"
        />
      </C.Folha>
      <C.Cogumelo>
        <img
          src="https://www.datocms-assets.com/58094/1636406826-cogumelo.png"
          alt="imagem de folha"
        />
      </C.Cogumelo>
      <C.Pizzas>
        <ul>
          <img src="" />
          <h3>La Cuma</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
        <ul>
          <img src="" />
          <h3>La Menta</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
        <ul>
          <img src="" />
          <h3>La Bana</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
        <ul>
          <img src="" />
          <h3>La Toca</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
      </C.Pizzas>
    </C.Container>
  );
};

export default MaisVendidas;
