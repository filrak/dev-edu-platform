import { WidgetService } from './../../services/widget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit{
  workshops: Array<any>;

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.widgetService.getData().then( 
      (data: any) => this.workshops = data.workshops 
    )
  }

}
