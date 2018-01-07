import { Component } from '@angular/core';

@Component({
  selector: 'widget-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent{
  links: Array<any>
  editMode = false;

  constructor() { 
  this.links = [
      {
        title: 'Getting Started With Parcel',
        url: 'https://medium.com/codingthesmartway-com-blog/getting-started-with-parcel-197eb85a2c8c',
        description: 'Fajny artykuł pokazujacy zero-config build tool',
        tags: ['frontend']
      },
      {
        title: 'Templating in Vue: Separation of Concerns or Separation of Technology or something else?',
        url: 'https://medium.com/@s.molinari/templating-separation-of-concerns-or-separation-of-technology-or-something-else-123a3d41f0b4',
        description: '',
        tags: ['frontend', 'vue']
      }
    ]

  }
}
