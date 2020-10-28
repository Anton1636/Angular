import { Component, OnInit } from '@angular/core';
import { Event } from "../event.model";
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {

  constructor(private eventsService: EventService) { }

  events: Event[];

  ngOnInit() {
    this.events = this.eventsService.getAllEvents();
  }

}
