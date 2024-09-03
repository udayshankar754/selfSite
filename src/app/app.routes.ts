import { Routes } from '@angular/router';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path : '' , component : PageLayoutComponent , children : [
    { path : 'home' , component : HomeComponent}
  ]},
];
