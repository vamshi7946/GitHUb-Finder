import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RepositoryDetails } from '../types';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [ReposComponent,CommonModule],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent {
  @Input() repo:any;

}
