import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from '../single-user/single-user.component';
import { User, Users } from '../types';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SingleUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:Users={
    total_count:0,
    incomplete_results:true,
    items:[],
  }
  page:number=1
   user:string=''
  constructor(private usersServices:UsersService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
       this.user = params['user'];
      this.loadUsers(this.user);
    });
}
loadUsers(user:string){
  this.usersServices.getUsers(`https://api.github.com/search/users?q=${user}&page=${this.page}&per_page=52`).subscribe((users)=>{
        this.users=users;
       })
}
handlePrev(){
  if (this.page > 1) {
    this.page--;
    this.loadUsers(this.user);
  }
}
handleNext(){
  this.page++;
  this.loadUsers(this.user);
}
}