import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: [
  ]
})
export class EventBindingComponent implements OnInit {
  message: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.message = "Code executed inside component class";
  }

  onInputChange(data) {
    console.log(data.target.value);
  }

}
