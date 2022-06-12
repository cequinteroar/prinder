import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataMachineService {
  protected _data: any = {};

  constructor(private http: HttpClient) {}

  private handleError(error: string) {
    console.log("Error while fetching data: ", error);
    return throwError(() => new Error("Error while fetching data: "+error))
  }

  search(): Observable<any> {
    let apiURL =
      'https://amperoid.tenants.foodji.io/machines/bce7febc-e50b-4211-bda9-6ac51ad34be6';
    const source$: Observable<any> = this.http.get(apiURL);
    return source$.pipe(
      map((data) => data.data.machineProducts),
      catchError(this.handleError)
      );    
  }
}
