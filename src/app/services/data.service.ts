import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { ProductDetailItem } from '../models/product-detail.iterface';
import { Item, SearchResult } from '../models/searchResult.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://api.mercadolibre.com/sites/MLA';
  constructor(private http: HttpClient) {}

  getItems = async (query: any): Promise<any> => {
    return this.http
      .get<any>(`${this.baseUrl}/search?q=${query}`)
      .pipe(
        map((res: any) => {
          return this.createItems(res);
        })
      )
      .toPromise();
  };

  createItems(itemsResponse: { results: Item[] }) {
    const maxItemsNumber = 4;
    return itemsResponse.results.slice(0, maxItemsNumber).map((item: Item) => {
      const { id, title, price, thumbnail, condition, free_shipping } = item;
      return {
        id,
        title,
        price: {
          amount: price
        },
        thumbnail: thumbnail,
        condition,
        freeShipping: free_shipping
      };
    });
  }
}
