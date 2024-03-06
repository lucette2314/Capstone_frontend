import { Ifoodcategory } from "./ifoodcategory";

export interface Ifood {
    id: number,
    name: string,
    description: string,
    price: number,
    food_category_id: number,
    image: string,
    quantity: number;
    foodcategories?: Ifoodcategory; //  ? means this is an optional field
}
