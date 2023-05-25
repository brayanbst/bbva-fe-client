import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IGetItem } from './../http/get-item.interface'
import { catchError, map, tap } from "rxjs/operators";
import { IGetItems } from '../http/get-items-interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient, 
    ) {
  }
  getItems(filters: any) {
    const URL = `http://localhost:4100/reto/services/clients`;

   let params = new HttpParams()
   if(filters && filters.ip) {
    params = params.append('ip', filters.ip);
   }
   return this.http.get<any>(URL);
  }
  newItem(payload: any) {
    const URL = `http://localhost:4100/reto/services/clients`;

    return this.http.post<IGetItem<any>>(URL, payload).pipe(
      tap(e => e),
      map(e => e),
      catchError(this.handleError("New Client", []))
    )
  }

  editItem(payload: any, id: number) {
    const URL = `http://localhost:4100/reto/services/clients/${id}`;

    return this.http.put<IGetItem<any>>(URL, payload).pipe(
      tap(e => e),
      map(e => e),
      catchError(this.handleError("Edit Client", []))
    )
  }

  deleteItem(id: number) {
    const URL = `http://localhost:4100/reto/services/clients/${id}`;

    return this.http.delete<IGetItem<any>>(URL).pipe(
      tap(e => e),
      map(e => e),
      catchError(this.handleError("Delete Client", []))
    )
  }

  updateActive(id: any, payload: any) {
    const URL = `http://localhost:4100/reto/services/clients/${id}`;

    return this.http.put<IGetItem<any>>(URL, payload).pipe(
      tap(e => e),
      map(e => e.item),
      catchError(this.handleError("New Restriction", []))
    )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}