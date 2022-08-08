import React, { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAll, selectAll } from '../../store/modules/comics/comicsSlice'
import { useAppDispatch, useAppSelector } from '../../store/modules/types-hooks';

import { CharacterContainer, Container, InfosContainer, Text } from "./styles";

import { Loading } from '../../components/Loading/Loading'
import { Button } from "../../components/ButtonMore/styles";

const Fade = require('react-reveal/Fade')

type Comic = {
  image: string;
  title: string;
  stories: { available: number };
  variants: { length: number };
  pageCOUNT: number;
};

export const Comics = () => {
  const [comicsData, setComicsData] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.title = "Marvel: Quadrinhos";
  //   getComics();
  // }, []);

    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(getAll());
      setLoading(false)
  }, []);

  const comicsRedux = useAppSelector(selectAll);


  // const moreOptions = useCallback(async () => {
  //   try {
  //     setLoadingButton(true);
  //     const offset = comicsData.length;
  //     const response = await axios.get(route2, {
  //       params: {
  //         offset,
  //       },
  //     });

  //     setComicsData([...comicsData, ...response.data.data.results]);
  //     setLoadingButton(false);
  //   } catch (err) {
  //     console.log("erro", err);
  //   }
  // }, [comicsData]);

  return (
    <>
      <Navbar />
      <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          comicsRedux.map((comic: any, index: number): any => (
            <Fade left key={comic.id}>
              {/* <Tilt options={{ max: 8, speed: 800, scale: 1.01 }}> */}
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
              {/* </Tilt> */}
            </Fade>
          ))
        )}
        {loading ? (
          ""
        ) : (
          // onClick={moreOptions}
          <Button >
            {loadingButton ? (
              <Loading
                type="spinningBubbles"
                color="white"
                width={30}
                height={30}
              />
            ) : (
              "Ver Mais"
            )}
          </Button>
        )}
      </Container>
      <Footer />
    </>
  );
};