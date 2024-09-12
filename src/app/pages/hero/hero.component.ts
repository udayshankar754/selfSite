import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewComponent } from '../review/review.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    RouterLink,
    ReviewComponent,
    ProjectsComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
