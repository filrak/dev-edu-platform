import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isHomepage: Boolean

  constructor(private router: Router) { 
    // Workaround for bug with '/' path always active in Angular Router
    router.events.subscribe(() => this.router.url === '/' ? this.isHomepage = true : this.isHomepage = false);
  }

}
