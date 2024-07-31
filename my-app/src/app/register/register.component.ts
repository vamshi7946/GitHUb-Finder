import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { sendWelcomeEmail } from '../services/mailing.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
  constructor(private router:Router){
    this.registerForm=new FormGroup({
      username:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
    });
  }
handleRegister(){
  const username=this.registerForm.value.username
  const email=this.registerForm.value.email;
  const password=this.registerForm.value.password;
  localStorage.setItem("email",email)
  localStorage.setItem("password",password)
  alert("Redirecting to login page..")
  // sendWelcomeEmail(email,username)
  this.router.navigate(['/login'])
}
}
