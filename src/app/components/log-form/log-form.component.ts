import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  logs:{
    id:string,
    text:string,
    date:any
  }[];
  constructor() { }

  ngOnInit() {
    this.logs =[
      {id:'1', text:'Generated Component',date: new Date('12/26/2017 12:54:23')},
      {id:'2', text:'Added bootstrap',date: new Date('12/26/2017 12:54:23')},
      {id:'3', text:'Generated Second Component',date: new Date('12/26/2017 12:54:23')}
    ]

   
  }

}
