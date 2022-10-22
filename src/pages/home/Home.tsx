import React, { useEffect } from "react"
import { Container, Image, TextContainer, Title } from './styles/styles'
import IronMan from "../../assets/img/IronMan.png"

import { Button } from "../../components/Button/Button"

export const Home:React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marvel: Inicio";
  });

  return (
    <Container>
      <TextContainer>
        <div>
          <div>
            <Title>
              Bem vindo ao universo <span>MARVEL</span>
            </Title>
          </div>
        </div>
        <Button titleText="Explorar o mundo marvel" redirect="/options" />
      </TextContainer>
      <Image src={IronMan} alt="IronMan" />
    </Container>
  );
};