import {observable, makeObservable, action, makeAutoObservable} from "mobx";
import {auth} from "../interface/auth";



class authStore {
    constructor() {
        makeObservable(this);
    }
    @observable tokenArr = [{
        token: "",
        refresh: "",
    }];
    @observable auth: Boolean = false;

    @observable tokens: auth[] = [];

    @action isToken = () => {
        this.auth = true;
    }
}

export default new authStore();

