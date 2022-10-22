import React from 'react'
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { CardsOptions } from "../../assets/data";
import { CardContainer, Text } from "./styles";

export const Cards = () => {
  return (
    <>
      {CardsOptions.map((card) => (
        <div key={card.link}>
            <Link to={card.link} style={{ textDecoration: "none" }}>
              <CardContainer
                image={card.image}
                key={card.title}
                color={card.color}
              >
                <Text color={card.color}>{card.title}</Text>
              </CardContainer>
            </Link>
        </div>
      ))}
    </>
  );
};