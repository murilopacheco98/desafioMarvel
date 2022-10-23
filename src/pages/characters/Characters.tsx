// import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
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
  getByName,
  Character,
} from '../../store/modules/characters/charactersSlice';
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

export const Characters = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const limite = 10;
  const limiteByName = 100;
  // let offset = currentPage * 10 - 10;
  const page = inputValue ? 1 : 157;
  const url = window.location.href.split('/');
  const urlSearchPage = url[4].split('=');
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const offset = currentPage * 10 - 10;
    // console.log("1")  
    if (currentPage > 0){
      dispatch(getAll({ limite, offset }));
    }
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let offset = currentPage * 10 - 10;
    // console.log("2")
    if( inputValue !== '' ) {
      offset = 0;
      dispatch(getByName({nameStartsWith: inputValue, limite: limiteByName, offset }));
    } else {
      setCurrentPage(Number(urlSearchPage[1]));
      dispatch(getAll({ limite, offset }));
    }
    setLoading(false);
  }, [inputValue]);
  
  let charactersRedux = Object.values(useAppSelector((store) => store.characters.entities));
  charactersRedux = charactersRedux.sort((a: any , b: any) => a.name.localeCompare(b.name))
  // const charactersRedux = useAppSelector(selectAll);

  return (
    <ContainerGeral>
      <Navbar
        search
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Container>
          { (() => { if (loading === true) {
            return(
              <Loading type="spinningBubbles" color="black" />
            )
          } 
          if (charactersRedux.length === 0) {
            return (
              <h1> Este personagem não foi encontrado. </h1>
            )
          } 
              return (
              charactersRedux.map((character: Character | undefined ): any => (
                <ContainerKey key={character?.id}>
                  <Link to={`/characters/id=${character?.id}`}>
                    <ContainerCharacter
                      image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                    >
                      <Text>{character?.name}</Text>
                    </ContainerCharacter>
                  </Link>
                </ContainerKey>
                )))
              }
             )()
            }
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
              to={`/characters${`/page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </PaginationContainer>
      <Footer />
    </ContainerGeral>
  );
};