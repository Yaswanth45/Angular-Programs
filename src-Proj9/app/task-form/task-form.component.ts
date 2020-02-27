import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  private task:Task;
  private isNew:boolean;
  private startStr:string;
  private endStr:string;

  constructor(private contServ:TaskService,
    private routeData:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let taskId=params['cid'];

        if(taskId==undefined){
          this.isNew=true;
          this.task=new Task();
          this.startStr=(new Date()).toISOString().substr(0,10);
          this.endStr=(new Date()).toISOString().substr(0,10);
        }
        else{
          this.task=this.contServ.get(taskId);
          this.isNew=false;
          this.startStr=this.task.startDate.toISOString().substr(0,10);
          this.endStr=(new Date()).toISOString().substr(0,10);
        }
      }
    );
  }

  doUpdate(){
    this.task.startDate=new Date(this.startStr);
  }
  doUpdate1(){
    this.task.endDate=new Date(this.endStr);
  }

  save(){
    if(this.isNew){
      this.contServ.add(this.task);
    }else{
      this.contServ.update(this.task);
    }
    this.router.navigateByUrl("");
  }

}
