import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getItems = async (): Promise<any> => {
      return this.http.get<any>('https://api.mercadolibre.com/sites/MLA/search?q=:detergente').pipe(map((response)=>{
        return response.body as any;
      })).toPromise();
    }
/*   export const searchItems = ({
    search,
    category
  }: SearchQueriesParameters): Promise<Response> => {
    let query: string = '';

    if (search) {
      query = `?q=${search}`;
    } else if (category) {
      query = `?category=${category}`;
    }
    return fetch(`${BASE_URL}/items${query}`);
  }; */
}


