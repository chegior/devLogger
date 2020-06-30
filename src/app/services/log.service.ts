import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Log } from '../models/log'


@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  
  private logSource = new BehaviorSubject<Log>({id:null, text:null, date:null});
  selectedLog = this.logSource.asObservable();


  constructor() { 
    this.logs =[
      {id:'1', text:'Generated Component',date: new Date('12/26/2017 12:54:23')},
      {id:'2', text:'Added bootstrap',date: new Date('1/26/2018 12:54:23')},
      {id:'3', text:'Generated Second Component',date: new Date('2/26/2018 12:54:23')},
      {id:'4', text:'Modify HTML',date: new Date('3/24/2017 12:54:23')}

    ]

  }

  getLogs():Observable<Log[]>{
    return of(this.logs);
  }

  setFormLog(log:Log){
    this.logSource.next(log);
    
  }
  addLog(log:Log){
    this.logs.unshift(log);
    console.log(this.logs);

  }
  updtLog(log:Log){
    this.logs.forEach((curr,index)=>{
        if(log.id === curr.id){
          this.logs.splice(index,1);
        }
    });
    this.logs.unshift(log);
  }


}
