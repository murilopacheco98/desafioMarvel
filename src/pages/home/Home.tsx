import Tilt from "react-parallax-tilt"
import React, { useEffect } from "react"
import { Container, Image, TextContainer, Title } from './styles/styles'
import IronMan from "../../assets/img/IronMan.png"

import { Button } from "../../components/Button/Button"

// const Tilt = require('react-tilt')
const Zoom = require('react-reveal/Zoom')

export const Home:React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Inicio";
  });

  return (
    <Container>
      <TextContainer>
        <Tilt >
          <Zoom top>
            <Title>
              Bem vindo ao universo <span>MARVEL</span>
            </Title>
          </Zoom>
        </Tilt>
        <Button titleText="Explorar o mundo marvel" redirect="/options" />
      </TextContainer>
      <Image src={IronMan} alt="IronMan" />
    </Container>
  );
};