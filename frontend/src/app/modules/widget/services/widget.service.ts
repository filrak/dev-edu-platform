import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {
  private _user: any
  private _workshops: Array<any>

  constructor() {}

   async fetchData() {
      let res = await fetch('http://localhost:3001/dashboard')
      let data = await res.json()
      return data
    }

   get user (): any {
      return this._user
   }

   get workshops (): Array<any> {
      return this._workshops
   }

}
