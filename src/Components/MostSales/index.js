import React from "react";
import styled from "styled-components";
import * as C from "./styles";

const MaisVendidas = () => {
  const [active, setActive] = React.useState(false);
  function handleClick(event) {
    event.target = setActive(true);
    if (active === true) {
      setActive(false);
    }
  }

  return (
    <C.Container>
      <h1>Mais Vendidas</h1>
      <C.Caule>
        <img
          src="https://www.datocms-assets.com/58094/1636406434-plant.svg"
          alt="imagem de Caule"
        />
      </C.Caule>
      <C.Cogumelo>
        <img
          src="https://www.datocms-assets.com/58094/1636406826-cogumelo.png"
          alt="imagem de Cogumelo"
        />
      </C.Cogumelo>
      <C.Peixe>
        <img
          src="https://www.datocms-assets.com/58094/1636575706-peixe.png"
          alt="imagem de Peixe"
        />
      </C.Peixe>
      <C.Folha>
        <img
          src="https://www.datocms-assets.com/58094/1636575655-folha.png"
          alt="imagem de Folha"
        />
      </C.Folha>
      <C.Pimenta>
        <img
          src="https://www.datocms-assets.com/58094/1636575725-pimenta.png"
          alt="imagem de Pimenta"
        />
      </C.Pimenta>
      <C.Pizzas>
        <ul>
          <C.Retangulo>
            <img
              onClick={handleClick}
              src="https://www.datocms-assets.com/58094/1636576895-rectangle-186.png"
              alt="Retangulo do coração"
            />
          </C.Retangulo>
          <C.Coracao onClick={handleClick} active={active}>
            <img
              src="https://www.datocms-assets.com/58094/1636577156-stroke-5.png"
              alt="Retangulo do coração"
            />
          </C.Coracao>
          <img
            src="https://www.datocms-assets.com/58094/1636575997-lacuma.png"
            alt="Pizza La Cuma"
          />
          <h3>La Cuma</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
        <ul>
          <C.Retangulo onClick={handleClick}>
            <img
              src="https://www.datocms-assets.com/58094/1636576895-rectangle-186.png"
              alt="Retangulo do coração"
            />
          </C.Retangulo>
          <C.Coracao onClick={handleClick} active={active}>
            <img
              src="https://www.datocms-assets.com/58094/1636577156-stroke-5.png"
              alt="Retangulo do coração"
            />
          </C.Coracao>
          <img
            src="https://www.datocms-assets.com/58094/1636576197-la-menta.png"
            alt="Pizza La Menta"
          />
          <h3>La Menta</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
        <ul>
          <C.Retangulo onClick={handleClick}>
            <img
              src="https://www.datocms-assets.com/58094/1636576895-rectangle-186.png"
              alt="Retangulo do coração"
            />
          </C.Retangulo>
          <C.Coracao onClick={handleClick} active={active}>
            <img
              src="https://www.datocms-assets.com/58094/1636577156-stroke-5.png"
              alt="Retangulo do coração"
            />
          </C.Coracao>
          <img
            src="https://www.datocms-assets.com/58094/1636576230-la-bana.png"
            alt="Pizza La Bana"
          />
          <h3>La Bana</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
        <ul>
          <C.Retangulo onClick={handleClick}>
            <img
              src="https://www.datocms-assets.com/58094/1636576895-rectangle-186.png"
              alt="Retangulo do coração"
            />
          </C.Retangulo>
          <C.Coracao onClick={handleClick} active={active}>
            <img
              src="https://www.datocms-assets.com/58094/1636577156-stroke-5.png"
              alt="Retangulo do coração"
            />
          </C.Coracao>
          <img
            src="https://www.datocms-assets.com/58094/1636576252-la-toca.png"
            alt="Pizza La Toca"
          />
          <h3>La Toca</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$ 23</span>
          <button>Comprar agora</button>
        </ul>
      </C.Pizzas>
      <C.Tomate>
        <img
          src="https://www.datocms-assets.com/58094/1636575759-tomate.png"
          alt="imagem de Tomate"
        />
      </C.Tomate>
    </C.Container>
  );
};

export default MaisVendidas;
