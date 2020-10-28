import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  myId: number;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.myId = params["id"];
    })
  }

}
