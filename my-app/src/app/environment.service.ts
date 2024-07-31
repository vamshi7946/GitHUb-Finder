import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }
  isLocalEnvironment():boolean{
    return window.location.hostname==='localhost' || window.location.hostname==="127.0.0.1";
  }
}
