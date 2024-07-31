import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { ReposComponent } from '../repos/repos.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ReposComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  users:any;
  repos:any;
  constructor(private usersService:UsersService,private route:ActivatedRoute){}
  ngOnInit() {
    let lastSegment:string | null
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
         lastSegment = segments[segments.length - 1].path;
      }
      this.usersService.getUserDetails(`https://api.github.com/users/${lastSegment}`).subscribe((users)=>{
        this.users=users;
        this.usersService.getRepos(`https://api.github.com/users/${users.login}/repos`).subscribe((repos)=>{
          this.repos=repos;
        })
      })
    });
  }

}
