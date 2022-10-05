import styled from "styled-components";

export const Container = styled.div`
  font-family: Poppins, sans-serif;
  background-color: #060d15;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerSearch = styled.div`
  font-family: Poppins, sans-serif;
  background-color: #060d15;
  width: 50vw;
  /* height: 7vh; */
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

export const SearchBar = styled.input`
  width: 60%;
  margin-top: 1%;
  margin-right: 2%;
  padding: 5px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
`

export const Logo = styled.img`
  width: 9%;
  margin-left: 4%;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 7rem;
  }
`;

export const Links = styled.ul`
  /* flex-direction: row; */
  list-style: none;
  /* display: flex; */
  font-weight: 400;
  margin-right: 5%;
  /* justify-content: center; */
  /* align-items: center; */
  a {
    text-decoration: none;
    color: #ec1d24;
    font-size: 1.8rem;
  }
  li {
    color: #ec1d24;
    cursor: pointer;
    transition: all 0.5s;
    border-bottom: 2px solid transparent;
  }
  li:hover {
    color: #e8aa3b;
    border-bottom: 2px solid #772720;
  }
`;

export const Button = styled.button`
  border: 2px solid blue;
  font-size: 16px;
  padding: 4px;
  border-radius: 15px;
  margin-top: 1%;
  on:hover {
    background-color: lightblue;
  }
`