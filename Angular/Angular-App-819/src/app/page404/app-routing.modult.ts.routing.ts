import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from 'src/Test/Test.component';
import { AboutComponent } from '../About/About.component';
import { ContactAppComponent } from '../About/contact-app/contact-app.component';
import { EventsComponent } from '../Events/Events.component';
import { HomeAppComponent } from '../home-app/home-app.component';
import { Page404Component } from './page404.component';
 
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", pathMatch: 'full', component: HomeAppComponent },
  { path: "events", pathMatch: 'full', component: EventsComponent },
  {
    path: "about",
     component: AboutComponent,
     children: [
       {path: "contact", component: ContactAppComponent},
       {path: "info", component: HomeAppComponent},
       {path: "id", component: TestComponent}
     ]
  },
  {path: "*", component: Page404Component}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }