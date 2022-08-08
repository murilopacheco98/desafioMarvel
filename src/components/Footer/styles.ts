import styled from "styled-components";

export const Container = styled.div`
  font-family: Poppins, sans-serif;
  background-color: #060d15;
  /* width: 98.9vw; */
  bottom: 0;
  height: 6.1vh;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h1`
  font-weight: 400;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  color: #ec1d24;
`;

export const PersonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Person = styled.div`
  display: flex;
  /* border: 0.5px solid rgba(232, 170, 59, 0.1); */
  /* background-color: rgba(255, 255, 255, 0.03); */
  border-radius: 20px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  a {
    color: white;
    margin-right: 0.5rem; 
    /* transition: all 0.5s; */

  }
  a:hover {
    color: #e8aa3b;
  }
`;

// export const Divider = styled.div`
//   height: 5rem;
//   width: 2px;
//   background-color: #858585;
//   margin: 0px 10px 0px 10px;
//   opacity: 0.2;
// `;

export const Links = styled.div`
  list-style: none;
  /* display: flex;  */
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;