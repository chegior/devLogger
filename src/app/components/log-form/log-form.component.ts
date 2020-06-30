import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  id:string;
  text:string;
  date:any;
  
  isNew:boolean = true;
  constructor(private servLog:LogService) { }

  ngOnInit() {

    this.servLog.selectedLog.subscribe(val =>{
      if( val.id !== null){

        this.isNew = false;

        this.id = val.id;
        this.text = val.text;
        this.date = val.date;
      };
    })
  }

  onSubmit(){
    if(this.isNew){
      const newLog = {
        id:this.generateId(),
        text:this.text,
        date:new Date()
      }
      this.servLog.addLog(newLog);
    }
    else{
      const updLog ={
        id: this.id,
        text: this.text,
        date: new Date()
      }

    this.servLog.updtLog(updLog);
    }
  }

  generateId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
  }

}
