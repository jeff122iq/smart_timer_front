import { cards } from "../interface/cards";
import { observable, makeObservable, action } from "mobx";
import {useEffect} from "react";
import Axios from "axios";
const cardsArr = [
  {
    title: "",
    description:
      "",
  },
];
class cardStore {
  constructor() {
    makeObservable(this);
  }

  @observable cardsArray: cards[] = [];

  @observable card: cards = {
    title: "Title",
    description: `Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an... unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic
    typesetting...essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like... Aldus
    PageMaker including versions of Lorem Ipsum....`,
  };
  @action createCard = (value) => {
    this.card.title = value.title;
    this.card.description = value.text;
    // this.cardsArray.push();
  };

  @action switchCard = () => {
    cardsArr.forEach((el: cards) => {
      this.cardsArray.push(el);
    });
  };

  @action cardsData = async () => {
    const token = window.localStorage.getItem("token");
    console.log("THIS IS A TOKEN: ", token);
    try {
      const response = await Axios.post("http://localhost:5000/cards/get",{tags:[]}, {headers: {
          Authorization: `Bearer ${token}`
        }});
      console.log("RESPONSE", response.data);
      this.cardsArray.push(response.data)
      console.log("STORE", this.cardsArray);
    } catch (error) {
      console.log(error);
    }
  }
}


export const CardStore = new cardStore();
