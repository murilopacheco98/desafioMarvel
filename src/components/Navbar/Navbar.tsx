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
  option?: string;
};

export const Navbar = (props: NavBarProps) => {
  const navigate = useNavigate();
  const { setSearch, setInputValue, handleFunction, inputValue, option } = props;
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
                    navigate(`/${option}/search=${inputValue}/page=1`)
                    setSearch(inputValue)
                  }
                }
              }
            />
            <Link to={`/${option}/search=${inputValue}/page=1`}>
              <Button onClick={handleFunction}><SearchIcon sx={{ fontSize: 45 }}/></Button>
            </Link>
          </ContainerSearch>
          <Links>
            <Link to="/options" className='w-11' style={{textDecoration:'none'}}>
              <h3>Menu</h3>
            </Link>
          </Links>
        </Container>
      ) : (
        <Container>
          <Logo src={Marvel} alt="Marvel" onClick={backToHome} />
          <Links>
            <Link to="/options" className='w-11' style={{textDecoration:'none'}}>
              <h3>Menu</h3>
            </Link>
          </Links>
        </Container>
      )}
    </div>
  );
};