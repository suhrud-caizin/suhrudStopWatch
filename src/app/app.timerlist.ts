import { Component, Input } from "@angular/core";
import { TimerComponent } from "./app.timer";

@Component({
    selector: 'app-timerlist',
    templateUrl: './app.timerlist.html',
    styleUrls: ['./app.component.css']
  })
  export class TimerListComponent {

    @Input()timerLog:TimerComponent[]=[];
    
  
  }
  