import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
// import { Navbar } from "../../components/Navbar/Navbar";
import { getAll, selectAll } from '../../store/modules/comics/comicsSlice'
import { useAppDispatch, useAppSelector } from '../../store/modules/types-hooks';

import { CharacterContainer, Container, InfosContainer, Text } from "./styles";

import { Loading } from '../../components/Loading/Loading'

type Comic = {
  image: string;
  title: string;
  stories: { available: number };
  variants: { length: number };
  pageCOUNT: number;
};

export const Comics = () => {
  // const [comicsData, setComicsData] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  // const [loadingButton, setLoadingButton] = useState(false);

    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(getAll());
      setLoading(false)
  }, []);

  const comicsRedux = useAppSelector(selectAll);

  return (
    <>
      {/* <Navbar search/> */}
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          comicsRedux.map((comic: any, index: number): any => (
            <div key={comic.id}>
                <CharacterContainer
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                >
                  <Text>{comic.title}</Text>
                  <InfosContainer>
                    <p>
                      Histórias:{" "}
                      {comic.stories.available === 0
                        ? "confidencial"
                        : comic.stories.available}
                    </p>
                    <p>
                      Variantes:{" "}
                      {comic.variants.length === 0
                        ? "confidencial"
                        : comic.variants.length}
                    </p>
                    <p>
                      Quantidade de Páginas:{" "}
                      {comic.pageCount === 0 ? "confidencial" : comic.pageCount}
                    </p>
                  </InfosContainer>
                </CharacterContainer>
            </div>
          ))
        )}
      </Container>
      <Footer />
    </>
  );
};