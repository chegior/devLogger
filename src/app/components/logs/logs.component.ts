import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  
  logs:Log[];
  selectedLog: Log;
  loaded:boolean = false;
  constructor(private logServ:LogService) { }

  ngOnInit() {

    this.logServ.stateClear.subscribe(clear =>{
      if(clear){
        this.selectedLog = {id:'',text:'',date:''}
      }
    })

    this.logServ.getLogs().subscribe(val=>{
      this.logs = val;
      this.loaded = true;
    })
  }

  onSelect(log:Log){
    
    this.logServ.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log:Log){
    if(confirm('Are you sure?')){
      this.logServ.deleteLog(log);
    }
    console.log(log);
  }
}
