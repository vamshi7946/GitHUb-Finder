import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
}
}
