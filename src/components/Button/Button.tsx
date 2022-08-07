import React from 'react'
import { Link } from "react-router-dom"
import { Wrap, ButtonStyle } from './styles'

const Zoom = require('react-reveal/Zoom');

type ButtonProps = {
  titleText: string;
  redirect: string;
};

export const Button = ({ titleText, redirect }: ButtonProps) => {
  return (
      <Zoom bottom>
        <Wrap>
          <Link to={redirect}>
            <ButtonStyle>{titleText}</ButtonStyle>
          </Link>
        </Wrap>
      </Zoom>
  );
};