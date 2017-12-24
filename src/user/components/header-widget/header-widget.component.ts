import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'user-header-widget',
  templateUrl: './header-widget.component.html',
  styleUrls: ['./header-widget.component.scss']
})

export class HeaderWidgetComponent {
  firstName: string
  lastName: string
  points: number

  constructor(private UserService: UserService) { 
    // Placeholders
    this.firstName = this.UserService.firstName
    this.lastName = this.UserService.lastName
    this.points = this.UserService.points
  }


}
