import {ICard} from "./cards";

export interface brief {
    id: number;
    name: string;
    cards?:Array<ICard>
}
