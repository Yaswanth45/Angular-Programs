import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../models/task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  private task:Task;

  constructor(private contServ:TaskService,
    private routerData:ActivatedRoute) { }

ngOnInit() {
  this.routerData.params.subscribe(
    (params)=>{
      let taskId=params['id'];
      if(taskId){
        this.task=this.contServ.get(taskId);
      }
    }
  );
}
}
