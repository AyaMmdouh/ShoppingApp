import { Language } from "./Language.model";

export interface BasicData{
    id?:number,
    name?:string,
    desc?:string,
    language?:Language;
}