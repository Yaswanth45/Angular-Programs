import { Injectable } from '@angular/core';
import {Contact} from '../models/Contact';
 
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Contact[];

  constructor() { 
    this.contacts=[
      {contactID:101,firstName:"Yaswanth",lastName:"Reddy",dob:new Date("1998-01-24"),mobileNumber:"7306662927",mailId:"tkyr24898@gmail.com",organization:"Cognizant"},
      {contactID:102,firstName:"Rabbani",lastName:"Shaik",dob:new Date("1997-06-7"),mobileNumber:"7894561203",mailId:"rabbani@gmail.com",organization:"InformationAsset"},
      {contactID:103,firstName:"Murali",lastName:"P",dob:new Date("1998-11-18"),mobileNumber:"4544566695",mailId:"murali@gmail.com",organization:"InformationAsset"}
    ]
  }

  getAll():Contact[]{
    return this.contacts;
  }

  get(id:number){
    return this.contacts.find((c)=>(c.contactID==id));
  }

  add(contact:Contact){
    this.contacts.push(contact);
  }

  update(contact:Contact){
    let index=this.contacts.findIndex((c)=>(c.contactID===contact.contactID));
    if(index>-1){
      this.contacts[index]=contact;
    }
  }

  delete(id:number){
    let index=this.contacts.findIndex((contact)=>(contact.contactID===id));
    if(index>-1){
      this.contacts.splice(index,1);
    }
  }

}
