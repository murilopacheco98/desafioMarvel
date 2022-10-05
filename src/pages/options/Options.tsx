import React, { useEffect } from "react";
import { Cards } from "../../components/Cards/Cards"
import { CardsSpace, Container, TitlePage } from "./styles";

// const Fade = require('react-reveal/Fade')

export const Options = () => {

  return (
    <Container>
        <TitlePage>Escolha o seu destino</TitlePage>
      <CardsSpace>
        <Cards />
      </CardsSpace>
    </Container>
  );
};