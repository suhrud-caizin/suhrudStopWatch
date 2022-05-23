import { Component } from "@angular/core";


export class TimerComponent {
  title = 'timer';
  sec: number = 0;
  min: number = 0;
  hr: number = 0;
  interval: any = null;
  startDate: Date = new Date();

  start() {

    this.interval = setInterval(() => this.timeFormater(), 1000);
  }
  stop() {
    clearInterval(this.interval);


  }
  timeFormater() {
    let s: any = this.startDate;
    let e: any = new Date();
    let diffInhr = Math.abs(e - s);

    this.hr = Math.abs(e - s) / (1000 * 60 * 60) % 24
    this.min = Math.abs(e.getTime() - s.getTime()) / (1000 * 60) % 60
    this.sec = Math.abs(e.getTime() - s.getTime()) / (1000) % 60

  }


}
