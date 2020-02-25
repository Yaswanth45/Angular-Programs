import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:Contact[];

  constructor(private constServ:ContactService) { }

  ngOnInit() {
    this.contacts=this.constServ.getAll();
  }

  delete(contactId:number){
    if(confirm(`Are you sure of deleting Contacts#${contactId}`)){
      this.constServ.delete(contactId);
    }
  }

}
