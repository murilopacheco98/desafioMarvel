// import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
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
  ContainerKey,
  ContainerGeral,
} from './styles';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/modules/types-hooks';
import { Loading } from '../../components/Loading/Loading';
import {
  getAll,
  getByName,
  Storie,
} from '../../store/modules/stories/storiesSlice';

export const Stories = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const handleChange = (stories: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const limite = 10;
  const limiteByName = 100;
  let offset = currentPage * 10 - 10;
  const page = inputValue ? 1 : 5336;
  const url = window.location.href.split('/');
  const urlSearchPage = url[4].split('=');

  useEffect(() => {
    if (currentPage > 0) {
      dispatch(getAll({ limite, offset }));
    }
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    if (inputValue !== '') {
      offset = 0;
      dispatch(
        getByName({ nameStartsWith: inputValue, limite: limiteByName, offset })
      );
    } else {
      setCurrentPage(Number(urlSearchPage[1]));
    }
    setLoading(false);
  }, [inputValue]);

  const storiesRedux = Object.values(
    useAppSelector((store) => store.stories.entities)
  );

  return (
    <ContainerGeral>
      <Navbar
        search
        setInputValue={setInputValue}
        inputValue={inputValue}
        option="stories"
      />
      <Container>
        {(() => {
          if (loading === true) {
            return <Loading type="spinningBubbles" color="black" />;
          }
          if (storiesRedux.length === 0) {
            return <h1> Este personagem não foi encontrado. </h1>;
          }
          return storiesRedux.map((stories: Storie | undefined): any => (
            <ContainerKey key={stories?.id}>
              <Link to={`/stories/id=${stories?.id}`}>
                <ContainerCharacter
                  image={`${stories?.thumbnail.path}.${stories?.thumbnail.extension}`}
                >
                  <Text>{stories?.creators.available}</Text>
                </ContainerCharacter>
              </Link>
            </ContainerKey>
          ));
        })()}
      </Container>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <PaginationContainer>
        <Pagination
          onChange={handleChange}
          page={currentPage}
          count={page}
          variant="outlined"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/stories${`/page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </PaginationContainer>
      <Footer />
    </ContainerGeral>
  );
};
