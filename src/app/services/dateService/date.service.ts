import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { DateServiceInterface } from './date-service-interface';

@Injectable({
  providedIn: 'root'
})
export class DateService implements BaseService, DateServiceInterface{


  constructor() { }

  fixMonth(month: number): number {
    return month ++;
  }
}
