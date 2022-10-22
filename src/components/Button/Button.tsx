import React from 'react'
import { Link } from "react-router-dom"
import { Wrap, ButtonStyle } from './styles'

type ButtonProps = {
  titleText: string;
  redirect: string;
};

export const Button = ({ titleText, redirect }: ButtonProps) => {
  return (
      <div>
        <Wrap>
          <Link to={redirect}>
            <ButtonStyle>{titleText}</ButtonStyle>
          </Link>
        </Wrap>
      </div>
  );
};