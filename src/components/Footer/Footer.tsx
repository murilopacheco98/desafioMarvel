import React from 'react'
import { CgMail } from "react-icons/cg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Container, Links, Name, Person, PersonsContainer } from "./styles";
// import { Fade } from "react-reveal/Fade";
// import { Persons } from "../../assets/data";

const Fade = require('react-reveal/Fade')

export const Footer = () => {
  return (
    <Container>
      <PersonsContainer>
        {/* {Persons.map((person, index) => (
          <Fade key={person.name}>
            <Person key={person.name}>
              <Name>{person.name}</Name>
              <Links>
                <a href={person.instagram} target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
                <a href={person.linkedin} target="_blank" rel="noreferrer">
                  <AiFillLinkedin />
                </a>
                <a href={person.github} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </Links>
            </Person>
            {index < 2 ? <Divider /> : ""}
          </Fade>
        ))} */}
        <Fade key='Murilo Pacheco'>
            <Person key='Murilo Pacheco'>
              <Name>Murilo Pacheco</Name>
              <Links>
                <a href='https://www.linkedin.com/in/murilo-pacheco-037ba316b/' target="_blank" rel="noreferrer">
                  <AiFillLinkedin /> Linkedin
                </a>
                <a href='https://github.com/murilopacheco98' target="_blank" rel="noreferrer">
                  <AiFillGithub /> Github
                </a>
              </Links>
            </Person>
            {/* {index < 2 ? <Divider /> : ""} */}
          </Fade>
      </PersonsContainer>
    </Container>
  );
};

export default Footer;
