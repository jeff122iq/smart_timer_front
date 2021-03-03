import { observable, makeObservable, action } from "mobx";
import {category} from "../../interface/category";
import {tags} from "../../interface/tags";
import {ICard} from "../../interface/cards";
import Axios from "axios";
import { v4 } from 'uuid'


class editTagAndCategories {
    constructor() {
        makeObservable(this);
    }
    //======================== OBSERVABLES ===================================
    @observable categories: category[] = [];
    @observable categoryCurrent: category = null;
    @observable tagCurrent: tags = null;
    @observable tags: tags[] = [];
    @observable cards: ICard[] = [];
    @observable isMainField: ICard[] = [];
    @observable isSecondaryField: ICard[] = [];
    //======================== OBSERVABLES ===================================

    //======================== CATEGORY ===================================
    @action deleteCategory = async(categoryId) => {
        try {
            console.log(categoryId)
            const token = window.localStorage.getItem("token");
            await Axios.delete(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/categories/?id=${categoryId}`, {headers: {Authorization: `Bearer ${token}`}});
            this.categories = this.categories.filter(category => categoryId !== category.id);
        } catch (error) {
            console.log(error);
        }
    }

    @action setCurrentCategory = async (category) => {
        this.categoryCurrent = category;
    }

    @action createCategory = async (name) => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/categories`, { name },{headers: {Authorization: `Bearer ${token}`}});
            this.categories.push(response.data);
        } catch(error) {
            console.log(error)
        }
    }

    @action getCategories = async () => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.get(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/categories`, {headers: {Authorization: `Bearer ${token}`}});
            this.categories.length = 0;
            response.data.map((category: any) => {
                this.categories.push(category)
            });
            console.log(this.categories);
        } catch(error) {
            console.log()
        }
    }
    //======================== CATEGORY ===================================

    //======================== TAGS ===================================
    @action setCurrentTag = async (tag) => {
        this.tagCurrent = tag;
    }

    @action createCategoryTag = async (name) => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/categories-tags`, { category: this.categoryCurrent.id, tag: { name } },{headers: {Authorization: `Bearer ${token}`}});
            console.log("DATA BEFORE PUSH", response.data);
            this.tags.push({name, id:response.data});
            console.log("DATA AFTER PUSH", this.tags);
        } catch(error) {
            console.log(error)
        }
    }

    @action getCategoriesTags = async(categoryId) => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.get(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/tags/${categoryId}`, {headers: {Authorization: `Bearer ${token}`}});
            this.tags.length = 0;
            response.data.map((tag: any) => {
                this.tags.push(tag)
            });
        } catch (error) {
            console.log(error)
        }
    }

    @action deleteCategoryTag = async (tagId) => {
        try {
            console.log(tagId);
            const token = window.localStorage.getItem("token");
            await Axios.delete(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/tags/?id=${tagId}`, {headers: {Authorization: `Bearer ${token}`}});
            this.tags = this.tags.filter(tag => tagId !== tag.id);
        } catch(error) {
            console.log(error);
        }

    }
    //======================== TAGS ===================================

    //======================== CARDS ===================================
    @action getTagCard = async (tagId) => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/cards/get`, {tags: [tagId]},{headers: {Authorization: `Bearer ${token}`}});
            this.isMainField.length = 0;
            this.isSecondaryField.length = 0;
            response.data.map((card) => {
                if (card.isMainField) {
                    this.isMainField.push(card)
                } else {
                    this.isSecondaryField.push(card)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    @action createMainFieldCards = async(title, description) => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/cards-tags`, {tag: this.tagCurrent.id, card: {title, description, isMainField: true}}, {headers: {Authorization: `Bearer ${token}`}});
            this.isMainField.push(response.data)
        } catch(error) {
            console.log(error);
        }
    }

    @action createSecondaryFieldCards = async(newCard) => {
        try {
            const token = window.localStorage.getItem("token");
            const response = await Axios.post(`http://${process.env.BACK_URL}:${process.env.BACK_PORT}/cards-tags`, {tag: this.tagCurrent.id, card: {title: newCard.title, description: JSON.stringify(newCard.description), isMainField: false}}, {headers: {Authorization: `Bearer ${token}`}});
            this.isSecondaryField.push(response.data)
        } catch(error) {
            console.log(error);
        }
    }
    //======================== CARDS ===================================
}

export const EditTagAndCategories = new editTagAndCategories();