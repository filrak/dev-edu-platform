import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private _url: string) {}

  //TODO: cache received data
  async getData ():Promise<string> {
    let res = await fetch(this._url)
    let data = await res.json()
    return data
  }

}
