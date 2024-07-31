import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Pagination, UserDetails, Users } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService:ApiService) { }
  getUsers = (url:string):Observable<Users>=>{
    return this.apiService.getUsersApi(url);
  }
  getUserDetails = (url:string):Observable<UserDetails>=>{
    return this.apiService.getSingleUserApi(url);
  }
  getRepos = (url:string):Observable<UserDetails>=>{
    return this.apiService.getUserRepos(url);
  }
}
