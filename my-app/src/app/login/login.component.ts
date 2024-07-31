import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup
  constructor(private router:Router){
    this.loginForm=new FormGroup({
      email:new FormControl(""),
      password:new FormControl(""),
    })
  }
handleLogin(){
  const storedEmail=localStorage.getItem("email")
  const storedPassword=localStorage.getItem('password');
  const email=this.loginForm.value.email
  const password=this.loginForm.value.password
  if(storedEmail===email && storedPassword===password)
  {
      this.router.navigate([''])
  }
  else{
    alert("Incorrect email or password please try again!")
  }
}
}
