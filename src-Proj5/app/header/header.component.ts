import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  webTitle:string;
  welcomeImage:string;
  welcomeText:string;

  constructor() {
    this.webTitle="Angular_SPA";
    this.welcomeText="welcome to Angular SPA";
    this.welcomeImage="assets/images/nam2.png";
   }

}
