import { brief } from "../interface/brief";
import { observable, makeObservable, action } from "mobx";
import Axios from "axios";

class briefStore {
    constructor() {
        makeObservable(this);
    }

    @observable briefs: brief[] = [];
    @observable currentBrief: brief = null;
    @observable createBrief: brief[] = [];

    @action addBrief = ({id,name}) => {
        this.createBrief.push({id,name})
        this.getBriefs();
    }

    @action removeBrief = async(briefId) => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.delete(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/briefs/?id=${briefId}`, {headers: {Authorization: `Bearer ${token}`}});
            this.briefs = this.briefs.filter(brief => briefId !== brief.id);
        } catch (error) {
            console.log(error)
        }
    }

    @action briefLink = (id) => {
        const el = document.createElement('textarea');
        el.value = `http://localhost:3000/briefs/${id}`;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    @action getBriefs = async() => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.get(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/briefs`, {headers: {Authorization: `Bearer ${token}`}}
            );
            this.briefs.length = 0;
            response.data.map(d => this.briefs.push(d));
        } catch (error) {
            console.log(error)
        }
    }

    @action getBrief = async(id) => {
        if(id){
            const token = window.localStorage.getItem("token");
            const response = await Axios.get(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/briefs/${id}`, {headers: {Authorization: `Bearer ${token}`}}
            );
            this.currentBrief = response.data;
        }
    }
}

export const BriefStore = new briefStore();