import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Params } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient:HttpClient
  ) { }
  getUsersApi<T>(url:string):Observable<T>{
    return this.httpClient.get<T>(url) as Observable<T>;
  }
  getSingleUserApi<T>(url:string):Observable<T>{
    return this.httpClient.get<T>(url) as Observable<T>;
  }
  getUserRepos<T>(url:string):Observable<T>{
    return this.httpClient.get<T>(url) as Observable<T>;
  }
}
