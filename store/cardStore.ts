import { ICard } from "../interface/cards";
import { whiteCards } from "../interface/whiteCards";
import { observable, makeObservable, action } from "mobx";
import Axios from "axios";
import { v4 } from 'uuid'

 const cardsArr = [
  {
    title: "",
    description: ``,
  },
];

class cardStore {
  constructor() {
    makeObservable(this);
  }

  @observable cardsArray: ICard[] = [];

  @observable card: ICard = null;

  @observable whiteCards: ICard[] = [];

  @action createCard = (card: { title: any; description: any; }) => {
    this.card = {title: card.title, description: card.description, id: v4()};
  };

  @action addCard = (card: ICard) => {
    this.whiteCards.push(card);
  }
  @action selectCard = (card: ICard) => {
    this.whiteCards.push(card);
  } 

  @action cardsData = async (tags: any[]) => {
    const token = window.localStorage.getItem("token");
    try {
      const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/cards/get`,{tags:tags.map((tag: { id: any; })=>tag.id)}, {headers: {
          Authorization: `Bearer ${token}`
        }});
      this.cardsArray.length = 0;
      response.data.map((card: ICard) => this.cardsArray.push(card));
      console.log('response', response)
    } catch (error) {
      console.log(error);
    }
  }
}


export const CardStore = new cardStore();
