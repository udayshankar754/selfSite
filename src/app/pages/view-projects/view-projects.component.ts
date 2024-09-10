import { Component } from '@angular/core';

@Component({
  selector: 'app-view-projects',
  standalone: true,
  imports: [],
  templateUrl: './view-projects.component.html',
  styleUrl: './view-projects.component.css'
})
export class ViewProjectsComponent {
  LoadMore() {
    console.log("Loading View Projects");
  }
}
