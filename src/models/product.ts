import { attribute } from "./attribute";
import { category } from "./category";
import { image } from "./image";

export interface product {
    id: string,
    name: string,
    manufacturer: string,
    shortDescription: string,
    description: string,
    priority: number,
    price: number,
    mustVendFirst: boolean,
    produceTime: number,
    attributes: attribute[],
    isDigital: boolean,
    category: category,
    imageSet: image[]

}