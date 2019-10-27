import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = 'http://localhost:12000/client';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url);
  }

  searchByEmail(email: string): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url + '/search-by-email/' + email);
  }
}
