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
import { Loading } from '../../components/Loading/Loading';
import { getByName, selectAll, Serie } from '../../store/modules/series/seriesSlice';

export const SeriesSearch = () => {
  const url = window.location.href.split('/');
  const urlSearch = url[4].split('=');
  const [inputValue, setInputValue] = useState<string>(
    urlSearch ? urlSearch[1] : ''
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSearch, setCurrentSearch] = useState<string>('');

  const dispatch = useAppDispatch();

  const personagensSelecionados = currentPage * 10;
  const limite = 100;

  let offset = currentPage * 10 - 10;

  const handleFunction = (serie: React.ChangeEvent<unknown>, value: number) => {
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
    setLoading(false);
  }, [currentSearch]);

  let seriesRedux = useAppSelector(selectAll);
  const length = Math.ceil(seriesRedux.length / 10);

  useEffect(() => {
    if (currentPage > 1) {
      setCurrentPage(Number(urlSearchPage[1]));
    }
    setLoading(false);
  }, [currentPage]);

  seriesRedux = seriesRedux.slice(offset, personagensSelecionados);

  return (
    <>
      <Navbar
        search
        setInputValue={setInputValue}
        handleFunction={handleFunction}
        inputValue={inputValue}
        setSearch={setCurrentSearch}
        option='series'
      />
      <Container>
      {(() => {
          if (loading === true) {
            return <Loading type="spinningBubbles" color="black" />;
          }
          if (seriesRedux.length === 0) {
            return <h1> Este personagem não foi encontrado. </h1>;
          }
          return seriesRedux.map((serie: Serie): any => (
            <div key={serie.id}>
              <Link to={`/series/id=${serie?.id}`}>
                <ContainerCharacter
                  image={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                >
                  <Text>{serie.creators.available}</Text>
                </ContainerCharacter>
              </Link>
            </div>
          ));
        })()}
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
              to={`/series/search=${currentSearch}${`/page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </PaginationContainer>
      <Footer />
    </>
  );
};
