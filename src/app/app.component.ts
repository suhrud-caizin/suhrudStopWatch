import { Component } from '@angular/core';
// import { setInterval } from 'timers';
import { TimerComponent } from './app.timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stopwatch';
  currentTimer:TimerComponent=new TimerComponent();
  timerLog:TimerComponent[]=[];
  isStarted:boolean=false;
  isStopped:boolean=true;
  timeString:string='';
  interval:any=null;
  allFlag:number=1;
  start(){
    this.currentTimer=new TimerComponent();
    this.currentTimer.start();

    this.allFlag=this.allFlag|2;
    this.allFlag=this.allFlag&2;
 
    
  }
  stop(){
        this.currentTimer?.stop();
        // this.isStarted=false;
        this.allFlag=this.allFlag&1;
        this.allFlag=this.allFlag|1;
        // this.isStopped=true;
        // this.timerLog.push(this.currentTimer);
  }
  lap(){
    // this.currentTimer?.stop();
     var temp : TimerComponent = new TimerComponent();
     temp.hr=this.currentTimer.hr;
     temp.min=this.currentTimer.min;
     temp.sec=this.currentTimer.sec;
  
    this.timerLog.push(temp);
    
  }
  reset(){
    this.timerLog=[];
    this.currentTimer=new TimerComponent();

    this.allFlag=this.allFlag&1;
  }

  IsStarted():boolean{
    return (!(this.allFlag&2))
  }
  IsStopped():boolean{
    return (!(this.allFlag&1))
  }

}
