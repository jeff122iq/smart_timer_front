import { tags } from "../interface/tags";
import { observable, makeObservable, action } from "mobx";
import Axios from "axios";
import {instanceOf} from "prop-types";

class tagsStore {
  constructor() {
    makeObservable(this);
  }
  @observable tag: Array<tags> = [];
  @observable tagLength: boolean = false;

  @action getTags = async() => {
    const token = window.localStorage.getItem("token");
    console.log("THIS IS A TOKEN: ", token);
    try {
      const response = await Axios.get("http://localhost:5000/tags/", {headers: {
          Authorization: `Bearer ${token}`
        }
      });
      response.data.map(d=> this.tag.push(d));
    } catch (error) {
      console.log(error);
    }
    // tags.map((tag: any) => {
    //   this.tag.push(tag);
    // });
    if (this.tag.length > 0) {
      this.tagLength = true;
    }
    // if (!tags.length) {
    //   this.tagLength = false;
    // }

  };
}

export const TagsStore = new tagsStore();
