import { Injectable } from '@angular/core';
import { DataService } from './../../../services/data.service';

@Injectable()
export class WidgetService extends DataService {

  constructor() {
    super('http://localhost:3002/dashboard');
  }
}
  
