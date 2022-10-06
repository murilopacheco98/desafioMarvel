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
  selectAll,
} from '../../store/modules/characters/charactersSlice';
import {
  getAllAuxiliar,
  getByNameAuxiliar,
} from '../../store/modules/auxiliar/auxiliarSlice';
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
      // dispatch(getAllAuxiliar({ limite, offset }));
    } else {
      dispatch(getAll({ limite, offset }));
      // dispatch(getAllAuxiliar({ limite, offset }));
    }
    setLoading(false);
  }, [inputValue]);
  
  // const charactersReduxAuxiliar = useAppSelector((store) => store.auxiliar);
  let charactersRedux = Object.values(useAppSelector((store) => store.characters.entities));
  charactersRedux = charactersRedux.sort((a: any , b: any) => a.name.localeCompare(b.name))
  // const charactersRedux = useAppSelector(selectAll);

  return (
    <>
      <Navbar
        search
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Container>
        {/* {loading && 
            <Loading type="spinningBubbles" color="black" />
            || !charactersRedux &&
            <h1> Este personagem não foi encontrado. </h1>
            ||
              charactersRedux.map((character: Character ): any => (
                <div key={character.id}>
                  <Link to={`/characters/id=${character.id}`}>
                    <ContainerCharacter
                      image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    >
                      <Text>{character.name}</Text>
                    </ContainerCharacter>
                  </Link>
                </div>
                ))
              } */}
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
                <div key={character?.id}>
                  <Link to={`/characters/id=${character?.id}`}>
                    <ContainerCharacter
                      image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                    >
                      <Text>{character?.name}</Text>
                    </ContainerCharacter>
                  </Link>
                </div>
                )))
              }
             )()
            }
        {/* { loading ?? (
          <Loading type="spinningBubbles" color="black" />
          )} 
            {!charactersRedux ? (
              <h1> Este personagem não foi encontrado. </h1>
            ) : (
              charactersRedux.map((character: Character | undefined ): any => (
                <div key={character?.id}>
                  <Link to={`/characters/id=${character?.id}`}>
                    <ContainerCharacter
                      image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                    >
                      <Text>{character?.name}</Text>
                    </ContainerCharacter>
                  </Link>
                </div>
                ))
              // 
            )} */}
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