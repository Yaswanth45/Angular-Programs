import { Component } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {

  userName:string;

  constructor() { 
    this.userName="Enter Ur Name";
  }

  greet=()=>{
    alert(`Hello! ${this.userName}! Welcome to Angular!`);
  }

}
