import { WidgetService } from './../../services/widget.service';
import { Component } from '@angular/core';

@Component({
  selector: 'widget-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {
  workshops: Array<any>;

  constructor(private widgetService: WidgetService) { 
    //Temporary workaround for async calls
    widgetService.fetchData().then(
      (res) =>  {
        this.workshops = res.workshops
      }
    )
  }

}
