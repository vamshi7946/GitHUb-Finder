import { Component, Input } from '@angular/core';
import './single-user.component.css'
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-user',
  standalone: true,
  imports: [],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent {
  @Input() user:any; 
  constructor(private router:Router){}
  visitProfile(url:string){
    this.router.navigate([`user/${this.user.login}`]);
  }
}
