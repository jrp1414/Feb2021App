import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styles: [
  ]
})
export class WebWorkerComponent implements OnInit {

  constructor() { }

  number: number;
  output: number;
  calcFib() {
    
  }

  fWorker: Worker;
  wnumber: number;
  woutput: number;
  wcalcFib() {

  }
  ngOnInit() {
   
  }

  Test() {
    alert("Clicked");
  }

}
