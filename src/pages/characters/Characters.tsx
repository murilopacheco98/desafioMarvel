import React, {
  useEffect,
  useState,
} from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import {
  getAll,
  selectAll,
  addMany,
  removeAll,
  getByName,
  Character,
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

const Fade = require('react-reveal/Fade');

export const Characters = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const limite = 10;
  const limiteByName = 100;
  const offset = currentPage * 10 - 10;
  const page = inputValue ? 1 : 157;

  useEffect(() => {
    console.log("1")
    dispatch(getAll({ limite, offset }));
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    console.log("2")
    if( inputValue !== '' ) {
      dispatch(getByName({nameStartsWith: inputValue, limite: limiteByName, offset }));
    } else {
      dispatch(getAll({ limite, offset }));
    }
    setLoading(false);
  }, [inputValue]);

  const charactersRedux = useAppSelector(selectAll);

  return (
    <>
      <Navbar
        search
        setInputValue={setInputValue}
        // handleFunction={handleFunction}
        inputValue={inputValue}
      />
      <Container>
        {loading ?? (
          <Loading type="spinningBubbles" color="black" />
          )} 
            {!charactersRedux ? (
              <h1> Este personagem não foi encontrado. </h1>
            ) : (
              charactersRedux.map((character: Character ): any => (
                <Fade left key={character.id}>
                  <Link to={`/characters/id=${character.id}`}>
                    <ContainerCharacter
                      image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    >
                      <Text>{character.name}</Text>
                    </ContainerCharacter>
                  </Link>
                </Fade>
                ))
              // 
            )}
      </Container>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <PaginationContainer>
        <Pagination
          onChange={handleChange}
          page={currentPage}
          count={page}
          variant="outlined"
          renderItem={(item) => (
            // <PaginationItem
            //   component={Link}
            //   to={`/characters${item.page === 1 ? '' : `/page=${item.page}`}`}
            //   {...item}
            // />
            <PaginationItem
              component={Link}
              to={`/characters${`/page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </PaginationContainer>
      <Footer />
    </>
  );
};