import { Injectable } from '@angular/core';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Event[] = [
    new Event("Visit JS event", "...", "https://meline.lviv.ua/wp-content/uploads/2019/06/javascript-1231.png", "20.12.2020"),
    new Event("Course Work ITSTEP", "...", "https://i.ytimg.com/vi/0M-eCdRZ0lo/maxresdefault.jpg", "15.10.2020"),
    new Event("Buy new laptop", "...", "https://c.s-microsoft.com/ru-ru/CMSImages/1920_Panel1_Hero_Laptop.jpg?version=090f3049-8032-1102-e65b-498904a634e1", "11.10.2020"),
  ];

  getAllEvents(): Event[] {
    return this.events.slice();// пресвдо фенч до апі
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

  constructor() { }

}