import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Container, Links, Logo, ContainerSearch, SearchBar } from './styles';
import Marvel from '../../assets/img/Marvel.png';

// import { Fade } from "react-reveal";
type NavBarProps = {
  search: boolean;
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  handleFunction?: any;
};

export const Navbar = (props: NavBarProps) => {
  const navigate = useNavigate();
  const { search, setInputValue, handleFunction, inputValue} = props;
  const backToHome = () => {
    navigate('/');
  };

  return (
    <div>
      {setInputValue ? (
        <Container>
          <Logo src={Marvel} alt="Marvel" onClick={backToHome} />
          <ContainerSearch>
            <SearchBar
              placeholder="Digite o nome do personagem"
              onChange={(event) => setInputValue(event.target.value)}
              value={inputValue}
            />
            <Link to={`/characters/search=${inputValue}/page=1`}>
              <Button className='border-blue-600 border-4' onClick={handleFunction}>Search</Button>
            </Link>
          </ContainerSearch>
          <Links>
            <Link to="/options">
              <li>Menu</li>
            </Link>
          </Links>
        </Container>
      ) : (
        <Container>
          <Logo src={Marvel} alt="Marvel" onClick={backToHome} />
          <Links>
            <Link to="/options">
              <li>Menu</li>
            </Link>
          </Links>
        </Container>
      )}
    </div>
  );
};