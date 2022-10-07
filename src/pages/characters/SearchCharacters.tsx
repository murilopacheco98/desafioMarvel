import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import {
  selectAll,
  getByName,
} from '../../store/modules/characters/charactersSlice';
import {
  ContainerCharacter,
  Container,
  PaginationContainer,
  Text,
} from './styles';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/modules/types-hooks';
// import { Loading } from '../../components/Loading/Loading';

export const CharactersSearch = () => {
  const url = window.location.href.split('/');
  const urlSearch = url[4].split('=');
  const [inputValue, setInputValue] = useState<string>(
    urlSearch ? urlSearch[1] : ''
  );
  // const [ inputValue ] = useSearchParams();
  // const query = inputValue.get("search")
  // const [inputValue2, setInputValue2] = useState<string>(
  //   `${query}` 
  // );
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [loading, setLoading] = useState<boolean>(true);
  const [currentSearch, setCurrentSearch] = useState<string>('');

  const dispatch =  useAppDispatch();

  const personagensSelecionados = currentPage * 10;
  const limite = 100;

  let offset = currentPage * 10 - 10;

  const handleFunction = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    console.log(3)
    setCurrentSearch(urlSearch[1]);
    const urlSearchPage = url[5].split('=');
    setCurrentPage(Number(urlSearchPage[1]));
    offset = 0
    if (currentSearch !== '') {
      dispatch(getByName({ nameStartsWith: currentSearch, limite, offset }));
    }
    // setLoading(false);
  }, [currentSearch]);

  let charactersRedux = useAppSelector(selectAll);
  const length = Math.ceil(charactersRedux.length / 10);
  // const { page } = useParams();
  
  useEffect(() => {
    console.log(4)
    if (currentPage > 1) {
      // setCurrentPage(Number(page));
      const urlSearchPage = url[5].split('=');
      setCurrentPage(Number(urlSearchPage[1]));
    }
    // setLoading(false);
  }, [currentPage]);

  charactersRedux = charactersRedux.slice(offset, personagensSelecionados);

  return (
    <>
      <Navbar
        search
        setInputValue={setInputValue}
        handleFunction={handleFunction}
        inputValue={inputValue}
        setSearch={setCurrentSearch}
      />
      <Container>
        {charactersRedux.length === 0 ? (
          // <Loading type="spinningBubbles" color="black" />
          <h1>Este personagem não foi encontrado.</h1>
        ) : (
          charactersRedux.map((character: any): any => (
            <div key={character.id}>
              <Link to={`/characters/id=${character?.id}`}>
                <ContainerCharacter
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                >
                  <Text>{character.name}</Text>
                </ContainerCharacter>
              </Link>
            </div>
          ))
        )}
      </Container>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <PaginationContainer>
        <Pagination
          onChange={handleFunction}
          page={currentPage}
          count={length}
          variant="outlined"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/characters/search=${currentSearch}${`/page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </PaginationContainer>
      <Footer />
    </>
  );
};
