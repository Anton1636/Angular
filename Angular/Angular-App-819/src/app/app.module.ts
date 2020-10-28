import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EventsComponent } from './Events/Events.component';
import { EventListComponent } from "./Events/event-list/event-list.component"
import { AddEventComponent } from './Events/add-event/add-event.component';
import { EventItemComponent } from './Events/event-list/event-item/event-item.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { Page404Component } from './page404/page404.component';
import { AppRoutingModule } from './page404/app-routing.modult.ts.routing';
import { AboutComponent } from './About/About.component';
import { ContactAppComponent } from './About/contact-app/contact-app.component';
import { TestComponent } from 'src/Test/Test.component';


@NgModule({
  declarations: [							
    AppComponent,
    EventsComponent,
    EventListComponent,
    AddEventComponent,
    EventItemComponent,
      HeaderAppComponent,
      HomeAppComponent,
      Page404Component,
      AppRoutingModule,
      ContactAppComponent,
      HomeAppComponent,
      TestComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
