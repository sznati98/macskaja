import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionlService {

  constructor() { }

  greet(){

    console.log('Hello from this humble service');
  }
}
