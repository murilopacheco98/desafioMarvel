import Series from "../img/Series.png";
import Characters from "../img/Characters.png";
import Comics from "../img/Comics.png";
import Creators from "../img/Creators.png";
import Events from "../img/Events.png";
import Stories from "../img/Stories.png";

type CardsOptionsProps = {
  image: string;
  title: string;
  color: string;
  link: string;
};

export const CardsOptions: CardsOptionsProps[] = [
  {
    image: Characters,
    title: "Personagens",
    color: "rgba(90, 180, 7, 0.7)",
    link: "/characters/page=1",
  },
  {
    image: Stories,
    title: "Histórias",
    color: "rgba(236, 29, 36, 0.7)",
    link: "/stories/page=1",
  },
  {
    image: Creators,
    title: "Criadores",
    color: "rgba(1, 106, 251, 0.7)",
    link: "/creators/page=1",
  },
  {
    image: Comics,
    title: "Quadrinhos",
    color: "rgba(255, 255, 0, 0.7)",
    link: "/comics/page=1",
  },
  {
    image: Events,
    title: "Eventos",
    color: "rgba(253, 122, 34, 0.7)",
    link: "/events/page=1",
  },
  {
    image: Series,
    title: "Séries",
    color: "rgba(255, 255, 255, 0.7)",
    link: "/series/page=1",
  },
];
