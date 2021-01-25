import { tags } from "../interface/tags";
import { observable, makeObservable, action } from "mobx";

class tagsStore {
  constructor() {
    makeObservable(this);
  }
  @observable tag: tags[] = [];
  @observable tagLength: boolean = false;

  @action getTags = (tags: any) => {
    tags.map((tag: any) => {
      this.tag.push(tag);
    });
    if (this.tag.length > 0) {
      this.tagLength = true;
    }
    if (!tags.length) {
      this.tagLength = false;
    }

    console.log("===>", this.tag);
  };
}

export const TagsStore = new tagsStore();
