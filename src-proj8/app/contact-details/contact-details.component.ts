import { Component, OnInit } from '@angular/core';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute} from '@angular/router';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  private contact:Contact;

    constructor(private contServ:ContactService,
      private routerData:ActivatedRoute) { }

  ngOnInit() {
    this.routerData.params.subscribe(
      (params)=>{
        let contactId=params['id'];
        if(contactId){
          this.contact=this.contServ.get(contactId);
        }
      }
    );
  }

}
