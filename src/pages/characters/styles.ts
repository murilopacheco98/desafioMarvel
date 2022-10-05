import { makeStyles } from "@mui/material";
import styled from "styled-components";

type CharacterContainerProps = {
  image: string;
};

export const Container = styled.div`
  font-family: Bangers, sans-serif;
  /* width: 98.9vw; */
  height: 80.6vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(90, 180, 7, 1);
  -webkit-box-shadow: inset -1px 0px 16px 14px rgba(0, 0, 0, 0.57);
  box-shadow: inset -1px 0px 16px 14px rgba(0, 0, 0, 0.57);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #060d15;
    border-radius: 10px;
  }
`;

export const ContainerCharacters = styled.div`
  font-family: Bangers, sans-serif;
  /* width: 98.9vw; */
  min-height: 84.9vh;
  background-color: rgba(90, 180, 7, 1);
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #060d15;
    border-radius: 10px;
  }
`;

export const ContainerCharacter = styled.div<CharacterContainerProps>`
  border-radius: 20px;
  border: 1px solid black;
  margin: 1rem;
  background-image: url(${(props) => (props.image ? props.image : "")});
  -webkit-box-shadow: inset 1px -50px 40px 5px #000000;
  box-shadow: inset 1px -15px 40px 15px #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 19rem;
  height: 18.5rem;
  /* flex-direction: column; */
  display: flex;
  /* align-items: center; */
  text-align: center;
  justify-content: center;
`;

export const Text = styled.h1`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  position: relative;
  border-radius: 10px;
  padding: 0.5rem;
  top: 0;
  width: 80%;
  height: 9%;
  font-size: 1.4rem;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  background-color: rgba(90, 180, 7, 0.5);
`;

export const InfosContainer = styled.div`
  position: relative;
  border-radius: 10px;
  width: 70%;
  top: 8.5rem;
  border: 1px solid black;
  background-color: rgba(90, 180, 7, 0.55);
  p {
    line-height: 0.1px;
    color: black;
    font-size: 1.15rem;
  }
`;

export const PaginationContainer = styled.div`
  /* position: fixed; */
  width: 100%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  background-color: rgba(79, 239, 50, 1);
  display: flex;
  justify-content: center;
`

export const ContainerCharacterId = styled.div<CharacterContainerProps>`
  border-radius: 20px;
  border: 1px solid black;
  margin: 1rem;
  background-image: url(${(props) => (props.image ? props.image : "")});
  -webkit-box-shadow: inset 1px -50px 40px 5px #000000;
  box-shadow: inset 1px -20px 50px 5px #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 19rem;
  height: 28rem;
`;

export const ContainerTitle = styled.div`
  font-family: Bangers, sans-serif;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(90, 180, 7, 1);
`;

export const ContainerImage = styled.div`
  height: 50vh;
  width: 45vw;
  margin-top: 4vh;
  display: flex;
  justify-content: center;
`;

export const ContainerData = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  border-top: 2px solid rgba(0, 0, 0, 0.57);;
  /* box-shadow: inset 0px 15px 10px 2px rgba(0, 0, 0, 0.57); */
  /* flex-direction: column; */
  background-color: rgba(90, 180, 7, 1);
`;

export const ContainerInfo = styled.div`
  margin-top: 4vh;
  height: auto;
  display: flex;
  width: 40vw;
  flex-direction: column;
  background-color: rgba(90, 180, 7, 1);
`;