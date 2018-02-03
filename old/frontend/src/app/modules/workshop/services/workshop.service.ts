import { Injectable } from '@angular/core';
import { DataService } from './../../../services/data.service';

@Injectable()
export class WorkshopService extends DataService {

  constructor() {
    super('workshop');
  }
}
  
