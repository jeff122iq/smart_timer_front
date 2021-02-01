import { observable, makeObservable, action } from "mobx";

class currentPage {
  constructor() {
    makeObservable(this);
  }

  @observable currentPage: string = "";

  @action setCurrentPage = (value) => {
    this.currentPage = value;
  };
}

export const CurrentPage = new currentPage();
