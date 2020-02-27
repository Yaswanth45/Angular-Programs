import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title:string;
  logo:string;
  text:string;

  constructor() { 
    this.title="Angular Practice SPA";
    this.logo="assets/images/nam.jpg";
    this.text="Related to the angular Cli";
  }

}
