import { cards } from "../interface/cards";
import { observable, makeObservable, action } from "mobx";

class cardStore {
  constructor() {
    makeObservable(this);
  }

  @observable cardsArray: [] = [];

  @observable card: cards = {
    title: "",
    text: "",
  };

  @action createCard = (value) => {
    this.card.title = value.title;
    this.card.text = value.text;
    // this.cardsArray.push();
    console.log("CARD STORE", this.card);
  };
}

export const CardStore = new cardStore();
