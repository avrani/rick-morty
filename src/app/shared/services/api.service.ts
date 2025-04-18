import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://rickandmortyapi.com/api/';
  private httpClient = inject(HttpClient);

  getCharacters(page: number, name: string, status: string): Observable<Response> {
    return this.httpClient.get<Response>(this.baseUrl + `character?page=${page}&name=${name}&status=${status}`);
  }

  getCharacterById(id: number) {
    return this.httpClient.get<Response>(this.baseUrl + 'character/' + id);
  }

  getEpisodes(page: number, name: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `episode?page=${page}&name=${name}`);
  }

}
