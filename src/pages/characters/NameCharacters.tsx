import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { selectById } from '../../store/modules/characters/charactersSlice';
import {
  ContainerCharacterId,
  ContainerCharacters,
  ContainerData,
  ContainerImage,
  ContainerTitle,
  ContainerInfo,
} from './styles';
import { useAppSelector } from '../../store/modules/types-hooks';
import { Loading } from '../../components/Loading/Loading';

export const NameCharacters: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const url = window.location.href.split('/');
  // const urlSearch = url[4].split('=');

  useEffect(() => {
    const urlSearch = url[4].split('=');
    setId(urlSearch[1]);
    setLoading(false);
  }, []);

  const characterReduxId = useAppSelector((state: any) =>
    selectById(state, id)
  );

  let data: string[] = [];
  let data2: string[] = [];
  if (characterReduxId) {
    // const urls: string[] | undefined = characterReduxId?.urls;
    data = characterReduxId?.modified.split('-');
    data2 = data[2].split('T');
  }

  return (
    <>
      <Navbar search={false} />
      <ContainerCharacters>
        {loading ?? <Loading type="spinningBubbles" color="black" />}
        {characterReduxId ? (
          <>
            <ContainerTitle>
              <h1>{characterReduxId.name}</h1>
            </ContainerTitle>
            <ContainerData>
              <ContainerImage>
                <ContainerCharacterId
                  image={`${characterReduxId.thumbnail.path}.${characterReduxId.thumbnail.extension}`}
                >
                  {/* <Text>{characterReduxId.name}</Text> */}
                </ContainerCharacterId>
              </ContainerImage>
              <ContainerInfo>
                <h3>Descrição do personagem:</h3>
                <h3>
                  {characterReduxId.description
                    ? `   ${characterReduxId.description}`
                    : `   Infelizmente este personagem não possui descrição.`}
                </h3>
                <h3> Última data de atualização do personagem: </h3> 
                <h3>{data2[0]}/{data[1]}/{data[0]}</h3>
                {/* <h2>{characterReduxId.urls.toString()}</h2> */}
              </ContainerInfo>
            </ContainerData>
          </>
        ) : (
          <h1>Este personagem não foi encontrado.</h1>
        )}
      </ContainerCharacters>
      <Footer />
    </>
  );
};
