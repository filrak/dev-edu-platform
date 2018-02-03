import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http'

@Injectable()
export class DataService {
  private _url = 'http://localhost:3002'
  //to-do: think about something with TS

  constructor(private _endpoint?: string) {
    this._url =  this._endpoint ? this._url + '/' + this._endpoint : this._url
  }

  toUrlParams(obj): string {
    const params = new URLSearchParams()
    for (let key in obj) { params.set(key, obj[key]) }
    return params.toString()
  }

  //TODO: cache received data in Local Storage 
  async getData (params?: any): Promise<any> {
    let res = params ? await fetch(this._url + '?' + this.toUrlParams(params)) : await fetch(this._url)
    let data = await res.json()
    return data
  }

  async putData (data: any): Promise<any> {
    //TODO: PUT operations for data
  }

  async postData (data: any): Promise<any> {
    //TOTO: POST operations for data
  }

}
