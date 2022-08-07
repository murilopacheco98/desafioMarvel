import React, { useEffect } from "react";
import { Cards } from "../../components/Cards/Cards"
import { CardsSpace, Container, TitlePage } from "./styles";

const Fade = require('react-reveal/Fade')

export const Options = () => {

  return (
    <Container>
      {/* <Fade top> */}
        <TitlePage>Escolha o seu destino</TitlePage>
      {/* </Fade> */}
      <CardsSpace>
        <Cards />
      </CardsSpace>
    </Container>
  );
};