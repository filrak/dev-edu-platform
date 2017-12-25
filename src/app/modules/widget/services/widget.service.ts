import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {
  private _user: any
  private _points: number
  
  constructor() {
    //Placeholders 
    this._user = {
      firstName: "John",
      lastName: "Doe"
    }
    this._points = 30
   }

   get user (): any {
     return this._user
   }

   get points (): number {
     return this._points
   }
}
