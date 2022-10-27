import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
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
import { Creator, getByName, selectAll } from '../../store/modules/creators/creatorsSlice';
// import { Loading } from '../../components/Loading/Loading';

export const CreatorsSearch = () => {
  const url = window.location.href.split('/');
  const urlSearch = url[4].split('=');
  const [inputValue, setInputValue] = useState<string>(
    urlSearch ? urlSearch[1] : ''
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [loading, setLoading] = useState<boolean>(true);
  const [currentSearch, setCurrentSearch] = useState<string>('');

  const dispatch = useAppDispatch();

  const personagensSelecionados = currentPage * 10;
  const limite = 100;

  let offset = currentPage * 10 - 10;

  const handleFunction = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const urlSearchPage = url[5].split('=');

  useEffect(() => {
    setCurrentSearch(urlSearch[1]);
    setCurrentPage(Number(urlSearchPage[1]));
    offset = 0;
    if (currentSearch !== '') {
      dispatch(getByName({ nameStartsWith: currentSearch, limite, offset }));
    }
    // setLoading(false);
  }, [currentSearch]);

  let creatorsRedux = useAppSelector(selectAll);
  const length = Math.ceil(creatorsRedux.length / 10);

  useEffect(() => {
    if (currentPage > 1) {
      setCurrentPage(Number(urlSearchPage[1]));
    }
    // setLoading(false);
  }, [currentPage]);

  creatorsRedux = creatorsRedux.slice(offset, personagensSelecionados);

  return (
    <>
      <Navbar
        search
        setInputValue={setInputValue}
        handleFunction={handleFunction}
        inputValue={inputValue}
        setSearch={setCurrentSearch}
        option='creators'
      />
      <Container>
        {creatorsRedux.length === 0 ? (
          // <Loading type="spinningBubbles" color="black" />
          <h1>Este personagem não foi encontrado.</h1>
        ) : (
          creatorsRedux.map((creator: Creator): any => (
            <div key={creator.id}>
              <Link to={`/comics/id=${creator?.id}`}>
                <ContainerCharacter
                  image={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                >
                  <Text>{creator.fullName}</Text>
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
              to={`/comics/search=${currentSearch}${`/page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </PaginationContainer>
      <Footer />
    </>
  );
};
