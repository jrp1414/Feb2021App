import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  templateUrl: './twoway-binding.component.html',
  styles: [
  ]
})
export class TwowayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OneWayData: string = "";
  OneWayChange(data) {
    this.OneWayData = data.target.value;
  }
  OneWayTest() {
    this.OneWayData = "One Way Test";
  }

  TwoWayData: string = "";
  TwoWayChange(data:string) {

    this.TwoWayData = data.toUpperCase();
  }
  TwoWayTest() {
    this.TwoWayData = "Two Way Test";
  }

}
