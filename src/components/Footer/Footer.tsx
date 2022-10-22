import React from 'react'
import { CgMail } from "react-icons/cg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Container, Links, Name, Person, PersonsContainer } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <PersonsContainer>        
        <div key='Murilo Pacheco'>
            <Person key='Murilo Pacheco'>
              <Name>Murilo Pacheco</Name>
              <Links>
                <a href='https://www.linkedin.com/in/murilo-pacheco-037ba316b/' target="_blank" rel="noreferrer">
                  <AiFillLinkedin />
                </a>
                <a href='https://github.com/murilopacheco98' target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </Links>
            </Person>
          </div>
      </PersonsContainer>
    </Container>
  );
};

export default Footer;
