import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input('link') link: any;
  
  constructor() { }

}
