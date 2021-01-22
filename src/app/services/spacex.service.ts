import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  hostUrl;
  baseUrl;
  readonly endpoint = '/v3';
  constructor(private http: HttpClient) { 
    this.hostUrl= environment.hostUrl;
    this.baseUrl= environment.baseUrl;
  }

  getAll(){
    return this.http.get(`${this.endpoint}/launches?limit=100`);
  }
}
