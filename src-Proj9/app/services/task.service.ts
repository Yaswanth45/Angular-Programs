import { Injectable } from '@angular/core';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks:Task[];

  constructor() { 
    this.tasks=[
      {taskId:201,taskName:"Job",startDate:new Date("2019-12-27"),endDate:new Date("2045-12-27")},
      {taskId:202,taskName:"Budiness",startDate:new Date("2019-05-06"),endDate:new Date("2045-12-27")},
      {taskId:203,taskName:"Playing",startDate:new Date("2020-01-20"),endDate:new Date("2045-12-27")}
    ]
  }

  getAll():Task[]{
    return this.tasks;
  }

  get(id:number){
    return this.tasks.find((c)=>(c.taskId==id));
  }

  add(contact:Task){
    this.tasks.push(contact);
  }

  update(contact:Task){
    let index=this.tasks.findIndex((c)=>(c.taskId===contact.taskId));
    if(index>-1){
      this.tasks[index]=contact;
    }
  }

  delete(id:number){
    let index=this.tasks.findIndex((contact)=>(contact.taskId===id));
    if(index>-1){
      this.tasks.splice(index,1);
    }
  }
}
