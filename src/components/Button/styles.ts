// import styled from "styled-components";

import styled, { keyframes } from "styled-components"
// import CSS from 'csstype'

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
`;

const shineAnim = keyframes`
  10% { opacity: 0.9; box-shadow: 0px 0px 20px 4px rgba(236, 29, 36, 0.45);  }
  50% { opacity: 0.95; box-shadow: 0px 0px 20px 8px rgba(236, 29, 36, 0.45); }
  100% { opacity: 1; box-shadow: 0px 0px 20px 16px rgba(236, 29, 36, 0.45);}
`

export const ButtonStyle = styled.button`

  background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);  
  animation: ${shineAnim} 2s ease infinite;
  animation-delay: 0s;

  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 60px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  background: #4fd1c5;
  
  background: linear-gradient(
    90deg,
    rgba(236, 29, 36, 1) 0%,
    rgba(236, 29, 36, 0.8) 100%
  );
  border: none;
  border-radius: 1000px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  ::before {
    content: "";
    border-radius: 100px;
    min-width: min(540px, (100% + 10px));
    min-height: calc(60px + 12px);
    border: 6px solid white;
    box-shadow: 0 0 50px rgba(236, 29, 36, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.5s ease-in-out 0s;
  }
  color: white;
  :hover::before,
  :focus::before {
    opacity: 1;
  }
  @media (max-width: 600px) {
    /* background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);  
    animation: ${shineAnim} 2s ease infinite;
    animation-delay: 0s; */

    font-size: 1.5rem;
    /* display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    min-height: 60px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    background: #4fd1c5;
  
    background: linear-gradient(
      90deg,
      rgba(236, 29, 36, 1) 0%,
      rgba(236, 29, 36, 0.8) 100%
    );
    border: none;
    border-radius: 1000px;
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
    ::before {
      content: "";
      border-radius: 100px;
      min-width: min((550px), (100% + 10px));
      min-height: calc(60px + 12px);
      border: 6px solid white;
      box-shadow: 0 0 50px rgba(236, 29, 36, 0.7);
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.5s ease-in-out 0s;
    }
    color: white;
    :hover::before,
    :focus::before {
      opacity: 1;
    } */
  }
`;

