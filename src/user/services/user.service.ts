import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _firstName: string
  private _lastName: string
  private _points: number

  constructor() {
    this._firstName = "John";
    this._lastName = "Doe"
    this._points = 30
   }

  get firstName(): string {
    return this._firstName
  }

  get lastName(): string {
    return this._lastName
  }

  get points(): number {
    return this._points
  }
}
