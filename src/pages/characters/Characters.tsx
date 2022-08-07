import React, { useCallback, useEffect, useState } from "react";
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from "../../components/Navbar/Navbar";
import  { getAll, selectAll, addMany } from "../../store/modules/characters/charactersSlice"
import { CharacterContainer, Container, InfosContainer, Text } from "./styles";
import { useAppDispatch, useAppSelector } from '../../store/modules/types-hooks';
import { Loading } from '../../components/Loading/Loading'
import { Button } from "../../components/ButtonMore/styles";
import { marvel } from "../../services";
// import axios from 'axios'

const Fade = require('react-reveal/Fade')

interface Character {
  id: string;
  image: string;
  name: string;
  series: { available: number };
  stories: { available: number };
  events: { available: number };
  comics: { available: number };
};

export const Characters = () => {
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAll());
    setLoading(false)
  }, []);

  const charactersRedux = useAppSelector(selectAll);

  // const moreOptions = useCallback(async () => {
  //   try {
  //     setLoadingButton(true);
  //     const offset = charactersRedux.length;
  //     const response = await marvel.get('/characters', 
  //     // { params: { offset, },
  //     // }
  // );
  //     const response2 = JSON.parse(response.data)
  //     console.log(response2.data.results)
  //     // setCharactersData([...charactersData, ...response2.data.results]);
  //     // dispatch()
  //     setLoadingButton(false);
  //   } catch (err) {
  //     console.log("erro", err);
  //   }
  // }, [charactersData]);

  return (
    <>
      <Navbar />
        <Container>
        {loading ? (
          <Loading type="spinningBubbles" color="black" />
        ) : (
          charactersRedux.map((character: any, index: number): any => (
            <Fade left key={character.id}>
                <CharacterContainer
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                >
                  <Text>{character.name}</Text>
                  <InfosContainer>
                    <p>
                      Séries:{" "}
                      {character.series.available === 0
                        ? "confidencial"
                        : character.series.available}
                    </p>
                    <p>
                      Histórias:{" "}
                      {character.stories.available === 0
                        ? "confidencial"
                        : character.stories.available}
                    </p>
                    <p>
                      Eventos:{" "}
                      {character.events.available === 0
                        ? "confidencial"
                        : character.events.available}
                    </p>
                    <p>
                      Quadrinhos:{" "}
                      {character.comics.available === 0
                        ? "confidencial"
                        : character.comics.available}
                    </p>
                  </InfosContainer>
                </CharacterContainer>
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
