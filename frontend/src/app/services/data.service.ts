import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private _url: string) {}

  //TODO: cache received data in Local Storage 
  async getData (queryParam?: string): Promise<string> {
    let res = queryParam ? await fetch(this._url) : await fetch(this._url + queryParam)
    let data = await res.json()
    return data
  }
  

}
