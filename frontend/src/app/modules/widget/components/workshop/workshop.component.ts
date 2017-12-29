import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent{
  @Input() workshop: any

  constructor() { }
}
