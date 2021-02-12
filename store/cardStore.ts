import { cards } from "../interface/cards";
import { whiteCards } from "../interface/whiteCards";
import { observable, makeObservable, action } from "mobx";
import Axios from "axios";

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

  @observable cardsArray: cards[] = [];

  @observable card: cards[] = [];

  @observable whiteCards: whiteCards[] = [];

  @action createCard = (value) => {
    this.card.push({title:value.title, description: value.description});
  };

  @action addCard = (card) => {
    this.cardsArray.length = 0;
    this.whiteCards.push(card)
  }

  @action cardsData = async (tags) => {
    const token = window.localStorage.getItem("token");
    try {
      const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/cards/get`,{tags:tags.map(tag=>tag.id)}, {headers: {
          Authorization: `Bearer ${token}`
        }});
      this.cardsArray.length = 0;
      response.data.map(card => this.cardsArray.push(card));
    } catch (error) {
      console.log(error);
    }
  }
}


export const CardStore = new cardStore();
