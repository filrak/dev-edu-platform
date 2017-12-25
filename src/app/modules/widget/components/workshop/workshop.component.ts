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
    this.workshops = widgetService.workshops;
  }


}
