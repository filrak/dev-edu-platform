import { Component, OnInit } from '@angular/core';
import { WorkshopService } from './../../../workshop/services/workshop.service';

@Component({
  selector: 'widget-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {
  workshops: Array<any>

  constructor(private workshopService: WorkshopService) { }

  ngOnInit () {
    this.workshopService.getData().then( 
      (data: any) => this.workshops = data
    )
  }

}
