import { Routes } from '@angular/router';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesComponent } from './pages/services/services.component';
import { VisitUsComponent } from './pages/visit-us/visit-us.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { Page404Component } from './pages/page404/page404.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ViewProjectsComponent } from './pages/view-projects/view-projects.component';

export const routes: Routes = [
  { path : '' , component : PageLayoutComponent , children : [
    { path : '' , redirectTo : 'home' ,pathMatch : 'full'},
    { path : 'home' , component : HomePageComponent , children : [
      { path : '' , component : HeroComponent},
      { path : 'services' , component : ServicesComponent},
      { path : 'visit-us' , component : VisitUsComponent},
      { path : 'why-us' , component : WhyUsComponent},
      { path : 'gallery' , component : GalleryComponent},
      { path : 'about-us' , component : AboutUsComponent},
      { path : 'contact-us' , component : ContactUsComponent},
      { path : 'projects' , component : ViewProjectsComponent}
    ]},
  ]},
  { path : '**' , component : Page404Component}
];
