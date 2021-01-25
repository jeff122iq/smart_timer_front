import { cards } from "../interface/cards";
import { observable, makeObservable, action } from "mobx";

class cardStore {
  constructor() {
    makeObservable(this);
  }

  @observable card: cards = {
    title: "",
    text: "",
  };

  @action createCard = (info) => {
    this.card.title = info.title;
    this.card.text = info.text;
  };
}

export const CardStore = new cardStore();
