import { Category } from './category.interface';
import { Price } from './price.interface';

export interface SearchResult {
  categories: Category[];
  items: Item[];
}

export interface Item {
  id: string;
  seller_id: string | number;
  author: {
    name: string;
    lastname: string;
  };
  title: string;
  price: Price;
  thumbnail: string;
  condition: string;
  free_shipping: boolean;
  address: {
    state: string;
  };
}
