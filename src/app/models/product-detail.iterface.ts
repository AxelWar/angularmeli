import { Price } from './price.interface';
import { Category } from './category.interface';

export interface ProductDetailItem {
  author: {
    name: string;
    lastname: string;
  };
  categories: Category[];
  item: {
    id: string;
    seller_id: string;
    title: string;
    price: Price;
    thumbnail: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    permalink: string;
  };
}
