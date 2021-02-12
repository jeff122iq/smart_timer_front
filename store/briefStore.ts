import { brief } from "../interface/brief";
import { observable, makeObservable, action } from "mobx";
import Axios from "axios";


class briefStore {
    constructor() {
        makeObservable(this);
    }

    @observable briefs: brief[] = [];

    @observable createBrief: brief[] = [];

    @action addBrief = ({id,name}) => {
        this.createBrief.push({id,name})
        this.getBrief();
    }

    @action getBrief = async() => {
        const token = window.localStorage.getItem("token");
        const response = await Axios.get(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/briefs`, {headers: {Authorization: `Bearer ${token}`}}
        );
        this.briefs.length = 0;
        response.data.map(d=> this.briefs.push(d));
    }
}

export const BriefStore = new briefStore();