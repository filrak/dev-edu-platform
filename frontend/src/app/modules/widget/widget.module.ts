import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';

import { WorkshopService } from '../workshop/services/workshop.service'

import { WorkshopComponent } from './components/workshop/workshop.component'
import { WorkshopsComponent } from './components/workshops/workshops.component'
import { LinkComponent } from './components/link/link.component'
import { LinksComponent } from './components/links/links.component'

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    WorkshopService
  ],
  declarations: [
    WorkshopComponent,  
    WorkshopsComponent,
    LinkComponent,
    LinksComponent
  ],
  exports: [
    WorkshopsComponent,
    LinksComponent
  ]
})
export class WidgetModule { }
