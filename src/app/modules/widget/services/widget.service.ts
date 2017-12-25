import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {
  private _user: any
  private _workshops: Array<any>

  constructor() {
    //Placeholders 

    this._user = {
      firstName: "John",
      lastName: "Doe"
    }

    this._workshops = [
      {
        title: "Podstawy NodeJS #1",
        author: "Filip Rakowski",
        date: "2018-01-12",
        duration: "90"
      },
      {
        title: "Podstawy NodeJS #2",
        author: "Filip Rakowski",
        date: "2018-01-18",
        duration: "60"
      }
    ]

   }

   get user (): any {
     return this._user
   }

   get workshops (): Array<any> {
     return this._workshops
   }

}
