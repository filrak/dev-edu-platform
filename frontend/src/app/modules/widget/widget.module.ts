import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopService } from '../workshop/services/workshop.service'

import { WorkshopComponent } from './components/workshop/workshop.component'
import { WorkshopsComponent } from './components/workshops/workshops.component'
import { LinksComponent } from './components/links/links.component'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WorkshopService
  ],
  declarations: [
    WorkshopComponent,
    WorkshopsComponent,
    LinksComponent
  ],
  exports: [
    WorkshopsComponent,
    LinksComponent
  ]
})
export class WidgetModule { }
