import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import {
  selectAll,
  getByName,
  Character,
  getAll,
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
import { Loading } from '../../components/Loading/Loading';

// const Fade = require('react-reveal/Fade');

export const CharactersSearch = () => {
  const url = window.location.href.split('/');
  const urlSearch = url[4].split('='); 
  const [inputValue, setInputValue] = useState<string>(urlSearch ? urlSearch[1] : '');
  const [ page ] = useSearchParams();
  const query = Number(page.get("page"))
  const [currentPage, setCurrentPage] = useState<number>(query);
  console.log(query)
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  const dispatch = useAppDispatch();

  const personagensSelecionados = currentPage * 10;
  const limite = 100;

  const offset = currentPage * 10 - 10;

  const handleFunction = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  };

  useEffect(() => {
    setSearch(urlSearch[1]);
    if (search !== '') {
      dispatch(getByName({ nameStartsWith: search, limite, offset }));
    }
    setLoading(false);
  }, [search]);
  
  let charactersRedux = useAppSelector(selectAll);
  const length = Math.ceil(charactersRedux.length / 10)

  useEffect(() => {
    if (currentPage > 1) {
      const urlSearchPage = url[5].split('=');
      setCurrentPage(Number(urlSearchPage[1]));
    }
  }, [currentPage]);

  charactersRedux = charactersRedux.slice(offset, personagensSelecionados)

  return (
    <>
      <Navbar
        search
        setInputValue={setInputValue}
        handleFunction={handleFunction}
        inputValue={inputValue}
      />
      <Container>
        {charactersRedux.length === 0 ? (
          // <Loading type="spinningBubbles" color="black" />
          <h1>Este personagem não foi encontrado.</h1>
        ) : (
          charactersRedux.map((character: any, index: number): any => (
            <div key={character.id}>
              <ContainerCharacter
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              >
                <Text>{character.name}</Text>
              </ContainerCharacter>
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
              // <PaginationItem
              //   component={Link}
              //   to={`/characters/search=${search}${
              //     item.page === 1 ? '' : `/page=${item.page}`
              //   }`}
              //   {...item}
              // />
              <PaginationItem
                component={Link}
                to={`/characters/search=${search}${
                  `/page=${item.page}`
                }`}
                {...item}
              />
            )}
          />
      </PaginationContainer>
      <Footer />
    </>
  );
};
