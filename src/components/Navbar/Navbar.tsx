import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Container, Links, Logo, ContainerSearch, SearchBar } from './styles';
import Marvel from '../../assets/img/Marvel.png';

type NavBarProps = {
  search: boolean;
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  handleFunction?: any;
  setSearch?: any;
};

export const Navbar = (props: NavBarProps) => {
  const navigate = useNavigate();
  const { setSearch, setInputValue, handleFunction, inputValue} = props;
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
              onKeyDown={(e) =>{if (e.key === 'Enter') {
                    navigate(`/characters/search=${inputValue}/page=1`)
                    setSearch(inputValue)
                  }
                }
              }
            />
            <Link to={`/characters/search=${inputValue}/page=1`}>
              <Button onClick={handleFunction}><SearchIcon sx={{ fontSize: 45 }}/></Button>
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