import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { Router, RouterOutlet } from '@angular/router';
import { EnvironmentService } from '../environment.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  searchForm: FormGroup;
  isLocal:boolean=true;

  constructor(private router:Router, private envService:EnvironmentService) {
    this.searchForm=new FormGroup({
      user:new FormControl("")
    })
  }
  ngOnInit(): void {
    this.isLocal=this.envService.isLocalEnvironment();
  }

  submitForm() {
    const searchValue = this.searchForm.value.user;
    this.router.navigate(['search'], { queryParams: { user: searchValue } })
  }
}
