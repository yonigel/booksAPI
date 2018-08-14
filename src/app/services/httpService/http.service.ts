import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { HttpClient } from '@angular/common/http';
import { HttpServiceInterface } from './http-service-interface';
import { Observable } from 'rxjs';
import { Logger } from '../../logger/logger';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements BaseService, HttpServiceInterface{

  private logger: Logger;
  
  constructor(private httpClient: HttpClient) {
    this.logger = new Logger("HttpService");
    this.logger.log(`initiating http service`);
   }

  getHttpRequest(url: string): Observable<any> {
    this.logger.log(`sending GET request to URL: ${url}`);
    return this.httpClient.get(url);
  }
}
