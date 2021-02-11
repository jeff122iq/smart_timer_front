import { tags } from "../interface/tags";
import { observable, makeObservable, action } from "mobx";
import Axios from "axios";

class tagsStore {
  constructor() {
    makeObservable(this);
  }
  @observable tag: Array<tags> = [];
  @observable selectedTags: Array<tags> = [];
  @observable tagLength: boolean = false;

  @action setSelectedTags = async (tags) =>{
    this.selectedTags = tags;
    if (!this.selectedTags.length) {
      this.tagLength = false;
    }else {
      this.tagLength = true;
    }
  }

  @action getTags = async() => {
    const token = window.localStorage.getItem("token");
    try {
      const response = await Axios.get("http://localhost:5000/tags/", {headers: {
          Authorization: `Bearer ${token}`
        }
      });
      this.tag.length = 0;
      response.data.map(d=> this.tag.push(d));
    } catch (error) {
      console.log(error);
    }
  };
}

export const TagsStore = new tagsStore();
