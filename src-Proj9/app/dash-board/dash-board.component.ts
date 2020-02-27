import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  title:string;
  tagLine:string;

  constructor() {
    this.title="Angular Routing and Bootstrap Usage";
    this.tagLine="a simple SPA with task lists"
   }

  ngOnInit() {
  }

}
