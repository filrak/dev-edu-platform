import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private _url?: string) {
    this._url = _url || 'http://localhost:3002'
  }

  //TODO: cache received data in Local Storage 
  async getData (queryParam?: string): Promise<string> {
    let res = queryParam ? await fetch(this._url + '/' + queryParam) : await fetch(this._url)
    let data = await res.json()
    return data
  }
  

}
