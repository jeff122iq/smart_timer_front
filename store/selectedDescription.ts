import { observable, makeObservable, action } from "mobx";

class selectedDescription {
    constructor() {
        makeObservable(this)
    }

    @observable fullCard = [];

    @action saveSelectedCard = (card) => {
        this.fullCard.push(card)
        console.log("STORE",card)
    }
}

export const SelectedDescription = new selectedDescription();