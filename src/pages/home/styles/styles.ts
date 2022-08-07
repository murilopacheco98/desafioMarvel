// styles.ts - exporting es6
import styled, { keyframes } from "styled-components";
import StarkTower from "../../../assets/img/StarkTower.png"

export const Container = styled.div`
  margin: -8px;
  background-image: url(${StarkTower});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    
  }
`;

export const Title = styled.h1`
  color: #ec1d24;
  background-color: rgba(6, 13, 21, 0.6);
  border-radius: 20px;
  border: 1px solid #060d15;
  padding: 1rem;  
  width: 22rem;
  font-size: 4rem;
  text-align: center;
  span {
    margin-top: 10px;
    font-size: 2.5rem;
    font-weight: 900;
    background-color: #ec1d24;
    color: white;
    padding: 0.5rem;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    font-size: 3rem;
    justify-content: center;
    align-items: center; */
    span {
      padding: 0.8rem;
    }
  }
  @media (max-width: 600px) {
    margin-top: -30px;
    font-size: 2.5rem;
    color: #ec1d24;
    span {
    font-size: 1,5rem;
    padding: 0.5rem;
  }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const effect = keyframes`
  0%   {top:20px; bottom:40px};
  25%  {top:0px; bottom:20px};
  50%  {top:40px; bottom:0px};
  75%  {top:0px; bottom:40px};
  100% {top:20px; bottom:0px};
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  width: 35%;
  filter: drop-shadow(5px 5px 5px #ec1d24);
  animation: ${effect} 5s linear infinite;
  @media (max-width: 600px) {
  /* display: flex; */
  margin-top: -50px;
  width: 45%;
  filter: drop-shadow(5px 5px 5px #ec1d24);
  animation: ${effect} 5s linear infinite;
  } 
`;

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;