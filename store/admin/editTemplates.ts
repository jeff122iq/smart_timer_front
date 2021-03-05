import { observable, makeObservable, action } from "mobx";
import { brief } from "../../interface/brief"
import Axios from "axios";

class editTemplates {
    constructor() {
        makeObservable(this)
    }
    //======================== OBSERVABLES ===================================
    @observable template: brief[] = [];
    @observable currentTemplate = null;
    //======================== OBSERVABLES ===================================

    //======================== TEMPLATES ===================================
    @action getTemplate = async(id) => {
        const token = window.localStorage.getItem("token");
        if (id) {
            try {
                const response = await Axios.get(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/templates/${id}`, {headers: { Authorization: `Bearer ${token}`}});
                this.currentTemplate = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }

    @action getTemplates = async() => {
        const token = window.localStorage.getItem("token");
        try {
            const response = await Axios.get(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/templates`, {headers: { Authorization: `Bearer ${token}`}});
            this.template.length = 0;
            response.data.map(data => this.template.push(data))
        } catch (error) {
            console.log(error)
        }
    }

    @action deleteTemplate = async(templateId) => {
        console.log(templateId)
        const token = window.localStorage.getItem("token");
        try {
            const response = Axios.delete(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/templates/${templateId}`, {headers: {Authorization: `Bearer ${token}`}});
            this.template = this.template.filter(template => templateId !== template.id )
        } catch (error) {
            console.log(error)
        }

    }
    //======================== TEMPLATES ===================================

}

export const EditTemplates = new editTemplates();