import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service'
import { HeaderWidgetComponent } from './components/header-widget/header-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderWidgetComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    HeaderWidgetComponent
  ]
})
export class UserModule { }
