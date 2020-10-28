import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  newTitle: string;
  newDescription: string;
  newDate: string;
  newImageURL: string;

  sendNewEvent() {
    const event = new Event(this.newTitle, this.newDescription, this.newImageURL, this.newDate);
    this.eventService.addEvent(event);
  }


  ngOnInit() {
  }

}
