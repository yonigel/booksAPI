import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { HttpClient } from '@angular/common/http';
import { HttpServiceInterface } from './http-service-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements BaseService, HttpServiceInterface{

  getHttpRequest(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  constructor(private httpClient: HttpClient) { }


}
