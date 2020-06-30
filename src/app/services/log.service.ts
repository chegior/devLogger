import { Injectable } from '@angular/core';

import { Log } from '../models/log'


@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  constructor() { 
    this.logs =[
      {id:'1', text:'Generated Component',date: new Date('12/26/2017 12:54:23')},
      {id:'2', text:'Added bootstrap',date: new Date('1/26/2018 12:54:23')},
      {id:'3', text:'Generated Second Component',date: new Date('2/26/2018 12:54:23')},
      {id:'4', text:'Modify HTML',date: new Date('3/24/2017 12:54:23')}

    ]

  }

  getLogs(){
    return this.logs;
  }
}
